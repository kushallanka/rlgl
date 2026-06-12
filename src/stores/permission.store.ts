import { create } from 'zustand';
import { apiClient as axios } from '../shared/api/api';

interface PermissionState {
  permissions: string[];
  projectId: string | null;
  loading: boolean;
  fetchPermissions: (projectId: string) => Promise<void>;
  hasPermission: (key: string) => boolean;
  clearPermissions: () => void;
}

export const usePermissionStore = create<PermissionState>((set, get) => ({
  permissions: [],
  projectId: null,
  loading: false,
  fetchPermissions: async (projectId: string) => {
    set({ loading: true, projectId });
    try {
      const res = await axios.get(`/projects/${projectId}/permissions/mine`, {
        headers: { 'x-project-id': projectId }
      });
      set({ permissions: res.data.permissions || [], loading: false });
    } catch {
      set({ permissions: [], loading: false });
    }
  },
  hasPermission: (key: string) => {
    const perms = get().permissions;
    if (perms.includes(key)) return true;
    if (key.startsWith('config.') && perms.includes('config.manage')) return true;
    return false;
  },
  clearPermissions: () => {
    set({ permissions: [], projectId: null });
  },
}));
