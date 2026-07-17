import { motion } from 'motion/react';
import type { ComponentType } from 'react';
import { cn } from '../../lib/cn';

const tones = {
  accent: {
    tile: 'bg-accent/10 text-accent border-accent/15 dark:bg-indigo-400/15 dark:text-indigo-300 dark:border-indigo-400/20',
  },
  success: {
    tile: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/15 dark:bg-emerald-400/15 dark:text-emerald-300 dark:border-emerald-400/20',
  },
  danger: {
    tile: 'bg-rose-500/10 text-rose-600 border-rose-500/15 dark:bg-rose-400/15 dark:text-rose-300 dark:border-rose-400/20',
  },
  warning: {
    tile: 'bg-amber-500/10 text-amber-600 border-amber-500/15 dark:bg-amber-400/15 dark:text-amber-300 dark:border-amber-400/20',
  },
  info: {
    tile: 'bg-sky-500/10 text-sky-600 border-sky-500/15 dark:bg-sky-400/15 dark:text-sky-300 dark:border-sky-400/20',
  },
} as const;

export interface StatCardProps {
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
  label: string;
  value: string | number;
  tone?: keyof typeof tones;
  delay?: number;
}

export function StatCard({ icon: Icon, label, value, tone = 'accent', delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="liquid-glass p-5 flex items-center gap-4 hover:-translate-y-0.5 transition-transform duration-200"
    >
      <div className={cn('w-12 h-12 rounded-2xl border flex items-center justify-center shrink-0', tones[tone].tile)}>
        <Icon className="w-6 h-6" strokeWidth={2} />
      </div>
      <div className="min-w-0">
        <p className="text-[26px] leading-8 font-heading font-bold text-fg tracking-tight truncate">{value}</p>
        <p className="text-[11px] text-fg-muted uppercase tracking-[0.12em] font-medium mt-0.5 truncate">{label}</p>
      </div>
    </motion.div>
  );
}
