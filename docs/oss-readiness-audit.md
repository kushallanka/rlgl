# OSS Readiness Audit — 2026-06-13

Full-repository audit for the OSS self-hosting transformation. Builds on the
[engineering audit of 2026-06-12](engineering-audit.md), which already removed
dead workflows (`ci.yml`, `deploy.yml`), dead service files, and unused
dependencies.

Scope: folder structure, packages, dependencies, scripts, Docker, CI, configs,
governance tooling, observability, onboarding friction.

---

## 1. Critical blockers (OSS cannot ship without these)

| # | Finding | Detail |
|---|---------|--------|
| C1 | **No git repository** | The repo has never been under version control. Every GitHub Actions workflow in `.github/workflows/` has therefore *never run*. Deletions are unrecoverable until `git init` + baseline commit. Fixed in this pass. |
| C2 | **No LICENSE file** | An OSS project without a license is legally "all rights reserved" — nobody can use, fork, or contribute. |
| C3 | **Root package is `react-example@0.0.0`** | The project identity in `package.json` is leftover Vite scaffolding. Must be renamed (e.g. `rlgl`). |
| C4 | **Runtime data lives inside the repo** | `data/` (67 MB, mostly Grafana's internal state incl. ~21k vendored plugin JS files) and `services/data/` (SQLite files) sit in the working tree. They pollute every scanner — the code knowledge graph is 85% Grafana plugin internals. Gitignored, but should move out of tree or be documented as volume mounts only. |

## 2. Cloud-vendor lock-in report (remove / make optional)

Per the mandate: PostgreSQL + Redis + Docker Compose + Node only. No
Kubernetes, no Terraform, no AWS-only tooling.

| Artifact | Status | Action |
|----------|--------|--------|
| `k8s/` (6 manifests) | Referenced by zero workflows (the workflow that used it was deleted 2026-06-12). Never deployed (no git → no CI ever ran). | **Remove** |
| `terraform/` (VPC/ECS/ALB/RDS, 9 files) | Only referenced by `deploy-staging.yml`. Never applied from CI. | **Remove** |
| `.github/workflows/build.yml` | Pushes images to Amazon ECR; requires AWS secrets that were never configured. | **Remove** |
| `.github/workflows/deploy-staging.yml` | Terraform + ECS deploy. | **Remove** |
| `.github/workflows/deploy-production.yml` | ECS blue/green deploy. | **Remove** |
| `localstack/` + `.env.localstack` | AWS emulation for S3 features. `docker-compose.localstack.yml` was already deleted (2026-06-12); compose now warns about the orphaned `localstack` container. | **Remove** (reintroduce as optional S3-compatible profile, e.g. MinIO, if/when file attachments ship) |

Self-hosted deployment story becomes: `docker compose up` (already works —
Postgres, Redis, 5 services, gateway, frontend, Prometheus, Grafana).

## 3. Duplicate / overlapping tooling report

| Overlap | Detail | Recommendation |
|---------|--------|----------------|
| Entry points: `Makefile` (163 lines) vs `docker-start.sh` vs npm scripts | Three ways to start the stack. | Keep npm scripts + `docker compose up`; fold Makefile targets into npm scripts or delete. |
| Seeders: `seed.ts` (root), `seed-testcase.mjs` (root), `services/auth/prisma/seed.mjs` | Three seed entry points, two at repo root. | Consolidate to one `npm run seed`. |
| Env files ×7 | `.env`, `.env.example`, `.env.local`, `.env.localstack`, `.env.production`, `.env.staging`, `.env.seed.example` | Keep `.env` + `.env.example` (+ `.env.seed.example` if needed). `.env.production`/`.env.staging` belonged to the AWS path; `.env.localstack` goes with localstack. |
| Agent configs: `CLAUDE.md`, `AGENTS.md`, `.opencode.json`, `.mcp.json`, `QUICK_REFERENCE.md` | Multiple AI-assistant config surfaces at root. | Fine to keep, but consider consolidating docs pointers into one. |
| `lint` script runs `tsc --noEmit` | Misnamed — it's a typecheck, and **there is no actual linter (no ESLint/Biome)**. | Add a real linter (Biome recommended: single fast binary, OSS-friendly); rename scripts honestly (`typecheck`). |

## 4. Dead code / stale artifact report

- `dist/`, `playwright-report/`, `test-results/`, `arch-report.html`, `arch-graph.svg` — build/test artifacts at root (now gitignored).
- `.idea/` — IDE state (now gitignored).
- Existing automation available: `npm run report:deadcode` (ts-prune) and `npm run report:deps` (depcheck) — wire these into nightly governance rather than running ad hoc.
- Known quirk to fix: `loadConfig` DB-path bug (services resolve SQLite path inconsistently depending on CWD).
- Knowledge graph is stale (last build 2026-05-30) and polluted by `data/` — rebuild after adding `data/` to `.code-review-graphignore`.

## 5. Over-engineering / complexity report

| Area | Observation | Verdict |
|------|-------------|---------|
| `packages/shared` (13 subsystems: caching, config, errors, events, health, logger, metrics, middleware, pagination, redis, resilience, swagger) | Large surface for a 5-service platform. `pagination` (cursor envelope) is known to be only partially wired. `resilience` needs a usage check. | Audit per-subsystem usage; prune or finish wiring. Keep logger/metrics/errors/middleware/health. |
| CI: `pr-validation.yml` (464 lines) + `nightly-governance.yml` (434 lines) | Heavy, but already roughly tiered (PR = core, nightly = advanced). | Slim PR workflow to: typecheck, lint, contracts, invariants, architecture, semgrep, Playwright smoke. Keep MemLab/k6/Lighthouse in nightly (opt-in tier). Matches the tiered-governance target. |
| Microservices (6 services + gateway) for a self-hosted test-management app | Real complexity cost for self-hosters (7 Node processes). | Keep boundaries (mandate preserves them) but ensure single-command compose startup stays bulletproof. Do **not** add Nx/Kafka/mesh. |
| SQLite (`better-sqlite3`) per service in dev, Postgres only in compose | Two database stories. Production self-hosting requires the Postgres path to be the default and tested. | Migrate dev default to Postgres (compose already provides it); SQLite optional for zero-dep quickstart at most. |
| Frontend lives at repo root (`src/`, `index.html`, `vite.config.ts`) while backend is in workspaces | Confusing monorepo shape for contributors. | Defer moving to `apps/web` (high churn); document layout clearly in README first. |

## 6. Governance tooling inventory vs. mandate

| Tool | Mandate | Present? | Note |
|------|---------|----------|------|
| Zod | must keep | ✅ | v4, used in contracts + validators |
| Playwright | must keep | ✅ | e2e + permissions suites |
| Semgrep | must keep | ✅ | `.semgrep.yml` + `scripts/run-semgrep.mjs` |
| dependency-cruiser | must keep | ✅ | `.dependency-cruiser.cjs`, `validate:architecture` |
| Prisma | must keep | ✅ | v5, per-service schemas |
| Supertest | must keep | ✅ | contract tests |
| Nx | must keep | ❌ absent | npm workspaces only. **Recommendation: do NOT add Nx** — at 9 packages it is enterprise overhead the mandate elsewhere forbids. Revisit if the workspace count doubles. |
| Sentry | must keep | ❌ absent | Roadmap: optional `SENTRY_DSN` env hook, off by default. |
| OpenTelemetry | must keep | ❌ absent | Roadmap: lightweight OTel SDK in `packages/shared`, console/OTLP exporter optional. Custom `MetricsCollector` + Prometheus already cover metrics. |
| MemLab | conditional | ✅ working (2026-06-13) | Advanced tier only (nightly). Requires Linux/WSL2. |
| k6 | conditional | ✅ | Advanced tier only. |
| Clinic.js | conditional | ❌ absent | Don't add. |
| pgBadger | conditional | ❌ absent | Don't add until Postgres-by-default lands. |
| ESLint/linter | core tier requires "lint" | ❌ absent | Biggest governance gap — `lint` is typecheck-only. |

## 7. OSS onboarding friction report

Target flow: `git clone && <pm> install && docker compose up && npm run dev`.

Current friction, in order of severity:

1. No git repo → no clone, no history, no PRs (C1).
2. No LICENSE, no CONTRIBUTING.md, no CODE_OF_CONDUCT.md.
3. README/docs don't describe the actual quickstart; no self-hosting guide, no troubleshooting doc (docs/ has 9 good internal docs but they're architecture-oriented).
4. `react-example` package name, version 0.0.0.
5. Seven env files with no explanation of which one matters.
6. Node `>=24` engine requirement is aggressive for contributors (Node 22 LTS is the common floor — verify whether 24-only features are actually used).
7. npm vs pnpm: mandate's example uses pnpm; repo is npm workspaces with a committed `package-lock.json`. **Recommendation: stay on npm** (zero migration risk, works today); revisit only if install times hurt.
8. MemLab cannot run on native Windows (POSIX-shell dependency) — documented; runs in WSL2/CI only.

