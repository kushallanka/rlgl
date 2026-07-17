import { useAuthStore } from '../stores/auth.store';
import { usePermissionStore } from '../stores/permission.store';

export const usePermission = (key: string) => {
  return usePermissionStore((s) => s.hasPermission(key));
};

export const useSystemPermission = (key: string) => {
  return useAuthStore((s) => s.hasSystemPermission(key));
};
