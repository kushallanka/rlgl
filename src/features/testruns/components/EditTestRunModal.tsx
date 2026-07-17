import { PlayCircle, Save, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import type { TestRun } from '../types';

interface EditTestRunModalProps {
  isOpen: boolean;
  run: TestRun | null;
  onClose: () => void;
  onSave: (runId: string, data: { name: string; description: string; version?: number }) => void;
  isSaving?: boolean | undefined;
}

export function EditTestRunModal({ isOpen, run, onClose, onSave, isSaving }: EditTestRunModalProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (run) {
      setName(run.name);
      setDescription(run.description ?? '');
    }
  }, [run]);

  if (!isOpen || !run) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    // Pass the version we loaded so the server can reject the save if the
    // run changed underneath us (409) instead of silently overwriting.
    onSave(run.id, {
      name: name.trim(),
      description: description.trim(),
      ...(run.version !== undefined ? { version: run.version } : {}),
    });
  };

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
          className="w-full max-w-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="glass-modal rounded-3xl p-8 glass-shadow border border-gray-200 dark:border-white/10">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 accent-blue rounded-2xl flex items-center justify-center glow-blue shadow-lg flex-shrink-0">
                <PlayCircle className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-heading font-semibold text-gray-900 dark:text-white">Edit Test Run</h2>
                <p className="text-gray-400 dark:text-white/40 text-sm font-body">Update name and description</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-xl text-gray-400 dark:text-white/40 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/[0.08] transition-ui"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div className="space-y-2">
                <label
                  htmlFor="edit-run-name"
                  className="text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-white/40"
                >
                  Name <span className="text-red-500 dark:text-red-400">*</span>
                </label>
                <input
                  id="edit-run-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Test run name"
                  required
                  className="w-full px-4 py-3 glass-input rounded-2xl text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/25 outline-none focus:ring-2 focus:ring-blue-500/50 transition-ui"
                />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label
                  htmlFor="edit-run-description"
                  className="text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-white/40"
                >
                  Description
                </label>
                <textarea
                  id="edit-run-description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Optional description"
                  rows={3}
                  className="w-full px-4 py-3 glass-input rounded-2xl text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/25 outline-none focus:ring-2 focus:ring-blue-500/50 transition-ui resize-none"
                />
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-2">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onClose}
                  disabled={isSaving}
                  className="flex-1 py-3 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-white/60 font-body font-medium hover:bg-gray-200 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white transition-ui disabled:opacity-50"
                >
                  Cancel
                </motion.button>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSaving || !name.trim()}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl accent-blue text-white font-body font-medium glow-blue shadow-lg transition-ui disabled:opacity-50"
                >
                  <Save className="w-4 h-4" />
                  {isSaving ? 'Saving…' : 'Save Changes'}
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
