// TestRun Service Auth Middleware - Forwards to shared
import { initAuthMiddleware, setAuthLogger } from '@rlgl/shared';
import { JWT_SECRET, PROJECT_SERVICE_URL, PERMISSION_CACHE_TTL_MS } from '../config/constants.js';

// Re-export shared middleware
export { verifyToken, requirePermission, invalidateProjectCache, invalidateUserCache } from '@rlgl/shared';

/**
 * Initialize auth middleware during app startup
 * This must be called once before using verifyToken or requirePermission
 */
export function initAuth(logger: any) {
  initAuthMiddleware(
    {
      jwtSecret: JWT_SECRET,
      projectServiceUrl: PROJECT_SERVICE_URL,
      cacheTtlMs: PERMISSION_CACHE_TTL_MS,
    },
    logger
  );
  setAuthLogger(logger);
}

