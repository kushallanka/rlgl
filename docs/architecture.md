# RLGL Architecture Overview

## System Overview

RedLight GreenLight is a high-performance, multi-tenant SaaS platform for test repository management and test execution tracking. It uses a **Modular Monorepo** via `npm workspaces` for strict dependency governance across 6 microservices and 2 shared packages.

---

## Services

### Gateway (`services/gateway` — Port 3000)

Central entry point for all API traffic.

- Reads the httpOnly `accessToken` cookie from the browser
- Verifies the JWT with `JWT_SECRET` (shared across all services)
- Injects `x-user-id`, `x-request-id`, `x-project-id` headers before proxying
- Applies rate limiting and configurable proxy timeouts (default 30 s)
- Reverse-proxies all traffic under `/api/v1` to downstream services
- Exposes `/health`, `/health/live`, `/health/ready`, `/metrics`

### Auth (`services/auth` — Port 3001)

Layered IAM service using Clean Architecture.

**Public endpoints:**

| Method | Path | Description |
|--------|------|-------------|
| POST | `/signup` | User registration |
| POST | `/login` | Login — issues httpOnly `accessToken` cookie |
| GET | `/me` | Current user profile |
| POST | `/refresh` | Token refresh |
| POST | `/logout` | Logout and revoke token |
| GET | `/users` | List all users |

**Internal server-to-server endpoints:**

| Method | Path | Description |
|--------|------|-------------|
| GET | `/users/:userId/projects` | Project IDs the user belongs to |
| GET | `/users/:userId/projects/:projectId/permissions` | Effective permission strings |
| POST | `/internal/projects/:projectId/init-admin` | Creates Project Admin role after project creation |

**Database models:** `User`, `RefreshToken`, `ProjectRole`, `ProjectPermission`, `ProjectUserRole`, `IdempotencyKey`

### Project (`services/project` — Port 3002)

Project CRUD with layered dependency injection.

- Full CRUD for projects with soft delete
- Project-scoped configuration: test case types, priorities, custom fields
- Role and member management
- Feature flags per project
- Full audit log (`AuditLog`) for all actions
- Calls Auth Service for IAM operations (init-admin, permission checks)

**Database models:** `Project`, `TestCaseType`, `Priority`, `CustomField`, `CustomFieldOption`, `AuditLog`, `FeatureFlag`, `ProjectRole`, `ProjectPermission`, `ProjectUserRole`, `IdempotencyKey`

### TestCase (`services/testcase` — Port 3003)

Hierarchical test case management: Project → Suite → Section → TestCase.

| Method | Paths | Description |
|--------|-------|-------------|
| GET / POST | `/suites` | List or create suites |
| GET / PUT / DELETE | `/suites/:id` | Get, update, or delete a suite — supports `version` for CAS |
| GET / POST | `/sections` | List or create sections |
| GET / PUT / DELETE | `/sections/:id` | Get, update, or delete a section — supports `version` for CAS |
| GET / POST | `/cases` | List or create test cases |
| GET / PUT / DELETE | `/cases/:id` | Get, update, or delete a test case — supports `version` for CAS |
| POST | `/internal/cases/batch` | Fetch full case bodies by ID list (used by TestRun at run creation) |

Query parameters: `projectId`, `suiteId`, `sectionId` for filtering.  
Custom field values are stored as JSON. Soft delete is supported.

**CAS updates:** `PUT /cases/:id` (and suite/section equivalents) accept an optional `version` field. If the stored version differs, the server returns `409 VERSION_CONFLICT` instead of overwriting the conflicting edit.

**Database models:** `Project` (replica), `Suite`, `Section`, `TestCase`, `IdempotencyKey`  
All three mutable entities carry a `version Int @default(1)` column for optimistic concurrency.

### TestRun (`services/testrun` — Port 3004)

Test execution and result tracking.

| Method | Paths | Description |
|--------|-------|-------------|
| GET / POST | `/` | List or create test runs |
| GET / PUT / DELETE | `/:id` | Get, update, or delete a run — `PUT` supports `version` for CAS |
| PUT | `/results/:resultId` | Update a single test result — supports `version` for CAS |

Result statuses: `Untested` | `Passed` | `Failed` | `Blocked` | `NotApplicable`

**Snapshot-based execution:** When a run is created the service calls `POST /internal/cases/batch` on the TestCase service to fetch the full body of every selected case. The complete snapshot — `title`, `preconditions`, `steps`, `expectedResult`, `priority`, `type`, and `snapshottedAt` — is written into `TestResult` rows immediately and never updated afterward. Historical runs remain fully self-contained even if the underlying cases are edited, moved, or deleted later.

**Fail-closed:** If the TestCase service is unreachable at run-creation time, the endpoint returns `503` and no run is created. Partial snapshots with placeholder names are not acceptable.

**Database models:** `Project` (replica), `Suite` (replica), `TestRun`, `TestResult`, `IdempotencyKey`  
Both `TestRun` and `TestResult` carry a `version Int @default(1)` column for optimistic concurrency.

### Worker (`services/worker` — no HTTP port)

Background job processor; no HTTP interface.

