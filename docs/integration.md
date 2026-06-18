# Service Integration Reference

Developer reference for the observability, EventBus, idempotency, and optimistic-concurrency patterns used across all RLGL services. All five backend services (Auth, Project, TestCase, TestRun, Worker) already follow these patterns. Use this as a reference when extending existing services or adding a new one.

---

## Service Bootstrap Pattern

### `{service}/src/app.ts`

```typescript
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { Redis } from 'ioredis';
import {
  requestContextMiddleware,
  createLogger,
  createMetricsCollector,
  metricsMiddleware,
  requestLoggingMiddleware,
  errorHandlerMiddleware,
  createHealthChecker,
  requireIdempotency,
} from '@rlgl/shared';

const logger = createLogger({ service: 'my-service' });
const metrics = createMetricsCollector({ serviceName: 'my-service' }, logger);

export const createApp = (controller: MyController, prisma?: PrismaClient, redis?: Redis) => {
  const app = express();
  const healthChecker = createHealthChecker('my-service', logger);

  if (prisma) {
    healthChecker.registerDatabase(prisma);
  }

  app.use(express.json());
  app.use(cors({ origin: '*', credentials: true }));
  app.use(helmet());
  app.use(requestContextMiddleware);
  app.use(metricsMiddleware(metrics));
  app.use(requestLoggingMiddleware(logger));

  // Health endpoints (liveness / readiness probes)
  app.get('/health', async (_req, res) => {
    const status = await healthChecker.checkHealth();
    res.status(status.status === 'healthy' ? 200 : 503).json(status);
  });

  app.get('/health/live', (_req, res) =>
    res.json({ status: 'live', service: 'my-service', timestamp: new Date().toISOString() })
  );

  app.get('/health/ready', async (_req, res) => {
    const status = await healthChecker.checkHealth();
    res.status(status.status === 'healthy' ? 200 : 503).json(status);
  });

  // Metrics endpoints
  app.get('/metrics', (_req, res) => {
    res.set('Content-Type', 'text/plain');
    res.send(metrics.toPrometheus());
  });

  app.get('/metrics/json', (_req, res) => res.json(metrics.toJSON()));

  // Idempotency — applied to all mutating routes
  app.use(requireIdempotency('my-service', redis));

  // Routes
  app.post('/',    controller.create);
  app.get('/',     controller.list);
  app.get('/:id',  controller.getById);
  app.put('/:id',  controller.update);
  app.delete('/:id', controller.delete);

  // Error handlers (must be last)
  app.use((_req, res) => res.status(404).json({
    error: 'Not Found',
    status: 404,
    timestamp: new Date().toISOString(),
  }));

  app.use(errorHandlerMiddleware(logger));

  return app;
};
```

### `{service}/src/main.ts`

```typescript
import { loadConfig, createLogger, setupProcessHandlers, createEventBus, createRedisClient } from '@rlgl/shared';
import { PrismaClient } from '../generated/client/index.js';
import { MyRepository } from './repositories/my.repository.js';
import { MyService } from './services/my.service.js';
import { MyController } from './controllers/my.controller.js';
import { createApp } from './app.js';
import { startServer } from './server.js';

const config = loadConfig();
const logger = createLogger({ service: 'my-service', level: config.LOG_LEVEL });

setupProcessHandlers(logger);

async function main() {
  if (config.APP_ENV === 'prod' && !config.DATABASE_URL) {
    logger.fatal('DATABASE_URL required in production');
    process.exit(1);
  }

  const prisma = new PrismaClient({ datasourceUrl: config.DATABASE_URL });
  await prisma.$connect();
  logger.info('Database connected');

  // Redis is optional: idempotency and rate-limiting degrade gracefully without it
  const redis = config.REDIS_URL ? createRedisClient(config.REDIS_URL) : undefined;

  const eventBus = await createEventBus(
    { redisUrl: config.REDIS_URL, serviceName: 'my-service' },
    logger
  );

  const repository = new MyRepository(prisma);
  const service = new MyService(repository, eventBus);
  const controller = new MyController(service);

  const app = createApp(controller, prisma, redis);

  startServer(app, config.PORT, async () => {
    await eventBus.shutdown();
    await prisma.$disconnect();
    redis?.disconnect();
    logger.info('Shutdown complete');
  });
}

main().catch((err) => {
  logger.error({ err, stack: err.stack }, 'Fatal error during startup');
  process.exit(1);
});
```

