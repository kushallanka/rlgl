#!/bin/sh
# LocalStack-mode entrypoint for Prisma services.
# Swaps the SQLite schema for the PostgreSQL schema, regenerates the Prisma
# client, pushes the schema to PostgreSQL, then starts the service.
#
# SERVICE env var is set by the Dockerfile (ARG SERVICE -> ENV SERVICE).

set -e

PG_SCHEMA="/app/services/${SERVICE}/prisma/schema.postgresql.prisma"
SCHEMA="/app/services/${SERVICE}/prisma/schema.prisma"

if [ ! -f "$PG_SCHEMA" ]; then
  echo "[localstack-entrypoint] No PostgreSQL schema found for ${SERVICE}, falling back to /start.sh"
  exec /start.sh
fi

echo "[localstack-entrypoint] Switching ${SERVICE} to PostgreSQL schema..."
cp "$PG_SCHEMA" "$SCHEMA"

cd "/app/services/${SERVICE}"

echo "[localstack-entrypoint] Regenerating Prisma client for PostgreSQL..."
npx prisma generate

echo "[localstack-entrypoint] Pushing schema to PostgreSQL (prisma db push)..."
# db push is idempotent and avoids SQLite migration history incompatibility
npx prisma db push --accept-data-loss

# Seed if a seed script exists (auth service provides default users)
if [ -f "prisma/seed.mjs" ]; then
  echo "[localstack-entrypoint] Seeding ${SERVICE} database..."
  node --import tsx prisma/seed.mjs
fi

echo "[localstack-entrypoint] Starting ${SERVICE}..."
exec node --import tsx src/main.ts
