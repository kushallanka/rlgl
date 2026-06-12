# RLGL Test Management Platform - Development Commands
.PHONY: help install build dev docker-up docker-down logs clean test lint migrate

# Default target
help:
	@echo "Available commands:"
	@echo "  make install          - Install all dependencies"
	@echo "  make build            - Build all packages and services"
	@echo "  make dev              - Start development environment"
	@echo "  make docker-up        - Start all services with Docker Compose (SQLite/dev)"
	@echo "  make docker-down      - Stop all Docker services"
	@echo "  make logs             - View Docker logs"
	@echo "  make clean            - Clean build artifacts and node_modules"
	@echo "  make test             - Run all tests"
	@echo "  make lint             - Run linter on all projects"
	@echo "  make migrate          - Run database migrations"
	@echo "  make seed             - Seed database with initial data"
	@echo "  make monitoring       - Open monitoring dashboards"

# Install dependencies
install:
	@echo "Installing shared package dependencies..."
	cd packages/shared && npm install
	@echo "Installing gateway dependencies..."
	cd services/gateway && npm install
	@echo "Installing auth service dependencies..."
	cd services/auth && npm install
	@echo "Installing project service dependencies..."
	cd services/project && npm install
	@echo "Installing testcase service dependencies..."
	cd services/testcase && npm install
	cd services/testcase/generated/client && npm install
	@echo "Installing testrun service dependencies..."
	cd services/testrun && npm install
	cd services/testrun/generated/client && npm install
	@echo "Installing worker dependencies..."
	cd services/worker && npm install
	@echo "Installing frontend dependencies..."
	cd src && npm install

# Build shared package
build-shared:
	cd packages/shared && npm run build

# Build all services
build: build-shared
	@echo "Building auth service..."
	cd services/auth && npm run build
	@echo "Building project service..."
	cd services/project && npm run build
	@echo "Building gateway..."
	cd services/gateway && npm run build
	@echo "Building worker..."
	cd services/worker && npm run build

# Development mode - start infrastructure only
dev-infra:
	docker-compose up -d redis

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
	find . -name "node_modules" -type d -exec rm -rf {} + 2>/dev/null || true
	find . -name "dist" -type d -exec rm -rf {} + 2>/dev/null || true
	find . -name "*.log" -delete 2>/dev/null || true

# Run tests
test:
	cd services/auth && npm test
	cd services/project && npm test

# Lint all projects
lint:
	cd packages/shared && npm run lint
	cd services/auth && npm run lint
	cd services/project && npm run lint
	cd services/gateway && npm run lint

# Database migrations
migrate:
	@echo "Running auth service migrations..."
	cd services/auth && npx prisma migrate deploy
	@echo "Running project service migrations..."
	cd services/project && npx prisma migrate deploy

# Seed databases
seed:
	@echo "Seeding auth database..."
	cd services/auth && npm run seed

# Open monitoring dashboards
monitoring:
	@echo "Opening Grafana... http://localhost:3001"
	@echo "Opening Prometheus... http://localhost:9090"
	@open http://localhost:3001 || xdg-open http://localhost:3001 || echo "Please open http://localhost:3001 manually"

# Health check all services
health:
	@echo "Checking service health..."
	@curl -s http://localhost:3000/health/ready | jq . || echo "Gateway: Not responding"
	@curl -s http://localhost:3001/health | jq . || echo "Auth: Not responding"
	@curl -s http://localhost:3002/health | jq . || echo "Project: Not responding"
	@curl -s http://localhost:3003/health | jq . || echo "TestCase: Not responding"
	@curl -s http://localhost:3004/health | jq . || echo "TestRun: Not responding"

# Quick start - setup everything
setup: install docker-up migrate seed
	@echo "Setup complete! Services are starting..."
	@echo "Gateway: http://localhost:3000"
	@echo "Grafana: http://localhost:3001 (admin/admin)"
	@echo "Prometheus: http://localhost:9090"

