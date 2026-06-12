import { useQueries } from '@tanstack/react-query';
import { dashboardApi } from '../api/dashboard.api';

export function useDashboardData(projectId: string | null) {
  const enabled = !!projectId;

  const results = useQueries({
    queries: [
      {
        queryKey: ['dashboard', 'cases', projectId],
        enabled,
        staleTime: 20_000,
        queryFn: async () => {
          const { data } = await dashboardApi.getCases(projectId!);
          return (data as { data?: unknown[] }).data ?? [];
        },
      },
      {
        queryKey: ['dashboard', 'runs', projectId],
        enabled,
        staleTime: 20_000,
        queryFn: async () => {
          const { data } = await dashboardApi.getRuns(projectId!);
          return (data as { data?: unknown[] }).data ?? [];
        },
      },
      {
        queryKey: ['dashboard', 'activities', projectId],
        enabled,
        staleTime: 15_000,
        retry: false,
        queryFn: async () => {
          try {
            const { data } = await dashboardApi.getActivities(projectId!);
            return (data as unknown[]) || [];
          } catch {
            return [];
          }
        },
      },
    ],
  });

  const [casesQuery, runsQuery, activitiesQuery] = results;

  const isLoading = enabled && results.some((r) => r.isLoading);
  const isFetching = enabled && results.some((r) => r.isFetching);
  const isError = results.some((r) => r.isError);
  const refetch = () => {
    void Promise.all(results.map((r) => r.refetch()));
  };

  const failed = results.find((r) => r.isError);
  const errorMessage = failed?.error != null ? String(failed.error) : undefined;

  return {
    cases: casesQuery.data,
    runs: runsQuery.data,
    activities: activitiesQuery.data,
    isLoading,
    isFetching,
    isError,
    refetch,
    errorMessage,
  };
}
