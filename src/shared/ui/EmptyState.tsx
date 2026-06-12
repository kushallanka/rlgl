import type { ComponentType, ReactNode } from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/cn';

interface EmptyStateProps {
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  description?: string;
  /** Call to action, e.g. a <Button>. */
  action?: ReactNode;
  className?: string;
}

/** Friendly empty state: icon in a soft tile, message, and a way forward. */
export function EmptyState({ icon: Icon, title, description, action, className }: EmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={cn('flex flex-col items-center justify-center text-center py-16 px-6', className)}
    >
      <div className="w-14 h-14 rounded-2xl bg-accent/10 dark:bg-indigo-400/10 border border-accent/15 dark:border-indigo-400/20 flex items-center justify-center mb-4">
        <Icon className="w-7 h-7 text-accent dark:text-indigo-300" strokeWidth={1.75} />
      </div>
      <h3 className="text-base font-semibold text-fg">{title}</h3>
      {description && (
        <p className="text-sm text-fg-muted mt-1.5 max-w-sm leading-relaxed">{description}</p>
      )}
      {action && <div className="mt-5">{action}</div>}
    </motion.div>
  );
}
