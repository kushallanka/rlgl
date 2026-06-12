import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    testTimeout: 30_000,
    hookTimeout: 30_000,
    // Service config modules fail closed when secrets are missing; tests
    // exercise app wiring, not secret management, so provide a fixed value.
    env: {
      JWT_SECRET: 'vitest-contract-test-secret',
      NODE_ENV: 'test',
    },
    // Playwright owns tests/e2e; k6 owns tests/performance; MemLab owns
    // tests/memlab. Vitest must not collect those.
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      'tests/e2e/**',
      'tests/performance/**',
      'tests/memlab/**',
    ],
    reporters: ['verbose', 'json'],
    outputFile: {
      json: './test-results/vitest-results.json',
    },
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/**',
        'dist/**',
        'generated/**',
        '**/*.config.*',
        '**/*.d.ts',
        '**/seed*',
        '**/smoke-*',
        'tests/**',
      ],
    },
    alias: {
      '@rlgl/shared': path.resolve(__dirname, 'packages/shared/src/index.ts'),
      '@rlgl/contracts': path.resolve(__dirname, 'packages/contracts/src/index.ts'),
    },
  },
  resolve: {
    alias: {
      '@rlgl/shared': path.resolve(__dirname, 'packages/shared/src/index.ts'),
      '@rlgl/contracts': path.resolve(__dirname, 'packages/contracts/src/index.ts'),
    },
  },
});
