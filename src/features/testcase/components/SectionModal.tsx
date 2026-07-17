import { Layout, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { type DropdownOption, GlassDropdown } from '../../../shared/components';
import { SectionFormData, TestSuite } from '../types/testcase.types';

interface SectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  formData: SectionFormData;
  setFormData: (data: SectionFormData) => void;
  suites: TestSuite[];
  selectedSuite: string | null;
  setSelectedSuite: (suiteId: string | null) => void;
  onSubmit: (e: React.FormEvent) => void;
  isEditing: boolean;
  isLoading: boolean;
}

export function SectionModal({
  isOpen,
  onClose,
  formData,
  setFormData,
  suites,
  selectedSuite,
  setSelectedSuite,
  onSubmit,
  isEditing,
  isLoading,
}: SectionModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.96, opacity: 0, y: 8 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.96, opacity: 0, y: 8 }}
          transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="glass-card rounded-3xl p-8 max-w-md w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="w-10 h-10 accent-teal rounded-xl flex items-center justify-center glow-teal"
              >
                <Layout className="w-5 h-5 text-white" />
              </motion.div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {isEditing ? 'Edit Section' : 'Create New Section'}
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={onSubmit} className="space-y-4">
            {!isEditing && (
              <GlassDropdown
                label="Suite"
                value={selectedSuite || ''}
                options={suites.map(
                  (suite): DropdownOption => ({
                    id: suite.id,
                    label: suite.name,
                  }),
                )}
                onChange={setSelectedSuite}
                placeholder="Select a suite"
                zIndex={20}
                emptyMessage="No suites available"
              />
            )}

            <div className="space-y-2">
              <label htmlFor="section-name" className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                Section Name
              </label>
              <input
                id="section-name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Authentication, Profile Settings"
                // biome-ignore lint/a11y/noAutofocus: focuses the first field of an explicitly user-triggered modal, not on page load
                autoFocus
                className="w-full px-4 py-3 glass-input rounded-2xl focus:ring-2 focus:ring-violet-500 outline-none transition-ui text-gray-900 dark:text-white"
                required
              />
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-3 border border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400 font-bold rounded-2xl hover:bg-gray-100 dark:hover:bg-white/5 transition-ui"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="flex-1 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold rounded-2xl shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 transition-ui disabled:opacity-50"
              >
                {isLoading ? 'Saving...' : isEditing ? 'Update Section' : 'Create Section'}
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
