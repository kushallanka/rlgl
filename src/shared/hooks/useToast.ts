import { useToastStore } from '../../stores/toast.store';
import type { Toast } from '../../stores/toast.store';

export type { Toast };

export function useToast() {
  const { toasts, addToast, removeToast, clearAll } = useToastStore();

  const success = (title: string, message?: string, duration?: number) => {
    return addToast({ type: 'success', title, message, duration });
  };

  const error = (title: string, message?: string, duration?: number) => {
    return addToast({ type: 'error', title, message, duration: duration ?? 7000 });
  };

  const warning = (title: string, message?: string, duration?: number) => {
    return addToast({ type: 'warning', title, message, duration });
  };

  const info = (title: string, message?: string, duration?: number) => {
    return addToast({ type: 'info', title, message, duration });
  };

  return {
    toasts,
    addToast,
    removeToast,
    success,
    error,
    warning,
    info,
    clearAll,
  };
}
