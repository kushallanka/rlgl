#!/bin/bash
# Database Backup Script for RLGL Services
# Supports SQLite databases used by microservices

set -e

BACKUP_DIR="${BACKUP_DIR:-./backups}"
DATE=$(date +%Y%m%d_%H%M%S)
RETENTION_DAYS="${RETENTION_DAYS:-30}"

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

# Create backup directory
mkdir -p "$BACKUP_DIR"

# Function to backup a SQLite database
backup_sqlite() {
    local service_name=$1
    local db_path=$2
    local backup_file="${BACKUP_DIR}/${service_name}_${DATE}.db"
    
    if [ ! -f "$db_path" ]; then
        log_warn "Database not found: $db_path"
        return 1
    fi
    
    log_info "Backing up $service_name database..."
    
    # Use sqlite3 to create a consistent backup
    if sqlite3 "$db_path" ".backup '$backup_file'"; then
        log_info "✓ $service_name backed up to $backup_file"
        
        # Compress the backup
        gzip "$backup_file"
        log_info "✓ Compressed to ${backup_file}.gz"
        
        # Calculate and store checksum
        sha256sum "${backup_file}.gz" > "${backup_file}.gz.sha256"
        log_info "✓ Checksum created"
    else
        log_error "Failed to backup $service_name"
        return 1
    fi
}

# Function to backup from Docker volume
backup_docker_volume() {
    local service_name=$1
    local container_name=$2
    local db_path=$3
    local backup_file="${BACKUP_DIR}/${service_name}_${DATE}.db"
    
    log_info "Backing up $service_name from Docker container..."
    
    if ! docker ps | grep -q "$container_name"; then
        log_warn "Container $container_name not running"
        return 1
    fi
    
    # Create backup inside container and copy out
    docker exec "$container_name" sh -c "sqlite3 $db_path '.backup /tmp/backup.db'"
    docker cp "$container_name:/tmp/backup.db" "$backup_file"
    docker exec "$container_name" rm /tmp/backup.db
    
    # Compress
    gzip "$backup_file"
    sha256sum "${backup_file}.gz" > "${backup_file}.gz.sha256"
    
    log_info "✓ $service_name backed up from Docker"
}

# Main backup process
log_info "Starting database backup process..."
log_info "Backup directory: $BACKUP_DIR"
log_info "Retention period: $RETENTION_DAYS days"

# Check if running in Docker or locally
if docker ps &>/dev/null; then
    log_info "Docker detected, backing up from containers..."
    
    # Backup from Docker containers
    backup_docker_volume "auth" "auth-service" "/app/services/auth/prisma/auth.db"
    backup_docker_volume "project" "project-service" "/app/services/project/prisma/project.db"
    backup_docker_volume "testcase" "testcase-service" "/app/services/testcase/prisma/testcase.db"
    backup_docker_volume "testrun" "testrun-service" "/app/services/testrun/prisma/testrun.db"
else
    log_info "No Docker detected, backing up local databases..."
    
    # Backup local databases
    backup_sqlite "auth" "./services/auth/prisma/auth.db"
    backup_sqlite "project" "./services/project/prisma/project.db"
    backup_sqlite "testcase" "./services/testcase/prisma/testcase.db"
    backup_sqlite "testrun" "./services/testrun/prisma/testrun.db"
fi

# Cleanup old backups
log_info "Cleaning up backups older than $RETENTION_DAYS days..."
find "$BACKUP_DIR" -name "*.db.gz" -mtime +$RETENTION_DAYS -delete
find "$BACKUP_DIR" -name "*.sha256" -mtime +$RETENTION_DAYS -delete
log_info "✓ Cleanup complete"

# Create backup manifest
manifest_file="${BACKUP_DIR}/manifest_${DATE}.json"
cat > "$manifest_file" <<EOF
{
  "backup_date": "$DATE",
  "retention_days": $RETENTION_DAYS,
  "backups": [
    $(ls -1 ${BACKUP_DIR}/*_${DATE}.db.gz 2>/dev/null | while read f; do
      echo "    {"
      echo "      \"file\": \"$(basename $f)\","
      echo "      \"size\": $(stat -c%s "$f" 2>/dev/null || stat -f%z "$f" 2>/dev/null || echo 0),"
      echo "      \"checksum\": \"$(cat ${f}.sha256 2>/dev/null | awk '{print $1}')\""
      echo "    },"
    done | sed '$ s/,$//')
  ]
}
EOF

log_info "✓ Backup manifest created: $manifest_file"
log_info "Backup process completed successfully!"
