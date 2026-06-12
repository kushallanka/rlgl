import { Request, Response, NextFunction } from 'express';
import pino from 'pino';
import type { MetricsCollector } from '../metrics/index.js';

/**
 * Middleware to record metrics for HTTP requests
 */
export const metricsMiddleware = (metrics: MetricsCollector) => {
  return (_req: Request, res: Response, next: NextFunction) => {
    const endMetrics = metrics.recordRequestStart();

    // Capture original send to measure when response is fully sent
    const originalSend = res.send;
    res.send = function (data: unknown) {
      endMetrics();

      if (res.statusCode >= 400) {
        metrics.recordError(res.statusCode);
      }

      return originalSend.call(this, data);
    };

    next();
  };
};

/**
 * Middleware to add request logging with structured context
 */
export const requestLoggingMiddleware = (logger: pino.Logger) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const context = (req as any).context || {};
    const startTime = Date.now();

    // Log request
    logger.debug(
      {
        method: req.method,
        path: req.path,
        query: req.query,
        requestId: context.requestId,
        userId: context.userId,
      },
      'HTTP request',
    );

    // Capture original send
    const originalSend = res.send;
    res.send = function (data: unknown) {
      const duration = Date.now() - startTime;

      logger.info(
        {
          method: req.method,
          path: req.path,
          status: res.statusCode,
          duration,
          requestId: context.requestId,
          userId: context.userId,
        },
        'HTTP response',
      );

      return originalSend.call(this, data);
    };

    next();
  };
};

/**
 * Global error handler middleware
 */
export const errorHandlerMiddleware = (logger: pino.Logger) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return (err: unknown, _req: Request, res: Response, _next: NextFunction) => {
    const context = (_req as any).context || {};
    const isError = err instanceof Error;
    const status = (err as any).status || (err as any).statusCode || 500;
    const message = isError ? err.message : 'Internal server error';

    logger.error(
      {
        err,
        status,
        requestId: context.requestId,
        userId: context.userId,
      },
      'Unhandled error',
    );

    res.status(status).json({
      error: message,
      status,
      requestId: context.requestId,
      timestamp: new Date().toISOString(),
    });
  };
};