---

## Idempotency Middleware

`requireIdempotency(serviceName, redis?)` in `packages/shared/src/middleware` makes POST/PUT/PATCH mutations safe to retry.

### How it works

1. Client sends `Idempotency-Key: <uuid>` header on the request.
2. Middleware computes a SHA-256 hash of `method:url:body`.
3. Tries `SET NX EX 60` on key `idem:{service}:{userId}:{key}` to acquire a "pending" lock.
4. On success: wraps `res.json` to capture the response body.
5. On `finish`: if status was 2xx, replaces the pending record with `{ state: 'done', statusCode, body }` and sets a 24-hour TTL. If status was 4xx/5xx, deletes the key (failure is retryable).
6. On any subsequent request with the same key + same payload: returns the cached response immediately with `x-idempotent-replay: true` header.
7. On same key + **different** payload: returns `409 IDEMPOTENCY_KEY_REUSED`.
8. On same key while the original request is still in-flight: returns `409 IDEMPOTENCY_IN_PROGRESS`.

Without a Redis instance the middleware is a no-op pass-through — services still work, they just don't deduplicate.

### Client usage

```typescript
// Frontend — src/features/testruns/api/testruns.api.ts
await api.post('/testruns', body, {
  headers: { 'Idempotency-Key': crypto.randomUUID() },
});
```

Generate a new UUID per form submission. Store it in component state so a retry (network failure, double-click) reuses the same key.

### Error codes

| Status | Code | Meaning |
|--------|------|---------|
| 409 | `IDEMPOTENCY_KEY_REUSED` | Same key, different payload — likely a programming error |
| 409 | `IDEMPOTENCY_IN_PROGRESS` | Duplicate concurrent request — client should wait and retry |

---

## Optimistic Concurrency (Compare-and-Swap)

All mutable entities carry a `version Int @default(1)` column. Pass the last-known `version` in an update request to enable CAS semantics.

### Repository pattern

```typescript
// services/testrun/src/repositories/testrun.repository.ts
async updateRun(
  runId: number,
  data: { name?: string; description?: string },
  expectedVersion?: number
) {
  const whereClause = expectedVersion != null
    ? { id: runId, version: expectedVersion }
    : { id: runId };

  const results = await this.prisma.testRun.updateMany({
    where: whereClause,
    data: { ...data, version: { increment: 1 } },
  });

  if (results.count === 0) return null; // conflict or not found

  return this.prisma.testRun.findUnique({ where: { id: runId } });
}
```

### Service / controller pattern

```typescript
// Service: translate null → 409
const updated = await this.repo.updateRun(runId, patch, version);
if (!updated) {
  return { error: 'Test run was modified by someone else. Refresh and retry.', code: 'VERSION_CONFLICT', status: 409 };
}

// Controller: return the error shape
if (result.status === 409) {
  return res.status(409).json({ error: result.error, code: result.code });
}
```

### Client usage

Include the `version` field in the update payload. On 409, show a conflict message and re-fetch before allowing the user to try again:

```typescript
await testrunsApi.update(runId, { name, version: run.version });
// → 409 means someone else edited it since you loaded the page
```

Omitting `version` performs a last-write-wins update — acceptable for low-contention fields, not acceptable for anything a concurrent editor could overwrite.

---

## Internal Service Communication

Services call each other via direct HTTP on internal network addresses. The TestRun service is the primary consumer of internal TestCase endpoints.

### Batch case fetch

When a test run is created, TestRun fetches all selected case bodies in one call:

```typescript
// services/testrun/src/services/testrun.service.ts
private async snapshotCases(
  caseIds: number[],
  projectId: number,
  requestId: string
): Promise<{ cases: SnapshotCase[]; missingIds: number[] }> {
  const res = await axios.post(
    `${TESTCASE_SERVICE_URL}/internal/cases/batch`,
    { ids: caseIds, projectId },
    { headers: { 'x-request-id': requestId }, timeout: 10000 }
  );
  return { cases: res.data?.data ?? [], missingIds: res.data?.missingIds ?? [] };
}
```

