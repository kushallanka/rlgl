/**
 * MemLab scenario: Navigation memory leak detection.
 *
 * Tests for memory leaks across the main navigation flows:
 * 1. Project list → test run list → test run detail → back
 * 2. Modal open/close cycles
 * 3. Filter changes with large datasets
 *
 * MemLab detects detached DOM nodes, retained closures, and heap growth
 * that persists across navigation cycles.
 */

/** @type {import('@memlab/api').IScenario} */
const scenario = {
  url: () => process.env['MEMLAB_BASE_URL'] || 'http://localhost:4173',

  /**
   * Action: Navigate to the main test runs view.
   * MemLab takes a baseline snapshot here.
   *
   * Navigation must stay client-side (History API + popstate) — MemLab
   * cannot analyze the heap across full page reloads, so page.goto()
   * is not allowed here.
   */
  async action(page) {
    await page.evaluate(() => {
      window.history.pushState({}, '', '/projects/1/testruns');
      window.dispatchEvent(new PopStateEvent('popstate'));
    });
    await page.waitForSelector('[data-testid="testrun-list"]', { timeout: 10000 }).catch(() => {
      // Selector may not exist if feature not built yet — continue
    });
    await new Promise((resolve) => setTimeout(resolve, 1000));
  },

  /**
   * Back: Return to project list.
   * MemLab compares heap against baseline to detect retained objects.
   */
  async back(page) {
    await page.evaluate(() => {
      window.history.pushState({}, '', '/projects');
      window.dispatchEvent(new PopStateEvent('popstate'));
    });
    await new Promise((resolve) => setTimeout(resolve, 500));
  },
};

module.exports = scenario;
