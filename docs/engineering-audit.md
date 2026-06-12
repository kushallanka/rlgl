# Engineering Audit — 2026-06-12

## Overview

Audit of the RLGL test-management monorepo covering dead code, unused dependencies,
workflow efficiency, and frontend TypeScript strict-mode compliance.

## Deleted

| Artifact | Reason |
|---|---|
| `.github/workflows/ci.yml` | Broken scripts, duplicated `pr-validation.yml`, redundant ghcr push |
| `.github/workflows/deploy.yml` | Referenced `k8s/` manifests that don't exist |
| `docker-compose.localstack.yml` | Referenced nowhere |
| `services/queueHelper.ts` | In-memory queue, zero imports (BullMQ worker replaced) |
| `services/redisClient.ts` | No-op idempotency placeholder, zero imports (real one in `packages/shared`) |

## Removed dependencies

| Package | Reason |
|---|---|
| `hls.js` | Zero imports |
| `express-rate-limit` | Zero imports |
| `@hookform/resolvers` | Zero imports |
| `@asteasolutions/zod-to-openapi` | Zero imports |

## Kept (deliberate decisions)

### No ESLint
The `lint` script is `tsc --noEmit` only. `.semgrep.yml` (18 custom rules) covers
policy and security rules. Switching to ESLint flat config is a deliberate future
decision — the current setup is simpler and sufficient.

### No Nx
npm workspaces are retained. "Affected" run detection is impossible until the
workspace is a git repo. The composite action `.github/actions/setup-workspace`
handles the minimal caching needed.

### No husky
A plain `.git/hooks` pre-push installer at `scripts/install-git-hooks.mjs` replaces
husky. Run `npm run hooks:install` after `git init` to activate.

## Workflows restructured

- `build.yml` → renamed "Build & Release Images": ECR-only, push to main/develop.
  Redundant test job removed; actions bumped to v4; GHA cache added.
- `.github/actions/setup-workspace/action.yml` — composite action for setup-node +
  npm ci + prisma generate + shared build. Used by 5 pr-validation jobs and e2e.
- pr-validation: removed `npm ci` from migration-safety, openapi-diff, blast-radius,
  security-audit (git-diff jobs don't need it).
- pr-validation typecheck job now runs `npm run build`.

## Scripts added

`validate`, `validate:fast`, `validate:contracts`, `validate:architecture`,
`validate:semgrep`, `validate:performance`, `validate:memory`, `ci:local` (act),
`report:deadcode` (ts-prune), `report:deps` (depcheck), `hooks:install`.

Helper scripts: `scripts/run-semgrep.mjs` (Windows-safe), `scripts/install-git-hooks.mjs`.

## Frontend strict-mode fixes

Root `tsconfig.json` strict flags enabled. Fixed ~88 TypeScript errors across `src/`:

- **Unused imports/vars** (~30): removed dead imports and `_`-prefixed params
- **Possibly undefined gradient/info** (~15): added `?? arr[0]!` fallback
- **exactOptionalPropertyTypes** (~12): widened interface props to `?: T | undefined`
- **Optional chaining** (~6): `?.some(...)`, `?? []`, `?? ''`
- **Implicit any** (~2): annotated `(p: any, i: any)` map params
- **Type mismatches** (~5): fixed ref types, null handling, array casting

All 5 backend services typecheck at max strictness. 32/32 vitest tests green.
`npm run build` passes (vite).
