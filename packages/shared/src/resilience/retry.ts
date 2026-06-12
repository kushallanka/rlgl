import { createLogger } from '../logger/index.js';

export interface RetryOptions {
  maxAttempts: number;
  delayMs: number;
  backoffMultiplier: number;
  retryableErrors: string[];
}

const defaultOptions: RetryOptions = {
  maxAttempts: 3,
  delayMs: 1000,
  backoffMultiplier: 2,
  retryableErrors: ['ECONNRESET', 'ETIMEDOUT', 'ECONNREFUSED', 'ENOTFOUND', 'RequestTimeout'],
};

export async function retryWithBackoff<T>(
  fn: () => Promise<T>,
  options: Partial<RetryOptions> = {},
  operationName: string = 'operation'
): Promise<T> {
  const opts = { ...defaultOptions, ...options };
  const logger = createLogger({ service: 'retry-util' });
  
  let lastError: Error | undefined;
  let delay = opts.delayMs;

  for (let attempt = 1; attempt <= opts.maxAttempts; attempt++) {
    try {
      const result = await fn();
      
      if (attempt > 1) {
        logger.info(
          { operation: operationName, attempt, maxAttempts: opts.maxAttempts },
          'Operation succeeded after retry'
        );
      }
      
      return result;
    } catch (error: any) {
      lastError = error;
      
      const errorCode = error.code || error.message;
      const isRetryable = opts.retryableErrors.some(e => 
        errorCode?.includes(e) || error.message?.includes(e)
      );

      if (!isRetryable || attempt === opts.maxAttempts) {
        logger.error(
          { 
            operation: operationName, 
            attempt, 
            error: error.message,
            code: error.code 
          },
          'Operation failed, no more retries'
        );
        throw error;
      }

      logger.warn(
        { 
          operation: operationName, 
          attempt, 
          nextAttemptInMs: delay,
          error: error.message 
        },
        'Operation failed, will retry'
      );

      await sleep(delay);
      delay *= opts.backoffMultiplier;
    }
  }

  throw lastError!;
}

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
