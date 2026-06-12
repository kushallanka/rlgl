import { createLogger } from '@rlgl/shared';

const logger = createLogger({ service: 'testcase-service' });

export const startServer = (app: any, port: number, onShutdown?: () => Promise<void>) => {
  const server = app.listen(port, () => {
    logger.info(`TestCase Service listening on port ${port}`);
  });

  const shutdown = async () => {
    logger.info('SIGTERM received: closing TestCase Service');
    server.close(async () => {
      logger.info('TestCase Service HTTP closed');
      try {
        if (onShutdown) await onShutdown();
      } catch (err: any) {
        logger.error({ err: err?.message }, 'TestCase shutdown hook error');
      }
      process.exit(0);
    });
  };

  process.on('SIGTERM', shutdown);
  process.on('SIGINT', shutdown);

  return server;
};
