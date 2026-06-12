import { test, expect } from '@playwright/test';
import { API_BASE_URL } from './fixtures/api';

/**
 * Smoke: the app shell loads and the API gateway answers.
 * Fast PR-gate signal — if this fails nothing else is worth running.
 */
test.describe('smoke', () => {
  test('frontend loads without console errors', async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });

    await page.goto('/');
    await expect(page.locator('#root')).not.toBeEmpty();

    // Filter network noise (backend may not be fully seeded in all environments)
    const fatal = consoleErrors.filter(
      (e) => !e.includes('Failed to load resource') && !e.includes('net::')
    );
    expect(fatal).toEqual([]);
  });

  test('gateway health endpoint is green', async ({ request }) => {
    const res = await request.get(`${API_BASE_URL}/health`);
    expect(res.ok()).toBe(true);
    const body = await res.json();
    expect(body.status).toBe('ok');
  });

  test('unknown API route returns structured 404', async ({ request }) => {
    const res = await request.get(`${API_BASE_URL}/api/v1/definitely-not-a-route`);
    expect(res.status()).toBe(404);
    const body = await res.json();
    expect(body).toHaveProperty('error');
  });
});
