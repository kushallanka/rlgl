import { loadConfig, createLogger, setupProcessHandlers } from '@rlgl/shared';
import Redis from 'ioredis';
import { createApp } from './app.js';
import { startServer } from './server.js';

const config = loadConfig();
const logger = createLogger({ 
  service: 'api-gateway', 
  level: config.LOG_LEVEL, 
  samplingRate: config.LOG_SAMPLING_RATE 
});

// 1. Process Resilience
setupProcessHandlers(logger);

async function main() {
  try {
    const isProd = config.APP_ENV === 'prod';
    /** Avoid log storms when Redis is not running locally (rate limiter fails open). */
    let lastRedisSocketWarnAt = 0;
    const redisSocketWarnIntervalMs = 15_000;

    const redis = new Redis(config.REDIS_URL, {
      lazyConnect: true,
      connectTimeout: 5_000,
      // Allow enough retries while the socket is connecting; 3 was too low for PING/INCR at boot.
      maxRetriesPerRequest: 20,
      enableOfflineQueue: true,
      retryStrategy: (times) => Math.min(times * 100, 3000),
    });

    const formatRedisErr = (err: unknown) => {
      const e = err as { message?: string; errors?: Array<{ message?: string }> };
      if (e?.errors?.length) return e.errors.map((x) => x.message || String(x)).join('; ');
      return e?.message || String(err);
    };

    // 2. Startup Guard: Verify Redis
    logger.info('🔍 Verifying Redis connectivity...');
    redis.on('error', (err) => {
      if (isProd) {
        logger.fatal(err, '❌ Redis connection failed - Required in production');
        process.exit(1);
      }
      const now = Date.now();
      if (now - lastRedisSocketWarnAt >= redisSocketWarnIntervalMs) {
        lastRedisSocketWarnAt = now;
        logger.warn(
          { error: formatRedisErr(err) },
          'Redis unavailable — rate limiting disabled until Redis is reachable (start Redis or docker-compose)'
        );
      }
    });

    try {
      await redis.connect();
      await redis.ping();
      logger.info('✅ Redis ping OK');
    } catch (err: unknown) {
      if (isProd) {
        logger.fatal({ err: formatRedisErr(err) }, 'Redis ping failed — refusing to start in production');
        process.exit(1);
      }
      logger.warn(
        { err: formatRedisErr(err) },
        'Redis not reachable in dev — rate limiting will fail-open until Redis is running'
      );
    }

    // 3. Dependency Injection
    const app = createApp(config, redis);
    
    // 4. Final startup
    startServer(app, config.PORT, async () => {
      try {
        await redis.quit();
        logger.info('Redis connection closed');
      } catch (e: any) {
        logger.warn({ err: e?.message }, 'Redis quit warning');
      }
    });

  } catch (err: any) {
    logger.error({ error: err.message }, 'Fatal error during startup');
    process.exit(1);
  }
}

main();
