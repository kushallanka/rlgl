import { Redis } from 'ioredis';
import { v4 as uuidv4 } from 'uuid';
import pino from 'pino';
import type { DomainEvent, EventSubscriptionHandler, EventBusConfig, EventType } from './event.types.js';

export class EventBus {
  private redis: Redis;
  private logger: pino.Logger;
  private serviceName: string;
  private consumers: Map<string, { consumer: Redis; handler: EventSubscriptionHandler; active: boolean }> = new Map();

  constructor(config: EventBusConfig, logger: pino.Logger) {
    this.redis = new Redis(config.redisUrl, {
      maxRetriesPerRequest: null,
      enableReadyCheck: true,
    });

    this.logger = logger;
    this.serviceName = config.serviceName;

    this.redis.on('error', (err) => {
      this.logger.error({ err }, 'EventBus Redis connection error');
    });

    this.redis.on('connect', () => {
      this.logger.debug('EventBus Redis connected');
    });
  }

  /**
   * Publish domain event to stream
   */
  async publishEvent(
    event: EventType,
    metadata?: Record<string, unknown>,
    context?: { requestId?: string | undefined; userId?: string | undefined; projectId?: string | undefined },
  ): Promise<string> {
    const eventId = uuidv4();
    const now = new Date().toISOString();

    const domainEvent: DomainEvent = {
      id: eventId,
      event,
      service: this.serviceName,
      timestamp: now,
      requestId: context?.requestId,
      userId: context?.userId,
      projectId: context?.projectId,
      metadata,
      version: 1,
    };

    const streamKey = this.getStreamKey(event);

    try {
      const streamId = await this.redis.xadd(streamKey, '*', 'data', JSON.stringify(domainEvent));

      if (!streamId) {
        throw new Error('Failed to get stream ID from Redis');
      }

      this.logger.info(
        {
          event,
          eventId,
          streamId,
          requestId: context?.requestId,
          userId: context?.userId,
        },
        'Event published',
      );

      return streamId;
    } catch (err) {
      this.logger.error({ err, event, eventId }, 'Failed to publish event');
      throw err;
    }
  }

  /**
   * Subscribe to events on a stream with consumer group for horizontal scaling
   */
  async subscribeToEvents(
    stream: string,
    consumerGroup: string,
    handler: EventSubscriptionHandler,
    autoAck = true,
  ): Promise<void> {
    const consumerId = `${this.serviceName}-${process.pid}-${uuidv4().slice(0, 8)}`;
    const consumer = new Redis({
      ...this.redis.options,
      maxRetriesPerRequest: null,
      enableReadyCheck: true,
    });

    const key = `${stream}:${consumerGroup}`;

    try {
      // Ensure consumer group exists
      try {
        await this.redis.xgroup('CREATE', stream, consumerGroup, '0', 'MKSTREAM');
        this.logger.info({ stream, consumerGroup }, 'Created consumer group');
      } catch (err: any) {
        if (!err.message.includes('BUSYGROUP')) {
          throw err;
        }
        // Group already exists, that's fine
      }

      this.consumers.set(key, { consumer, handler, active: true });

      this.logger.info({ stream, consumerGroup, consumerId }, 'Subscribed to events');

      // Start consuming
      this.startConsuming(stream, consumerGroup, consumerId, consumer, handler, autoAck);
    } catch (err) {
      this.logger.error({ err, stream, consumerGroup }, 'Failed to subscribe to events');
      await consumer.quit();
      throw err;
    }
  }

