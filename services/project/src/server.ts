import { createLogger } from '@rlgl/shared';

const logger = createLogger({ service: 'project-service' });

export const startServer = (app: any, port: number, onShutdown?: () => Promise<void>) => {
  const server = app.listen(port, () => {
    logger.info(`🚀 Project Service listening on port ${port}`);
  });

  const shutdown = () => {
    logger.info('SIGTERM received: closing Project Service');
    server.close(async () => {
      logger.info('Project Service HTTP closed');
      try {
        if (onShutdown) await onShutdown();
      } catch (err: any) {
        logger.error({ err: err?.message }, 'Project shutdown hook error');
      }
      process.exit(0);
    });
  };

  process.on('SIGTERM', shutdown);
  process.on('SIGINT', shutdown);

  return server;
};
