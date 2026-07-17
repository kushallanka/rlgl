import { useMutation, useQueryClient } from '@tanstack/react-query';
import { projectApi } from '../api/project.api';
import { PROJECTS_QUERY_KEY } from '../queryKeys';
import type { Project } from '../types/project.types';

export function useCreateProjectMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: { name: string; description: string }) => projectApi.create(input),
    onMutate: async (variables) => {
      await queryClient.cancelQueries({ queryKey: PROJECTS_QUERY_KEY });
      const previous = queryClient.getQueryData<Project[]>(PROJECTS_QUERY_KEY);
      const optimistic: Project = {
        id: `optimistic-${Date.now()}`,
        name: variables.name,
        description: variables.description || '',
      };
      queryClient.setQueryData<Project[]>(PROJECTS_QUERY_KEY, (old = []) => [...old, optimistic]);
      return { previous };
    },
    onError: (_err, _variables, context) => {
      if (context?.previous) {
        queryClient.setQueryData(PROJECTS_QUERY_KEY, context.previous);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: PROJECTS_QUERY_KEY });
    },
  });
}

export function useDeleteProjectMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => projectApi.delete(id),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: PROJECTS_QUERY_KEY });
    },
  });
}

export function useUpdateProjectMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<Project> }) => projectApi.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: PROJECTS_QUERY_KEY });
    },
  });
}
