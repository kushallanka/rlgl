import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useProjectStore } from '../../../stores/project.store';
import { Plus, PlayCircle, AlertCircle } from 'lucide-react';
import { ErrorAlert } from '../../../shared/components';
import { usePermissionStore } from '../../../stores/permission.store';
import { useToggleSet } from '../../../hooks/useToggleSet';
import { useTestRunsList, useCreateTestRun, useUpdateTestRun, useUpdateTestRunResult, useSuitesQuery, useCasesBySuiteQuery, useDeleteTestRun } from '../hooks/useTestRuns';
import { TestRunCard } from '../components/TestRunCard';
import { CreateTestRunModal } from '../components/CreateTestRunModal';

export default function TestRunsPage() {
  const { activeProject } = useProjectStore();
  const projectId = activeProject?.id ?? null;
  const testRunsQuery = useTestRunsList(projectId);
  const createTestRunMutation = useCreateTestRun();
  const updateTestRunMutation = useUpdateTestRun();
  const deleteTestRunMutation = useDeleteTestRun();
  const updateResultMutation = useUpdateTestRunResult();
  const { data: suites = [] } = useSuitesQuery(projectId);

  const [isCreatingRun, setIsCreatingRun] = useState(false);
  const [runName, setRunName] = useState('');
  const [runDescription, setRunDescription] = useState('');
  const [selectedSuite, setSelectedSuite] = useState<string>('');
  const selectedCases = useToggleSet<string>();
  const [error, setError] = useState<string | null>(null);
  // One key per form session: double-clicks and network retries of the same
  // submission are deduped server-side; a fresh form gets a fresh key.
  const idempotencyKeyRef = useRef<string>(crypto.randomUUID());

  const { data: testCases = [] } = useCasesBySuiteQuery(selectedSuite || null);

  const expandedRunsState = useToggleSet<string>();

  const canCreateTestRun = usePermissionStore(s => s.hasPermission('testrun.create'));
  const canDeleteTestRun = usePermissionStore(s => s.hasPermission('testrun.delete'));

  const handleSuiteSelect = (suiteId: string) => {
    setSelectedSuite(suiteId);
    selectedCases.clear();
  };

  const handleCreateTestRun = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!runName.trim()) { setError('Test run name is required'); return; }
    if (selectedCases.size === 0) { setError('Please select at least one test case'); return; }

    try {
      setError(null);
      await createTestRunMutation.mutateAsync({
        name: runName, description: runDescription,
        projectId: projectId!, suiteId: selectedSuite,
        caseIds: Array.from(selectedCases.set),
        idempotencyKey: idempotencyKeyRef.current,
      });
      resetRunForm();
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to create test run');
    }
  };

  const resetRunForm = () => {
    setRunName(''); setRunDescription(''); setSelectedSuite('');
    selectedCases.clear(); setIsCreatingRun(false);
    idempotencyKeyRef.current = crypto.randomUUID();
  };

  const handleExpandRun = (runId: string) => {
    expandedRunsState.toggle(runId);
  };

  if (!activeProject) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center py-20 space-y-4">
        <div className="animate-float w-24 h-24 accent-gray rounded-3xl flex items-center justify-center accent-shadow">
          <PlayCircle className="w-12 h-12 text-gray-400 dark:text-white/50" />
        </div>
        <p className="text-gray-500 dark:text-white/50 font-body">Please select a project first</p>
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-4 min-w-0">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }} className="w-12 h-12 sm:w-14 sm:h-14 accent-green rounded-2xl flex items-center justify-center glow-green shadow-lg flex-shrink-0" aria-hidden="true">
            <PlayCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
          </motion.div>
          <div className="flex flex-col gap-1 min-w-0">
            <h1 className="text-2xl sm:text-3xl font-heading font-bold tracking-tight text-gray-900 dark:text-white">Test Runs</h1>
            <p className="text-gray-500 dark:text-white/50 font-body text-sm truncate">Execute and track test results for <span className="text-gray-700 dark:text-white/70">{activeProject?.name}</span></p>
          </div>
        </div>
        {canCreateTestRun && (
          <motion.button onClick={() => setIsCreatingRun(true)} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex items-center gap-2 px-4 sm:px-5 py-2.5 accent-blue text-white font-body font-medium rounded-xl glow-blue shadow-lg transition-ui text-sm min-h-[40px] flex-shrink-0 self-start sm:self-auto">
            <Plus className="w-5 h-5 flex-shrink-0" /> New Test Run
          </motion.button>
        )}
      </div>

      {error && <ErrorAlert message={error} onDismiss={() => setError(null)} />}

      <div className="grid grid-cols-1 gap-6">
        {/* default presence (no popLayout): cards no longer FLIP-measure the
            whole list on every data change; deletions still fade out */}
        <AnimatePresence>
          {testRunsQuery.isLoading ? (
            <div className="text-center py-12">
              <div className="w-8 h-8 border-2 border-violet-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-gray-400">Loading test runs...</p>
            </div>
          ) : testRunsQuery.isError ? (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-12 liquid-glass rounded-2xl accent-shadow">
              <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <p className="text-red-400 mb-4 font-body">Failed to load test runs</p>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => void testRunsQuery.refetch()} className="px-5 py-2.5 accent-blue text-white font-body font-medium rounded-xl glow-blue shadow-lg transition-ui text-sm">
                Retry
              </motion.button>
            </motion.div>
          ) : (testRunsQuery.data?.length ?? 0) > 0 ? (
            testRunsQuery.data?.map((run, idx) => (
              <TestRunCard
                key={run.id}
                run={run}
                index={idx}
                isExpanded={expandedRunsState.has(run.id)}
                onToggleExpand={handleExpandRun}
                canDelete={canDeleteTestRun}
                onDelete={(id) => deleteTestRunMutation.mutate(id)}
                onUpdateStatus={(resultId, status) => updateResultMutation.mutate({ resultId, status })}
                onEditSave={(runId, data) => updateTestRunMutation.mutate({ runId, data })}
                isSaving={updateTestRunMutation.isPending}
              />
            ))
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="col-span-full text-center py-12">
              <PlayCircle className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">No test runs yet</p>
              <p className="text-gray-500 text-sm mt-2">Create a test run to start executing tests</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <CreateTestRunModal
        isOpen={isCreatingRun}
        onClose={resetRunForm}
        runName={runName}
        onRunNameChange={setRunName}
        runDescription={runDescription}
        onRunDescriptionChange={setRunDescription}
        selectedSuite={selectedSuite}
        onSuiteChange={(id) => handleSuiteSelect(id)}
        suites={suites}
        testCases={testCases}
        selectedCaseIds={selectedCases.set}
        onToggleCase={(id) => selectedCases.toggle(id)}
        error={error}
        onSubmit={handleCreateTestRun}
        onCancel={resetRunForm}
      />
    </motion.div>
  );
}
