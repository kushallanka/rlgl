import { useMutation, useQueryClient } from '@tanstack/react-query';
import { testcaseApi } from '../api/testcase.api';
import { TESTCASE_QUERY_KEYS } from '../constants';
import type { TestSuite } from '../types/testcase.types';

export function useCreateSuiteMutation(projectId: string | null) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: { name: string; description?: string; projectId: string }) =>
      testcaseApi.createSuite(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: TESTCASE_QUERY_KEYS.suites(projectId) });
    },
  });
}

export function useUpdateSuiteMutation(projectId: string | null) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: { name: string; description?: string } }) =>
      testcaseApi.updateSuite(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: TESTCASE_QUERY_KEYS.suites(projectId) });
    },
  });
}

export function useDeleteSuiteMutation(projectId: string | null) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: testcaseApi.deleteSuite,
    onSuccess: (_, suiteId) => {
      queryClient.setQueryData<TestSuite[]>(
        TESTCASE_QUERY_KEYS.suites(projectId),
        (old) => old?.filter(s => s.id !== suiteId)
      );
    },
  });
}
