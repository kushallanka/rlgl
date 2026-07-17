import { useMutation, useQueryClient } from '@tanstack/react-query';
import { testcaseApi } from '../api/testcase.api';
import { TESTCASE_QUERY_KEYS } from '../constants';

export function useCreateSectionMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: { name: string; suiteId: string }) => testcaseApi.createSection(data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: TESTCASE_QUERY_KEYS.sections(variables.suiteId) });
    },
  });
}

export function useUpdateSectionMutation(sections: Record<string, any[]>) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: { name: string } }) => testcaseApi.updateSection(id, data),
    onSuccess: (_, variables) => {
      const suiteId = Object.keys(sections).find((key) => sections[key]?.some((s) => s.id === variables.id));
      if (suiteId) {
        queryClient.invalidateQueries({ queryKey: TESTCASE_QUERY_KEYS.sections(suiteId) });
      }
    },
  });
}

export function useDeleteSectionMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: testcaseApi.deleteSection,
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
}
