import { useMutation, useQueryClient, type QueryClient } from '@tanstack/react-query';
import { testrunsApi, CreateTestRunInput, type TestRunDto } from '../api/testruns.api';

// All cached run lists (one per project) — narrower than ['testruns'] so we
// don't needlessly refetch suites/cases queries.
const LIST_KEY = ['testruns', 'list'] as const;

type ListSnapshot = ReturnType<QueryClient['getQueriesData']>;

/**
 * Optimistic-update helpers: patch the cached lists in place so the UI
 * responds on the same frame as the click, then reconcile with the server in
 * the background (onSettled invalidate keeps versions/derived fields fresh).
 */
function patchResultStatus(queryClient: QueryClient, resultIds: string[], status: string) {
  const idSet = new Set(resultIds.map(String));
  queryClient.setQueriesData<TestRunDto[]>({ queryKey: LIST_KEY }, (old) => {
    if (!old) return old;
    return old.map((run) => {
      if (!run.results?.some((r) => idSet.has(String(r.id)))) return run;
      return {
        ...run,
        results: run.results.map((r) => (idSet.has(String(r.id)) ? { ...r, status } : r)),
      };
    });
  });
}

function patchRun(queryClient: QueryClient, runId: string, patch: Partial<TestRunDto>) {
  queryClient.setQueriesData<TestRunDto[]>({ queryKey: LIST_KEY }, (old) =>
    old?.map((run) => (String(run.id) === String(runId) ? { ...run, ...patch } : run)),
  );
}

function snapshotLists(queryClient: QueryClient): ListSnapshot {
  return queryClient.getQueriesData({ queryKey: LIST_KEY });
}

function restoreLists(queryClient: QueryClient, snapshot: ListSnapshot | undefined) {
  snapshot?.forEach(([key, data]) => queryClient.setQueryData(key, data));
}

export function useCreateTestRun() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (input: CreateTestRunInput) => testrunsApi.create(input),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: LIST_KEY });
    },
  });
}

export function useUpdateTestRunResult() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ resultId, status }: { resultId: string; status: string }) =>
      testrunsApi.updateResult(resultId, status),
    onMutate: async ({ resultId, status }) => {
      await queryClient.cancelQueries({ queryKey: LIST_KEY });
      const previous = snapshotLists(queryClient);
      patchResultStatus(queryClient, [resultId], status);
      return { previous };
    },
    onError: (_err, _vars, ctx) => restoreLists(queryClient, ctx?.previous),
    onSettled: () => queryClient.invalidateQueries({ queryKey: LIST_KEY }),
  });
}

export function useUpdateTestRun() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ runId, data }: { runId: string; data: { name?: string; description?: string; version?: number } }) =>
      testrunsApi.update(runId, data),
    onMutate: async ({ runId, data }) => {
      await queryClient.cancelQueries({ queryKey: LIST_KEY });
      const previous = snapshotLists(queryClient);
      const { version: _version, ...patch } = data;
      patchRun(queryClient, runId, patch);
      return { previous };
    },
    onError: (_err, _vars, ctx) => restoreLists(queryClient, ctx?.previous),
    onSettled: () => queryClient.invalidateQueries({ queryKey: LIST_KEY }),
  });
}

export function useDeleteTestRun() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (runId: string) => testrunsApi.delete(runId),
    onMutate: async (runId) => {
      await queryClient.cancelQueries({ queryKey: LIST_KEY });
      const previous = snapshotLists(queryClient);
      queryClient.setQueriesData<TestRunDto[]>({ queryKey: LIST_KEY }, (old) =>
        old?.filter((run) => String(run.id) !== String(runId)),
      );
      return { previous };
    },
    onError: (_err, _vars, ctx) => restoreLists(queryClient, ctx?.previous),
    onSettled: () => queryClient.invalidateQueries({ queryKey: LIST_KEY }),
  });
}

export function useBulkUpdateTestRunResults() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ resultIds, status }: { resultIds: string[]; status: string }) => {
      const updatePromises = resultIds.map(resultId =>
        testrunsApi.updateResult(resultId, status)
      );
      const results = await Promise.all(updatePromises);
      return { updated: results.length };
    },
    onMutate: async ({ resultIds, status }) => {
      await queryClient.cancelQueries({ queryKey: LIST_KEY });
      const previous = snapshotLists(queryClient);
      patchResultStatus(queryClient, resultIds, status);
      return { previous };
    },
    onError: (_err, _vars, ctx) => restoreLists(queryClient, ctx?.previous),
    onSettled: () => queryClient.invalidateQueries({ queryKey: LIST_KEY }),
  });
}
