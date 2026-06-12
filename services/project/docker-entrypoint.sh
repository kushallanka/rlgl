#!/bin/sh
set -e

# Wait for volume to be ready
mkdir -p /app/data/project

# Run migrations
cd /app/services/project
npx prisma migrate deploy

# Start the application
exec node --import tsx src/main.ts
