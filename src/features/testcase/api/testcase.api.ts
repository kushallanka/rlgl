import { API_ENDPOINTS } from '../../../constants';
import { axios } from '../../../shared/api/api';

export interface TestCase {
  id: string;
  title: string;
  description?: string;
  preconditions?: string;
  steps: string[];
  expectedResult?: string;
  priority: string;
  type: string;
  sectionId: string;
  suiteId: string;
  projectId: string;
  customFieldValues?: Record<string, any>;
}

export interface TestSuite {
  id: string;
  name: string;
  description?: string;
  projectId: string;
}

export interface TestSection {
  id: string;
  name: string;
  suiteId: string;
}

export const testcaseApi = {
  // Suites
  getSuites: (projectId: string) => axios.get(`${API_ENDPOINTS.SUITES}?projectId=${projectId}`),

  createSuite: (data: { name: string; description?: string; projectId: string }) =>
    axios.post(API_ENDPOINTS.SUITES, data),

  updateSuite: (id: string, data: { name: string; description?: string }) =>
    axios.put(`${API_ENDPOINTS.SUITES}/${id}`, data),

  deleteSuite: (id: string) => axios.delete(`${API_ENDPOINTS.SUITES}/${id}`),

  // Sections
  getSections: (suiteId: string) => axios.get(`${API_ENDPOINTS.SECTIONS}?suiteId=${suiteId}`),

  createSection: (data: { name: string; suiteId: string }) => axios.post(API_ENDPOINTS.SECTIONS, data),

  updateSection: (id: string, data: { name: string }) => axios.put(`${API_ENDPOINTS.SECTIONS}/${id}`, data),

  deleteSection: (id: string) => axios.delete(`${API_ENDPOINTS.SECTIONS}/${id}`),

  // Test Cases
  getCases: (sectionId: string) => axios.get(`${API_ENDPOINTS.CASES}?sectionId=${sectionId}`),

  createCase: (data: Partial<TestCase>) => axios.post(API_ENDPOINTS.CASES, data),

  updateCase: (id: string, data: Partial<TestCase>) => axios.put(`${API_ENDPOINTS.CASES}/${id}`, data),

  deleteCase: (id: string) => axios.delete(`${API_ENDPOINTS.CASES}/${id}`),
};
