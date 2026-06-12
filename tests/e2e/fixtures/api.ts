import { APIRequestContext, request } from '@playwright/test';

export const API_BASE_URL = process.env.API_BASE_URL ?? 'http://localhost:3000';

export interface TestUser {
  email: string;
  password: string;
  accessToken: string;
  userId: number;
}

let userCounter = 0;

/** Unique email per worker per run so parallel tests never collide. */
export function uniqueEmail(prefix = 'e2e'): string {
  userCounter += 1;
  return `${prefix}-${Date.now()}-${process.pid}-${userCounter}@example.test`;
}

/**
 * Create a fresh user through the public signup + login flow and return
 * an authenticated context. Goes through the gateway like real traffic.
 */
export async function createUser(prefix = 'e2e'): Promise<{ user: TestUser; api: APIRequestContext }> {
  const email = uniqueEmail(prefix);
  const password = 'E2e-test-password-1!';

  const ctx = await request.newContext({ baseURL: API_BASE_URL });

  const signupRes = await ctx.post('/api/v1/auth/signup', {
    data: { email, password, firstName: 'E2E', lastName: 'User' },
  });
  if (!signupRes.ok()) {
    throw new Error(`Signup failed (${signupRes.status()}): ${await signupRes.text()}`);
  }

  const loginRes = await ctx.post('/api/v1/auth/login', {
    data: { email, password },
  });
  if (!loginRes.ok()) {
    throw new Error(`Login failed (${loginRes.status()}): ${await loginRes.text()}`);
  }
  const body = (await loginRes.json()) as {
    user: { id: number };
    accessToken: string;
  };

  const api = await request.newContext({
    baseURL: API_BASE_URL,
    extraHTTPHeaders: {
      Authorization: `Bearer ${body.accessToken}`,
      'x-user-id': String(body.user.id),
    },
  });

  return {
    user: { email, password, accessToken: body.accessToken, userId: body.user.id },
    api,
  };
}

/** Create a project as the given authenticated context. */
export async function createProject(api: APIRequestContext, name: string): Promise<{ id: number }> {
  const res = await api.post('/api/v1/projects', { data: { name } });
  if (!res.ok()) {
    throw new Error(`Project creation failed (${res.status()}): ${await res.text()}`);
  }
  const project = (await res.json()) as { id: number };
  return project;
}
