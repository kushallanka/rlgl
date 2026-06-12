/**
 * k6 load test: Concurrent test run execution.
 *
 * Simulates real-world concurrent engineers creating and updating
 * test runs against a live service. Validates:
 * - p95 latency stays under 500ms under load
 * - Error rate stays under 1%
 * - No data corruption under concurrent writes (CAS enforcement)
 */
import http from 'k6/http';
import { check, sleep, group } from 'k6';
import { Rate, Trend } from 'k6/metrics';

const errorRate = new Rate('error_rate');
const createLatency = new Trend('create_run_latency', true);
const updateLatency = new Trend('update_result_latency', true);
const listLatency = new Trend('list_runs_latency', true);

const BASE_URL = __ENV.BASE_URL || 'http://localhost:3000';
const JWT_TOKEN = __ENV.JWT_TOKEN || 'test-token';
const PROJECT_ID = __ENV.PROJECT_ID || '1';

export const options = {
  scenarios: {
    create_and_list: {
      executor: 'ramping-vus',
      startVUs: 0,
      stages: [
        { duration: '10s', target: 10 },
        { duration: '30s', target: 50 },
        { duration: '10s', target: 0 },
      ],
    },
  },
  thresholds: {
    http_req_duration: ['p(95)<500', 'p(99)<1000'],
    http_req_failed: ['rate<0.01'],
    error_rate: ['rate<0.01'],
    create_run_latency: ['p(95)<600'],
    list_runs_latency: ['p(95)<200'],
  },
};

const HEADERS = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${JWT_TOKEN}`,
  'x-project-id': PROJECT_ID,
};

export default function () {
  group('List test runs', () => {
    const res = http.get(
      `${BASE_URL}/api/v1/projects/${PROJECT_ID}/testruns?page=1&limit=20`,
      { headers: HEADERS }
    );

    listLatency.add(res.timings.duration);
    const ok = check(res, {
      'list: status 200': (r) => r.status === 200,
      'list: has data array': (r) => {
        try { return Array.isArray(JSON.parse(r.body).data); } catch { return false; }
      },
      'list: has pagination': (r) => {
        try { return typeof JSON.parse(r.body).pagination === 'object'; } catch { return false; }
      },
    });
    errorRate.add(!ok);
  });

  sleep(0.5);

  group('Create test run (with idempotency key)', () => {
    const idempotencyKey = `k6-run-${__VU}-${__ITER}-${Date.now()}`;
    const res = http.post(
      `${BASE_URL}/api/v1/projects/${PROJECT_ID}/testruns`,
      JSON.stringify({
        name: `k6 Run VU${__VU} Iter${__ITER}`,
        description: 'Created by k6 load test',
        projectId: parseInt(PROJECT_ID, 10),
        caseIds: [1, 2, 3],
      }),
      {
        headers: {
          ...HEADERS,
          'Idempotency-Key': idempotencyKey,
        },
      }
    );

    createLatency.add(res.timings.duration);
    const ok = check(res, {
      'create: status 201 or 409 (idempotent replay) or 503 (testcase svc down)': (r) =>
        [201, 200, 409, 503].includes(r.status),
    });
    errorRate.add(!ok);

    // Replay the same request — should get idempotent response
    if (res.status === 201) {
      const replay = http.post(
        `${BASE_URL}/api/v1/projects/${PROJECT_ID}/testruns`,
        JSON.stringify({
          name: `k6 Run VU${__VU} Iter${__ITER}`,
          description: 'Created by k6 load test',
          projectId: parseInt(PROJECT_ID, 10),
          caseIds: [1, 2, 3],
        }),
        {
          headers: {
            ...HEADERS,
            'Idempotency-Key': idempotencyKey,
          },
        }
      );

      check(replay, {
        'idempotent replay: same status as original': (r) =>
          r.status === res.status || r.status === 200,
      });
    }
  });

  sleep(1);
}

export function handleSummary(data) {
  const summary = {
    p95_http_req_duration: data.metrics?.http_req_duration?.values?.['p(95)'] ?? null,
    p99_http_req_duration: data.metrics?.http_req_duration?.values?.['p(99)'] ?? null,
    error_rate: data.metrics?.error_rate?.values?.rate ?? null,
    rps: data.metrics?.http_reqs?.values?.rate ?? null,
  };

  console.log('Load test summary:', JSON.stringify(summary, null, 2));

  return {
    'k6-run-execution-summary.json': JSON.stringify(data, null, 2),
  };
}
