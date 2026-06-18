# RLGL Production Deployment Guide

Complete guide for deploying the RLGL Test Management Platform.

---

## Prerequisites

- **Node.js** 24+ (for local development)
- **Docker Desktop** with Docker Compose 2.20+ (for containerized stack)
- **WSL 2** with Ubuntu recommended on Windows
- 4 GB+ RAM available
- Ports **3000**, **3001**, **5173**, **6379**, **9090** free on your host
- **Redis 7+** — required for idempotency key storage and BullMQ. In Docker Compose, Redis is included automatically. For standalone local dev, start Redis separately (e.g. `docker run -p 6379:6379 redis:7-alpine`) and set `REDIS_URL=redis://localhost:6379` in `.env`. Without Redis the services still start, but idempotency deduplication and rate limiting are disabled.

---

## Local Development

The fastest way to get running without Docker:

```bash
# 1. Install all workspace dependencies
npm install

# 2. Copy and configure environment variables
cp .env.example .env
# Edit .env — set JWT_SECRET at minimum

# 3. Generate Prisma clients
npm run prisma:generate

# 4. Apply database migrations (creates SQLite files in data/)
for svc in auth project testcase testrun; do
  (cd services/$svc && npx prisma migrate deploy)
done

# 5. Start all services + frontend with hot reload
npm run dev

# 6. (Optional) Seed demo data
npm run seed
```

**Local service URLs:**

| Service | URL |
|---------|-----|
| Frontend (Vite HMR) | http://localhost:5173 |
| API Gateway | http://localhost:3000 |
| Auth | http://localhost:3001 |
| Project | http://localhost:3002 |
| TestCase | http://localhost:3003 |
| TestRun | http://localhost:3004 |

---

## Docker Compose (Single Node / Full Stack)

Runs every service plus the full observability stack with one command.

```bash
# 1. Copy environment variables
cp .env.example .env
# Edit .env — set JWT_SECRET, GRAFANA_ADMIN_PASSWORD, etc.

# 2. Start all services with monitoring
make docker-up

# 3. Verify all services are healthy
make health

# 4. Open monitoring dashboards
make monitoring
```

**Host-exposed ports in Docker Compose:**

| Service | Host Port | Notes |
|---------|-----------|-------|
| API Gateway | 3000 | All API traffic goes through here |
| Grafana | 3001 | Monitoring UI — admin / `$GRAFANA_ADMIN_PASSWORD` |
| Frontend | 5173 | React application |
| Redis | 6379 | Direct access for debugging |
| Prometheus | 9090 | Metrics collection UI |

> Backend services (Auth :3001, Project :3002, TestCase :3003, TestRun :3004, Worker) are **only accessible inside the Docker network** — all API calls must go through the Gateway on port 3000.

```bash
# View logs for a specific service
docker-compose logs -f auth-service
make logs              # All services

# Stop everything
make docker-down

# Rebuild images after code changes
docker-compose up --build
```

---

## Scaling

RLGL is a single-node, self-hosted stack. To handle more load, scale vertically
(more CPU/RAM on the host) or run multiple gateway replicas behind your own
reverse proxy. The services are stateless except for their SQLite databases, so
horizontal scaling of the data services would require migrating to a networked
database first (not currently supported — see the OSS roadmap).

---

## Continuous Integration

