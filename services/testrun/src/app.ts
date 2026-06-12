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
import { TestRunController } from './controllers/testrun.controller.js';
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
  controller: TestRunController,
  registerHealth?: (hc: ReturnType<typeof createHealthChecker>) => void,
  redis?: import('ioredis').default,
) => {
  const app = express();

  if (registerHealth) registerHealth(healthChecker);

  app.use(express.json());
  app.use(cors({ origin: CORS_ORIGIN, credentials: true }));
  app.use(helmet());
  app.use(metricsMiddleware(metrics));
  app.use(requestLoggingMiddleware(logger));

  // Initialize Swagger
  setupSwagger(app, config, {
    title: 'TestRun Service',
    version: '1.0.0',
    description: 'Test Execution and Results Management Service',
    swaggerRoute: '/docs',
    apis: [
      path.join(__dirname, './controllers/*.js'),
      path.join(__dirname, './controllers/*.ts'),
    ],
  });
  app.use((req: Request, _res: Response, next: NextFunction) => {
    (req as any).requestId = req.headers['x-request-id'] || `tr-${Date.now()}`;
    next();
  });
  app.use(morgan('combined'));
  app.use(requireIdempotency(SERVICE_NAME, redis));

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

  app.post('/sync/project', controller.syncProject);
  app.delete('/sync/project/:projectId', controller.deleteSyncedProject);
  app.post('/sync/suite', controller.syncSuite);
  app.delete('/sync/suite/:suiteId', controller.deleteSyncedSuite);

  app.get('/', verifyToken, requirePermission('testrun.view'), controller.list);
  app.post('/', verifyToken, requirePermission('testrun.create'), controller.create);
  app.get('/:id', verifyToken, requirePermission('testrun.view'), controller.getById);
  app.put('/:id', verifyToken, requirePermission('testrun.update'), controller.update);
  app.delete('/:id', verifyToken, requirePermission('testrun.delete'), controller.deleteById);
  app.put('/results/:resultId', verifyToken, requirePermission('testrun.update'), controller.updateResult);

  app.use((_req: Request, res: Response) => {
    res.status(404).json({ error: 'Not Found', status: 404, timestamp: new Date().toISOString() });
  });

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    logger.error({ err }, 'Unhandled error');
    res.status(500).json({ error: 'Internal Server Error', status: 500, timestamp: new Date().toISOString() });
  });

  return app;
};