  private async startConsuming(
    stream: string,
    consumerGroup: string,
    consumerId: string,
    consumer: Redis,
    handler: EventSubscriptionHandler,
    autoAck: boolean,
  ): Promise<void> {
    const backoffMs = 100;
    const maxBackoffMs = 5000;
    let currentBackoff = backoffMs;

    // eslint-disable-next-line @typescript-eslint/no-constant-condition
    while (true) {
      try {
        // Read pending messages first (for resilience after restarts)
        const pendingMessages = await this.redis.xreadgroup(
          'GROUP',
          consumerGroup,
          consumerId,
          'STREAMS',
          stream,
          '0',
        );

        if (pendingMessages && pendingMessages.length > 0) {
          await this.processPendingMessages(pendingMessages, stream, consumerGroup, handler, autoAck);
        }

        // Then read new messages with blocking
        const messages = await consumer.xreadgroup(
          'GROUP',
          consumerGroup,
          consumerId,
          'BLOCK',
          '0',
          'STREAMS',
          stream,
          '>',
        );

        if (messages && messages.length > 0) {
          currentBackoff = backoffMs; // Reset backoff on successful read

          for (const [, messageList] of messages as Array<[string, Array<[string, string[]]>]>) {
            for (const [msgId, msgData] of messageList) {
              try {
                const dataStr = Array.isArray(msgData) ? msgData[1] : undefined;
                if (!dataStr) continue;

                const event: DomainEvent = JSON.parse(dataStr);
                await handler(event);

                if (autoAck) {
                  await this.redis.xack(stream, consumerGroup, msgId);
                }
              } catch (err) {
                this.logger.error(
                  { err, stream, consumerGroup, msgId },
                  'Error processing event message',
                );
              }
            }
          }
        }
      } catch (err: any) {
        if (err.message?.includes('NOGROUP')) {
          // Group was deleted, re-initialize
          this.logger.warn({ stream, consumerGroup }, 'Consumer group was deleted, reinitializing');
          try {
            await this.redis.xgroup('CREATE', stream, consumerGroup, '0', 'MKSTREAM');
          } catch {
            // Ignore if already exists
          }
        } else {
          this.logger.error({ err, stream, consumerGroup }, 'Error in event consumption loop');
        }

        // Exponential backoff
        await new Promise((resolve) => setTimeout(resolve, currentBackoff));
        currentBackoff = Math.min(currentBackoff * 1.5, maxBackoffMs);
      }
    }
  }

  private async processPendingMessages(
    messages: any[],
    stream: string,
    consumerGroup: string,
    handler: EventSubscriptionHandler,
    autoAck: boolean,
  ): Promise<void> {
    for (const [, messageList] of messages as Array<[string, Array<[string, string[]]>]>) {
      for (const [msgId, msgData] of messageList) {
        try {
          const dataStr = Array.isArray(msgData) ? msgData[1] : undefined;
          if (!dataStr) continue;

          const event: DomainEvent = JSON.parse(dataStr);
          await handler(event);

          if (autoAck) {
            await this.redis.xack(stream, consumerGroup, msgId);
          }
        } catch (err) {
          this.logger.error({ err, stream, consumerGroup, msgId }, 'Error processing pending message');
        }
      }
    }
  }

  /**
   * Get all events of a specific type (for debugging/replaying)
   */
  async getEventHistory(event: EventType, limit = 100): Promise<DomainEvent[]> {
    const streamKey = this.getStreamKey(event);
    const messages = await this.redis.xrevrange(streamKey, '+', '-', 'COUNT', limit);

    return messages
      .map(([, data]) => {
        const dataStr = Array.isArray(data) ? data[1] : undefined;
        if (!dataStr) return null;
        try {
          return JSON.parse(dataStr) as DomainEvent;
        } catch {
          return null;
        }
      })
      .filter((e): e is DomainEvent => e !== null)
      .reverse();
  }

  /**
   * Subscribe to multiple event types
   */
  async subscribeToMultiple(
    events: EventType[],
    consumerGroup: string,
    handler: (event: DomainEvent) => Promise<void>,
  ): Promise<void> {
    for (const event of events) {
      const stream = this.getStreamKey(event);
      await this.subscribeToEvents(stream, consumerGroup, handler);
    }
  }

  /**
   * Cleanup and shutdown
   */
  async shutdown(): Promise<void> {
    for (const [key, { consumer }] of this.consumers) {
      try {
        await consumer.quit();
        this.consumers.delete(key);
        this.logger.info({ key }, 'Consumer closed');
      } catch (err) {
        this.logger.error({ err, key }, 'Error closing consumer');
      }
    }

    try {
      await this.redis.quit();
      this.logger.info('EventBus Redis connection closed');
    } catch (err) {
      this.logger.error({ err }, 'Error closing EventBus Redis connection');
    }
  }

  private getStreamKey(event: EventType): string {
    const domain = event.split('.')[0];
    return `event:${domain}:${event}`;
  }
}

export async function createEventBus(config: EventBusConfig, logger: pino.Logger): Promise<EventBus> {
  const bus = new EventBus(config, logger);
  return bus;
}
