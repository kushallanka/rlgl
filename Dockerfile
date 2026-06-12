# ─── BUILD STAGE ─────────────────────────────────────────────────────────────
# Build a single backend service from the npm workspace.
# Required build args:
#   SERVICE  — workspace service name (auth | project | testcase | testrun | gateway | worker)
#   PORT     — port the service listens on (default 3000)
FROM node:24-alpine AS builder
ARG SERVICE

WORKDIR /app

RUN apk add --no-cache openssl

# Copy every workspace manifest first so npm ci is cached independently
# of source changes (this layer only busts when a package.json changes).
COPY package*.json ./
COPY packages/contracts/package*.json ./packages/contracts/
COPY packages/shared/package*.json    ./packages/shared/
COPY services/auth/package*.json      ./services/auth/
COPY services/project/package*.json   ./services/project/
COPY services/testcase/package*.json  ./services/testcase/
COPY services/testrun/package*.json   ./services/testrun/
COPY services/gateway/package*.json   ./services/gateway/
COPY services/worker/package*.json    ./services/worker/

RUN npm ci

# Shared workspace package consumed by all services
COPY packages/shared ./packages/shared

# Target service source
COPY services/${SERVICE}       ./services/${SERVICE}

# Generate Prisma client when a schema exists (no-op for gateway/worker)
RUN [ -d "services/${SERVICE}/prisma" ] && \
    (cd services/${SERVICE} && npx prisma generate) || true

# ─── RUNTIME STAGE ───────────────────────────────────────────────────────────
FROM node:24-alpine
ARG SERVICE
ARG PORT=3000

WORKDIR /app

RUN apk add --no-cache openssl wget && npm install -g tsx

COPY --from=builder /app/node_modules          ./node_modules
COPY --from=builder /app/packages/shared       ./packages/shared
COPY --from=builder /app/services/${SERVICE}   ./services/${SERVICE}

ENV NODE_ENV=production
ENV PORT=${PORT}
# SERVICE is read at container start by docker-start.sh to locate entrypoint/main
ENV SERVICE=${SERVICE}

EXPOSE ${PORT}

COPY docker-start.sh /start.sh
RUN chmod +x /start.sh

CMD ["/start.sh"]
