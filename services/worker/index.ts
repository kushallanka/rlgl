import { Worker, Job } from 'bullmq';
import Redis from 'ioredis';
import { createLogger, createEventBus } from '@rlgl/shared';
import type { DomainEvent, EventType } from '@rlgl/shared';

const REDIS_URL = process.env.REDIS_URL || 'redis://localhost:6379';
const connection = new Redis(REDIS_URL, { maxRetriesPerRequest: null });

const SERVICE_NAME = 'background-worker';
const logger = createLogger({ service: SERVICE_NAME });

let isShuttingDown = false;

connection.on('error', (err) => {
  logger.error({ err }, 'Redis connection error');
});

connection.on('connect', () => {
  logger.info('Redis connected');
});

logger.info('Background worker starting...');

// ─── BullMQ Job Processing ───────────────────────────────────────────────────
const worker = new Worker(
  'system-tasks',
  async (job: Job) => {
    logger.info({ jobId: job.id, jobName: job.name }, 'Processing job');
    
    try {
      switch (job.name) {
        case 'cleanup-audit-logs':
          logger.info('Processing: cleanup-audit-logs');
          break;
        case 'recalculate-stats':
          logger.info('Processing: recalculate-stats');
          break;
        default:
          logger.warn({ jobName: job.name }, 'Unknown job type');
      }
      
      // Simulate artificial delay
      await new Promise(r => setTimeout(r, 2000));
      logger.info({ jobId: job.id }, 'Job completed successfully');
    } catch (err) {
      logger.error({ err, jobId: job.id }, 'Job processing error');
      throw err;
    }
  },
  { connection }
);

worker.on('failed', (job, err) => {
  logger.error({ jobId: job?.id, err }, 'Job failed');
});

worker.on('completed', (job) => {
  logger.debug({ jobId: job.id }, 'Job completed');
});

// ─── Event Stream Processing ─────────────────────────────────────────────────
async function setupEventProcessing() {
  try {
    const eventBus = await createEventBus(
      {
        redisUrl: REDIS_URL,
        serviceName: SERVICE_NAME,
      },
      logger
    );

    // Handle domain events
    const eventHandler = async (event: DomainEvent) => {
      logger.info({ event: event.event, eventId: event.id }, 'Processing domain event');

      try {
        switch (event.event) {
          case 'testrun.completed':
            logger.info({ eventId: event.id, testrunId: event.metadata?.testrunId }, 'Analytics: testrun completed');
            break;

          case 'auth.permission_changed':
            logger.info({ eventId: event.id, userId: event.userId }, 'Cache invalidation: permission changed');
            break;

          case 'project.created':
            logger.info({ eventId: event.id, projectId: event.projectId }, 'New project created');
            break;

          case 'testcase.created':
            logger.info({ eventId: event.id, testcaseId: event.metadata?.testcaseId }, 'New testcase created');
            break;

          default:
            logger.debug({ event: event.event }, 'Event received (no handler)');
        }
      } catch (err) {
        logger.error({ err, eventId: event.id }, 'Error processing event');
      }
    };

    // Subscribe to events
    const eventTypes: EventType[] = [
      'testrun.completed',
      'auth.permission_changed',
      'project.created',
      'testcase.created',
      'project.member_added',
    ];

    await eventBus.subscribeToMultiple(eventTypes, 'background-worker-group', eventHandler);

    logger.info('Event stream processing started');

    // Graceful shutdown handler
    process.on('SIGTERM', async () => {
      if (isShuttingDown) return;
      isShuttingDown = true;

      logger.info('SIGTERM received, shutting down gracefully...');
      await worker.close();
      await eventBus.shutdown();
      await connection.quit();
      logger.info('Worker shutdown complete');
      process.exit(0);
    });

    process.on('SIGINT', async () => {
      if (isShuttingDown) return;
      isShuttingDown = true;

      logger.info('SIGINT received, shutting down gracefully...');
      await worker.close();
      await eventBus.shutdown();
      await connection.quit();
      logger.info('Worker shutdown complete');
      process.exit(0);
    });
  } catch (err) {
    logger.error({ err }, 'Failed to setup event processing');
    process.exit(1);
  }
}

// Start event processing
setupEventProcessing().catch((err) => {
  logger.fatal({ err }, 'Fatal error in event processing setup');
  process.exit(1);
});
