/**
 * Invariant tests: Idempotency guarantees.
 *
 * Mutating endpoints that accept an Idempotency-Key header must:
 * 1. Execute exactly once — repeated requests with the same key replay the
 *    cached response without re-executing the mutation.
 * 2. Reject key reuse with a different payload (409 IDEMPOTENCY_KEY_REUSED).
 * 3. Serialize concurrent duplicate requests (409 IDEMPOTENCY_IN_PROGRESS
 *    while the first is processing).
 *
 * These tests exercise the middleware directly and through HTTP.
 */

import express, { type Express } from 'express';
import { Redis } from 'ioredis';
import request from 'supertest';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { requireIdempotency } from '../../packages/shared/src/middleware/index.js';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

let redis: Redis | undefined;
let app: Express;
let mutationCount: number;

function buildApp(redisClient?: Redis) {
  const server = express();
  server.use(express.json());

  const idempotency = requireIdempotency('test-service', redisClient);

  server.post('/create', idempotency, (_req, res) => {
    mutationCount++;
    res.status(201).json({ id: mutationCount, created: true });
  });

  return server;
}

beforeEach(async () => {
  mutationCount = 0;

  // Try to connect to Redis; fall back to no-Redis (pass-through) mode
  const REDIS_URL = process.env.REDIS_URL ?? 'redis://localhost:6379';
  try {
    redis = new Redis(REDIS_URL, { lazyConnect: true, connectTimeout: 1000, maxRetriesPerRequest: 0 });
    await redis.connect();
    app = buildApp(redis);
  } catch {
    redis = undefined;
    app = buildApp(undefined);
  }
});

afterEach(async () => {
  if (redis) {
    // Clean up test keys
    const keys = await redis.keys('idem:test-service:*').catch(() => []);
    if (keys.length > 0) await redis.del(...keys);
    redis.disconnect();
    redis = undefined;
  }
});

// ---------------------------------------------------------------------------
// Invariant 1: Without Redis, idempotency middleware is a pass-through
// ---------------------------------------------------------------------------

describe('Idempotency: no-Redis degradation', () => {
  it('without Redis, requests execute normally without idempotency enforcement', async () => {
    const noRedisApp = buildApp(undefined);

    await request(noRedisApp).post('/create').set('Idempotency-Key', 'key-noredis').send({ x: 1 });
    const res2 = await request(noRedisApp).post('/create').set('Idempotency-Key', 'key-noredis').send({ x: 1 });

    // Both execute — no enforcement without Redis
    expect(mutationCount).toBe(2);
    expect(res2.status).toBe(201);
  });
});

// ---------------------------------------------------------------------------
// Invariant 2: With Redis, second request replays cached response
// ---------------------------------------------------------------------------

describe('Idempotency: replay on duplicate key (requires Redis)', () => {
  it('second POST with same key and payload is replayed — mutation runs only once', async () => {
    if (!redis) {
      console.warn('Skipping: Redis not available');
      return;
    }

    const KEY = `idem-replay-${Date.now()}`;

    const res1 = await request(app).post('/create').set('Idempotency-Key', KEY).send({ x: 1 });
    const res2 = await request(app).post('/create').set('Idempotency-Key', KEY).send({ x: 1 });

    expect(res1.status).toBe(201);
    expect(res2.status).toBe(201);

    // Mutation must have executed only once
    expect(mutationCount).toBe(1);

    // Replay response must be identical to original
    expect(res2.body).toEqual(res1.body);

    // Replay must be flagged
    expect(res2.headers['x-idempotent-replay']).toBe('true');
  });

  it('key without Idempotency-Key header executes normally each time', async () => {
    if (!redis) return;

    await request(app).post('/create').send({ x: 1 });
    await request(app).post('/create').send({ x: 1 });

    expect(mutationCount).toBe(2);
  });
});

// ---------------------------------------------------------------------------
// Invariant 3: Key reuse with different payload is rejected
// ---------------------------------------------------------------------------

describe('Idempotency: key reuse with different payload rejected', () => {
  it('returns 409 IDEMPOTENCY_KEY_REUSED when payload differs', async () => {
    if (!redis) {
      console.warn('Skipping: Redis not available');
      return;
    }

    const KEY = `idem-conflict-${Date.now()}`;

    await request(app).post('/create').set('Idempotency-Key', KEY).send({ x: 1 });
    const res2 = await request(app).post('/create').set('Idempotency-Key', KEY).send({ x: 999 }); // different payload

    expect(res2.status).toBe(409);
    expect(res2.body.code).toBe('IDEMPOTENCY_KEY_REUSED');
    expect(mutationCount).toBe(1); // second mutation never ran
  });
});

// ---------------------------------------------------------------------------
// Invariant 4: GET requests are not subject to idempotency enforcement
// ---------------------------------------------------------------------------

describe('Idempotency: read-only methods bypass enforcement', () => {
  it('GET requests are not stored or replayed', async () => {
    const server = express();
    server.use(express.json());
    const idempotency = requireIdempotency('test-service', redis);
    let getCount = 0;
    server.get('/list', idempotency, (_req, res) => {
      getCount++;
      res.json({ items: [] });
    });

    await request(server).get('/list').set('Idempotency-Key', 'get-key');
    await request(server).get('/list').set('Idempotency-Key', 'get-key');

    // Both GETs must execute — GET is not idempotency-controlled
    expect(getCount).toBe(2);
  });
});

// ---------------------------------------------------------------------------
// Invariant 5: User scoping — different users cannot share idempotency keys
// ---------------------------------------------------------------------------

describe('Idempotency: user-scoped keys cannot cross user boundaries', () => {
  it('same key from two different users executes mutation twice', async () => {
    if (!redis) return;

    const KEY = `shared-key-${Date.now()}`;

    await request(app).post('/create').set('Idempotency-Key', KEY).set('x-user-id', 'user-1').send({ x: 1 });

    await request(app)
      .post('/create')
      .set('Idempotency-Key', KEY)
      .set('x-user-id', 'user-2') // different user
      .send({ x: 1 });

    // Two distinct users → two mutations despite the same key string
    expect(mutationCount).toBe(2);
  });
});
