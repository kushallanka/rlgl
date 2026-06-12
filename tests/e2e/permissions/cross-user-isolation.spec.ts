import { test, expect } from '@playwright/test';
import { createUser } from '../fixtures/api';

/**
 * Permission boundary E2E: a user must never be able to read or mutate
 * another user's organizations through the public API surface.
 *
 * These run through the gateway exactly like real traffic — they validate
 * the full chain (gateway → auth headers → service-level membership checks),
 * not just the service in isolation.
 */
test.describe('cross-user isolation', () => {
  test('user B cannot read user A organization', async () => {
    const a = await createUser('owner');
    const b = await createUser('intruder');

    const created = await a.api.post('/api/v1/auth/orgs', {
      data: { name: `Org A ${Date.now()}` },
    });
    expect(created.status()).toBe(201);
    const { data: org } = (await created.json()) as { data: { id: number } };

    // Owner can read it back
    const ownRead = await a.api.get(`/api/v1/auth/orgs/${org.id}`);
    expect(ownRead.status()).toBe(200);

    // Non-member gets 403, never the org payload
    const foreignRead = await b.api.get(`/api/v1/auth/orgs/${org.id}`);
    expect(foreignRead.status()).toBe(403);

    await a.api.dispose();
    await b.api.dispose();
  });

  test('user B cannot mutate user A organization', async () => {
    const a = await createUser('owner');
    const b = await createUser('intruder');

    const created = await a.api.post('/api/v1/auth/orgs', {
      data: { name: `Org A ${Date.now()}` },
    });
    expect(created.status()).toBe(201);
    const { data: org } = (await created.json()) as { data: { id: number; version: number } };

    const foreignUpdate = await b.api.patch(`/api/v1/auth/orgs/${org.id}`, {
      data: { name: 'Hijacked', version: org.version },
    });
    expect(foreignUpdate.status()).toBe(403);

    // Membership escalation must also be denied
    const foreignAddMember = await b.api.post(`/api/v1/auth/orgs/${org.id}/members`, {
      data: { userId: b.user.userId, role: 'owner' },
    });
    expect(foreignAddMember.status()).toBe(403);

    await a.api.dispose();
    await b.api.dispose();
  });

  test('unauthenticated requests are rejected', async ({ request }) => {
    const res = await request.get(
      `${process.env.API_BASE_URL ?? 'http://localhost:3000'}/api/v1/auth/orgs`
    );
    expect([401, 403]).toContain(res.status());
  });

  test('org list only contains own organizations', async () => {
    const a = await createUser('owner');
    const b = await createUser('other');

    const created = await a.api.post('/api/v1/auth/orgs', {
      data: { name: `Private Org ${Date.now()}` },
    });
    expect(created.status()).toBe(201);
    const { data: org } = (await created.json()) as { data: { id: number } };

    const listB = await b.api.get('/api/v1/auth/orgs');
    expect(listB.status()).toBe(200);
    const { data: orgsB } = (await listB.json()) as { data: Array<{ id: number }> };
    expect(orgsB.map((o) => o.id)).not.toContain(org.id);

    await a.api.dispose();
    await b.api.dispose();
  });
});
