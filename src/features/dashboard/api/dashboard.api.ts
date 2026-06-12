import { axios } from '../../../shared/api/api';

export const dashboardApi = {
  getCases: (projectId: string) =>
    axios.get(`/testcases/cases?projectId=${projectId}`),

  getRuns: (projectId: string) =>
    axios.get(`/testruns?projectId=${projectId}`),

  getActivities: (projectId: string) =>
    axios.get(`/projects/${projectId}/activities`),
};
