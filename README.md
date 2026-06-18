# RedLight GreenLight — Enterprise Test Management SaaS

RedLight GreenLight (RLGL) is a high-performance, multi-tenant SaaS platform for test repository management and test execution tracking. Built to Elite-Tier Production Standards with a resilient microservice architecture on a high-governance monorepo.

---

## Tech Stack

**Backend** — Node.js 24, TypeScript 5.8, Express.js, Prisma 5, BullMQ 5, ioredis, Pino, Zod, Helmet  
**Frontend** — React 19, Vite 6, Tailwind CSS 4, React Router 7, TanStack Query 5, Zustand 5, React Hook Form, Framer Motion  
**Infrastructure** — Docker / Docker Compose (self-hosted), Redis, optional Cloudflare Tunnel for public exposure  
**Observability** — Prometheus, Grafana, Redis Streams EventBus, structured JSON logging, distributed tracing headers

---

## System Architecture

RLGL uses a **Modular Monorepo** via `npm workspaces` for strict dependency governance across 6 microservices and 2 shared packages.

### Services

| Service | Port (local) | Responsibility |
|---------|-------------|----------------|
| `services/gateway` | 3000 | Central API Gateway — JWT verification, rate limiting, reverse proxy under `/api/v1`, injects `x-user-id` / `x-request-id` / `x-project-id` headers |
| `services/auth` | 3001 | IAM — identity, sessions, RBAC, refresh token rotation, project-scoped roles and permissions |
| `services/project` | 3002 | Project CRUD, project config (types, priorities, custom fields), member management, audit log |
| `services/testcase` | 3003 | Test suites, sections, and test cases — full CRUD with hierarchical organization |
| `services/testrun` | 3004 | Test execution — runs, result tracking (Untested / Passed / Failed / Blocked) |
| `services/worker` | internal | Background job processor — BullMQ queue, Redis Streams consumer |

### Shared Packages

| Package | Purpose |
|---------|---------|
| `packages/shared` | Resilience backbone: circuit breakers, cache stampede protection, Pino logger, Prometheus metrics, health checks, EventBus, request middleware |
| `packages/contracts` | Shared TypeScript types and interfaces across services |

### Request Flow

```
Browser (React / Vite dev proxy)
    │
    ▼
API Gateway :3000
    ├── Reads httpOnly accessToken cookie
    ├── Verifies JWT (JWT_SECRET)
    ├── Injects x-user-id, x-request-id, x-project-id
    └── Proxies to downstream service
         ├── /api/v1/auth/*       → Auth Service :3001
         ├── /api/v1/projects/*   → Project Service :3002
         ├── /api/v1/testcases/*  → TestCase Service :3003
         └── /api/v1/testruns/*   → TestRun Service :3004
                                             │
                                     EventBus (Redis Streams)
                                             │
                                      Worker Service
```

---

## Getting Started

### Prerequisites

- Node.js 24+
- Redis (or Docker Desktop)

### Local Development

```bash
# 1. Install all workspace dependencies
npm install

# 2. Copy environment variables
cp .env.example .env
# Edit .env — at minimum set JWT_SECRET

# 3. Generate Prisma clients for all services
npm run prisma:generate

# 4. Apply database migrations (per service, SQLite under ./data)
for svc in auth project testcase testrun; do
  (cd services/$svc && npx prisma migrate deploy)
done

# 5. Start all services + frontend (hot reload)
npm run dev
```

| Service | URL |
|---------|-----|
| Frontend | http://localhost:5173 |
| API Gateway | http://localhost:3000 |
| Auth | http://localhost:3001 |
| Project | http://localhost:3002 |
| TestCase | http://localhost:3003 |
| TestRun | http://localhost:3004 |

### Seed Demo Data

```bash
npm run seed
```

Default accounts created by the seed script are in `.env.seed.example`.

### Docker Compose (Full Stack)

Runs all services, Redis, Prometheus, Grafana, and the frontend in one command:

```bash
# Start everything
make docker-up

# Verify all services are healthy
make health

# Open monitoring dashboards
make monitoring

# View logs
make logs

# Stop
make docker-down
```

| Service | URL |
|---------|-----|
| Frontend | http://localhost:5173 |
| API Gateway | http://localhost:3000 |
| Grafana | http://localhost:3001 (admin / `$GRAFANA_ADMIN_PASSWORD`) |
| Prometheus | http://localhost:9090 |
| Redis | localhost:6379 |

> In Docker Compose the backend services are only accessible inside the Docker network. All API traffic goes through the Gateway on port 3000.

---

## Authentication & RBAC

1. User calls `POST /api/v1/auth/login` → receives an httpOnly `accessToken` cookie
2. Every subsequent request includes the cookie automatically
3. The Gateway verifies the JWT and sets `x-user-id` on the proxied request
4. Project-scoped permissions are checked via `GET /users/:userId/projects/:projectId/permissions` (Auth Service internal API)

