import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/cn';

const variants = {
  neutral: 'bg-surface-2 text-fg-secondary border-edge dark:bg-white/[0.06]',
  accent:
    'bg-accent/10 text-accent border-accent/20 dark:bg-indigo-400/15 dark:text-indigo-300 dark:border-indigo-400/25',
  success:
    'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/15 dark:text-emerald-300 dark:border-emerald-500/25',
  danger: 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-500/15 dark:text-rose-300 dark:border-rose-500/25',
  warning:
    'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-500/15 dark:text-amber-300 dark:border-amber-500/25',
  info: 'bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-500/15 dark:text-sky-300 dark:border-sky-500/25',
} as const;

const sizes = {
  sm: 'px-2 py-0.5 text-[10px]',
  md: 'px-2.5 py-1 text-xs',
} as const;

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  /** Show a leading status dot in the variant color. */
  dot?: boolean;
  children: ReactNode;
}

const dotColors: Record<keyof typeof variants, string> = {
  neutral: 'bg-fg-subtle',
  accent: 'bg-accent',
  success: 'bg-emerald-500',
  danger: 'bg-rose-500',
  warning: 'bg-amber-500',
  info: 'bg-sky-500',
};

export function Badge({ variant = 'neutral', size = 'md', dot, className, children, ...rest }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 font-semibold rounded-full border whitespace-nowrap',
        variants[variant],
        sizes[size],
        className,
      )}
      {...rest}
    >
      {dot && <span aria-hidden="true" className={cn('w-1.5 h-1.5 rounded-full shrink-0', dotColors[variant])} />}
      {children}
    </span>
  );
}
