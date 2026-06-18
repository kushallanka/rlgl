# RLGL Observability & Monitoring Guide

Production-grade observability stack for the RLGL Test Management Platform.

---

## Stack Overview

| Component | Purpose | URL (Docker Compose) |
|-----------|---------|----------------------|
| **Prometheus** | Metrics scraping, storage, alerting | http://localhost:9090 |
| **Grafana** | Visualization dashboards | http://localhost:3001 |
| **Health Endpoints** | Service health and readiness | `GET /health`, `/health/live`, `/health/ready` |
| **Metrics Endpoints** | Prometheus + JSON formats | `GET /metrics`, `/metrics/json` |
| **EventBus** | Event-driven communication | Redis Streams |
| **Pino Logger** | Structured JSON logs | stdout / aggregator |
| **Request Tracing** | Distributed correlation headers | `x-request-id` |

---

## Quick Start

```bash
# Start full stack including monitoring
make docker-up

# Check all service health
make health

# Open Grafana and Prometheus
make monitoring
```

In local development, each service exposes its `/metrics` and `/health` endpoints directly:
- Gateway metrics: http://localhost:3000/metrics
- Auth metrics: http://localhost:3001/metrics
- Project metrics: http://localhost:3002/metrics
- TestCase metrics: http://localhost:3003/metrics
- TestRun metrics: http://localhost:3004/metrics

---

## Health Checks

Every service exposes three health endpoints:

```bash
# Full health — checks DB connectivity and Redis
curl http://localhost:3000/health

# Liveness — is the process alive?
curl http://localhost:3000/health/live

# Readiness — ready to accept traffic?
curl http://localhost:3000/health/ready
```

Example healthy response:
```json
{
  "status": "healthy",
  "service": "gateway",
  "timestamp": "2026-05-17T10:00:00.000Z",
  "dependencies": {
    "redis": "healthy",
    "upstream_auth": "healthy"
  }
}
```

Use `/health/live` for liveness probes and `/health/ready` for readiness probes (e.g. from a load balancer, container orchestrator, or uptime monitor).

---

## Metrics (Prometheus Format)

### Available Metrics

| Metric | Type | Description |
|--------|------|-------------|
| `http_requests_total` | Counter | Total request count, labelled by method, path, status |
| `http_errors_total` | Counter | Error count, labelled by method, path, status |
| `http_request_duration_ms` | Histogram | Latency — p50, p95, p99 buckets |
| `http_requests_active` | Gauge | In-flight requests |
| `uptime_ms` | Gauge | Service uptime in milliseconds |

### Sample Queries

```bash
# Request rate (requests/sec over last 5 min)
rate(http_requests_total[5m])

# Error rate %
rate(http_errors_total[5m]) / rate(http_requests_total[5m]) * 100

# P95 latency
histogram_quantile(0.95, rate(http_request_duration_ms_bucket[5m]))

# Services that are down
up == 0
```

### Raw Metrics

```bash
# Pull metrics from any service directly (local dev)
curl http://localhost:3001/metrics | grep http_requests_total
curl http://localhost:3001/metrics | grep http_request_duration_ms
curl http://localhost:3001/metrics | grep uptime_ms

# JSON format
curl http://localhost:3001/metrics/json
```

---

## Grafana Dashboards

**URL:** http://localhost:3001 (Docker Compose)  
**Username:** `admin`  
**Password:** `admin` (or `$GRAFANA_ADMIN_PASSWORD` from `.env`)

