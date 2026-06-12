import { createLogger } from '@rlgl/shared';

const logger = createLogger({ service: 'api-gateway' });

export const startServer = (app: any, port: number, onShutdown?: () => Promise<void>) => {
  const server = app.listen(port, () => {
    logger.info(`🚀 API Gateway listening on port ${port}`);
  });

  const shutdown = () => {
    logger.info('SIGTERM signal received: closing HTTP server');
    server.close(async () => {
      logger.info('HTTP server closed');
      try {
        if (onShutdown) await onShutdown();
      } catch (err: any) {
        logger.error({ err: err?.message }, 'Shutdown hook error');
      }
      process.exit(0);
    });

    // Force shutdown after 15s
    setTimeout(() => {
      logger.error('Could not close connections in time, forcefully shutting down');
      process.exit(1);
    }, 15000);
  };

  process.on('SIGTERM', shutdown);
  process.on('SIGINT', shutdown);

  return server;
};
