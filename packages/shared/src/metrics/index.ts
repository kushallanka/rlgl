import pino from 'pino';

export interface MetricsOptions {
  serviceName: string;
}

export interface MetricSnapshot {
  type: 'histogram' | 'counter' | 'gauge';
  name: string;
  help: string;
  value?: number;
  buckets?: Record<string, number>;
  labels?: Record<string, string>;
}

export class MetricsCollector {
  private serviceName: string;
  private counters: Map<string, number> = new Map();
  private gauges: Map<string, number> = new Map();
  private histograms: Map<string, number[]> = new Map();
  private startTime: number;

  constructor(options: MetricsOptions, _logger: pino.Logger) {
    this.serviceName = options.serviceName;
    this.startTime = Date.now();

    // Initialize metrics
    this.counters.set('http_requests_total', 0);
    this.counters.set('http_errors_total', 0);
    this.counters.set('http_5xx_total', 0);
    this.gauges.set('http_requests_active', 0);
    this.histograms.set('http_request_duration_ms', []);
  }

  /**
   * Record HTTP request start
   */
  recordRequestStart(): () => void {
    const activeCount = (this.gauges.get('http_requests_active') || 0) + 1;
    this.gauges.set('http_requests_active', activeCount);

    const startTime = Date.now();
    return () => {
      this.recordRequestEnd(startTime);
    };
  }

  /**
   * Record HTTP request end with status
   */
  private recordRequestEnd(startTime: number): void {
    const duration = Date.now() - startTime;
    const activeCount = Math.max((this.gauges.get('http_requests_active') || 1) - 1, 0);
    this.gauges.set('http_requests_active', activeCount);

    this.counters.set('http_requests_total', (this.counters.get('http_requests_total') || 0) + 1);

    const histogram = this.histograms.get('http_request_duration_ms') || [];
    histogram.push(duration);
    // Keep only last 1000 samples
    if (histogram.length > 1000) {
      histogram.shift();
    }
    this.histograms.set('http_request_duration_ms', histogram);
  }

  /**
   * Record error
   */
  recordError(status?: number): void {
    this.counters.set('http_errors_total', (this.counters.get('http_errors_total') || 0) + 1);

    if (status && status >= 500) {
      this.counters.set('http_5xx_total', (this.counters.get('http_5xx_total') || 0) + 1);
    }
  }

  /**
   * Get Prometheus format metrics
   */
  toPrometheus(): string {
    const lines: string[] = [];

    // Counters
    for (const [name, value] of this.counters) {
      lines.push(`# HELP ${name} Counter metric`);
      lines.push(`# TYPE ${name} counter`);
      lines.push(`${name}{service="${this.serviceName}"} ${value}`);
      lines.push('');
    }

    // Gauges
    for (const [name, value] of this.gauges) {
      lines.push(`# HELP ${name} Gauge metric`);
      lines.push(`# TYPE ${name} gauge`);
      lines.push(`${name}{service="${this.serviceName}"} ${value}`);
      lines.push('');
    }

    // Histograms (percentiles)
    for (const [name, values] of this.histograms) {
      if (values.length === 0) continue;

      const sorted = [...values].sort((a, b) => a - b);
      const sum = sorted.reduce((a, b) => a + b, 0);
      const count = sorted.length;
      const avg = sum / count;
      const p50 = sorted[Math.floor(count * 0.5)];
      const p95 = sorted[Math.floor(count * 0.95)];
      const p99 = sorted[Math.floor(count * 0.99)];

      lines.push(`# HELP ${name} Histogram metric (milliseconds)`);
      lines.push(`# TYPE ${name} histogram`);
      lines.push(`${name}_count{service="${this.serviceName}"} ${count}`);
      lines.push(`${name}_sum{service="${this.serviceName}"} ${sum}`);
      lines.push(`${name}_avg{service="${this.serviceName}"} ${avg.toFixed(2)}`);
      lines.push(`${name}_p50{service="${this.serviceName}"} ${p50}`);
      lines.push(`${name}_p95{service="${this.serviceName}"} ${p95}`);
      lines.push(`${name}_p99{service="${this.serviceName}"} ${p99}`);
      lines.push('');
    }

    // Service uptime
    const uptime = Date.now() - this.startTime;
    lines.push('# HELP uptime_ms Service uptime in milliseconds');
    lines.push('# TYPE uptime_ms gauge');
    lines.push(`uptime_ms{service="${this.serviceName}"} ${uptime}`);

    return lines.join('\n');
  }

  /**
   * Get metrics as JSON (for monitoring systems)
   */
  toJSON() {
    return {
      service: this.serviceName,
      timestamp: new Date().toISOString(),
      uptime: Date.now() - this.startTime,
      counters: Object.fromEntries(this.counters),
      gauges: Object.fromEntries(this.gauges),
      histograms: Object.fromEntries(
        Array.from(this.histograms).map(([name, values]) => {
          const sorted = [...values].sort((a, b) => a - b);
          return [
            name,
            {
              count: values.length,
              sum: sorted.reduce((a, b) => a + b, 0),
              avg: values.length > 0 ? sorted.reduce((a, b) => a + b, 0) / values.length : 0,
              min: Math.min(...values),
              max: Math.max(...values),
              p50: sorted[Math.floor(sorted.length * 0.5)],
              p95: sorted[Math.floor(sorted.length * 0.95)],
              p99: sorted[Math.floor(sorted.length * 0.99)],
            },
          ];
        }),
      ),
    };
  }

  /**
   * Reset metrics (useful for testing)
   */
  reset(): void {
    this.counters.clear();
    this.gauges.clear();
    this.histograms.clear();
    this.startTime = Date.now();

    this.counters.set('http_requests_total', 0);
    this.counters.set('http_errors_total', 0);
    this.counters.set('http_5xx_total', 0);
    this.gauges.set('http_requests_active', 0);
    this.histograms.set('http_request_duration_ms', []);
  }
}

export function createMetricsCollector(options: MetricsOptions, logger: pino.Logger): MetricsCollector {
  return new MetricsCollector(options, logger);
}