> In Docker Compose, Grafana runs on host port 3001 (mapped from Grafana's internal port 3000). The Auth service is only accessible inside the Docker network.

### Default Dashboards

**RLGL Services Overview**
- Service status (UP / DOWN) per service
- Request rate (req/s)
- Error rate (%)
- P95 latency (ms)
- Active request count

Dashboards are provisioned automatically from `grafana/provisioning/` on startup.

### Grafana Troubleshooting

```bash
# Reset admin password
docker-compose exec grafana grafana-cli admin reset-admin-password newpassword

# Restart Grafana
docker-compose restart grafana
```

---

## Alerting (Prometheus)

Alert rules are in `monitoring/alert_rules.yml` and loaded by Prometheus automatically.

| Alert | Condition | Severity |
|-------|-----------|----------|
| `HighErrorRate` | Error rate > 0.1% for 5 min | warning |
| `ServiceDown` | Service unavailable for 1 min | critical |
| `HighLatency` | P95 latency > 500 ms for 5 min | warning |
| `High5xxRate` | 5xx errors > 0.1% for 5 min | critical |

```bash
# View active alerts
open http://localhost:9090/alerts

# View alert rules
open http://localhost:9090/rules

# Inspect alert rule file
cat monitoring/alert_rules.yml
```

---

## SLOs (Service Level Objectives)

| Metric | Target | PromQL |
|--------|--------|--------|
| Availability | 99.9% | `sum(up) / count(up)` |
| P95 Latency | < 500 ms | `histogram_quantile(0.95, rate(http_request_duration_ms_bucket[5m]))` |
| Error Rate | < 0.1% | `rate(http_errors_total[5m]) / rate(http_requests_total[5m])` |

---

## Request Tracing

Every request is assigned a unique `x-request-id` at the Gateway and propagated through all service calls. Use it to correlate logs across services.

**Headers injected by the Gateway:**

| Header | Description |
|--------|-------------|
| `x-request-id` | Unique UUID per request — propagates across all services |
| `x-user-id` | Authenticated user ID (from JWT) |
| `x-project-id` | Active project context (when present) |
| `x-request-sent-at` | ISO timestamp when the Gateway received the request |

**Headers set by the idempotency middleware:**

| Header | Description |
|--------|-------------|
| `x-idempotent-replay` | `true` when the response was served from the idempotency cache (not re-executed) |

**Trace a specific request:**

```bash
# Send a request with a known trace ID
curl -H "x-request-id: my-trace-123" http://localhost:3000/api/v1/projects

# In Grafana Loki or any log aggregator, filter by:
# requestId: my-trace-123
```

---

## Structured Logging (Pino)

All services emit JSON logs to stdout. Aggregate with Loki, ELK, Datadog, or Splunk.

**Log format:**
```json
{
  "level": "info",
  "time": "2026-05-17T10:30:45.123Z",
  "service": "auth-service",
  "requestId": "req-abc-123",
  "userId": 42,
  "message": "User login successful",
  "duration": 250,
  "statusCode": 200
}
```

**Log levels** — set via `LOG_LEVEL` environment variable:

| Level | Use case |
|-------|----------|
| `trace` | Most verbose, development only |
| `debug` | Detailed debug information |
| `info` | Production default |
| `warn` | Non-critical warnings |
| `error` | Recoverable errors |
| `fatal` | Unrecoverable — process will exit |

**Sampling** — reduce log volume in high-traffic environments:
```
LOG_SAMPLING_RATE=0.1   # Log 10% of requests
```

---

## Event System (Redis Streams)

All services publish domain events to Redis Streams. The Worker service consumes them.

### Published Events

| Event | Publisher | Trigger |
|-------|-----------|---------|
| `auth.login` | Auth | User logs in |
| `auth.logout` | Auth | User logs out |
| `auth.token_refresh` | Auth | Token refreshed |
| `auth.permission_changed` | Auth | User permissions updated |
| `project.created` | Project | New project created |
| `project.member_added` | Project | Member added to project |
| `project.member_removed` | Project | Member removed |
| `project.settings_updated` | Project | Project settings changed |
| `testcase.created` | TestCase | Test case created |
| `testcase.updated` | TestCase | Test case updated |
| `testcase.deleted` | TestCase | Test case deleted |
| `testrun.started` | TestRun | Test run started |
| `testrun.completed` | TestRun | All results submitted |
| `testrun.failed` | TestRun | Run marked failed |
| `system.error` | Any | Unhandled system error |
| `system.cache_invalidation` | Any | Cache cleared |

### Inspect Events in Redis

```bash
# List all event streams
redis-cli KEYS 'event:*'

# View recent auth login events
redis-cli XRANGE event:auth:auth.login - + COUNT 10

# View project creation events
redis-cli XRANGE event:project:project.created - + COUNT 10

# Check consumer group lag
redis-cli XINFO GROUPS event:project:project.created
```

---

## Prometheus Targets

Prometheus is configured to scrape all services. Verify in the Prometheus UI:

```bash
open http://localhost:9090/targets
```

If a service is missing:
1. Check the service is healthy: `curl http://localhost:<port>/health`
2. Check the metrics endpoint: `curl http://localhost:<port>/metrics`
3. Verify `monitoring/prometheus.yml` includes the service scrape config

---

## Troubleshooting

### Metrics not appearing in Prometheus

```bash
# Confirm Prometheus can reach the service
open http://localhost:9090/targets

# Pull metrics manually
curl http://localhost:3001/metrics
```

### Events not flowing

```bash
# Test Redis connectivity
redis-cli PING

# List active streams
redis-cli KEYS 'event:*'

# Check worker logs
docker-compose logs -f worker
```

### Grafana shows no data

```bash
# Confirm Prometheus is scraping successfully
open http://localhost:9090/targets

# Refresh Grafana datasource
open http://localhost:3001  # → Settings → Data Sources → Test
```

---

## Security Notes

- **Event payloads** may contain user IDs and project IDs. Apply filtering before shipping to long-term storage.
- **Log retention** — configure index rotation (7–30 days) to manage storage costs.
- **Prometheus retention** — 30 days by default (set in `docker-compose.yml` via `--storage.tsdb.retention.time`).
- **Grafana** — change the default admin password via `GRAFANA_ADMIN_PASSWORD` in `.env`.

---

## Additional Resources

- [Prometheus Query Language (PromQL)](https://prometheus.io/docs/prometheus/latest/querying/basics/)
- [Grafana Dashboard Documentation](https://grafana.com/docs/grafana/latest/dashboards/)
- [Redis Streams](https://redis.io/docs/data-types/streams/)
- [Pino Logger](https://getpino.io/)
