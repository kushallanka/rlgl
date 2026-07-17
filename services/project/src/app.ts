import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  Config,
  createHealthChecker,
  createLogger,
  createMetricsCollector,
  errorHandlerMiddleware,
  metricsMiddleware,
  requestContextMiddleware,
  requestLoggingMiddleware,
  setupSwagger,
} from '@rlgl/shared';
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import helmet from 'helmet';
import { CORS_ORIGIN, SERVICE_NAME } from './config/constants.js';
import { ProjectController } from './controllers/project.controller.js';
import { verifyToken } from './middleware/auth.js';

const logger = createLogger({ service: 'project-service' });
const metrics = createMetricsCollector({ serviceName: 'project-service' }, logger);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const createApp = (
  config: Config,
  controller: ProjectController,
  healthChecker?: ReturnType<typeof createHealthChecker>,
) => {
  const app = express();
  const hc = healthChecker || createHealthChecker('project-service', logger);

  // Middleware
  app.use(express.json());
  app.use(cors({ origin: CORS_ORIGIN, credentials: true }));
  app.use(helmet());
  app.use(requestContextMiddleware);
  app.use(metricsMiddleware(metrics));
  app.use(requestLoggingMiddleware(logger));

  // Initialize Swagger
  setupSwagger(app, config, {
    title: 'Project Service',
    version: '1.0.0',
    description: 'Project and Configuration Management Service',
    swaggerRoute: '/docs',
    apis: [path.join(__dirname, './controllers/*.js'), path.join(__dirname, './controllers/*.ts')],
  });

  // Context adapter: maps shared verifyToken's req.user into req.context
  const attachUserToContext = (req: Request, _res: Response, next: NextFunction) => {
    const context = (req as any).context || {};
    const user = (req as any).user;
    if (user) {
      context.userId = user.userId;
      context.systemPermissions = user.systemPermissions || [];
    }
    context.requestId = context.requestId || `${SERVICE_NAME}-${Date.now()}`;
    (req as any).context = context;
    next();
  };

  const authenticate = [verifyToken, attachUserToContext];

  // Health endpoints
  app.get('/health', async (_req, res) => {
    const status = await hc.checkHealth();
    const statusCode = status.status === 'healthy' ? 200 : 503;
    res.status(statusCode).json(status);
  });

  app.get('/health/live', (_req, res) => {
    res.status(200).json({
      status: 'live',
      service: 'project-service',
      timestamp: new Date().toISOString(),
    });
  });

  app.get('/health/ready', async (_req, res) => {
    const status = await hc.checkHealth();
    const statusCode = status.status === 'healthy' ? 200 : 503;
    res.status(statusCode).json(status);
  });

  // Metrics endpoints
  app.get('/metrics', (_req, res) => {
    res.set('Content-Type', 'text/plain');
    res.send(metrics.toPrometheus());
  });

  app.get('/metrics/json', (_req, res) => {
    res.json(metrics.toJSON());
  });

  // Internal endpoint for service-to-service use (no auth)
  app.get('/internal/projects', controller.listInternal);

  // Routes (all protected except health/metrics)
  app.get('/', ...authenticate, controller.list);
  app.post('/', ...authenticate, controller.create);
  app.get('/:projectId/permissions/mine', ...authenticate, controller.getMyPermissions);
  app.get('/:id', ...authenticate, controller.getOne);
  app.put('/:id', ...authenticate, controller.update);
  app.delete('/:id', ...authenticate, controller.delete);

  app.get('/:projectId/config/schema', ...authenticate, controller.getSchema);

  // Config Types
  app.post('/:projectId/config/types', ...authenticate, controller.createType);
  app.put('/:projectId/config/types/:typeId', ...authenticate, controller.updateType);
  app.delete('/:projectId/config/types/:typeId', ...authenticate, controller.deleteType);

  // Config Priorities
  app.post('/:projectId/config/priorities', ...authenticate, controller.createPriority);
  app.put('/:projectId/config/priorities/:priorityId', ...authenticate, controller.updatePriority);
  app.delete('/:projectId/config/priorities/:priorityId', ...authenticate, controller.deletePriority);

  // Config Custom Fields
  app.post('/:projectId/config/fields', ...authenticate, controller.createCustomField);
  app.put('/:projectId/config/fields/:fieldId', ...authenticate, controller.updateCustomField);
  app.delete('/:projectId/config/fields/:fieldId', ...authenticate, controller.deleteCustomField);

  // Roles
  app.get('/:projectId/roles', ...authenticate, controller.getRoles);
  app.post('/:projectId/roles', ...authenticate, controller.createRole);
  app.put('/:projectId/roles/:roleId', ...authenticate, controller.updateRole);
  app.delete('/:projectId/roles/:roleId', ...authenticate, controller.deleteRole);

  // User Roles
  app.get('/:projectId/users/roles', ...authenticate, controller.getUserRoles);
  app.post('/:projectId/users/:userId/roles', ...authenticate, controller.assignUserRole);
  app.delete('/:projectId/users/:userId/roles/:roleId', ...authenticate, controller.removeUserRole);

  // Activities / Audit Log
  app.get('/:projectId/config/audit', ...authenticate, controller.getActivities);
  app.get('/:projectId/activities', ...authenticate, controller.getActivities);

  // Error handlers
  app.use((_req, res) => {
    res.status(404).json({
      error: 'Not Found',
      status: 404,
      timestamp: new Date().toISOString(),
    });
  });

  app.use(errorHandlerMiddleware(logger));

  return app;
};
