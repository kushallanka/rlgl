import { type ButtonHTMLAttributes, forwardRef, type ReactNode } from 'react';
import { cn } from '../../lib/cn';

const variants = {
  ghost: 'text-fg-muted hover:text-fg hover:bg-surface-2 dark:hover:bg-white/[0.06]',
  secondary: 'bg-surface text-fg-secondary border border-edge hover:border-edge-strong shadow-card',
  danger: 'text-fg-muted hover:text-rose-600 hover:bg-rose-500/10 dark:hover:text-rose-400',
} as const;

const sizes = {
  sm: 'w-8 h-8 rounded-lg [&>svg]:w-4 [&>svg]:h-4',
  md: 'w-10 h-10 rounded-xl [&>svg]:w-5 [&>svg]:h-5',
} as const;

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Accessible name — required because the button has no visible text. */
  label: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  children: ReactNode;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  { label, variant = 'ghost', size = 'md', className, children, type = 'button', ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      aria-label={label}
      title={label}
      className={cn(
        'inline-flex items-center justify-center cursor-pointer select-none',
        'transition-colors duration-200 active:scale-[0.96]',
        'disabled:opacity-50 disabled:pointer-events-none',
        variants[variant],
        sizes[size],
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
});
