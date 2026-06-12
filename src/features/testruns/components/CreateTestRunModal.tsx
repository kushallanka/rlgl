import { Modal, FormInput, FormTextarea } from '../../../shared/components';
import { GlassDropdown } from '../../../shared/components/GlassDropdown';
import { Checkbox } from '../../../shared/components/Checkbox';

interface CreateTestRunModalProps {
  isOpen: boolean;
  onClose: () => void;
  runName: string;
  onRunNameChange: (name: string) => void;
  runDescription: string;
  onRunDescriptionChange: (desc: string) => void;
  selectedSuite: string;
  onSuiteChange: (suiteId: string) => void;
  suites: Array<{ id: string; name: string }>;
  testCases: Array<{ id: string; title: string }>;
  selectedCaseIds: Set<string>;
  onToggleCase: (caseId: string) => void;
  error: string | null;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
}

export function CreateTestRunModal({
  isOpen, onClose, runName, onRunNameChange, runDescription, onRunDescriptionChange,
  selectedSuite, onSuiteChange, suites, testCases, selectedCaseIds, onToggleCase,
  error, onSubmit, onCancel,
}: CreateTestRunModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Create New Test Run" maxWidth="max-w-2xl">
      <form onSubmit={onSubmit} className="space-y-4">
        <FormInput
          label="Test Run Name *"
          type="text"
          value={runName}
          onChange={(e) => onRunNameChange(e.target.value)}
          placeholder="e.g. Regression Test Run - Build v1.2.3"
        />
        <FormTextarea
          label="Description"
          value={runDescription}
          onChange={(e) => onRunDescriptionChange(e.target.value)}
          placeholder="Details about this test run..."
          rows={2}
        />
        <GlassDropdown
          label="Select Test Suite *"
          value={selectedSuite}
          options={suites.map((s) => ({ id: s.id, label: s.name }))}
          onChange={onSuiteChange}
          placeholder="Choose a suite..."
          zIndex={20}
          emptyMessage="No suites available"
        />
        {selectedSuite && testCases.length > 0 && (
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              Select Test Cases ({selectedCaseIds.size} selected) *
            </label>
            <div className="bg-gray-50 dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 rounded-2xl p-4 max-h-64 overflow-y-auto space-y-2">
              {testCases.map((tc) => (
                <div key={tc.id} className="px-2 py-1.5 hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg transition-colors">
                  <Checkbox
                    checked={selectedCaseIds.has(tc.id)}
                    onChange={() => onToggleCase(tc.id)}
                    label={tc.title}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        {error && (
          <div className="bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30 rounded-xl p-3">
            <p className="text-red-600 dark:text-red-300 text-sm">{error}</p>
          </div>
        )}
        <div className="flex gap-4 pt-4">
          <button type="button" onClick={onCancel} className="flex-1 py-3 border border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400 font-bold rounded-2xl hover:bg-gray-100 dark:hover:bg-white/5 transition-ui">
            Cancel
          </button>
          <button type="submit" className="flex-1 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold rounded-2xl shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 transition-ui disabled:opacity-50">
            Create Test Run
          </button>
        </div>
      </form>
    </Modal>
  );
}
