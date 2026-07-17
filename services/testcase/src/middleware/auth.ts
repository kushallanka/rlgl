// TestCase Service Auth Middleware - Forwards to shared
import { initAuthMiddleware, setAuthLogger } from '@rlgl/shared';
import { CACHE_TTL_MS, JWT_SECRET, PROJECT_SERVICE_URL } from '../config/constants.js';

// Re-export shared middleware
export { invalidateProjectCache, invalidateUserCache, requirePermission, verifyToken } from '@rlgl/shared';

/**
 * Initialize auth middleware during app startup
 * This must be called once before using verifyToken or requirePermission
 */
export function initAuth(logger: any) {
  initAuthMiddleware(
    {
      jwtSecret: JWT_SECRET,
      projectServiceUrl: PROJECT_SERVICE_URL,
      cacheTtlMs: CACHE_TTL_MS,
    },
    logger,
  );
  setAuthLogger(logger);
}
