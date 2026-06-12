import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface KbdProps {
  children: ReactNode;
  className?: string;
}

/** Keyboard shortcut hint, e.g. <Kbd>⌘K</Kbd>. */
export function Kbd({ children, className }: KbdProps) {
  return (
    <kbd
      className={cn(
        'inline-flex items-center justify-center min-w-[1.4rem] h-5 px-1.5 rounded-md',
        'text-[10px] font-semibold font-body tracking-wide',
        'bg-surface-2 text-fg-muted border border-edge shadow-[0_1px_0_var(--edge)]',
        'dark:bg-white/[0.07] dark:shadow-none',
        className,
      )}
    >
      {children}
    </kbd>
  );
}
