import http from 'k6/http';
import { check, sleep } from 'k6';
import { randomString } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';

export const options = {
  stages: [
    { duration: '30s', target: 100 },  // Ramp up to 100 users
    { duration: '1m', target: 100 },   // Sustain 100 users
    { duration: '30s', target: 500 },  // Spike to 500 users
    { duration: '1m', target: 500 },   // Sustain 500 users
    { duration: '30s', target: 1000 }, // Peak at 1000 users
    { duration: '1m', target: 1000 },  // Sustain 1000 users
    { duration: '30s', target: 0 },    // Ramp down to 0
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95% of requests should be below 500ms
    http_req_failed: ['rate<0.01'],   // Error rate should be less than 1%
  },
};

const BASE_URL = 'http://localhost:3000/api/v1';

export default function () {
  // 1. Authentication (Simulate login to get JWT and CSRF)
  const loginPayload = JSON.stringify({
    email: 'admin@test.com',
    password: 'AdminPass123!',
  });
  
  const loginParams = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const loginRes = http.post(`${BASE_URL}/auth/login`, loginPayload, loginParams);
  
  check(loginRes, {
    'login successful': (r) => r.status === 200,
    'has csrf token': (r) => r.json('csrfToken') !== undefined,
  });

  if (loginRes.status !== 200) {
    sleep(1);
    return;
  }

  const csrfToken = loginRes.json('csrfToken');
  
  // Parse HttpOnly cookies set by the gateway/auth service automatically handled by k6
  const authHeaders = {
    'Content-Type': 'application/json',
    'X-CSRF-Token': csrfToken,
    // Cookies are automatically sent by k6 per VU
  };

  // 2. Fetch Projects (Simulating Read Rate Limit checks - GET requests)
  const projRes = http.get(`${BASE_URL}/projects`, { headers: authHeaders });
  check(projRes, {
    'projects fetched': (r) => r.status === 200,
  });

  if (projRes.status === 200 && projRes.json().length > 0) {
    const projectId = projRes.json()[0].id;
    
    // 3. Create Idempotent TestCase Type (Simulating Write Rate Limit + Idempotency)
    const idempotencyKey = `k6-test-${randomString(10)}`; // normally static for idempotency test, randomized here for broad stress test
    
    const mutationPayload = JSON.stringify({
      name: `Type ${randomString(5)}`,
      color: 'blue'
    });

    const mutRes = http.post(`${BASE_URL}/projects/${projectId}/config/types`, mutationPayload, {
      headers: {
        ...authHeaders,
        'Idempotency-Key': idempotencyKey,
      }
    });

    check(mutRes, {
      'mutation successful': (r) => r.status === 200 || r.status === 201, // Created
    });
    
    // Replay same idempotency key
    const replayRes = http.post(`${BASE_URL}/projects/${projectId}/config/types`, mutationPayload, {
      headers: {
        ...authHeaders,
        'Idempotency-Key': idempotencyKey,
      }
    });
    
    check(replayRes, {
      'idempotency matched': (r) => r.status === mutRes.status && r.body === mutRes.body,
    });
  }

  sleep(1); // User think time
}
