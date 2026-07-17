import { createEventBus, createHealthChecker, createLogger, loadConfig, setupProcessHandlers } from '@rlgl/shared';
import { PrismaClient } from '../generated/client/index.js';
import { createApp } from './app.js';
import { AuthController } from './controllers/auth.controller.js';
import { OrgController } from './controllers/org.controller.js';
import { AuthRepository } from './repositories/auth.repository.js';
import { IAMRepository } from './repositories/iam.repository.js';
import { OrgRepository } from './repositories/org.repository.js';
import { startServer } from './server.js';
import { AuthService } from './services/auth.service.js';
import { IAMService } from './services/iam.service.js';
import { OrgService } from './services/org.service.js';

const config = loadConfig();
const logger = createLogger({
  service: 'auth-service',
  level: config.LOG_LEVEL,
  samplingRate: config.LOG_SAMPLING_RATE,
});

// 1. Process Resilience
setupProcessHandlers(logger);

async function main() {
  try {
    if (config.APP_ENV === 'prod' && !config.DATABASE_URL) {
      logger.fatal('DATABASE_URL is required for auth-service in production');
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
    const healthChecker = createHealthChecker('auth-service', logger);
    healthChecker.registerDatabase(prisma);
    healthChecker.registerRedis(redis);

    // 5. Initialize EventBus
    const eventBus = await createEventBus(
      {
        redisUrl: config.REDIS_URL,
        serviceName: 'auth-service',
      },
      logger,
    );

    // 6. Dependency Injection - Repositories
    const authRepository = new AuthRepository(prisma);
    const iamRepository = new IAMRepository(prisma);
    const orgRepository = new OrgRepository(prisma);

    // 7. Dependency Injection - Services
    const authService = new AuthService(authRepository, config.JWT_SECRET);
    const iamService = new IAMService(iamRepository, config.PROJECT_SERVICE_URL);
    const orgService = new OrgService(orgRepository);

    // 8. Dependency Injection - Controllers
    const controller = new AuthController(authService, iamService, eventBus);
    const orgController = new OrgController(orgService);

    const app = createApp(config, controller, prisma, healthChecker, orgController);

    // 9. Final startup
    startServer(app, config.PORT, async () => {
      await eventBus.shutdown();
      await prisma.$disconnect();
      logger.info('Shutdown complete');
    });
  } catch (err: any) {
    logger.error({ err, stack: err.stack }, '❌ Fatal error during startup');
    process.exit(1);
  }
}

main();
