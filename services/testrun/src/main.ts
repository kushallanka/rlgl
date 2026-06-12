import { loadConfig, createLogger, setupProcessHandlers, createEventBus, createHealthChecker } from '@rlgl/shared';
import { PrismaClient } from '../generated/client/index.js';
import { TestRunRepository } from './repositories/testrun.repository.js';
import { TestRunService } from './services/testrun.service.js';
import { TestRunController } from './controllers/testrun.controller.js';
import { createApp } from './app.js';
import { startServer } from './server.js';
import { initAuth } from './middleware/auth.js';
import { PORT, REDIS_URL, SERVICE_NAME, PROJECT_SERVICE_URL, TESTCASE_SERVICE_URL } from './config/constants.js';

const config = loadConfig();
const logger = createLogger({ 
  service: SERVICE_NAME,
  level: config.LOG_LEVEL,
  samplingRate: config.LOG_SAMPLING_RATE
});
const healthChecker = createHealthChecker(SERVICE_NAME, logger);

setupProcessHandlers(logger);

async function main() {
  const prisma = new PrismaClient();

  logger.info('Verifying database connectivity...');
  await prisma.$connect();
  logger.info('Database connected');

  const projectCount = await prisma.project.count();
  if (projectCount === 0) {
    logger.info('Project table empty, seeding from project service...');
    try {
      const res = await fetch(`${PROJECT_SERVICE_URL}/internal/projects`);
      if (res.ok) {
        const projects = await res.json() as { id: number; name: string }[];
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

  const suiteCount = await prisma.suite.count();
  if (suiteCount === 0) {
    logger.info('Suite table empty, seeding from testcase service...');
    try {
      const res = await fetch(`${TESTCASE_SERVICE_URL}/internal/suites`);
      if (res.ok) {
        const suites = await res.json() as { id: number; projectId: number; name: string }[];
        for (const s of suites) {
          await prisma.suite.upsert({
            where: { id: s.id },
            update: { name: s.name },
            create: { id: s.id, projectId: s.projectId, name: s.name },
          });
        }
        logger.info({ count: suites.length }, 'Suites seeded from testcase service');
      }
    } catch (err: any) {
      logger.warn({ err }, 'Could not seed suites from testcase service, continuing...');
    }
  }

  healthChecker.registerDatabase(prisma);

  logger.info('Verifying Redis connectivity...');
  const Redis = (await import('ioredis')).default;
  const redis = new Redis(REDIS_URL, { maxRetriesPerRequest: 1, connectTimeout: 5000 });
  try {
    await redis.ping();
    logger.info('Redis connected');
    healthChecker.registerRedis(redis);
  } catch (err: any) {
    logger.fatal({ err }, 'Redis connection required to start service');
    process.exit(1);
  }

  // Initialize auth middleware with configuration
  initAuth(logger);

  const eventBus = await createEventBus({ redisUrl: REDIS_URL, serviceName: SERVICE_NAME }, logger);

  const repository = new TestRunRepository(prisma);
  const service = new TestRunService(repository, eventBus, logger);
  const controller = new TestRunController(service);

  const app = createApp(config, controller, (hc) => {
    hc.registerDatabase(prisma);
    hc.registerRedis(redis);
  }, redis);

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
