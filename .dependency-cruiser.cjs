/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
  forbidden: [
    // ─── Frontend Layer Boundaries ────────────────────────────────────────────

    {
      name: 'shared-not-from-features',
      severity: 'error',
      comment: 'Shared components must not import from feature modules.',
      from: { path: '^src/shared/' },
      to: { path: '^src/features/' },
    },
    {
      name: 'page-no-api-direct',
      severity: 'error',
      comment: 'Pages must not import API modules directly — use hooks.',
      from: { path: 'src/features/.*/pages/' },
      to: { path: 'src/features/.*/api/' },
    },
    {
      name: 'component-no-api',
      severity: 'error',
      comment: 'Components must not import API modules directly — use hooks.',
      from: { path: 'src/features/.*/components/' },
      to: { path: 'src/features/.*/api/' },
    },
    {
      name: 'component-no-page-import',
      severity: 'error',
      comment: 'Components must not import from pages.',
      from: { path: 'src/features/.*/components/' },
      to: { path: 'src/features/.*/pages/' },
    },
    {
      name: 'hook-no-ui-import',
      severity: 'error',
      comment: 'Hooks must not import from components or pages.',
      from: { path: 'src/features/.*/hooks/' },
      to: { path: 'src/features/.*/(components|pages)/' },
    },
    {
      name: 'page-no-cross-feature',
      severity: 'error',
      comment: 'Pages must not import pages from other features.',
      // Group matching: $1 in to.pathNot resolves to the capture from from.path
      // (a \1 backreference cannot work — from and to are separate regexes).
      from: { path: '^src/features/([^/]+)/pages/' },
      to: { path: '^src/features/[^/]+/pages/', pathNot: '^src/features/$1/' },
    },
    {
      name: 'api-no-reverse-deps',
      severity: 'error',
      comment: 'API layer must not import hooks or components.',
      from: { path: 'src/features/.*/api/' },
      to: { path: 'src/features/.*/(hooks|components|pages)/' },
    },
    {
      name: 'frontend-no-backend-packages',
      severity: 'error',
      comment: 'Frontend must not import backend service packages.',
      from: { path: '^src/' },
      to: { path: '^services/' },
    },

    // ─── Backend Controller Boundaries ────────────────────────────────────────

    {
      name: 'controller-no-prisma',
      severity: 'error',
      comment: 'Controllers must not import Prisma directly — use repositories via services.',
      from: { path: 'services/.*/src/controllers/' },
      to: { path: '@prisma/client|prisma' },
    },
    {
      name: 'controller-no-repository-direct',
      severity: 'error',
      comment: 'Controllers must not import repositories directly — call through services.',
      from: { path: 'services/.*/src/controllers/' },
      to: { path: 'services/.*/src/repositories/' },
    },

    // ─── Service Layer Boundaries ─────────────────────────────────────────────

    {
      name: 'service-no-frontend',
      severity: 'error',
      comment: 'Backend services must not import frontend source.',
      // Anchored: 'services/' alone also matches src/features/*/services/
      from: { path: '^services/' },
      to: { path: '^src/' },
    },

    // ─── Cross-Service Isolation ──────────────────────────────────────────────

    {
      name: 'cross-service-import-forbidden',
      severity: 'error',
      comment: 'Services must not import each other\'s source. Communicate via HTTP through the gateway or through shared packages.',
      from: { path: '^services/([^/]+)/' },
      to: { path: '^services/[^/]+/src/', pathNot: '^services/$1/' },
    },
    {
      name: 'cross-service-prisma-forbidden',
      severity: 'error',
      comment: 'Services must not import another service\'s Prisma generated client.',
      from: { path: '^services/([^/]+)/' },
      to: { path: '^services/[^/]+/generated/', pathNot: '^services/$1/' },
    },

    // ─── Repository Boundaries ────────────────────────────────────────────────

    {
      name: 'repository-no-controllers',
      severity: 'error',
      comment: 'Repositories must not import controllers — this reverses the dependency arrow.',
      from: { path: 'services/.*/src/repositories/' },
      to: { path: 'services/.*/src/controllers/' },
    },
    {
      name: 'repository-no-services',
      severity: 'error',
      comment: 'Repositories must not import service classes — only services import repositories.',
      from: { path: 'services/.*/src/repositories/' },
      to: { path: 'services/.*/src/services/' },
    },

    // ─── Shared Package Rules ─────────────────────────────────────────────────

    {
      name: 'shared-no-service-imports',
      severity: 'error',
      comment: 'Shared packages must not depend on individual services.',
      from: { path: '^packages/shared/' },
      to: { path: '^services/' },
    },
    {
      name: 'contracts-no-service-imports',
      severity: 'error',
      comment: 'Contracts package must not depend on individual services.',
      from: { path: '^packages/contracts/' },
      to: { path: '^services/' },
    },
    {
      name: 'contracts-no-shared-runtime',
      severity: 'warn',
      comment: 'Contracts package should not import shared runtime helpers — only types.',
      from: { path: '^packages/contracts/' },
      to: { path: '^packages/shared/src/(?!.*\\.types)' },
    },

    // ─── Circular Dependency Prevention ──────────────────────────────────────

    {
      name: 'no-circular',
      severity: 'error',
      comment: 'Circular dependencies make modules hard to test and reason about.',
      from: {},
      to: { circular: true },
    },
  ],

  options: {
    doNotFollow: {
      path: 'node_modules',
      dependencyTypes: ['npm-dev', 'npm-optional', 'npm-peer', 'npm-no-pkg'],
    },
    tsPreCompilationDeps: true,
    tsConfig: { fileName: 'tsconfig.json' },
    enhancedResolveOptions: {
      exportsFields: ['exports'],
      conditionNames: ['import', 'require', 'node', 'default'],
    },
    reporterOptions: {
      dot: {
        collapsePattern: 'node_modules/[^/]+',
      },
      archi: {
        collapsePattern: [
          'src/(features|shared|stores|hooks)/[^/]+',
          'services/[^/]+',
          'packages/[^/]+',
        ].join('|'),
      },
    },
    progress: { type: 'performance-log' },
  },
};
