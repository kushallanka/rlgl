import { useMutation, useQueryClient } from '@tanstack/react-query';
import { testcaseApi } from '../api/testcase.api';

export function useCreateCaseMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: any) => testcaseApi.createCase(data),
    onSuccess: (_, variables) => {
      if (variables.sectionId) {
        queryClient.invalidateQueries();
      }
    },
  });
}

export function useUpdateCaseMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) =>
      testcaseApi.updateCase(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
}

export function useDeleteCaseMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: testcaseApi.deleteCase,
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
}
