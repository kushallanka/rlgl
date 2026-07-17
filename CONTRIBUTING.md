# Contributing to RLGL

Thanks for your interest in contributing to RedLight GreenLight (RLGL).

## Getting started

```bash
npm install
cp .env.example .env        # set JWT_SECRET
npm run prisma:generate
for svc in auth project testcase testrun; do (cd services/$svc && npx prisma migrate deploy); done
npm run dev
```

See the [README](README.md) for the full quickstart and [docs/](docs/) for
architecture, deployment, and observability guides.

## Before opening a PR

```bash
npm run validate:fast   # typecheck + architecture rules + invariant/contract tests (< 60s)
```

For the full gate (matches CI):

```bash
npm run validate
```

| Command | What it checks |
|---|---|
| `npm run typecheck` | Root TypeScript project |
| `npm run typecheck:services` | Each service's own `tsconfig.json` |
| `npm run lint` | Biome (formatting + lint rules) |
| `npm run lint:fix` | Auto-fix safe Biome findings |
| `npm run lint:arch` | Dependency-cruiser boundary rules |
| `npm test` | Vitest unit/contract/invariant suites |
| `npm run test:e2e` | Playwright end-to-end |

Install the pre-push hook once so `validate:fast` runs automatically:

```bash
npm run hooks:install
```

See [docs/engineering-workflow.md](docs/engineering-workflow.md) for the full
tier model (local → PR gates → nightly governance).

## Pull requests

- Keep PRs focused — one logical change per PR.
- Add or update tests for behavior changes.
- `.github/workflows/pr-validation.yml` must pass before merge.
- Migrations are expand-only (no drops/renames) for zero-downtime deploys — see
  [docs/deployment.md](docs/deployment.md#database-migrations).

## Reporting bugs / requesting features

Open a GitHub issue with steps to reproduce (for bugs) or the problem you're
trying to solve (for features).

## Code of Conduct

This project follows the [Code of Conduct](CODE_OF_CONDUCT.md).
