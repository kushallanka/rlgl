# RLGL Test Management Platform - Development Commands
.PHONY: help install dev build test lint docker-up docker-down logs clean migrate seed monitoring health setup

# Default target
help:
	@echo "Available commands:"
	@echo "  make install          - Install all workspace dependencies"
	@echo "  make dev              - Start all services + frontend (hot reload)"
	@echo "  make build            - Build the frontend for production"
	@echo "  make test             - Run the test suite"
	@echo "  make lint             - Typecheck the workspace"
	@echo "  make docker-up        - Start the full stack with Docker Compose (SQLite/dev)"
	@echo "  make docker-down      - Stop all Docker services"
	@echo "  make logs             - View Docker logs"
	@echo "  make migrate          - Apply Prisma migrations for all services"
	@echo "  make seed             - Seed demo data (services must already be running)"
	@echo "  make monitoring       - Open monitoring dashboards"
	@echo "  make health           - Check gateway + downstream service health"
	@echo "  make clean            - Remove build artifacts and node_modules"
	@echo "  make setup            - install + docker-up + migrate + seed"

# Install workspace dependencies
install:
	npm install

# Start development environment
dev:
	npm run dev

# Build the frontend
build:
	npm run build

# Run the test suite
test:
	npm test

# Typecheck the workspace
lint:
	npm run lint

# Full Docker Compose startup
docker-up:
	docker-compose up -d

# Docker Compose shutdown
docker-down:
	docker-compose down

# View logs
logs:
	docker-compose logs -f

# Clean everything
clean:
	docker-compose down -v
	find . -name "node_modules" -type d -prune -exec rm -rf {} + 2>/dev/null || true
	find . -name "dist" -type d -prune -exec rm -rf {} + 2>/dev/null || true
	find . -name "*.log" -delete 2>/dev/null || true

# Database migrations (each service owns its own Prisma schema)
migrate:
	@echo "Running auth service migrations..."
	cd services/auth && npx prisma migrate deploy
	@echo "Running project service migrations..."
	cd services/project && npx prisma migrate deploy
	@echo "Running testcase service migrations..."
	cd services/testcase && npx prisma migrate deploy
	@echo "Running testrun service migrations..."
	cd services/testrun && npx prisma migrate deploy

# Seed demo data via the gateway API (see README > Seed Demo Data)
seed:
	npm run seed

# Open monitoring dashboards
monitoring:
	@echo "Opening Grafana... http://localhost:3001"
	@echo "Opening Prometheus... http://localhost:9090"
	@open http://localhost:3001 || xdg-open http://localhost:3001 || echo "Please open http://localhost:3001 manually"

# Health check via the gateway's aggregate readiness endpoint
health:
	@echo "Checking service health..."
	@curl -s http://localhost:3000/health/ready | jq . || echo "Gateway: Not responding"

# Quick start - setup everything
setup: install docker-up migrate seed
	@echo "Setup complete! Services are starting..."
	@echo "Gateway: http://localhost:3000"
	@echo "Grafana: http://localhost:3001 (admin/admin)"
	@echo "Prometheus: http://localhost:9090"
