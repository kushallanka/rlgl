import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useProjectStore } from '../../../stores/project.store';
import { type Project, projectApi } from '../api/project.api';
import { PROJECTS_QUERY_KEY } from '../queryKeys';

export function useProjectsList() {
  const queryClient = useQueryClient();
  const setActiveProject = useProjectStore((s) => s.setActiveProject);

  const query = useQuery<Project[], Error>({
    queryKey: PROJECTS_QUERY_KEY,
    queryFn: () => projectApi.list(),
    staleTime: 0,
    gcTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    if (query.data && Array.isArray(query.data)) {
      useProjectStore.setState({ projects: query.data });
      const { activeProject } = useProjectStore.getState();
      if (activeProject) {
        const updated = query.data.find((p) => p.id === activeProject.id);
        if (updated && updated.name !== activeProject.name) {
          setActiveProject(updated);
        }
      }
    }
  }, [query.data, setActiveProject]);

  const createMutation = useMutation({
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

  const deleteMutation = useMutation({
    mutationFn: (id: string) => projectApi.delete(id),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: PROJECTS_QUERY_KEY });
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<Project> }) => projectApi.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: PROJECTS_QUERY_KEY });
    },
  });

  return {
    projects: query.data ?? [],
    isLoading: query.isLoading,
    isFetching: query.isFetching,
    isError: query.isError,
    error: query.error,
    refetch: () => query.refetch(),
    createMutation,
    deleteMutation,
    updateMutation,
  };
}
