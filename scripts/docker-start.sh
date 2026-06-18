#!/bin/sh
set -e

# SERVICE is injected as an ENV var by the Dockerfile (ARG SERVICE → ENV SERVICE).
# Runs docker-entrypoint.sh when present (Prisma services: migrate + start),
# falls back to tsx for stateless services (gateway, worker).

ENTRYPOINT="/app/services/${SERVICE}/docker-entrypoint.sh"

if [ -f "$ENTRYPOINT" ]; then
  chmod +x "$ENTRYPOINT"
  exec "$ENTRYPOINT"
elif [ -f "/app/services/${SERVICE}/src/main.ts" ]; then
  exec node --import tsx "/app/services/${SERVICE}/src/main.ts"
else
  exec node --import tsx "/app/services/${SERVICE}/index.ts"
fi
