// TestCase Service Configuration
export const PORT = parseInt(process.env.PORT || '3003', 10);
export const JWT_SECRET = (() => {
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET environment variable is required but not set. Set it in .env or environment.');
  }
  return process.env.JWT_SECRET;
})();
export const PROJECT_SERVICE_URL = process.env.PROJECT_SERVICE_URL || 'http://localhost:3002';
export const TESTRUN_SERVICE_URL = process.env.TESTRUN_SERVICE_URL || 'http://testrun-service:3004';
export const SERVICE_NAME = 'testcase-service';
export const REDIS_URL = process.env.REDIS_URL || 'redis://localhost:6379';

// Cache configuration
export const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes
export const CORS_ORIGIN = process.env.CORS_ORIGIN || '*';
