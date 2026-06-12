#!/bin/sh
set -e

mkdir -p /app/data/testcase

cd /app/services/testcase
npx prisma migrate deploy

echo "[Entrypoint] Validating hierarchical data consistency..."
INCONSISTENT_COUNT=$(npx prisma db execute --stdin 2>/dev/null <<EOF | grep -o '[0-9]*' | tail -1
SELECT COUNT(*) FROM hierarchy_consistency_check WHERE consistency_status = 'INCONSISTENT';
EOF
)
INCONSISTENT_COUNT=${INCONSISTENT_COUNT:-0}

if [ "$INCONSISTENT_COUNT" -gt 0 ]; then
    echo "[Entrypoint] WARNING: Found $INCONSISTENT_COUNT inconsistent hierarchical relationships"
    echo "[Entrypoint] Run the following query to see details:"
    echo "  SELECT * FROM hierarchy_consistency_check WHERE consistency_status = 'INCONSISTENT';"
else
    echo "[Entrypoint] Hierarchical data consistency validated successfully"
fi

exec node --import tsx src/main.ts