**Permission actions:** `testcase.view`, `testcase.create`, `testcase.edit`, `testcase.delete`, `testrun.create`, `testrun.update`, `config.manage`, `project.manage`, `member.manage`

**IAM migration feature flags** (`.env`):
```
FEATURE_IAM_SHADOW_READ=true   # Silent shadow reads against legacy data for consistency verification
FEATURE_IAM_DUAL_READ=true     # Read from both old and new IAM sources
```

---

## Resilience & Performance

- **Circuit Breakers** — stateful breakers on all inter-service calls with half-open auto-recovery
- **Cache Stampede Protection** — jittered TTL + single-flight pattern
- **Shadow Reads & Fallback** — authorization checks include silent legacy reads before full IAM cutover
- **Auto-Healing Consistency** — `iam-consistency-job` background job audits and self-heals data mismatches
- **Idempotency Keys** — all mutating endpoints are idempotent by key
- **Request Timeouts** — configurable gateway proxy timeout (default 30 s)

---

## Project Structure

```
root/
├── packages/
│   ├── shared/          # Resilience, logging, config, middleware, metrics, events
│   └── contracts/       # Shared TypeScript types and interfaces
├── services/
│   ├── gateway/         # API Gateway and proxy logic
│   ├── auth/            # Identity, sessions, RBAC (Clean Architecture)
│   ├── project/         # Project management and config (Layered DI)
│   ├── testcase/        # Test case, suite, and section management
│   ├── testrun/         # Test execution and result tracking
│   └── worker/          # Background job processor (BullMQ)
├── src/                 # React 19 frontend (feature-based modules)
│   ├── features/        # auth, project, testcase, testruns, dashboard, admin
│   └── shared/          # components, hooks, API client, Zustand stores
├── scripts/             # Health check, backup, restore, load test
├── grafana/             # Dashboard provisioning
├── docs/                # Extended documentation
├── docker-compose.yml   # Full self-hosted stack (services, Redis, Prometheus, Grafana)
└── .github/workflows/   # CI pipelines (validation, e2e, performance, nightly governance)
```

---

## Deployment (Self-Hosted)

RLGL runs anywhere Docker Compose runs — no cloud lock-in. The full stack
(services, Redis, Prometheus, Grafana, frontend) is defined in
[`docker-compose.yml`](docker-compose.yml).

```bash
cp .env.example .env        # set JWT_SECRET (and GRAFANA_ADMIN_PASSWORD)
make docker-up              # build + start the full stack
make health                 # verify every service is healthy
```

Databases are per-service **SQLite** files under `./data`, bind-mounted into the
containers. Back them up with [`scripts/backup-databases.sh`](scripts/backup-databases.sh).

### Public exposure (optional)

A [Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/)
service (`cloudflared`) is included in the Compose stack — set `TUNNEL_TOKEN` to
expose the gateway without opening inbound ports.

### CI (GitHub Actions)

| Workflow | Trigger | Action |
|----------|---------|--------|
| `pr-validation.yml` | push / PR | Typecheck, Semgrep, architecture rules, unit/contract/invariant tests, migration safety, security audit |
| `e2e.yml` | push / PR | Playwright end-to-end + permission flows |
| `performance.yml` | manual / schedule | k6 load tests, bundle analysis, Lighthouse |
| `nightly-governance.yml` | schedule | Architecture drift, dead-code, dependency drift, engineering-health report |

---

## Database Migrations

Each service has its own Prisma schema. Run migrations per service:

```bash
cd services/auth && npx prisma migrate dev
cd services/project && npx prisma migrate dev
cd services/testcase && npx prisma migrate dev
cd services/testrun && npx prisma migrate dev
```

Databases are per-service **SQLite** files (set via each service's `DATABASE_URL`), stored under `./data` and bind-mounted into the containers under Docker Compose.

---

## Maintenance & Ops

```bash
# Backup all SQLite databases
./scripts/backup-databases.sh

# Restore a specific service database
./scripts/restore-database.sh -s auth -f backups/auth_20260101_120000.db.gz

# Run load test
node ./scripts/load-test.js

# Check all service health
./scripts/health-check.sh
```

---

## Documentation

| Doc | Description |
|-----|-------------|
| [Architecture](docs/architecture.md) | Complete system design, service breakdown, DB schemas, RBAC, event system |
| [Deployment](docs/deployment.md) | Docker Compose self-hosting, backup/restore, troubleshooting |
| [Observability](docs/observability.md) | Metrics, health checks, distributed tracing, Grafana, alerting, SLOs |
| [Integration Guide](docs/integration.md) | Reference for service observability patterns and EventBus usage |

---

**Status:** Production Refactored (v2.0.0) | **Last Audit:** May 2026
