export const TESTCASE_QUERY_KEYS = {
  suites: (projectId: string | null) => ['suites', projectId] as const,
  sections: (suiteId: string) => ['sections', suiteId] as const,
  cases: (sectionId: string) => ['cases', sectionId] as const,
} as const;
