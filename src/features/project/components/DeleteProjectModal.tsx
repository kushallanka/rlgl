import { Check, Trash2 } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { Project } from '../types/project.types';

interface DeleteProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectToDelete: Project | null;
  deleteSuccess: boolean;
  deleteError: string | null;
  deletingProjectId: string | null;
  onConfirmDelete: () => void;
}

export function DeleteProjectModal({
  isOpen,
  onClose,
  projectToDelete,
  deleteSuccess,
  deleteError,
  deletingProjectId,
  onConfirmDelete,
}: DeleteProjectModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
        onClick={() => !deleteSuccess && onClose()}
      >
        <motion.div
          initial={{ scale: 0.96, opacity: 0, y: 8 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.96, opacity: 0, y: 8 }}
          transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-md w-full text-center"
          onClick={(e) => e.stopPropagation()}
        >
          {!deleteSuccess ? (
            <div className="glass-modal rounded-3xl p-8 glass-shadow border border-gray-200 dark:border-white/10">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{
                  background: 'linear-gradient(135deg, #FF3B30 0%, #DC2626 100%)',
                  boxShadow: '0 4px 20px rgba(255, 59, 48, 0.5), 0 0 40px rgba(255, 59, 48, 0.2)',
                }}
              >
                <Trash2 className="w-8 h-8 text-white" />
              </motion.div>

              <h2 className="text-2xl font-heading font-semibold text-gray-900 dark:text-white mb-2">
                Delete Project?
              </h2>
              <p className="text-gray-500 dark:text-white/60 font-body mb-6">
                Are you sure you want to delete{' '}
                <span className="text-gray-900 dark:text-white font-medium">{projectToDelete?.name}</span>? This action
                cannot be undone.
              </p>

              {deleteError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-300 text-sm font-body mb-4"
                >
                  {deleteError}
                </motion.div>
              )}

              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onClose}
                  disabled={deletingProjectId !== null}
                  className="flex-1 py-3 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-white/70 font-body font-medium hover:bg-gray-200 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white transition-ui disabled:opacity-50"
                >
                  Cancel
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onConfirmDelete}
                  disabled={deletingProjectId !== null}
                  className="flex-1 py-3 rounded-xl text-white font-body font-medium transition-ui disabled:opacity-50"
                  style={{
                    background: 'linear-gradient(135deg, #FF3B30 0%, #DC2626 100%)',
                    boxShadow: '0 4px 20px rgba(255, 59, 48, 0.4)',
                  }}
                >
                  {deletingProjectId !== null ? 'Deleting...' : 'Delete'}
                </motion.button>
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="glass-modal rounded-3xl p-8 glass-shadow"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="w-16 h-16 accent-green rounded-2xl flex items-center justify-center mx-auto mb-4 glow-green"
              >
                <Check className="w-8 h-8 text-white" />
              </motion.div>
              <p className="text-gray-900 dark:text-white font-body">Project deleted successfully!</p>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
