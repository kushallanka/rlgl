import { Redis } from 'ioredis';

export interface CacheOptions {
  ttl: number;
  jitter?: number;
}

export class CacheManager {
  private inflight = new Map<string, Promise<any>>();

  constructor(private readonly redis: Redis) {}

  /**
   * Get value with Single-Flight (Request Coalescing) and Jittered TTL
   */
  async getOrFetch<T>(
    key: string,
    fetchFn: () => Promise<T>,
    options: CacheOptions
  ): Promise<T> {
    // 1. Check local inflight (Single-Flight)
    const existingPromise = this.inflight.get(key);
    if (existingPromise) return existingPromise;

    // 2. Wrap fetch logic
    const promise = (async () => {
      try {
        // Check Redis
        const cached = await this.redis.get(key);
        if (cached) return JSON.parse(cached) as T;

        // Fetch new
        const result = await fetchFn();

        // Calculate jitter
        const jitterValue = options.jitter ? Math.random() * options.jitter : 0;
        const finalTTL = Math.floor(options.ttl + jitterValue);

        // Set Redis
        await this.redis.set(key, JSON.stringify(result), 'EX', finalTTL);

        return result;
      } finally {
        this.inflight.delete(key);
      }
    })();

    this.inflight.set(key, promise);
    return promise;
  }
}
