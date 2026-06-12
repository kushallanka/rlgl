import { axios } from '../../../shared/api/api';
import { API_ENDPOINTS } from '../../../constants';

export interface TestRunDto {
  id: string;
  name: string;
  description?: string;
  projectId: string;
  suiteId?: string;
  createdBy?: string;
  createdAt?: string;
  results?: Array<{
    id: string;
    testCaseId: string;
    testCaseName?: string;
    status: string;
    updatedAt?: string;
  }>;
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

export const testrunsApi = {
  list: (projectId: string) =>
    axios.get(`${API_ENDPOINTS.TEST_RUNS}?projectId=${projectId}`),

  create: ({ idempotencyKey, ...input }: CreateTestRunInput) =>
    axios.post(API_ENDPOINTS.TEST_RUNS, input, {
      ...(idempotencyKey ? { headers: { 'Idempotency-Key': idempotencyKey } } : {}),
    }),

  update: (runId: string, data: { name?: string; description?: string; version?: number }) =>
    axios.put(`${API_ENDPOINTS.TEST_RUNS}/${runId}`, data),

  delete: (runId: string) =>
    axios.delete(`${API_ENDPOINTS.TEST_RUNS}/${runId}`),

  updateResult: (resultId: string, status: string, version?: number) =>
    axios.put(`${API_ENDPOINTS.RESULTS}/${resultId}`, {
      status,
      updatedAt: new Date().toISOString(),
      ...(version !== undefined ? { version } : {}),
    }),

  getSuites: (projectId: string) =>
    axios.get(`${API_ENDPOINTS.SUITES}?projectId=${projectId}`),

  getCasesBySuite: (suiteId: string) =>
    axios.get(`${API_ENDPOINTS.CASES}?suiteId=${suiteId}`),
};
