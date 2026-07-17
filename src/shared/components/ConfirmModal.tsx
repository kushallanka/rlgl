import { Check, Trash2 } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  itemName?: string;
  onConfirm: () => void;
  isSuccess?: boolean;
  error?: string | null;
  isLoading?: boolean;
  variant?: 'danger' | 'success';
}

export function ConfirmModal({
  isOpen,
  onClose,
  title,
  description,
  itemName,
  onConfirm,
  isSuccess = false,
  error = null,
  isLoading = false,
  variant = 'danger',
}: ConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
        onClick={() => !isSuccess && onClose()}
      >
        <motion.div
          initial={{ scale: 0.96, opacity: 0, y: 8 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.96, opacity: 0, y: 8 }}
          transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-md w-full text-center"
          onClick={(e) => e.stopPropagation()}
        >
          {!isSuccess ? (
            <div className="glass-modal rounded-3xl p-8 glass-shadow border border-gray-200 dark:border-white/10">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{
                  background:
                    variant === 'danger'
                      ? 'linear-gradient(135deg, #FF3B30 0%, #DC2626 100%)'
                      : 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                  boxShadow:
                    variant === 'danger'
                      ? '0 4px 20px rgba(255, 59, 48, 0.5), 0 0 40px rgba(255, 59, 48, 0.2)'
                      : '0 4px 20px rgba(16, 185, 129, 0.5), 0 0 40px rgba(16, 185, 129, 0.2)',
                }}
              >
                {variant === 'danger' ? (
                  <Trash2 className="w-8 h-8 text-white" />
                ) : (
                  <Check className="w-8 h-8 text-white" />
                )}
              </motion.div>

              <h2 className="text-2xl font-heading font-semibold text-gray-900 dark:text-white mb-2">{title}</h2>
              {itemName && (
                <p className="text-gray-500 dark:text-white/60 font-body mb-2">
                  Are you sure you want to delete{' '}
                  <span className="text-gray-900 dark:text-white font-medium">{itemName}</span>?
                </p>
              )}
              {description && <p className="text-red-500 dark:text-red-400/80 font-body text-sm mb-6">{description}</p>}

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-300 text-sm font-body mb-4"
                >
                  {error}
                </motion.div>
              )}

              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onClose}
                  disabled={isLoading}
                  className="flex-1 py-3 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-white/70 font-body font-medium hover:bg-gray-200 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white transition-ui disabled:opacity-50"
                >
                  Cancel
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onConfirm}
                  disabled={isLoading}
                  className="flex-1 py-3 rounded-xl text-white font-body font-medium transition-ui disabled:opacity-50"
                  style={{
                    background:
                      variant === 'danger'
                        ? 'linear-gradient(135deg, #FF3B30 0%, #DC2626 100%)'
                        : 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                    boxShadow:
                      variant === 'danger' ? '0 4px 20px rgba(255, 59, 48, 0.4)' : '0 4px 20px rgba(16, 185, 129, 0.4)',
                  }}
                >
                  {isLoading ? 'Processing...' : variant === 'danger' ? 'Delete' : 'Confirm'}
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
              <p className="text-gray-900 dark:text-white font-body">
                {title.replace('Delete ', '').replace('?', '')} deleted successfully!
              </p>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
