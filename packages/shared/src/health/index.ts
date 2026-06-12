import { PrismaClient } from '@prisma/client';
import { Redis } from 'ioredis';
import pino from 'pino';

export type DependencyStatus = 'ok' | 'degraded' | 'failed';

export interface DependencyCheck {
  name: string;
  check: () => Promise<boolean>;
}

export interface HealthStatus {
  status: 'healthy' | 'degraded' | 'unhealthy';
  service: string;
  uptime: number;
  timestamp: string;
  dependencies: Record<string, { status: DependencyStatus; latency?: number }>;
  details?: Record<string, unknown>;
}

export class HealthChecker {
  private logger: pino.Logger;
  private serviceName: string;
  private startTime: number;
  private checks: Map<string, DependencyCheck> = new Map();

  constructor(serviceName: string, logger: pino.Logger) {
    this.serviceName = serviceName;
    this.logger = logger;
    this.startTime = Date.now();
  }

  /**
   * Register a database health check
   */
  registerDatabase(prisma: PrismaClient): void {
    this.registerCheck('database', async () => {
      try {
        await prisma.$queryRaw`SELECT 1`;
        return true;
      } catch (err) {
        this.logger.error({ err }, 'Database health check failed');
        return false;
      }
    });
  }

  /**
   * Register a Redis health check
   */
  registerRedis(redis: Redis): void {
    this.registerCheck('redis', async () => {
      try {
        await redis.ping();
        return true;
      } catch (err) {
        this.logger.error({ err }, 'Redis health check failed');
        return false;
      }
    });
  }

  /**
   * Register a custom health check
   */
  registerCheck(name: string, check: () => Promise<boolean>): void {
    this.checks.set(name, { name, check });
  }

  /**
   * Run all health checks
   */
  async checkHealth(): Promise<HealthStatus> {
    const dependencies: Record<string, { status: DependencyStatus; latency?: number }> = {};
    let allHealthy = true;

    for (const [name, { check }] of this.checks) {
      const startCheck = Date.now();
      try {
        const result = await Promise.race([
          check(),
          new Promise<boolean>((_, reject) =>
            setTimeout(() => reject(new Error('Health check timeout')), 5000),
          ),
        ]);

        const latency = Date.now() - startCheck;
        dependencies[name] = {
          status: result ? 'ok' : 'degraded',
          latency,
        };

        if (!result) {
          allHealthy = false;
        }
      } catch (err) {
        const latency = Date.now() - startCheck;
        this.logger.warn({ err, name }, 'Health check failed');
        dependencies[name] = {
          status: 'failed',
          latency,
        };
        allHealthy = false;
      }
    }

    const uptime = Date.now() - this.startTime;
    const status = allHealthy ? 'healthy' : 'degraded';

    return {
      status: status === 'healthy' ? 'healthy' : 'degraded',
      service: this.serviceName,
      uptime,
      timestamp: new Date().toISOString(),
      dependencies,
    };
  }
}

export function createHealthChecker(serviceName: string, logger: pino.Logger): HealthChecker {
  return new HealthChecker(serviceName, logger);
}
