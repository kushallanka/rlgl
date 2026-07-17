import { createEventBus, createLogger, loadConfig, setupProcessHandlers } from '@rlgl/shared';
import { PrismaClient } from '../generated/client/index.js';
import { createApp } from './app.js';
import { PORT, PROJECT_SERVICE_URL, REDIS_URL, SERVICE_NAME } from './config/constants.js';
import { SectionController } from './controllers/section.controller.js';
import { SuiteController } from './controllers/suite.controller.js';
import { SyncController } from './controllers/sync.controller.js';
import { TestCaseController } from './controllers/testcase.controller.js';
import { initAuth } from './middleware/auth.js';
import { IdempotencyService } from './middleware/idempotency.js';
import { SectionRepository, SuiteRepository, SyncRepository, TestCaseRepository } from './repositories/index.js';
import { startServer } from './server.js';
import { SectionService } from './services/section.service.js';
import { SuiteService } from './services/suite.service.js';
import { SyncService } from './services/sync.service.js';
import { TestCaseService } from './services/testcase.service.js';

const config = loadConfig();
const logger = createLogger({
  service: SERVICE_NAME,
  level: config.LOG_LEVEL,
  samplingRate: config.LOG_SAMPLING_RATE,
});

setupProcessHandlers(logger);

async function main() {
  const prisma = new PrismaClient();

  logger.info('Verifying database connectivity...');
  await prisma.$connect();
  await prisma.$queryRaw`SELECT 1`;
  logger.info('Database connected');

  const projectCount = await prisma.project.count();
  if (projectCount === 0) {
    logger.info('Project table empty, seeding from project service...');
    try {
      const res = await fetch(`${PROJECT_SERVICE_URL}/internal/projects`);
      if (res.ok) {
        const projects = (await res.json()) as { id: number; name: string }[];
        for (const p of projects) {
          await prisma.project.upsert({
            where: { id: p.id },
            update: { name: p.name },
            create: { id: p.id, name: p.name },
          });
        }
        logger.info({ count: projects.length }, 'Projects seeded from project service');
      }
    } catch (err: any) {
      logger.warn({ err }, 'Could not seed projects from project service, continuing...');
    }
  }

  logger.info('Verifying Redis connectivity...');
  const Redis = (await import('ioredis')).default;
  const redis = new Redis(REDIS_URL, { maxRetriesPerRequest: 1, connectTimeout: 5000 });
  try {
    await redis.ping();
    logger.info('Redis connected');
  } catch (err: any) {
    logger.fatal({ err }, 'Redis connection required to start service');
    process.exit(1);
  }

  initAuth(logger);

  const eventBus = await createEventBus({ redisUrl: REDIS_URL, serviceName: SERVICE_NAME }, logger);

  const suiteRepo = new SuiteRepository(prisma);
  const sectionRepo = new SectionRepository(prisma);
  const syncRepo = new SyncRepository(prisma);
  const testCaseRepo = new TestCaseRepository(prisma);
  const idempotency = new IdempotencyService(prisma);

  const suiteService = new SuiteService(suiteRepo, logger, eventBus);
  const sectionService = new SectionService(sectionRepo, suiteRepo, logger);
  const syncService = new SyncService(syncRepo, logger);
  const testCaseService = new TestCaseService(testCaseRepo, logger);

  const suiteController = new SuiteController(suiteService, idempotency, logger);
  const sectionController = new SectionController(sectionService, idempotency, logger);
  const syncController = new SyncController(syncService, logger);
  const testCaseController = new TestCaseController(testCaseService, idempotency, logger);

  const app = createApp(
    config,
    suiteController,
    sectionController,
    syncController,
    testCaseController,
    (healthChecker) => {
      healthChecker.registerDatabase(prisma);
      healthChecker.registerRedis(redis);
    },
    redis,
  );

  (app as any).eventBus = eventBus;

  startServer(app, PORT, async () => {
    await eventBus.shutdown();
    await prisma.$disconnect();
    logger.info('Shutdown complete');
  });
}

main().catch((err) => {
  logger.error({ err }, 'Fatal error during startup');
  process.exit(1);
});
