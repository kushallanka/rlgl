import { LogOut } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect } from 'react';
import { Button } from '../../../shared/ui';

interface LogoutConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  isLoading: boolean;
}

export function LogoutConfirmModal({ isOpen, onClose, onConfirm, isLoading }: LogoutConfirmModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !isLoading) onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, isLoading, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4"
          onClick={isLoading ? undefined : onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Confirm sign out"
            initial={{ scale: 0.96, opacity: 0, y: 8 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.96, opacity: 0, y: 8 }}
            transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-md w-full text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="glass-modal rounded-3xl p-8">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 bg-rose-500/10 border border-rose-500/20 dark:bg-rose-400/15 dark:border-rose-400/25">
                <LogOut className="w-7 h-7 text-rose-600 dark:text-rose-300" />
              </div>

              <h2 className="text-xl font-heading font-semibold tracking-tight text-fg mb-2">Sign out?</h2>
              <p className="text-sm text-fg-muted leading-relaxed mb-6">
                You will need to sign in again to access your account.
              </p>

              <div className="flex gap-3">
                <Button variant="secondary" fullWidth onClick={onClose} disabled={isLoading} autoFocus>
                  Cancel
                </Button>
                <Button variant="danger" fullWidth onClick={onConfirm} loading={isLoading}>
                  {isLoading ? 'Signing out…' : 'Sign out'}
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
