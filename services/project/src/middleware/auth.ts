import { initAuthMiddleware, setAuthLogger } from '@rlgl/shared';
import { CACHE_TTL_MS, JWT_SECRET, PROJECT_SERVICE_URL } from '../config/constants.js';

export { invalidateProjectCache, invalidateUserCache, requirePermission, verifyToken } from '@rlgl/shared';

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
