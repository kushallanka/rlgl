import { createLogger } from '@rlgl/shared';

const logger = createLogger({ service: 'auth-service' });

export const startServer = (app: any, port: number, onShutdown?: () => Promise<void>) => {
  const server = app.listen(port, () => {
    logger.info(`🚀 Auth Service listening on port ${port}`);
  });

  const shutdown = () => {
    logger.info('SIGTERM received: closing Auth Service');
    server.close(async () => {
      logger.info('Auth Service HTTP closed');
      try {
        if (onShutdown) await onShutdown();
      } catch (err: any) {
        logger.error({ err: err?.message }, 'Auth shutdown hook error');
      }
      process.exit(0);
    });
  };

  process.on('SIGTERM', shutdown);
  process.on('SIGINT', shutdown);

  return server;
};
