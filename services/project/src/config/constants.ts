export const PORT = parseInt(process.env.PORT || '3002', 10);
export const JWT_SECRET = (() => {
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET environment variable is required but not set');
  }
  return process.env.JWT_SECRET;
})();
export const PROJECT_SERVICE_URL = process.env.PROJECT_SERVICE_URL || 'http://localhost:3002';
export const SERVICE_NAME = 'project-service';
export const CACHE_TTL_MS = 5 * 60 * 1000;
export const CORS_ORIGIN = process.env.CORS_ORIGIN || '*';