- Consumes BullMQ queues from Redis
- Subscribes to Redis Streams events
- Handles async work: notifications, data sync, consistency jobs

---

## Shared Packages

### `packages/shared`

Exports:

| Module | Contents |
|--------|----------|
| `./config` | `loadConfig()` — dotenv-based config loader |
| `./logger` | `createLogger()` — Pino with request-context injection |
| `./middleware` | `requestContextMiddleware`, `metricsMiddleware`, `requestLoggingMiddleware`, `errorHandlerMiddleware`, `requireIdempotency(serviceName, redis?)`, JWT auth middleware |
| `./caching` | Circuit breaker with half-open recovery, cache stampede protection (jitter + single-flight) |
| `./redis` | Redis client wrapper (ioredis) |
| `./events` | `createEventBus()` — Redis Streams producer/consumer |
| `./metrics` | `createMetricsCollector()` — Prometheus format |
| `./health` | `createHealthChecker()` — liveness, readiness, dependency checks |
| `./errors` | `AppError`, `ValidationError`, and other typed error classes |

**`requireIdempotency(serviceName, redis?)`:** Pass an ioredis `Redis` instance to activate real idempotency. Without one the middleware is a no-op pass-through. See [integration.md](integration.md#idempotency-middleware) for the full contract.

### `packages/contracts`

Shared TypeScript types and interfaces used across services to maintain API contracts.

---

## Request Flow

```
Browser
  │  (cookie: accessToken)
  ▼
API Gateway :3000
  ├── Verify JWT → extract userId
  ├── Set x-user-id, x-request-id, x-project-id
  └── Proxy to service
         ├── Auth    :3001   (/api/v1/auth/*)
         ├── Project :3002   (/api/v1/projects/*)
         ├── TestCase :3003  (/api/v1/testcases/*, /api/v1/suites/*, ...)
         └── TestRun  :3004  (/api/v1/testruns/*)
                  │  POST /internal/cases/batch → TestCase :3003
                  ▼ publish event
          EventBus (Redis Streams)
                  │
                  ▼ consume
           Worker Service
```

In local development, **Vite** proxies `/api/v1` → `http://localhost:3000`.

---

## Authentication & RBAC

**Auth flow:**
1. `POST /login` → server sets httpOnly `accessToken` cookie (JWT, short-lived) and a refresh token in the database
2. Cookie is automatically sent on every subsequent request
3. Gateway verifies the JWT and sets `x-user-id`
4. Downstream services read `x-user-id` without needing to re-verify the token
5. Project-scoped permissions are resolved via Auth Service's internal API

**Permission model:**

| Scope | Roles | Actions |
|-------|-------|---------|
| System | Admin | All permissions globally |
| Project | Project Admin, Tester, Viewer (custom per project) | `testcase.view`, `testcase.create`, `testcase.edit`, `testcase.delete`, `testrun.create`, `testrun.update`, `config.manage`, `project.manage`, `member.manage` |

**IAM safety features:**
- `FEATURE_IAM_SHADOW_READ=true` — silent reads against legacy IAM data for consistency verification
- `FEATURE_IAM_DUAL_READ=true` — reads from both old and new IAM sources simultaneously
- `iam-consistency-job` — background worker that audits and auto-heals IAM mismatches

---

## Database

Each service owns its own isolated database schema managed via **Prisma**.

| Environment | Database |
|-------------|----------|
| Development | SQLite (files in `data/`) |
| Production | PostgreSQL RDS (multi-AZ) |

Run migrations per service:
```bash
cd services/auth && npx prisma migrate dev
```

**Key schema facts:**
- All primary keys use sequential `Int @id @default(autoincrement())`
- `User.id` remains Int (consistent across all services)
- Every service has an `IdempotencyKey` table to prevent duplicate mutations
- TestCase and TestRun services replicate lightweight `Project` and `Suite` rows for join performance
- `Suite`, `Section`, and `TestCase` carry `version Int @default(1)` for optimistic concurrency
- `TestRun` and `TestResult` carry `version Int @default(1)` for optimistic concurrency
- `TestResult` stores a full immutable snapshot of the test case at run-creation time (see [data-model.md](data-model.md))

---

## Execution Data Model (Snapshot Architecture)

Execution data is intentionally **decoupled** from live test case state. When a test run is created:

1. The TestRun service calls `POST /internal/cases/batch` on the TestCase service with the full list of case IDs.
2. The TestCase service returns the full body of each case.
3. Each `TestResult` row is created with a complete copy: `title`, `preconditions`, `steps`, `expectedResult`, `priority`, `type`, `snapshottedAt`.
4. No subsequent query to the TestCase service is needed to display historical results.

This means: editing, moving, or deleting a test case **never corrupts past run data**. The snapshot is append-only and immutable after creation.

See [data-model.md](data-model.md) for the full schema reference.

---

## Optimistic Concurrency (Compare-and-Swap)

All mutable entities carry a `version` integer. Updates that include the known `version` use `UPDATE … WHERE id = ? AND version = ?` semantics (via Prisma `updateMany`). If the row was modified since the client last fetched it, `updateMany` matches zero rows and the endpoint returns:

```json
HTTP 409
{ "error": "… was modified by someone else. Refresh and retry.", "code": "VERSION_CONFLICT" }
```

The `version` field increments atomically on every successful write. Clients pass `version` in the request body; it is optional — omitting it skips the CAS check and performs a last-write-wins update.

Entities with CAS support: `TestCase`, `Suite`, `Section`, `TestRun`, `TestResult`.

---

## Event System (Redis Streams)

All state-changing operations publish domain events to Redis Streams. The Worker service consumes them.

**Event types:**

```typescript
type EventType =
  | 'auth.login' | 'auth.logout' | 'auth.token_refresh' | 'auth.permission_changed'
  | 'project.created' | 'project.member_added' | 'project.member_removed' | 'project.settings_updated'
  | 'testcase.created' | 'testcase.updated' | 'testcase.deleted'
  | 'testrun.started' | 'testrun.completed' | 'testrun.failed'
  | 'system.error' | 'system.cache_invalidation';
```

**Event envelope:**
```json
{
  "id": "uuid",
  "event": "project.created",
  "service": "project-service",
  "timestamp": "2026-05-17T10:00:00Z",
  "requestId": "uuid",
  "userId": 42,
  "projectId": 7,
  "metadata": {},
  "version": 1
}
```

Consumer groups ensure at-least-once delivery with acknowledgement.

---

## Frontend Architecture

**Tech stack:** React 19, Vite 6, Tailwind CSS 4, React Router 7, TanStack Query 5, Zustand 5, React Hook Form + Zod, Framer Motion, Lucide React

**Feature-based module structure:**

```
src/
├── app/
│   ├── App.tsx              # Root with lazy-loaded routes
│   └── routes/index.tsx     # Route configuration
├── features/
│   ├── auth/                # Login, logout, session
│   ├── project/             # Project list, create, edit, delete
│   ├── testcase/            # Suite, section, test case management
│   ├── testruns/            # Test run execution, result tracking
│   ├── dashboard/           # Activity feed and summary
│   └── admin/               # Project config, roles, members, audit log
└── shared/
    ├── components/          # Button, Modal, FormEngine, Loading, ErrorBoundary
    ├── api/                 # Axios client, interceptors
    ├── forms/               # FormEngine, field type registry
    ├── hooks/               # Custom React hooks
    └── stores/              # Zustand global stores
```

**Patterns:**
- Max 400 lines per component file
- TanStack Query for all server state — cache key `['testruns', 'list']` for run lists
- Zustand for client-only global state
- React Hook Form + Zod for all form validation
- Code splitting via React.lazy on all routes
- Optimistic updates on all mutations: patch cache in `onMutate`, rollback in `onError`, invalidate in `onSettled`

See [design-system.md](design-system.md) for UI conventions and performance guidelines.

---

## Resilience Patterns

| Pattern | Implementation |
|---------|---------------|
| Circuit Breakers | Half-open recovery, configurable thresholds, in `packages/shared/src/caching` |
| Cache Stampede Protection | Jittered TTL + single-flight (only one in-flight request per cache key) |
| Idempotency | Redis-backed `requireIdempotency(serviceName, redis)` in `packages/shared`; key scoped per user/service/key; 2xx responses cached 24 h; 5xx releases key for retry; 409 on key reuse with different payload |
| Optimistic Concurrency | `version` column + CAS on all mutable entities; `updateMany WHERE version=N`; 409 `VERSION_CONFLICT` on mismatch |
| Fail-Closed Dependencies | TestRun creation calls TestCase service and throws on any network error — no run is created with placeholder data; returns 503 to the caller |
| Shadow Reads | IAM checks silently compare legacy vs new data source before full cutover |
| Auto-Healing | `iam-consistency-job` in Worker detects and repairs IAM mismatches |
| Request Timeouts | Gateway proxy timeout: 30 s (configurable via `GATEWAY_PROXY_TIMEOUT_MS`); internal batch call timeout: 10 s |
| Health Probes | Liveness + readiness on every service; upstream probing from Gateway |
| Optimistic UI | Frontend patches React Query cache synchronously on user action; reconciles with server in background; rolls back on error |

---

## Infrastructure

### Docker Compose (Development / Single Node)

```
Gateway:3000  ──▶  Auth (internal)
                   Project (internal)
                   TestCase (internal)
                   TestRun (internal)
                   Worker (internal)
                   Redis:6379
                   Frontend:5173
                   Prometheus:9090
                   Grafana → host:3001
```

### Kubernetes (Production Scale)

- 2 replicas per service with rolling updates
- 256 Mi memory / 300 m CPU per replica
- Liveness + readiness probes wired to `/health/live` and `/health/ready`
- Persistent volumes for SQLite in staging; RDS for production

### AWS / Terraform

- **VPC** with public/private subnets across 2 availability zones
- **ECS Fargate** for stateless container orchestration
- **RDS PostgreSQL** multi-AZ with automated backups
- **Elasticache Redis** for BullMQ, EventBus, and idempotency key storage
- **ALB** with per-service target groups
- **CloudWatch** for log aggregation
- State stored in S3 backend
