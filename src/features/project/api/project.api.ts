import { axios } from '../../../shared/api/api';

export interface Project {
  id: string;
  name: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
}

export const projectApi = {
  list: async (): Promise<Project[]> => {
    const response = await axios.get('/projects');
    return response.data?.data ?? response.data ?? [];
  },

  get: async (id: string): Promise<Project> => {
    const { data } = await axios.get(`/projects/${id}`);
    return data;
  },

  create: async (data: { name: string; description?: string }): Promise<Project> => {
    const { data: res } = await axios.post('/projects', data);
    return res;
  },

  update: async (id: string, data: Partial<Project>): Promise<Project> => {
    const { data: res } = await axios.put(`/projects/${id}`, data);
    return res;
  },

  delete: async (id: string): Promise<void> => {
    await axios.delete(`/projects/${id}`);
  },

  getMembers: (projectId: string) => axios.get(`/projects/${projectId}/members`),

  addMember: (projectId: string, data: { userId: string; roleId: string }) =>
    axios.post(`/projects/${projectId}/members`, data),

  removeMember: (projectId: string, userId: string) => axios.delete(`/projects/${projectId}/members/${userId}`),

  getDetails: (projectId: string) => axios.get(`/projects/${projectId}`),
};
