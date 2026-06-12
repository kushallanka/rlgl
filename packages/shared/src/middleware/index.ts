import { Request, Response, NextFunction, RequestHandler } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { Redis } from 'ioredis';
import { createHash } from 'crypto';
import { AppError } from '../errors/index.js';

// Export auth middleware
export * from './auth.js';

const IDEMPOTENT_METHODS = new Set(['POST', 'PUT', 'PATCH']);
const IDEMPOTENCY_PENDING_TTL_SECONDS = 60;
const IDEMPOTENCY_RESPONSE_TTL_SECONDS = 24 * 60 * 60;

/**
 * Redis-backed idempotency for mutating requests carrying an
 * `Idempotency-Key` header. Stores the request hash and the response;
 * replays the cached response for identical retries, rejects key reuse
 * with a different payload (409), and serializes concurrent duplicates.
 * Without a Redis instance it degrades to a pass-through.
 */
export const requireIdempotency = (serviceName: string, redis?: Redis): RequestHandler => {
  if (!redis) {
    return (_req: Request, _res: Response, next: NextFunction) => next();
  }

  return async (req: Request, res: Response, next: NextFunction) => {
    const key = req.headers['idempotency-key'];
    if (typeof key !== 'string' || key.length === 0 || key.length > 200 || !IDEMPOTENT_METHODS.has(req.method)) {
      return next();
    }

    // Scope by caller identity so one user's cached response can never be
    // replayed to another (the gateway propagates x-user-id).
    const userId = (req.headers['x-user-id'] as string) || 'anon';
    const redisKey = `idem:${serviceName}:${userId}:${key}`;
    const requestHash = createHash('sha256')
      .update(`${req.method}:${req.originalUrl}:${JSON.stringify(req.body ?? null)}`)
      .digest('hex');

    try {
      const existing = await redis.get(redisKey);
      if (existing) {
        const record = JSON.parse(existing) as { state: string; requestHash: string; statusCode?: number; body?: unknown };
        if (record.requestHash !== requestHash) {
          return res.status(409).json({ error: 'Idempotency key was already used with a different payload', code: 'IDEMPOTENCY_KEY_REUSED' });
        }
        if (record.state === 'pending') {
          return res.status(409).json({ error: 'A request with this idempotency key is still being processed', code: 'IDEMPOTENCY_IN_PROGRESS' });
        }
        res.setHeader('x-idempotent-replay', 'true');
        return res.status(record.statusCode ?? 200).json(record.body ?? null);
      }

      const acquired = await redis.set(
        redisKey,
        JSON.stringify({ state: 'pending', requestHash }),
        'EX', IDEMPOTENCY_PENDING_TTL_SECONDS,
        'NX'
      );
      if (!acquired) {
        return res.status(409).json({ error: 'A request with this idempotency key is still being processed', code: 'IDEMPOTENCY_IN_PROGRESS' });
      }
    } catch {
      // Redis unavailable: fail open rather than block writes.
      return next();
    }

    let capturedBody: unknown;
    const originalJson = res.json.bind(res);
    res.json = ((body: unknown) => {
      capturedBody = body;
      return originalJson(body);
    }) as Response['json'];

    res.on('finish', () => {
      void (async () => {
        try {
          if (res.statusCode >= 200 && res.statusCode < 300) {
            await redis.set(
              redisKey,
              JSON.stringify({ state: 'done', requestHash, statusCode: res.statusCode, body: capturedBody ?? null }),
              'EX', IDEMPOTENCY_RESPONSE_TTL_SECONDS
            );
          } else {
            // Failures did not commit anything worth replaying: release the
            // key so the client can correct the request and retry.
            await redis.del(redisKey);
          }
        } catch { /* best effort */ }
      })();
    });

    return next();
  };
};

export interface RequestContext {
  requestId: string;
  userId?: string;
  projectId?: string;
  tenantId?: string;
}

/**
 * Attaches tracing headers and context to the request.
 */
export const requestContextMiddleware = (req: Request, _res: Response, next: NextFunction) => {
  const requestId = (req.headers['x-request-id'] as string) || uuidv4();
  const userId = req.headers['x-user-id'] as string;
  const projectId = req.headers['x-project-id'] as string;
  const tenantId = req.headers['x-tenant-id'] as string || projectId; // In this system, tenant is often project-scoped

  (req as any).context = {
    requestId,
    userId,
    projectId,
    tenantId,
  };

  next();
};

let lastRateLimiterRedisWarnAt = 0;
const RATE_LIMITER_REDIS_WARN_MS = 30_000;

/**
 * Tenant-aware rate limiter
 */
export const tenantRateLimiter = (redis: Redis, limit: number, windowSeconds: number) => {
  return async (req: Request, _res: Response, next: NextFunction) => {
    const context = (req as any).context as RequestContext;
    const identifier = context.tenantId || req.ip;
    const key = `ratelimit:${identifier}`;

    try {
      const current = await redis.incr(key);
      if (current === 1) {
        await redis.expire(key, windowSeconds);
      }

      if (current > limit) {
        throw new AppError(429, 'Rate limit exceeded for this tenant. Try again later.');
      }
      next();
    } catch (err) {
      if (err instanceof AppError) {
        return next(err);
      }
      const now = Date.now();
      if (now - lastRateLimiterRedisWarnAt >= RATE_LIMITER_REDIS_WARN_MS) {
        lastRateLimiterRedisWarnAt = now;
        console.warn(
          'Rate limiter Redis error (failing open):',
          (err as Error).message || err
        );
      }
      next();
    }
  };
};
