#!/bin/bash
# Database Restore Script for RLGL Services

set -e

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

log_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

log_warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Show usage
usage() {
    cat <<EOF
Usage: $0 [OPTIONS]

Restore RLGL service databases from backup.

OPTIONS:
    -s, --service SERVICE    Service to restore (auth|project|testcase|testrun)
    -f, --file FILE          Backup file to restore from
    -c, --container          Restore to Docker container
    -h, --help              Show this help message

EXAMPLES:
    # Restore auth service from specific backup
    $0 -s auth -f backups/auth_20240115_120000.db.gz

    # Restore to Docker container
    $0 -s project -f backups/project_20240115_120000.db.gz -c

    # List available backups
    ls -la backups/*.db.gz
EOF
    exit 1
}

# Parse arguments
SERVICE=""
BACKUP_FILE=""
CONTAINER_MODE=false

while [[ $# -gt 0 ]]; do
    case $1 in
        -s|--service)
            SERVICE="$2"
            shift 2
            ;;
        -f|--file)
            BACKUP_FILE="$2"
            shift 2
            ;;
        -c|--container)
            CONTAINER_MODE=true
            shift
            ;;
        -h|--help)
            usage
            ;;
        *)
            log_error "Unknown option: $1"
            usage
            ;;
    esac
done

# Validate inputs
if [ -z "$SERVICE" ] || [ -z "$BACKUP_FILE" ]; then
    log_error "Service and backup file are required"
    usage
fi

if [ ! -f "$BACKUP_FILE" ]; then
    log_error "Backup file not found: $BACKUP_FILE"
    exit 1
fi

# Validate service name
case $SERVICE in
    auth|project|testcase|testrun)
        ;;
    *)
        log_error "Invalid service: $SERVICE"
        log_error "Valid services: auth, project, testcase, testrun"
        exit 1
        ;;
esac

# Determine paths
CONTAINER_NAME="${SERVICE}-service"
if [ "$SERVICE" == "auth" ]; then
    DB_PATH="/app/services/auth/prisma/auth.db"
    LOCAL_DB_PATH="./services/auth/prisma/auth.db"
elif [ "$SERVICE" == "project" ]; then
    DB_PATH="/app/services/project/prisma/project.db"
    LOCAL_DB_PATH="./services/project/prisma/project.db"
elif [ "$SERVICE" == "testcase" ]; then
    DB_PATH="/app/services/testcase/prisma/testcase.db"
    LOCAL_DB_PATH="./services/testcase/prisma/testcase.db"
elif [ "$SERVICE" == "testrun" ]; then
    DB_PATH="/app/services/testrun/prisma/testrun.db"
    LOCAL_DB_PATH="./services/testrun/prisma/testrun.db"
fi

# Pre-restore warnings
log_warn "⚠️  This will overwrite the current $SERVICE database!"
log_warn "Current database will be backed up before restore."
echo ""
read -p "Are you sure you want to continue? (yes/no): " confirm

if [ "$confirm" != "yes" ]; then
    log_info "Restore cancelled"
    exit 0
fi

# Create pre-restore backup
PRE_RESTORE_BACKUP="${LOCAL_DB_PATH}.pre_restore_$(date +%Y%m%d_%H%M%S)"
log_info "Creating pre-restore backup..."

if [ "$CONTAINER_MODE" = true ]; then
    if docker ps | grep -q "$CONTAINER_NAME"; then
        docker exec "$CONTAINER_NAME" sh -c "sqlite3 $DB_PATH '.backup /tmp/pre_restore.db'"
        docker cp "$CONTAINER_NAME:/tmp/pre_restore.db" "$PRE_RESTORE_BACKUP"
        docker exec "$CONTAINER_NAME" rm /tmp/pre_restore.db
    fi
else
    if [ -f "$LOCAL_DB_PATH" ]; then
        cp "$LOCAL_DB_PATH" "$PRE_RESTORE_BACKUP"
    fi
fi

log_info "✓ Pre-restore backup created: $PRE_RESTORE_BACKUP"

# Decompress backup if needed
if [[ "$BACKUP_FILE" == *.gz ]]; then
    log_info "Decompressing backup..."
    gunzip -c "$BACKUP_FILE" > /tmp/restore_temp.db
    RESTORE_SOURCE="/tmp/restore_temp.db"
else
    RESTORE_SOURCE="$BACKUP_FILE"
fi

# Perform restore
log_info "Restoring $SERVICE database..."

if [ "$CONTAINER_MODE" = true ]; then
    # Restore to Docker container
    docker cp "$RESTORE_SOURCE" "$CONTAINER_NAME:/tmp/restore.db"
    
    # Stop the service temporarily
    log_info "Stopping $CONTAINER_NAME for restore..."
    docker stop "$CONTAINER_NAME"
    
    # Replace database
    docker exec "$CONTAINER_NAME" sh -c "cp /tmp/restore.db $DB_PATH"
    
    # Start the service
    log_info "Starting $CONTAINER_NAME..."
    docker start "$CONTAINER_NAME"
    
    # Cleanup
    docker exec "$CONTAINER_NAME" rm /tmp/restore.db
    
    log_info "✓ Database restored to container"
else
    # Local restore
    if [ -f "$LOCAL_DB_PATH" ]; then
        rm "$LOCAL_DB_PATH"
    fi
    
    cp "$RESTORE_SOURCE" "$LOCAL_DB_PATH"
    
    log_info "✓ Database restored locally"
fi

# Cleanup temp file
if [ -f /tmp/restore_temp.db ]; then
    rm /tmp/restore_temp.db
fi

# Verify restore
log_info "Verifying restored database..."

if [ "$CONTAINER_MODE" = true ]; then
    if docker exec "$CONTAINER_NAME" sqlite3 "$DB_PATH" "SELECT 1;" &>/dev/null; then
        log_info "✓ Database verification successful"
    else
        log_error "✗ Database verification failed"
        exit 1
    fi
else
    if sqlite3 "$LOCAL_DB_PATH" "SELECT 1;" &>/dev/null; then
        log_info "✓ Database verification successful"
    else
        log_error "✗ Database verification failed"
        exit 1
    fi
fi

log_info "Restore completed successfully!"
log_info "If you need to rollback, the pre-restore backup is at: $PRE_RESTORE_BACKUP"
