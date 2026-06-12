import { initAuthMiddleware, setAuthLogger } from '@rlgl/shared';
import { JWT_SECRET, PROJECT_SERVICE_URL, CACHE_TTL_MS } from '../config/constants.js';

export { verifyToken, requirePermission, invalidateProjectCache, invalidateUserCache } from '@rlgl/shared';

export function initAuth(logger: any) {
  initAuthMiddleware(
    {
      jwtSecret: JWT_SECRET,
      projectServiceUrl: PROJECT_SERVICE_URL,
      cacheTtlMs: CACHE_TTL_MS,
    },
    logger
  );
  setAuthLogger(logger);
}
