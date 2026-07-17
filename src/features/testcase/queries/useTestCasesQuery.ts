import { useQuery } from '@tanstack/react-query';
import { testcaseApi } from '../api/testcase.api';
import { TESTCASE_QUERY_KEYS } from '../constants';
import type { TestSuite } from '../types/testcase.types';

export function useSuitesQuery(projectId: string | null) {
  return useQuery<TestSuite[]>({
    queryKey: TESTCASE_QUERY_KEYS.suites(projectId),
    queryFn: () => testcaseApi.getSuites(projectId!).then((res) => res.data?.data ?? res.data),
    enabled: !!projectId,
  });
}
