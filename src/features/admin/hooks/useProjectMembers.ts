import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { adminApi } from '../api/admin.api';
import { axios } from '../../../shared/api/api';

const PROJECT_MEMBERS_KEY = (projectId: string | null) => ['project-members', projectId];
const ALL_USERS_KEY = ['all-users'];

export function useProjectMembersQuery(projectId: string | null) {
  return useQuery({
    queryKey: PROJECT_MEMBERS_KEY(projectId),
    queryFn: async () => {
      if (!projectId) return [];
      const res = await adminApi.getProjectMembers(projectId);
      return (res.data?.data || res.data || []) as any[];
    },
    enabled: !!projectId,
  });
}

export function useAllUsersQuery() {
  return useQuery({
    queryKey: ALL_USERS_KEY,
    queryFn: async () => {
      const res = await axios.get('/users');
      return (res.data?.data || res.data || []) as any[];
    },
    staleTime: 1000 * 60 * 5,
  });
}

export function useAddMemberRoleMutation(projectId: string | null) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ userId, roleId }: { userId: string; roleId: string }) => {
      await adminApi.addProjectMember(projectId!, userId, roleId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: PROJECT_MEMBERS_KEY(projectId) });
    },
  });
}

export function useRemoveMemberRoleMutation(projectId: string | null) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ userId, roleId }: { userId: string; roleId: string }) => {
      await adminApi.removeProjectMember(projectId!, userId, roleId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: PROJECT_MEMBERS_KEY(projectId) });
    },
  });
}

export function useUpdateMemberRoleMutation(projectId: string | null) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ userId, oldRoleId, newRoleId }: { userId: string; oldRoleId: string; newRoleId: string }) => {
      await adminApi.removeProjectMember(projectId!, userId, oldRoleId);
      await adminApi.addProjectMember(projectId!, userId, newRoleId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: PROJECT_MEMBERS_KEY(projectId) });
    },
  });
}
