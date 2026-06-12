import { ReactNode } from 'react';

interface ColLabelProps {
  /** The column heading text */
  children: ReactNode;
  /** Extra Tailwind classes, e.g. width / alignment overrides */
  className?: string;
}

/**
 * Shared column-header label for every list table in the app.
 * Keeps font size, weight, tracking and colour identical across views.
 */
export function ColLabel({ children, className = '' }: ColLabelProps) {
  return (
    <span
      className={`text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-white/20 select-none ${className}`}
    >
      {children}
    </span>
  );
}
