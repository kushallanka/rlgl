import { motion } from 'motion/react';

interface ErrorAlertProps {
  message: string;
  onDismiss?: () => void;
  onClose?: () => void;
  className?: string;
}

export function ErrorAlert({ message, onDismiss, onClose, className = '' }: ErrorAlertProps) {
  const handleDismiss = onDismiss || onClose;
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={`bg-red-500/10 border border-red-500/30 rounded-xl p-4 flex items-start justify-between ${className}`}
    >
      <div>
        <p className="text-red-300 font-semibold">Error</p>
        <p className="text-red-200 text-sm mt-1">{message}</p>
      </div>
      {handleDismiss && (
        <button
          onClick={handleDismiss}
          className="text-red-300 hover:text-red-200 transition-colors ml-4 flex-shrink-0"
        >
          ✕
        </button>
      )}
    </motion.div>
  );
}
