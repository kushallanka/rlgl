import { axios } from '../../../shared/api/api';
import { API_ENDPOINTS } from '../../../constants';

export interface ConfigType {
  id: string;
  name: string;
  projectId: string;
}

export interface ConfigPriority {
  id: string;
  name: string;
  projectId: string;
}

export interface ConfigField {
  id: string;
  name: string;
  type: 'text' | 'number' | 'date' | 'select';
  required: boolean;
  options?: string[];
  projectId: string;
}

export interface ConfigRole {
  id: string;
  name: string;
  permissions: string[];
  projectId: string;
}

export interface ConfigUserRole {
  id: string;
  userId: string;
  roleId: string;
  projectId: string;
  user?: {
    id: string;
    name: string;
    email: string;
  };
  role?: ConfigRole;
}

export interface ConfigSchema {
  types: ConfigType[];
  priorities: ConfigPriority[];
  customFields: ConfigField[];
  roles: ConfigRole[];
}

export const adminApi = {
  // Configuration schema
  getConfigSchema: (projectId: string) =>
    axios.get(API_ENDPOINTS.CONFIG_SCHEMA(projectId)),

  // Types
  getTypes: (projectId: string) =>
    axios.get(API_ENDPOINTS.CONFIG_TYPES(projectId)),

  createType: (data: { name: string; projectId: string }) =>
    axios.post(API_ENDPOINTS.CONFIG_TYPES(data.projectId), data),

  updateType: (projectId: string, id: string, data: { name: string; description?: string; color?: string }) =>
    axios.put(`${API_ENDPOINTS.CONFIG_TYPES(projectId)}/${id}`, data),

  deleteType: (projectId: string, id: string) =>
    axios.delete(`${API_ENDPOINTS.CONFIG_TYPES(projectId)}/${id}`),

  // Priorities
  getPriorities: (projectId: string) =>
    axios.get(API_ENDPOINTS.CONFIG_PRIORITIES(projectId)),

  createPriority: (data: { name: string; projectId: string }) =>
    axios.post(API_ENDPOINTS.CONFIG_PRIORITIES(data.projectId), data),

  updatePriority: (projectId: string, id: string, data: { name: string; level?: number; color?: string }) =>
    axios.put(`${API_ENDPOINTS.CONFIG_PRIORITIES(projectId)}/${id}`, data),

  deletePriority: (projectId: string, id: string) =>
    axios.delete(`${API_ENDPOINTS.CONFIG_PRIORITIES(projectId)}/${id}`),

  // Custom fields
  getFields: (projectId: string) =>
    axios.get(API_ENDPOINTS.CONFIG_FIELDS(projectId)),

  createField: (data: {
    name: string;
    type: 'text' | 'number' | 'date' | 'select';
    required: boolean;
    options?: string[];
    projectId: string;
  }) =>
    axios.post(API_ENDPOINTS.CONFIG_FIELDS(data.projectId), data),

  updateField: (projectId: string, id: string, data: Partial<ConfigField>) =>
    axios.put(`${API_ENDPOINTS.CONFIG_FIELDS(projectId)}/${id}`, data),

  deleteField: (projectId: string, id: string) =>
    axios.delete(`${API_ENDPOINTS.CONFIG_FIELDS(projectId)}/${id}`),

  // Roles
  getRoles: (projectId: string) =>
    axios.get(API_ENDPOINTS.CONFIG_ROLES(projectId)),

  createRole: (data: { name: string; permissions: string[]; projectId: string }) =>
    axios.post(API_ENDPOINTS.CONFIG_ROLES(data.projectId), data),

  updateRole: (projectId: string, id: string, data: { name: string; permissions: string[] }) =>
    axios.put(`${API_ENDPOINTS.CONFIG_ROLES(projectId)}/${id}`, data),

  deleteRole: (projectId: string, id: string) =>
    axios.delete(`${API_ENDPOINTS.CONFIG_ROLES(projectId)}/${id}`),

  // User roles
  getUserRoles: (projectId: string) =>
    axios.get(API_ENDPOINTS.CONFIG_USER_ROLES(projectId)),

  addUserRole: (data: { userId: string; roleId: string; projectId: string }) =>
    axios.post(API_ENDPOINTS.CONFIG_USER_ROLES(data.projectId), data),

  updateUserRole: (id: string, data: { roleId: string }) =>
    axios.put(`${API_ENDPOINTS.CONFIG_USER_ROLES('')}/${id}`, data),

  removeUserRole: (id: string) =>
    axios.delete(`${API_ENDPOINTS.CONFIG_USER_ROLES('')}/${id}`),

  // Project members
  getProjectMembers: (projectId: string) =>
    axios.get(`/projects/${projectId}/users/roles`),

  addProjectMember: (projectId: string, userId: string, roleId: string) =>
    axios.post(`/projects/${projectId}/users/${userId}/roles`, { roleId }),

  removeProjectMember: (projectId: string, userId: string, roleId: string) =>
    axios.delete(`/projects/${projectId}/users/${userId}/roles/${roleId}`),

  // Audit logs
  getAuditLogs: (projectId: string, params?: {
    page?: number;
    limit?: number;
    userId?: string;
    action?: string;
    startDate?: string;
    endDate?: string;
  }) =>
    axios.get(`${API_ENDPOINTS.CONFIG_AUDIT(projectId)}?${new URLSearchParams(params as any).toString()}`),
};
