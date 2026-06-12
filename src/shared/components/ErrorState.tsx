import { motion } from 'motion/react';
import { AlertCircle } from 'lucide-react';

type Props = {
  title?: string;
  message: string;
  onRetry?: () => void;
};

export function ErrorState({ title = 'Something went wrong', message, onRetry }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center min-h-[40vh] gap-4 text-center px-6"
      role="alert"
    >
      <motion.div
        initial={{ rotate: -10 }}
        animate={{ rotate: [0, -5, 5, 0] }}
        transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
        className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center shadow-lg shadow-red-500/20"
      >
        <AlertCircle className="w-8 h-8 text-red-400" />
      </motion.div>
      <div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 max-w-md">{message}</p>
      </div>
      {onRetry && (
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onRetry}
          className="mt-2 px-5 py-2.5 bg-gradient-to-r from-red-600 to-orange-500 text-white text-sm font-semibold rounded-xl shadow-lg shadow-red-500/20 hover:shadow-red-500/40 transition-ui"
        >
          Try again
        </motion.button>
      )}
    </motion.div>
  );
}
