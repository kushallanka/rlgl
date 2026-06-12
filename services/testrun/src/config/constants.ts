export const PORT = parseInt(process.env.PORT || '3004', 10);
export const JWT_SECRET = (() => {
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET environment variable is required but not set');
  }
  return process.env.JWT_SECRET;
})();
export const PROJECT_SERVICE_URL = process.env.PROJECT_SERVICE_URL || 'http://localhost:3002';
export const TESTCASE_SERVICE_URL = process.env.TESTCASE_SERVICE_URL || 'http://testcase-service:3003';
export const SERVICE_NAME = 'testrun-service';
export const REDIS_URL = process.env.REDIS_URL || 'redis://localhost:6379';
export const PERMISSION_CACHE_TTL_MS = 60_000;
export const CORS_ORIGIN = process.env.CORS_ORIGIN || '*';