CI runs on GitHub Actions — see the workflow table in the
[README](../README.md#ci-github-actions). There is **no cloud deploy pipeline**:
RLGL is self-hosted via Docker Compose (above).

---

## Database Migrations

Each service manages its own schema via Prisma.

```bash
# Development (creates/updates SQLite)
cd services/auth    && npx prisma migrate dev
cd services/project && npx prisma migrate dev
cd services/testcase && npx prisma migrate dev
cd services/testrun  && npx prisma migrate dev

# Production (applies pending migrations)
cd services/auth && npx prisma migrate deploy

# Run via Makefile shortcut
make migrate
```

### Pending migrations (apply these if upgrading from a pre-2026-06-12 database)

| Service | Migration | What it adds |
|---------|-----------|--------------|
| `services/testcase` | `20260612000000_add_optimistic_concurrency` | `version` column on Suite, Section, TestCase |
| `services/testrun` | `0003_execution_snapshots_versioning` | `version` on TestRun and TestResult; full snapshot columns on TestResult (`title`, `preconditions`, `steps`, `expectedResult`, `priority`, `type`, `snapshottedAt`); `requestHash`/`expiresAt` on IdempotencyKey; lookup indexes |

Both are **expand-only** migrations (no drops, no renames) — safe for zero-downtime deploys. Run them while the old service version is still serving traffic.

```bash
cd services/testcase && npx prisma migrate deploy
cd services/testrun  && npx prisma migrate deploy
```

---

## Backup & Recovery

### Backup

```bash
# Backup all SQLite databases (default retention: 30 days)
./scripts/backup-databases.sh

# Custom retention
RETENTION_DAYS=7 ./scripts/backup-databases.sh
```

### Restore

```bash
# List available backups
ls -la backups/*.db.gz

# Restore a service database
./scripts/restore-database.sh -s auth -f backups/auth_20260101_120000.db.gz

# Restore into a running Docker container
./scripts/restore-database.sh -s auth -f backups/auth_20260101_120000.db.gz -c
```

---

## Security

- **JWT** — httpOnly cookies, not accessible via JavaScript
- **Helmet** — security headers on all services
- **CORS** — configured per environment
- **Bcryptjs** — strong password hashing
- **Rate limiting** — `express-rate-limit` on sensitive routes
- **Prisma ORM** — parameterized queries prevent SQL injection
- **Secrets** — keep credentials in `.env` / Docker environment variables; never commit `.env` to Git

---

## Observability

All services expose:

```
GET /health         Full health with dependency checks (DB, Redis)
GET /health/live    Liveness probe (process is up)
GET /health/ready   Readiness probe (dependencies ready)
GET /metrics        Prometheus text format
GET /metrics/json   JSON format
```

See [observability.md](observability.md) for full monitoring reference.

---

## Troubleshooting

### Service not starting

```bash
# Check logs
docker-compose logs -f auth-service

# Check health directly
curl http://localhost:3000/health

# Run the health check script
./scripts/health-check.sh
```

### Database issues

```bash
# Reset everything (WARNING: deletes all data)
docker-compose down -v
make docker-up
make migrate

# Restore from latest backup
./scripts/restore-database.sh -s auth -f backups/auth_*.db.gz -c
```

### Auth service 401 / token errors

- Verify `JWT_SECRET` is identical in gateway and auth service `.env` / Docker env
- Confirm the Gateway is running and routing to auth (`docker-compose logs gateway`)
- Check that the `accessToken` cookie is being set (browser DevTools → Application → Cookies)

### Services returning 404 on project/auth calls

- Confirm `AUTH_SERVICE_URL` and `PROJECT_SERVICE_URL` match the running service addresses
- In Docker Compose these must use container names, e.g. `http://auth-service:3001`
- In local dev they should use `http://localhost:3001`

### Performance issues

```bash
# Check resource consumption
docker stats

# View slow requests in structured logs
docker-compose logs -f gateway | grep '"duration"'
```

### Grafana login

```bash
# Reset admin password
docker-compose exec grafana grafana-cli admin reset-admin-password newpassword
```

---

## Maintenance

### Update to latest code

```bash
git pull origin main
make docker-down
make docker-up
make migrate
```

### Log aggregation

Logs are structured JSON (Pino). Ship to any aggregator:
- **Grafana Loki** (recommended for existing Grafana setup)
- OpenSearch / ELK Stack
- Datadog
- Splunk

### Clean up old Docker resources

```bash
docker system prune -a

# Remove backups older than 30 days
find backups/ -name "*.db.gz" -mtime +30 -delete
```

---

## Support

- Issues: create a GitHub issue
- Health check: `./scripts/health-check.sh`
- Monitoring: see [observability.md](observability.md)
- Architecture: see [architecture.md](architecture.md)
