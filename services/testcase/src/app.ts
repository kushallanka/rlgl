// TestCase Service - Express App Factory
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import {
  createLogger,
  createMetricsCollector,
  metricsMiddleware,
  requestLoggingMiddleware,
  createHealthChecker,
  setupSwagger,
  Config
} from '@rlgl/shared';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { SuiteController } from './controllers/suite.controller.js';
import { SectionController } from './controllers/section.controller.js';
import { SyncController } from './controllers/sync.controller.js';
import { TestCaseController } from './controllers/testcase.controller.js';
import { verifyToken, requirePermission } from './middleware/auth.js';
import { requireIdempotency } from '@rlgl/shared';
import { SERVICE_NAME, CORS_ORIGIN } from './config/constants.js';

const logger = createLogger({ service: SERVICE_NAME });
const metrics = createMetricsCollector({ serviceName: SERVICE_NAME }, logger);
const healthChecker = createHealthChecker(SERVICE_NAME, logger);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const createApp = (
  config: Config,
  suiteController: SuiteController,
  sectionController: SectionController,
  syncController: SyncController,
  testCaseController: TestCaseController,
  registerHealth?: (hc: ReturnType<typeof createHealthChecker>) => void,
  redis?: import('ioredis').default,
) => {
  const app = express();

  if (registerHealth) registerHealth(healthChecker);

  // Global middleware
  app.use(express.json());
  app.use(cors({ origin: CORS_ORIGIN || '*', credentials: true }));
  app.use(helmet());
  app.use(metricsMiddleware(metrics));
  app.use(requestLoggingMiddleware(logger));

  // Initialize Swagger
  setupSwagger(app, config, {
    title: 'TestCase Service',
    version: '1.0.0',
    description: 'Test Case and Hierarchy Management Service',
    swaggerRoute: '/docs',
    apis: [
      path.join(__dirname, './controllers/*.js'),
      path.join(__dirname, './controllers/*.ts'),
    ],
  });

  // Request ID middleware
  app.use((req: Request, _res: Response, next: NextFunction) => {
    (req as any).requestId = req.headers['x-request-id'] || `tc-${Date.now()}`;
    next();
  });

  app.use(morgan('combined'));
  app.use(requireIdempotency(SERVICE_NAME, redis));

  // Health & Metrics
  app.get('/health', async (_req, res) => {
    const status = await healthChecker.checkHealth();
    res.status(status.status === 'healthy' ? 200 : 503).json(status);
  });

  app.get('/health/live', (_req, res) => {
    res.status(200).json({ status: 'live', service: SERVICE_NAME, timestamp: new Date().toISOString() });
  });

  app.get('/health/ready', async (_req, res) => {
    const status = await healthChecker.checkHealth();
    res.status(status.status === 'healthy' ? 200 : 503).json(status);
  });

  app.get('/metrics', (_req, res) => {
    res.set('Content-Type', 'text/plain');
    res.send(metrics.toPrometheus());
  });

  app.get('/metrics/json', (_req, res) => {
    res.json(metrics.toJSON());
  });

  // Sync Endpoints (no auth - called internally by Project Service)
  app.post('/sync/project', syncController.syncProject);
  app.delete('/sync/project/:projectId', syncController.deleteProject);

  // Internal Endpoints (no auth - called by other services)
  app.get('/internal/suites', suiteController.listInternal);
  app.post('/internal/cases/batch', testCaseController.batchByIds);

  // Suite Endpoints
  app.get('/suites', verifyToken, requirePermission('testcase.view'), suiteController.listSuites);
  app.post('/suites', verifyToken, requirePermission('testcase.create'), suiteController.createSuite);
  app.put('/suites/:id', verifyToken, requirePermission('testcase.edit'), suiteController.updateSuite);
  app.delete('/suites/:id', verifyToken, requirePermission('testcase.delete'), suiteController.deleteSuite);

  // Section Endpoints
  app.get('/sections', verifyToken, requirePermission('testcase.view'), sectionController.listSections);
  app.post('/sections', verifyToken, requirePermission('testcase.create'), sectionController.createSection);
  app.put('/sections/:id', verifyToken, requirePermission('testcase.edit'), sectionController.updateSection);
  app.delete('/sections/:id', verifyToken, requirePermission('testcase.delete'), sectionController.deleteSection);

  // Test Case Endpoints
  app.get('/cases', verifyToken, requirePermission('testcase.view'), testCaseController.list);
  app.post('/cases', verifyToken, requirePermission('testcase.create'), testCaseController.create);
  app.get('/cases/:id', verifyToken, requirePermission('testcase.view'), testCaseController.getById);
  app.put('/cases/:id', verifyToken, requirePermission('testcase.edit'), testCaseController.update);
  app.delete('/cases/:id', verifyToken, requirePermission('testcase.delete'), testCaseController.delete);

  // 404 handler
  app.use((_req: Request, res: Response) => {
    res.status(404).json({ error: 'Not Found', status: 404, timestamp: new Date().toISOString() });
  });

  // Error handler
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    logger.error({ err }, 'Unhandled error');
    res.status(500).json({ error: 'Internal Server Error', status: 500, timestamp: new Date().toISOString() });
  });

  return app;
};