---

## Phased remediation plan

- **Phase 0 — safety + de-cloud (this pass)**: `.gitignore` hardening, `git init` + baseline commit, remove `k8s/`, `terraform/`, AWS workflows (`build.yml`, `deploy-staging.yml`, `deploy-production.yml`), `localstack/` + `.env.localstack`.
- **Phase 1 — identity & onboarding**: rename package to `rlgl`, add LICENSE + CONTRIBUTING, rewrite README quickstart, consolidate env files and seeders, self-hosting guide.
- **Phase 2 — governance tiers**: add Biome (or ESLint), rename `lint`→`typecheck`, slim `pr-validation.yml` to the core tier, keep nightly as advanced tier, wire `report:deadcode`/`report:deps` into nightly.
- **Phase 3 — data layer**: Postgres as dev default (compose), fix `loadConfig` DB-path bug, prune `packages/shared` unused subsystems, finish or remove cursor pagination.
- **Phase 4 — polish**: frontend performance pass (React Scan, virtualization audit), optional OTel/Sentry hooks, doc set completion (troubleshooting, migration policy, CI guide).

Open decisions intentionally deferred to the maintainer: pnpm migration (recommend no), Nx adoption (recommend no), moving frontend to `apps/web` (recommend later), license choice (MIT vs Apache-2.0).
