import { motion, AnimatePresence } from 'motion/react';
import { X, Edit2, ChevronDown } from 'lucide-react';
import { TestCaseFormData } from '../types/testcase.types';
import { DynamicFormFields } from '../../../shared/components';

interface TestCaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  formData: TestCaseFormData;
  setFormData: (data: TestCaseFormData) => void;
  configSchema?: any;
  fieldErrors: Record<string, string>;
  setFieldErrors: (errors: Record<string, string>) => void;
  isPriorityOpen: boolean;
  setIsPriorityOpen: (open: boolean) => void;
  isTypeOpen: boolean;
  setIsTypeOpen: (open: boolean) => void;
  onSubmit: (e: React.FormEvent) => void;
  isEditing: boolean;
  isLoading: boolean;
}

export function TestCaseModal({
  isOpen,
  onClose,
  formData,
  setFormData,
  configSchema,
  fieldErrors,
  setFieldErrors,
  isPriorityOpen,
  setIsPriorityOpen,
  isTypeOpen,
  setIsTypeOpen,
  onSubmit,
  isEditing,
  isLoading,
}: TestCaseModalProps) {
  if (!isOpen) return null;

  const handleCustomFieldChange = (fieldId: string, value: any) => {
    setFormData({
      ...formData,
      customFieldValues: {
        ...formData.customFieldValues,
        [fieldId]: value
      }
    });
    
    // Clear error for this field when user starts typing
    if (fieldErrors[fieldId]) {
      setFieldErrors({
        ...fieldErrors,
        [fieldId]: ''
      });
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 z-50 overflow-y-auto"
        onClick={onClose}
      >
        <div className="min-h-full w-full flex items-center justify-center p-4 py-12">
          <motion.div
            initial={{ scale: 0.96, opacity: 0, y: 8 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.96, opacity: 0, y: 8 }}
            transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="glass-card rounded-3xl p-6 md:p-8 max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={`w-14 h-14 ${isEditing ? 'accent-teal' : 'accent-purple'} rounded-2xl flex items-center justify-center ${isEditing ? 'glow-teal' : 'glow-purple'} shadow-lg`}
              >
                <Edit2 className="w-7 h-7 text-white" />
              </motion.div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {isEditing ? 'Edit Test Case' : 'Create Test Case'}
                </h2>
                <p className="text-sm text-gray-500 dark:text-white/50 font-body">
                  {isEditing ? 'Update test case details' : 'Add a new test case to your repository'}
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="ml-auto p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-xl text-gray-400 dark:text-white/50 hover:text-gray-900 dark:hover:text-white transition-ui"
              >
                <X className="w-6 h-6" />
              </motion.button>
            </div>

            <form onSubmit={onSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Test Case Title *</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g. User Login with Valid Credentials"
                  className="w-full px-4 py-3 glass-input rounded-2xl focus:ring-2 focus:ring-violet-500 outline-none transition-ui text-gray-900 dark:text-white"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4 relative z-20">
                <div className="space-y-2 relative">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Priority</label>
                  <button
                    type="button"
                    onClick={() => {
                      setIsPriorityOpen(!isPriorityOpen);
                      setIsTypeOpen(false);
                    }}
                    className="w-full flex items-center justify-between px-4 py-3 glass-input rounded-2xl focus:ring-2 focus:ring-violet-500 outline-none transition-ui text-sm text-white"
                  >
                    <span>{formData.priority || 'Select Priority'}</span>
                    <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isPriorityOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isPriorityOpen && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -5 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -5 }}
                        className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-900/95 rounded-2xl overflow-hidden z-50 shadow-2xl border border-gray-200 dark:border-white/20"
                      >
                        {(configSchema?.priorities || []).map((p: any, i: any) => (
                          <button
                            key={p.id}
                            type="button"
                            onClick={() => {
                              setFormData({ ...formData, priority: p.name });
                              setIsPriorityOpen(false);
                            }}
                            className={`w-full text-left px-4 py-3 hover:bg-violet-100 dark:hover:bg-violet-600/80 text-gray-900 dark:text-white transition-colors text-sm font-medium ${i % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800/50' : 'bg-white dark:bg-gray-800/30'}`}
                          >
                            {p.name}
                          </button>
                        ))}
                        {(!configSchema?.priorities || configSchema.priorities.length === 0) && (
                          <div className="px-4 py-3 text-gray-500 dark:text-gray-300 text-sm">No priorities configured</div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="space-y-2 relative">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Type</label>
                  <button
                    type="button"
                    onClick={() => {
                      setIsTypeOpen(!isTypeOpen);
                      setIsPriorityOpen(false);
                    }}
                    className="w-full flex items-center justify-between px-4 py-3 glass-input rounded-2xl focus:ring-2 focus:ring-violet-500 outline-none transition-ui text-sm text-white"
                  >
                    <span>{formData.type || 'Select Type'}</span>
                    <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isTypeOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isTypeOpen && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -5 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -5 }}
                        className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-900/95 rounded-2xl overflow-hidden z-50 shadow-2xl border border-gray-200 dark:border-white/20"
                      >
                        {(configSchema?.types || []).map((t: any, i: any) => (
                          <button
                            key={t.id}
                            type="button"
                            onClick={() => {
                              setFormData({ ...formData, type: t.name });
                              setIsTypeOpen(false);
                            }}
                            className={`w-full text-left px-4 py-3 hover:bg-violet-100 dark:hover:bg-violet-600/80 text-gray-900 dark:text-white transition-colors text-sm font-medium ${i % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800/50' : 'bg-white dark:bg-gray-800/30'}`}
                          >
                            {t.name}
                          </button>
                        ))}
                        {(!configSchema?.types || configSchema.types.length === 0) && (
                          <div className="px-4 py-3 text-gray-500 dark:text-gray-300 text-sm">No types configured</div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Detailed description of the test case..."
                  rows={2}
                  className="w-full px-4 py-3 glass-input rounded-2xl focus:ring-2 focus:ring-violet-500 outline-none transition-ui text-gray-900 dark:text-white resize-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Preconditions</label>
                <textarea
                  value={formData.preconditions}
                  onChange={(e) => setFormData({ ...formData, preconditions: e.target.value })}
                  placeholder="Prerequisites for running this test case..."
                  rows={2}
                  className="w-full px-4 py-3 glass-input rounded-2xl focus:ring-2 focus:ring-violet-500 outline-none transition-ui text-gray-900 dark:text-white resize-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Test Steps (One per line)</label>
                <textarea
                  value={formData.steps}
                  onChange={(e) => setFormData({ ...formData, steps: e.target.value })}
                  placeholder="Step 1&#10;Step 2&#10;Step 3"
                  rows={3}
                  className="w-full px-4 py-3 glass-input rounded-2xl focus:ring-2 focus:ring-violet-500 outline-none transition-ui text-gray-900 dark:text-white resize-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Expected Result</label>
                <textarea
                  value={formData.expectedResult}
                  onChange={(e) => setFormData({ ...formData, expectedResult: e.target.value })}
                  placeholder="What should happen when the steps are executed..."
                  rows={2}
                  className="w-full px-4 py-3 glass-input rounded-2xl focus:ring-2 focus:ring-violet-500 outline-none transition-ui text-gray-900 dark:text-white resize-none"
                />
              </div>

              {/* Dynamic Custom Fields */}
              {configSchema?.customFields && configSchema.customFields.length > 0 && (
                <div className="border-t border-gray-200 dark:border-white/10 pt-4 mt-4">
                  <h3 className="text-[10px] font-bold text-gray-400 dark:text-gray-400 uppercase tracking-widest mb-4">Custom Fields</h3>
                  <DynamicFormFields
                    fields={configSchema.customFields}
                    values={formData.customFieldValues}
                    onChange={handleCustomFieldChange}
                    errors={fieldErrors}
                  />
                </div>
              )}

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
                  {isLoading ? 'Saving...' : (isEditing ? 'Update Test Case' : 'Create Test Case')}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
