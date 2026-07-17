import { createEventBus, createHealthChecker, createLogger, loadConfig, setupProcessHandlers } from '@rlgl/shared';
import { PrismaClient } from '../generated/client/index.js';
import { createApp } from './app.js';
import { ProjectController } from './controllers/project.controller.js';
import { initAuth } from './middleware/auth.js';
import { ProjectRepository } from './repositories/project.repository.js';
import { startServer } from './server.js';
import { ProjectService } from './services/project.service.js';

const config = loadConfig();
const logger = createLogger({
  service: 'project-service',
  level: config.LOG_LEVEL,
  samplingRate: config.LOG_SAMPLING_RATE,
});

// 1. Process Resilience
setupProcessHandlers(logger);

async function main() {
  try {
    if (config.APP_ENV === 'prod' && !config.DATABASE_URL) {
      logger.fatal('DATABASE_URL is required for project-service in production');
      process.exit(1);
    }

    const prisma = config.DATABASE_URL ? new PrismaClient({ datasourceUrl: config.DATABASE_URL }) : new PrismaClient();

    // 2. Startup Guard: Verify Database
    logger.info('🔍 Verifying database connectivity...');
    await prisma.$connect();
    logger.info('✅ Database connected');

    // 3. Startup Guard: Verify Redis & Create Connection
    logger.info('🔍 Verifying Redis connectivity...');
    const Redis = (await import('ioredis')).default;
    const redis = new Redis(config.REDIS_URL, { maxRetriesPerRequest: 1, connectTimeout: 5000 });
    try {
      await redis.ping();
      logger.info('✅ Redis connected');
    } catch (err: any) {
      logger.fatal({ err }, 'Redis connection required to start service');
      process.exit(1);
    }

    // 4. Create HealthChecker and register dependencies
    const healthChecker = createHealthChecker('project-service', logger);
    healthChecker.registerDatabase(prisma);
    healthChecker.registerRedis(redis);

    // 5. Initialize EventBus
    const eventBus = await createEventBus(
      {
        redisUrl: config.REDIS_URL,
        serviceName: 'project-service',
      },
      logger,
    );

    // 4. Initialize shared auth middleware
    initAuth(logger);

    // 5. Dependency Injection
    const repository = new ProjectRepository(prisma);
    const service = new ProjectService(
      repository,
      config.AUTH_SERVICE_URL,
      eventBus,
      config.TESTCASE_SERVICE_URL,
      config.TESTRUN_SERVICE_URL,
      logger,
    );
    const controller = new ProjectController(service, eventBus);

    const app = createApp(config, controller, healthChecker);

    // 7. Final startup
    startServer(app, config.PORT, async () => {
      await eventBus.shutdown();
      await prisma.$disconnect();
      logger.info('Shutdown complete');
    });
  } catch (err: any) {
    logger.error({ err, stack: err.stack }, 'Fatal error during startup');
    process.exit(1);
  }
}

main();
