import pino from 'pino';

export interface LoggerOptions {
  service: string;
  level?: string;
  samplingRate?: number;
}

export const createLogger = ({ service, level = 'info', samplingRate = 1 }: LoggerOptions) => {
  return pino({
    level,
    base: { service },
    formatters: {
      level: (label) => ({ level: label }),
    },
    timestamp: pino.stdTimeFunctions.isoTime,
    hooks: {
      logMethod(inputArgs, method) {
        // Log Sampling logic for INFO level
        if (method.name === 'info' && samplingRate < 1) {
          if (Math.random() > samplingRate) {
            return;
          }
        }
        return method.apply(this, inputArgs);
      },
    },
  });
};

// Standardized Audit Log levels for migrations/security
export const logAudit = (logger: pino.Logger, action: string, meta: Record<string, any>) => {
  logger.info(
    {
      type: 'AUDIT',
      action,
      ...meta,
    },
    `Audit Event: ${action}`,
  );
};
