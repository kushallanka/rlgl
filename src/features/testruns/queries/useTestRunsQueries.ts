import { useQuery } from '@tanstack/react-query';
import type { TestRunDto } from '../api/testruns.api';
import { testrunsApi } from '../api/testruns.api';
import { TESTRUN_QUERY_KEYS } from '../constants';

export function useTestRunsList(projectId: string | null) {
  return useQuery({
    queryKey: TESTRUN_QUERY_KEYS.list(projectId),
    queryFn: async () => {
      if (!projectId) return [];
      const res = await testrunsApi.list(projectId);
      return (res.data?.data ?? res.data) as TestRunDto[];
    },
    enabled: !!projectId,
  });
}

export function useSuitesQuery(projectId: string | null) {
  return useQuery({
    queryKey: TESTRUN_QUERY_KEYS.suites(projectId),
    queryFn: async () => {
      if (!projectId) return [];
      const res = await testrunsApi.getSuites(projectId);
      return (res.data?.data || res.data || []) as any[];
    },
    enabled: !!projectId,
  });
}

export function useCasesBySuiteQuery(suiteId: string | null) {
  return useQuery({
    queryKey: TESTRUN_QUERY_KEYS.casesBySuite(suiteId),
    queryFn: async () => {
      if (!suiteId) return [];
      const res = await testrunsApi.getCasesBySuite(suiteId);
      return (res.data?.data || res.data || []) as any[];
    },
    enabled: !!suiteId,
  });
}
