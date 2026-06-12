/**
 * k6 load test: Pagination stress test.
 *
 * Validates that paginated list endpoints stay fast under load
 * with large datasets. Specifically tests:
 * - p95 latency < 200ms for list endpoints
 * - Cursor-based pagination (when implemented) vs offset
 * - Large dataset filtering performance
 */
import http from 'k6/http';
import { check, sleep, group } from 'k6';
import { Rate, Trend } from 'k6/metrics';

const errorRate = new Rate('pagination_error_rate');
const pageLatency = new Trend('page_latency', true);
const filterLatency = new Trend('filter_latency', true);

const BASE_URL = __ENV.BASE_URL || 'http://localhost:3000';
const JWT_TOKEN = __ENV.JWT_TOKEN || 'test-token';
const PROJECT_ID = __ENV.PROJECT_ID || '1';

export const options = {
  scenarios: {
    paginate: {
      executor: 'constant-vus',
      vus: 30,
      duration: '60s',
    },
  },
  thresholds: {
    http_req_duration: ['p(95)<200'],
    pagination_error_rate: ['rate<0.01'],
    page_latency: ['p(95)<250'],
    filter_latency: ['p(95)<300'],
  },
};

const HEADERS = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${JWT_TOKEN}`,
  'x-project-id': PROJECT_ID,
};

export default function () {
  const page = Math.floor(Math.random() * 10) + 1;
  const limit = [10, 20, 50][Math.floor(Math.random() * 3)];

  group('Paginated list', () => {
    const res = http.get(
      `${BASE_URL}/api/v1/projects/${PROJECT_ID}/testruns?page=${page}&limit=${limit}`,
      { headers: HEADERS }
    );

    pageLatency.add(res.timings.duration);
    const ok = check(res, {
      'pagination: status 200': (r) => r.status === 200,
      'pagination: latency < 300ms': (r) => r.timings.duration < 300,
    });
    errorRate.add(!ok);
  });

  sleep(0.2);

  group('Filtered list', () => {
    const terms = ['login', 'checkout', 'api', 'performance', 'regression'];
    const search = terms[Math.floor(Math.random() * terms.length)];

    const res = http.get(
      `${BASE_URL}/api/v1/projects/${PROJECT_ID}/testruns?page=1&limit=20&search=${search}`,
      { headers: HEADERS }
    );

    filterLatency.add(res.timings.duration);
    check(res, {
      'filter: status 200': (r) => r.status === 200,
    });
  });

  sleep(0.3);
}

export function handleSummary(data) {
  return {
    'k6-pagination-summary.json': JSON.stringify(data, null, 2),
  };
}
