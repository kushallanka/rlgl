export class AppError extends Error {
  constructor(
    public readonly statusCode: number,
    public override readonly message: string,
    public readonly isOperational = true,
    public readonly errorCode?: string,
  ) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
}

// ─── Circuit Breaker Implementation ──────────────────────────────────────────
export enum BreakerState {
  CLOSED,
  OPEN,
  HALF_OPEN,
}

export interface BreakerOptions {
  failureThreshold?: number;
  resetTimeoutMs?: number;
  halfOpenMaxRequests?: number;
}

export class CircuitBreaker {
  private state = BreakerState.CLOSED;
  private failures = 0;
  private lastFailureTime = 0;
  private halfOpenSuccesses = 0;

  constructor(
    private readonly name: string,
    private readonly options: Required<BreakerOptions> = {
      failureThreshold: 5,
      resetTimeoutMs: 10000,
      halfOpenMaxRequests: 3,
    },
  ) {}

  async execute<T>(fn: () => Promise<T>): Promise<T> {
    if (this.state === BreakerState.OPEN) {
      if (Date.now() - this.lastFailureTime > this.options.resetTimeoutMs) {
        this.state = BreakerState.HALF_OPEN;
        this.halfOpenSuccesses = 0;
      } else {
        throw new AppError(503, `Circuit breaker "${this.name}" is OPEN`);
      }
    }

    try {
      const result = await fn();
      if (this.state === BreakerState.HALF_OPEN) {
        this.halfOpenSuccesses++;
        if (this.halfOpenSuccesses >= this.options.halfOpenMaxRequests) {
          this.state = BreakerState.CLOSED;
          this.failures = 0;
        }
      }
      return result;
    } catch (error) {
      this.failures++;
      this.lastFailureTime = Date.now();

      if (this.failures >= this.options.failureThreshold) {
        this.state = BreakerState.OPEN;
      }

      throw error;
    }
  }

  get currentState() {
    return this.state;
  }
}
