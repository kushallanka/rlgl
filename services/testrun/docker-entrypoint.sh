#!/bin/sh
set -e

mkdir -p /app/data/testrun

if [ -f /app/data/testrun/testrun.db ]; then
    echo "[Entrypoint] Database found: $(ls -lh /app/data/testrun/testrun.db | awk '{print $5}')"
else
    echo "[Entrypoint] WARNING: No existing database found - will create new one"
fi

cd /app/services/testrun
echo "[Entrypoint] Running database migrations for testrun service..."
npx prisma migrate deploy

echo "[Entrypoint] Database after migrations: $(ls -lh /app/data/testrun/testrun.db 2>/dev/null | awk '{print $5}' || echo 'NOT FOUND')"

echo "[Entrypoint] Validating hierarchical data consistency..."
INCONSISTENT_COUNT=$(npx prisma db execute --stdin 2>/dev/null <<EOF | grep -o '[0-9]*' | tail -1
SELECT COUNT(*) FROM testrun_hierarchy_check WHERE consistency_status = 'INCONSISTENT' AND is_deleted IS NULL;
EOF
)
INCONSISTENT_COUNT=${INCONSISTENT_COUNT:-0}

if [ "$INCONSISTENT_COUNT" -gt 0 ]; then
    echo "[Entrypoint] WARNING: Found $INCONSISTENT_COUNT inconsistent test run relationships"
    echo "[Entrypoint] Run the following query to see details:"
    echo "  SELECT * FROM testrun_hierarchy_check WHERE consistency_status = 'INCONSISTENT' AND is_deleted IS NULL;"
else
    echo "[Entrypoint] TestRun hierarchy consistency validated successfully"
fi

exec node --import tsx src/main.ts
