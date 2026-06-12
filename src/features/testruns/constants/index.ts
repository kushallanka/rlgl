export const TESTRUN_QUERY_KEYS = {
  list: (projectId: string | null) => ['testruns', 'list', projectId] as const,
  suites: (projectId: string | null) => ['testruns', 'suites', projectId] as const,
  casesBySuite: (suiteId: string | null) => ['testruns', 'cases', suiteId] as const,
} as const;
