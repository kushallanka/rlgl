#!/bin/bash
# RLGL System Health Check Script

set -e

GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo "================================"
echo "RLGL System Health Check"
echo "================================"
echo ""

# Service endpoints
GATEWAY="http://localhost:3000"
AUTH="http://localhost:3001"
PROJECT="http://localhost:3002"
TESTCASE="http://localhost:3003"
TESTRUN="http://localhost:3004"
PROMETHEUS="http://localhost:9090"
GRAFANA="http://localhost:3001"

check_service() {
    local name=$1
    local url=$2
    local endpoint=$3
    
    if curl -s -o /dev/null -w "%{http_code}" "${url}${endpoint}" | grep -q "200\|204"; then
        echo -e "${GREEN}✓${NC} $name: Healthy"
        return 0
    else
        echo -e "${RED}✗${NC} $name: Unhealthy"
        return 1
    fi
}

echo "Checking Services..."
echo "-------------------"

# Check Gateway
check_service "Gateway" $GATEWAY "/health/ready"

# Check Auth Service
check_service "Auth Service" $AUTH "/health"

# Check Project Service
check_service "Project Service" $PROJECT "/health"

# Check TestCase Service
check_service "TestCase Service" $TESTCASE "/health"

# Check TestRun Service
check_service "TestRun Service" $TESTRUN "/health"

echo ""
echo "Checking Infrastructure..."
echo "-----------------------"

# Check Prometheus
check_service "Prometheus" $PROMETHEUS "/-/healthy"

# Check Grafana
check_service "Grafana" $GRAFANA "/api/health"

echo ""
echo "Checking Metrics Endpoints..."
echo "----------------------------"

# Quick metrics check
if curl -s $AUTH/metrics | grep -q "http_requests_total"; then
    echo -e "${GREEN}✓${NC} Auth metrics: Available"
else
    echo -e "${YELLOW}!${NC} Auth metrics: No data yet"
fi

if curl -s $PROJECT/metrics | grep -q "http_requests_total"; then
    echo -e "${GREEN}✓${NC} Project metrics: Available"
else
    echo -e "${YELLOW}!${NC} Project metrics: No data yet"
fi

echo ""
echo "Checking Redis..."
echo "----------------"

if command -v redis-cli &> /dev/null; then
    if redis-cli PING | grep -q "PONG"; then
        echo -e "${GREEN}✓${NC} Redis: Connected"
    else
        echo -e "${RED}✗${NC} Redis: Not responding"
    fi
else
    echo -e "${YELLOW}!${NC} Redis: redis-cli not installed, skipping check"
fi

echo ""
echo "================================"
echo "Health check complete!"
echo "================================"