**This call must succeed.** If it throws (network error, timeout, non-2xx response), the caller catches and returns `503` to the client — no run is created. Never fall back to placeholder names or partial data.

### Internal endpoint contract

`POST /internal/cases/batch` on TestCase service:

```typescript
// Request body
{ ids: number[]; projectId: number }

// Response body
{
  data: Array<{
    id: number; title: string;
    preconditions?: string | null;
    steps?: unknown[];
    expectedResult?: string | null;
    priority?: string | null;
    type?: string | null;
  }>;
  missingIds: number[];  // IDs from the request that don't exist in this project
}
```

If `missingIds` is non-empty the caller should return `400` with the list of invalid IDs — creating a run with known-missing cases is an error.

---

## Publishing Events

Inject `EventBus` into the service layer and publish after each successful mutation:

```typescript
import { EventBus } from '@rlgl/shared';
import { MyRepository } from '../repositories/my.repository.js';

export class MyService {
  constructor(
    private repo: MyRepository,
    private eventBus: EventBus
  ) {}

  async create(data: CreateInput, context: RequestContext) {
    const record = await this.repo.create(data);

    await this.eventBus.publishEvent(
      'project.created',
      {
        projectId: record.id,
        projectName: record.name,
        createdBy: context.userId,
      },
      {
        requestId: context.requestId,
        userId: context.userId,
        projectId: record.id,
      }
    );

    logger.info({ id: record.id }, 'Record created');
    return record;
  }
}
```

---

## Event Types Reference

```typescript
type EventType =
  | 'auth.login'
  | 'auth.logout'
  | 'auth.token_refresh'
  | 'auth.permission_changed'
  | 'project.created'
  | 'project.member_added'
  | 'project.member_removed'
  | 'project.settings_updated'
  | 'testcase.created'
  | 'testcase.updated'
  | 'testcase.deleted'
  | 'testrun.started'
  | 'testrun.completed'
  | 'testrun.failed'
  | 'system.error'
  | 'system.cache_invalidation';
```

### Event Envelope

```json
{
  "id": "uuid",
  "event": "project.created",
  "service": "project-service",
  "timestamp": "2026-05-17T12:00:00Z",
  "requestId": "uuid",
  "userId": 42,
  "projectId": 7,
  "metadata": {},
  "version": 1
}
```

---

## Shared Package Exports

```typescript
import {
  // Config
  loadConfig,

  // Logger
  createLogger,

  // Middleware
  requestContextMiddleware,
  metricsMiddleware,
  requestLoggingMiddleware,
  errorHandlerMiddleware,
  requireIdempotency,       // requireIdempotency(serviceName: string, redis?: Redis)

  // Health
  createHealthChecker,

  // Metrics
  createMetricsCollector,

  // EventBus
  createEventBus,

  // Redis
  createRedisClient,

  // Process lifecycle
  setupProcessHandlers,

  // Error classes
  AppError,
  ValidationError,
} from '@rlgl/shared';
```

---

## Verification

After wiring up a service, confirm the integration:

```bash
# Health check
curl http://localhost:<port>/health

# Prometheus metrics
curl http://localhost:<port>/metrics

# JSON metrics
curl http://localhost:<port>/metrics/json

# Confirm events are reaching Redis
redis-cli XRANGE event:project:project.created - + COUNT 1

# Test idempotency (first call succeeds, second call replays with x-idempotent-replay header)
KEY=$(python -c "import uuid; print(uuid.uuid4())")
curl -X POST http://localhost:<port>/resource \
  -H "Idempotency-Key: $KEY" \
  -H "Content-Type: application/json" \
  -d '{"name":"test"}'
# Repeat the same command → should return same body + x-idempotent-replay: true

# Test CAS (version conflict)
# 1. Fetch a resource and note its version
# 2. PUT with that version → succeeds
# 3. PUT with the OLD version again → 409 VERSION_CONFLICT
```
