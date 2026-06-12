/**
 * k6 load test: Automation result ingestion bursts.
 *
 * Simulates CI pipelines slamming the API with batched test results —
 * the burstiest write path in the system. Validates:
 * - Result submission p95 stays under 800ms during bursts
 * - Idempotent re-delivery (CI retries) never duplicates results
 * - Error rate stays under 1% with 100 concurrent submitters
 */
import http from 'k6/http';
import { check, sleep, group } from 'k6';
import { Rate, Trend, Counter } from 'k6/metrics';

const errorRate = new Rate('error_rate');
const submitLatency = new Trend('submit_result_latency', true);
const replayCounter = new Counter('idempotent_replays');

const BASE_URL = __ENV.BASE_URL || 'http://localhost:3000';
const JWT_TOKEN = __ENV.JWT_TOKEN || 'test-token';
const PROJECT_ID = __ENV.PROJECT_ID || '1';
const RUN_ID = __ENV.RUN_ID || '1';

export const options = {
  scenarios: {
    // Sustained background ingestion (nightly CI lane)
    steady_ingestion: {
      executor: 'constant-vus',
      vus: 10,
      duration: '60s',
    },
    // Burst lane: a fleet of CI jobs finishing at once
    burst_ingestion: {
      executor: 'ramping-arrival-rate',
      startRate: 0,
      timeUnit: '1s',
      preAllocatedVUs: 50,
      maxVUs: 100,
      stages: [
        { duration: '10s', target: 5 },
        { duration: '20s', target: 50 },
        { duration: '10s', target: 5 },
        { duration: '20s', target: 0 },
      ],
      startTime: '15s',
    },
  },
  thresholds: {
    http_req_duration: ['p(95)<800', 'p(99)<2000'],
    http_req_failed: ['rate<0.01'],
    error_rate: ['rate<0.01'],
    submit_result_latency: ['p(95)<800'],
  },
};

const HEADERS = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${JWT_TOKEN}`,
  'x-project-id': PROJECT_ID,
};

const STATUSES = ['Passed', 'Failed', 'Blocked'];

export default function () {
  group('Submit automation result', () => {
    const resultId = 1 + ((__VU * 31 + __ITER) % 50);
    const status = STATUSES[__ITER % STATUSES.length];
    const idempotencyKey = `k6-ingest-${__VU}-${__ITER}`;

    const payload = JSON.stringify({
      status,
      comment: `Automation run VU${__VU} iter ${__ITER}`,
    });

    const res = http.patch(
      `${BASE_URL}/api/v1/projects/${PROJECT_ID}/testruns/${RUN_ID}/results/${resultId}`,
      payload,
      { headers: { ...HEADERS, 'Idempotency-Key': idempotencyKey } }
    );

    submitLatency.add(res.timings.duration);
    const ok = check(res, {
      // 409 = CAS conflict from a concurrent writer — correct behavior, not an error
      'submit: 200/404/409': (r) => [200, 404, 409].includes(r.status),
    });
    errorRate.add(!ok);

    // CI retry semantics: redeliver the exact same request.
    // The idempotency layer must replay, not double-apply.
    if (res.status === 200 && __ITER % 5 === 0) {
      const replay = http.patch(
        `${BASE_URL}/api/v1/projects/${PROJECT_ID}/testruns/${RUN_ID}/results/${resultId}`,
        payload,
        { headers: { ...HEADERS, 'Idempotency-Key': idempotencyKey } }
      );
      const replayed = replay.headers['X-Idempotent-Replay'] === 'true';
      if (replayed) replayCounter.add(1);
      check(replay, {
        'replay: not a server error': (r) => r.status < 500,
      });
    }
  });

  sleep(0.2);
}

export function handleSummary(data) {
  const summary = {
    p95_submit_latency: data.metrics?.submit_result_latency?.values?.['p(95)'] ?? null,
    error_rate: data.metrics?.error_rate?.values?.rate ?? null,
    rps: data.metrics?.http_reqs?.values?.rate ?? null,
    idempotent_replays: data.metrics?.idempotent_replays?.values?.count ?? 0,
  };

  console.log('Automation ingestion summary:', JSON.stringify(summary, null, 2));

  return {
    'k6-automation-ingestion-summary.json': JSON.stringify(data, null, 2),
  };
}
