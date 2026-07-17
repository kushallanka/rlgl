import { AlertCircle, AlertTriangle, Check, Info, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { Toast } from '../hooks/useToast';

interface ToastComponentProps {
  toast: Toast;
  onRemove: (id: string) => void;
}

export function ToastComponent({ toast, onRemove }: ToastComponentProps) {
  const getIcon = () => {
    switch (toast.type) {
      case 'success':
        return <Check className="w-5 h-5" />;
      case 'error':
        return <AlertCircle className="w-5 h-5" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5" />;
      default:
        return <Info className="w-5 h-5" />;
    }
  };

  // Light/dark-aware semantic colors with sufficient contrast in both themes
  const getColors = () => {
    switch (toast.type) {
      case 'success':
        return 'bg-green-50  dark:bg-green-500/20  border-green-200  dark:border-green-500/30';
      case 'error':
        return 'bg-red-50    dark:bg-red-500/20    border-red-200    dark:border-red-500/30';
      case 'warning':
        return 'bg-yellow-50 dark:bg-yellow-500/20 border-yellow-200 dark:border-yellow-500/30';
      default:
        return 'bg-blue-50   dark:bg-blue-500/20   border-blue-200   dark:border-blue-500/30';
    }
  };

  const getIconColor = () => {
    switch (toast.type) {
      case 'success':
        return 'text-green-600  dark:text-green-400';
      case 'error':
        return 'text-red-600    dark:text-red-400';
      case 'warning':
        return 'text-yellow-600 dark:text-yellow-400';
      default:
        return 'text-blue-600   dark:text-blue-400';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0.95 }}
      transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`liquid-glass rounded-xl p-4 border ${getColors()} w-full shadow-lg`}
      role="alert"
      aria-live="polite"
    >
      <div className="flex items-start gap-3">
        <div className={`flex-shrink-0 mt-0.5 ${getIconColor()}`} aria-hidden="true">
          {getIcon()}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white">{toast.title}</h4>
          {toast.message && (
            <p className="text-sm text-gray-600 dark:text-white/70 mt-0.5 break-words">{toast.message}</p>
          )}
        </div>
        <button
          type="button"
          onClick={() => onRemove(toast.id)}
          className="flex-shrink-0 text-gray-400 dark:text-white/50 hover:text-gray-700 dark:hover:text-white transition-colors p-0.5 rounded min-w-[24px] min-h-[24px] flex items-center justify-center"
          aria-label="Dismiss notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}

interface ToastContainerProps {
  toasts: Toast[];
  onRemove: (id: string) => void;
}

export function ToastContainer({ toasts, onRemove }: ToastContainerProps) {
  return (
    /* z-[200] clears the mobile menu (z-40) and modal overlays (z-[100]) */
    <section
      className="fixed top-4 right-4 z-[200] space-y-2 pointer-events-none w-[calc(100vw-2rem)] sm:w-auto sm:max-w-sm"
      aria-label="Notifications"
      aria-live="polite"
    >
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => (
          <div key={toast.id} className="pointer-events-auto">
            <ToastComponent toast={toast} onRemove={onRemove} />
          </div>
        ))}
      </AnimatePresence>
    </section>
  );
}
