import { useThemeStore } from '../../stores/theme.store';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useThemeStore();
  const isDark = theme === 'dark';

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.button
        onClick={toggleTheme}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 28, delay: 0.4 }}
        className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl
          bg-white dark:bg-zinc-900
          border border-zinc-200/80 dark:border-zinc-700/60
          shadow-lg shadow-black/[0.08] dark:shadow-black/40
          text-zinc-700 dark:text-zinc-300
          text-[13px] font-semibold tracking-wide
          backdrop-blur-sm
          transition-colors duration-200 select-none"
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.span
              key="sun"
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="flex items-center"
            >
              <Sun className="w-4 h-4 text-amber-500" strokeWidth={2.2} />
            </motion.span>
          ) : (
            <motion.span
              key="moon"
              initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="flex items-center"
            >
              <Moon className="w-4 h-4 text-indigo-500" strokeWidth={2.2} />
            </motion.span>
          )}
        </AnimatePresence>
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isDark ? 'light-label' : 'dark-label'}
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 4 }}
            transition={{ duration: 0.15 }}
          >
            {isDark ? 'Light' : 'Dark'}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
