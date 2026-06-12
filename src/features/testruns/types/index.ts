export interface TestResult {
  id: string;
  testCaseId: string;
  testCaseName?: string;
  // Immutable snapshot of the test case taken at run creation
  title?: string;
  preconditions?: string | null;
  steps?: string | null;
  expectedResult?: string | null;
  priority?: string | null;
  type?: string | null;
  status: string;
  comment?: string;
  version?: number;
  updatedAt?: string;
}

export interface TestRun {
  id: string;
  name: string;
  description?: string | null;
  projectId: string;
  suiteId?: string;
  createdBy?: string;
  createdAt?: string;
  version?: number;
  results?: TestResult[];
}

export interface CreateTestRunInput {
  name: string;
  description: string;
  projectId: string;
  suiteId: string;
  caseIds: string[];
  /** Stable per-form-submission key; lets the server dedupe retries/double-submits. */
  idempotencyKey?: string;
}
