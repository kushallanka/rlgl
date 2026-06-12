import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import helmet from 'helmet';
import { requestContextMiddleware, createLogger, createMetricsCollector, metricsMiddleware, requestLoggingMiddleware, errorHandlerMiddleware, createHealthChecker, setupSwagger, Config } from '@rlgl/shared';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { AuthController } from './controllers/auth.controller.js';
import { OrgController } from './controllers/org.controller.js';
import type { PrismaClient } from '../generated/client/index.js';

const logger = createLogger({ service: 'auth-service' });
const metrics = createMetricsCollector({ serviceName: 'auth-service' }, logger);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const createApp = (config: Config, controller: AuthController, prisma?: PrismaClient, healthChecker?: ReturnType<typeof createHealthChecker>, orgController?: OrgController) => {
  const app = express();
  const hc = healthChecker || createHealthChecker('auth-service', logger);

  if (prisma) {
    hc.registerDatabase(prisma);
  }

  app.use(express.json());
  app.use(cookieParser());
  app.use(cors({ origin: '*', credentials: true }));
  app.use(helmet());
  app.use(requestContextMiddleware);
  app.use(metricsMiddleware(metrics));
  app.use(requestLoggingMiddleware(logger));

  // Initialize Swagger
  setupSwagger(app, config, {
    title: 'Auth Service',
    version: '1.0.0',
    description: 'Authentication and Identity Management Service',
    swaggerRoute: '/docs',
    apis: [
      path.join(__dirname, './controllers/*.js'),
      path.join(__dirname, './controllers/*.ts'),
    ],
  });

  app.get('/health', async (_req, res) => {
    const status = await hc.checkHealth();
    const statusCode = status.status === 'healthy' ? 200 : 503;
    res.status(statusCode).json(status);
  });

  app.get('/health/live', (_req, res) => {
    res.status(200).json({ status: 'live', service: 'auth-service', timestamp: new Date().toISOString() });
  });

  app.get('/health/ready', async (_req, res) => {
    const status = await hc.checkHealth();
    const statusCode = status.status === 'healthy' ? 200 : 503;
    res.status(statusCode).json(status);
  });

  // ─── Metrics ─────────────────────────────────────────────────────────────────
  app.get('/metrics', (_req, res) => {
    res.set('Content-Type', 'text/plain');
    res.send(metrics.toPrometheus());
  });

  app.get('/metrics/json', (_req, res) => {
    res.json(metrics.toJSON());
  });

  app.post('/signup', controller.signup);
  app.post('/login', controller.login);
  app.get('/me',      controller.me);
  app.post('/refresh', controller.refresh);
  app.post('/logout',  controller.logout);

  // Users
  app.get('/users', controller.listUsers);

  // IAM (called server-to-server by project-service; must stay in sync with ProjectService URLs)
  app.get('/users/:userId/projects/:projectId/permissions', controller.getUserProjectPermissions);
  app.get('/users/:userId/projects', controller.listUserProjects);
  app.post('/internal/projects/:projectId/init-admin', controller.initProjectAdmin);

  // Organizations (tenant boundary; identity propagated via x-user-id by the gateway)
  if (orgController) {
    app.post('/orgs', orgController.createOrg);
    app.get('/orgs', orgController.listOrgs);
    app.get('/orgs/:orgId', orgController.getOrg);
    app.patch('/orgs/:orgId', orgController.updateOrg);
    app.post('/orgs/:orgId/members', orgController.addMember);
    app.delete('/orgs/:orgId/members/:userId', orgController.removeMember);
    app.get('/orgs/:orgId/audit-log', orgController.getAuditLog);
  }

  // 404 Handler
  app.use((_req, res) => {
    res.status(404).json({
      error: 'Not Found',
      status: 404,
      timestamp: new Date().toISOString(),
    });
  });

  // Error Handler
  app.use(errorHandlerMiddleware(logger));

  return app;
};
