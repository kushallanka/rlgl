import { Queue, QueueEvents, Worker } from 'bullmq';
import { Redis } from 'ioredis';

export interface QueueConfig {
  name: string;
  redisUrl: string;
  concurrency?: number;
}

/**
 * Factory for creating isolated queues and workers
 */
export const createQueueManager = (config: QueueConfig) => {
  const connection = new Redis(config.redisUrl, {
    maxRetriesPerRequest: null,
  });

  const queue = new Queue(config.name, { connection });
  const queueEvents = new QueueEvents(config.name, { connection });

  return {
    queue,
    queueEvents,
    connection,
    createWorker: (processor: (job: any) => Promise<any>) => {
      return new Worker(config.name, processor, {
        connection,
        concurrency: config.concurrency || 5,
      });
    },
  };
};

// Domain-specific queue name constants
export const QUEUES = {
  IAM_MIGRATION: 'iam-migration-queue',
  CRITICAL_AUTH: 'critical-auth-queue',
  SYSTEM_OPS: 'system-ops-queue',
};
