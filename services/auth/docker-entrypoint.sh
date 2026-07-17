#!/bin/sh
set -e

# Wait for volume to be ready
mkdir -p /app/data/auth

# Run migrations
cd /app/services/auth
npx prisma migrate deploy

# Seed default users (idempotent upserts — safe to run on every start).
# Non-fatal: a seeding hiccup must never crash-loop the auth service, or the
# gateway has nothing to proxy /auth/* to and every login times out (504).
if [ -f prisma/seed.mjs ]; then
  node --import tsx prisma/seed.mjs || echo "[Entrypoint] WARNING: user seeding failed (non-fatal) — continuing startup"
else
  echo "[Entrypoint] WARNING: prisma/seed.mjs not found — skipping default-user seeding"
fi

# Start the application
exec node --import tsx src/main.ts
