import { z } from 'zod';
import * as dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';

const configSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  APP_ENV:  z.enum(['dev', 'staging', 'prod']).default('dev'),
  PORT:     z.coerce.number().default(3000),
  REDIS_URL: z.string().url().default('redis://localhost:6379'),
  JWT_SECRET: z.string().min(10).default('auth-secret-key-change-in-prod'),
  DATABASE_URL: z.string().optional(),

  /** Full round-trip timeout for gateway → upstream (ms). Keep ≥ upstream worst-case. */
  GATEWAY_PROXY_TIMEOUT_MS: z.coerce.number().min(3000).max(120000).default(60000),
  /** Socket connect timeout to upstream (ms). */
  GATEWAY_PROXY_CONNECT_TIMEOUT_MS: z.coerce.number().min(1000).max(30000).default(10000),
  /** Probe auth/project on /health/ready (set false/off/0 in air-gapped tests). */
  GATEWAY_HEALTH_PROBE_UPSTREAMS: z
    .string()
    .default('true')
    .transform((v) => !['false', '0', 'no', 'off'].includes(String(v).trim().toLowerCase())),
  
  // Service Discovery
  AUTH_SERVICE_URL:     z.string().url().default('http://localhost:3001'),
  PROJECT_SERVICE_URL:  z.string().url().default('http://localhost:3002'),
  TESTCASE_SERVICE_URL: z.string().url().default('http://localhost:3003'),
  TESTRUN_SERVICE_URL:  z.string().url().default('http://localhost:3004'),
  
  // Database Aliases
  AUTH_DATABASE_URL:    z.string().optional(),
  PROJECT_DATABASE_URL: z.string().optional(),
  
  LOG_LEVEL: z.enum(['debug', 'info', 'warn', 'error']).default('info'),
  LOG_SAMPLING_RATE: z.coerce.number().min(0).max(1).default(0.2),
  ENABLE_SWAGGER: z
    .string()
    .default('true')
    .transform((v) => !['false', '0', 'no', 'off'].includes(String(v).trim().toLowerCase())),
});

export type Config = z.infer<typeof configSchema>;

export const loadConfig = (overrides: Partial<Config> = {}): Config => {
  const isProd = process.env.APP_ENV === 'prod';

  // 2. Discover and load .env (search up to 3 levels)
  let currentPath = process.cwd();
  let rootDir = currentPath;
  for (let i = 0; i < 3; i++) {
    const envPath = path.join(currentPath, '.env');
    if (fs.existsSync(envPath)) {
      dotenv.config({ path: envPath });
      rootDir = currentPath;
      break;
    }
    currentPath = path.join(currentPath, '..');
  }

  // 3. Map service-specific database URLs
  const serviceName = process.env.SERVICE_NAME || '';
  if (!process.env.DATABASE_URL) {
    if (serviceName === 'auth-service') process.env.DATABASE_URL = process.env.AUTH_DATABASE_URL;
    if (serviceName === 'project-service') process.env.DATABASE_URL = process.env.PROJECT_DATABASE_URL;
  }

  // 4. Resolve SQLite paths to be absolute from Root
  if (process.env.DATABASE_URL?.startsWith('file:.')) {
    const relativePath = process.env.DATABASE_URL.replace('file:', '');
    const absolutePath = path.resolve(rootDir, relativePath);
    process.env.DATABASE_URL = `file:${absolutePath}`;
    console.log(`[${serviceName}] 📍 Resolved DB path: ${process.env.DATABASE_URL}`);
  }

  const result = configSchema.safeParse({
    ...process.env,
    ...overrides,
  });

  if (!result.success) {
    console.error('❌ Invalid environment variables:', result.error.flatten().fieldErrors);
    if (isProd) {
      throw new Error('Critical configuration missing or invalid in production');
    }
  }

  const config = result.success ? result.data : configSchema.parse({});

  // 3. Warn if default JWT_SECRET is used
  if (config.JWT_SECRET === 'auth-secret-key-change-in-prod') {
    console.warn(`[${serviceName || 'app'}] ⚠️  WARNING: Using default JWT_SECRET. This is insecure for production. Set JWT_SECRET in .env`);
  }

  return config;
};

// Global Error Handlers Hook
export const setupProcessHandlers = (logger: any) => {
  process.on('uncaughtException', (err) => {
    logger.error({ err }, 'Uncaught Exception');
    process.exit(1);
  });

  process.on('unhandledRejection', (reason, promise) => {
    logger.error({ reason, promise }, 'Unhandled Rejection');
    process.exit(1);
  });
};
