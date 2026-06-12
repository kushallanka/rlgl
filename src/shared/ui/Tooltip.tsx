import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

const positions = {
  top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
  bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
  left: 'right-full top-1/2 -translate-y-1/2 mr-2',
  right: 'left-full top-1/2 -translate-y-1/2 ml-2',
} as const;

interface TooltipProps {
  content: ReactNode;
  position?: keyof typeof positions;
  children: ReactNode;
  className?: string;
}

/** Lightweight CSS tooltip — appears on hover and keyboard focus. */
export function Tooltip({ content, position = 'top', children, className }: TooltipProps) {
  return (
    <span className={cn('relative inline-flex group/tip', className)}>
      {children}
      <span
        role="tooltip"
        className={cn(
          'pointer-events-none absolute z-50 whitespace-nowrap rounded-lg px-2.5 py-1.5',
          'text-xs font-medium text-fg bg-overlay border border-edge shadow-overlay',
          'opacity-0 translate-y-0.5 transition-ui duration-150',
          'group-hover/tip:opacity-100 group-hover/tip:translate-y-0',
          'group-focus-within/tip:opacity-100 group-focus-within/tip:translate-y-0',
          positions[position],
        )}
      >
        {content}
      </span>
    </span>
  );
}
