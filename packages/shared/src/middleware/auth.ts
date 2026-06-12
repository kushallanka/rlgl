import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import type { Logger } from 'pino';

// Types for permission caching
export interface PermissionCacheEntry {
  perms: string[];
  expiresAt: number;
}

export interface JwtUser {
  userId: number;
  [key: string]: any;
}

// Configuration - must be provided by consuming service
interface AuthMiddlewareConfig {
  jwtSecret: string;
  projectServiceUrl: string;
  cacheTtlMs: number;
}

let config: AuthMiddlewareConfig;
let logger: Logger | null = null;
const localPermCache = new Map<string, PermissionCacheEntry>();

/**
 * Initialize auth middleware with configuration.
 * Must be called once during service startup.
 */
export function initAuthMiddleware(cfg: AuthMiddlewareConfig, log?: Logger) {
  config = cfg;
  logger = log ?? null;
}

/**
 * Set or update the logger instance (optional, for flexible logging)
 */
export function setAuthLogger(log: Logger) {
  logger = log;
}

/**
 * JWT Token Verification Middleware
 * Extracts and validates JWT token, attaches decoded user to request
 */
export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const auth = req.headers.authorization;
  if (!auth) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const token = auth.split(' ')[1];
    if (!token) {
      return res.status(401).json({ error: 'Invalid token format' });
    }
    const decoded = jwt.verify(token, config.jwtSecret) as JwtUser;
    (req as any).user = decoded;
    return next();
  } catch (err: any) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
};

/**
 * Check if user has permission in a project.
 * Uses local cache to minimize cross-service calls.
 */
export const checkPermission = async (
  token: string,
  userId: number,
  projectId: number,
  permission: string,
  requestId: string
): Promise<boolean> => {
  const cacheKey = `${userId}:${projectId}`;
  const cached = localPermCache.get(cacheKey);

  // Return cached permissions if still valid
  if (cached && Date.now() < cached.expiresAt) {
    return cached.perms.includes(permission);
  }

  // Fetch fresh permissions from Project Service
  try {
    const res = await axios.get(`${config.projectServiceUrl}/${projectId}/permissions/mine`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'x-request-id': requestId,
        'x-project-id': projectId,
      },
      timeout: 5000,
    });

    const perms: string[] = res.data.permissions || [];
    localPermCache.set(cacheKey, { perms, expiresAt: Date.now() + config.cacheTtlMs });
    return perms.includes(permission);
  } catch (err: any) {
    if (err.response?.status === 403) {
      return false;
    }
    if (logger) {
      logger.error(
        { requestId, userId, projectId, error: err.message },
        'Permission check call failed'
      );
    }
    // Default to deny on error
    return false;
  }
};

/**
 * Middleware factory - requires specific permission
 * Must be used after verifyToken middleware
 */
export const requirePermission = (permission: string) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const projectIdStr = (req.headers['x-project-id'] as string) || req.params.projectId;
    const requestId = (req as any).requestId;
    const { userId: userIdStr } = (req as any).user || {};
    const userId = parseInt(userIdStr, 10);
    const projectId = parseInt(projectIdStr ?? '', 10);

    if (!projectIdStr) {
      return res.status(400).json({ error: 'x-project-id header is required' });
    }
    if (isNaN(projectId) || isNaN(userId)) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }

    const token = req.headers.authorization?.split(' ')[1] ?? '';
    const allowed = await checkPermission(token, userId, projectId, permission, requestId);

    if (!allowed) {
      if (logger) {
        logger.warn(
          { requestId, userId, projectId, permission },
          'Permission denied'
        );
      }
      return res.status(403).json({ error: `Permission denied: ${permission} required` });
    }

    (req as any).projectId = projectId;
    return next();
  };

/**
 * Invalidate all cached permissions for a project
 */
export const invalidateProjectCache = (projectId: number) => {
  for (const key of localPermCache.keys()) {
    if (key.endsWith(`:${projectId}`)) {
      localPermCache.delete(key);
    }
  }
};

/**
 * Invalidate cached permissions for a specific user in a project
 */
export const invalidateUserCache = (userId: number, projectId: number) => {
  localPermCache.delete(`${userId}:${projectId}`);
};

/**
 * Clear all permission cache (careful - use sparingly)
 */
export const clearPermissionCache = () => {
  localPermCache.clear();
};
