import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useAuthStore } from '../../../stores/auth.store';
import { usePermissionStore } from '../../../stores/permission.store';
import { useProjectStore } from '../../../stores/project.store';
import { authApi } from '../api/auth';

export const useUser = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const user = localStorage.getItem('user');
      return user ? JSON.parse(user) : null;
    },
    staleTime: Infinity,
  });
};

export const useLogin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: authApi.login,
    onSuccess: (data) => {
      localStorage.setItem('user', JSON.stringify(data.user));
      queryClient.setQueryData(['user'], data.user);
      useAuthStore.getState().setAuth(data.user);
    },
  });
};

export const useSignup = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: authApi.signup,
    onSuccess: (data) => {
      localStorage.setItem('user', JSON.stringify(data.user));
      queryClient.setQueryData(['user'], data.user);
      useAuthStore.getState().setAuth(data.user);
    },
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: authApi.logout,
    onSuccess: () => {
      // Clear localStorage
      localStorage.removeItem('user');
      localStorage.removeItem('activeProjectId');
      localStorage.removeItem('activeProject');

      // Clear Zustand stores
      useAuthStore.getState().setAuth(null);
      useProjectStore.getState().clearActiveProject();
      usePermissionStore.getState().clearPermissions();

      // Clear React Query cache
      queryClient.clear();

      // Navigate to login
      window.location.href = '/login';
    },
  });
};
