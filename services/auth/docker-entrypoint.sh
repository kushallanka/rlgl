#!/bin/sh
set -e

# Wait for volume to be ready
mkdir -p /app/data/auth

# Run migrations
cd /app/services/auth
npx prisma migrate deploy

# Seed default users (idempotent upserts — safe to run on every start)
node --import tsx prisma/seed.mjs

# Start the application
exec node --import tsx src/main.ts
