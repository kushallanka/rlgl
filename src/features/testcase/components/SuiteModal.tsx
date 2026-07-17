import { Layers, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { SuiteFormData } from '../types/testcase.types';

interface SuiteModalProps {
  isOpen: boolean;
  onClose: () => void;
  formData: SuiteFormData;
  setFormData: (data: SuiteFormData) => void;
  onSubmit: (e: React.FormEvent) => void;
  isEditing: boolean;
  isLoading: boolean;
}

export function SuiteModal({
  isOpen,
  onClose,
  formData,
  setFormData,
  onSubmit,
  isEditing,
  isLoading,
}: SuiteModalProps) {
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
          className="glass-modal rounded-3xl p-8 max-w-md w-full glass-shadow border border-gray-200 dark:border-white/10"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="w-14 h-14 accent-purple rounded-2xl flex items-center justify-center glow-purple shadow-lg"
            >
              <Layers className="w-7 h-7 text-white" />
            </motion.div>
            <div>
              <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white">
                {isEditing ? 'Edit Suite' : 'Create New Suite'}
              </h2>
              <p className="text-sm text-gray-500 dark:text-white/50 font-body">
                {isEditing ? 'Update suite details' : 'Add a test suite to organize your cases'}
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
              <label
                htmlFor="suite-name"
                className="text-[11px] font-body font-medium text-gray-500 dark:text-white/60 uppercase tracking-wider"
              >
                Suite Name
              </label>
              <input
                id="suite-name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. User Authentication"
                className="w-full px-4 py-3.5 liquid-glass rounded-xl focus:ring-2 focus:ring-violet-500/50 outline-none transition-ui text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30"
                // biome-ignore lint/a11y/noAutofocus: focuses the first field of an explicitly user-triggered modal, not on page load
                autoFocus
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="suite-description"
                className="text-[11px] font-body font-medium text-gray-500 dark:text-white/60 uppercase tracking-wider"
              >
                Description
              </label>
              <textarea
                id="suite-description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Describe the test suite..."
                rows={3}
                className="w-full px-4 py-3.5 liquid-glass rounded-xl focus:ring-2 focus:ring-violet-500/50 outline-none transition-ui text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 resize-none"
              />
            </div>

            <div className="flex gap-3 pt-4">
              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onClose}
                className="flex-1 py-3 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-white/70 font-body font-medium hover:bg-gray-200 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white transition-ui"
              >
                Cancel
              </motion.button>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isLoading}
                className="flex-1 py-3 rounded-xl accent-purple text-white font-body font-medium glow-purple shadow-lg transition-ui disabled:opacity-50"
              >
                {isLoading ? 'Saving...' : isEditing ? 'Update Suite' : 'Create Suite'}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
