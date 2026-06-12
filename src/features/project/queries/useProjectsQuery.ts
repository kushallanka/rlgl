import { useQuery } from '@tanstack/react-query';
import { projectApi } from '../api/project.api';
import { PROJECTS_QUERY_KEY } from '../queryKeys';
import type { Project } from '../types/project.types';

export function useProjectsQuery() {
  return useQuery<Project[], Error>({
    queryKey: PROJECTS_QUERY_KEY,
    queryFn: () => projectApi.list(),
    staleTime: 0,
    gcTime: 1000 * 60 * 5,
  });
}
