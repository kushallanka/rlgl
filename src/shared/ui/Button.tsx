import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../lib/cn';
import { Spinner } from './Spinner';

const variants = {
  primary:
    'bg-accent text-accent-fg shadow-accent hover:bg-accent-hover ' +
    'dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:text-white',
  secondary:
    'bg-surface text-fg border border-edge hover:border-edge-strong hover:bg-surface-2 shadow-card',
  ghost:
    'text-fg-muted hover:text-fg hover:bg-surface-2 dark:hover:bg-white/[0.06]',
  danger:
    'bg-rose-600 text-white hover:bg-rose-500 shadow-[0_4px_14px_rgba(225,29,72,0.25)]',
  subtle:
    'bg-accent/10 text-accent hover:bg-accent/15 dark:bg-indigo-400/15 dark:text-indigo-300 dark:hover:bg-indigo-400/25',
} as const;

const sizes = {
  sm: 'h-8 px-3 text-xs gap-1.5 rounded-lg',
  md: 'h-10 px-4 text-sm gap-2 rounded-xl',
  lg: 'h-11 px-5 text-[15px] gap-2 rounded-xl',
} as const;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = 'primary',
    size = 'md',
    loading = false,
    fullWidth = false,
    leftIcon,
    rightIcon,
    className,
    children,
    disabled,
    type = 'button',
    ...rest
  },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={cn(
        'inline-flex items-center justify-center font-semibold select-none cursor-pointer',
        'transition-[background-color,border-color,box-shadow,color] duration-200 active:scale-[0.98]',
        'disabled:opacity-50 disabled:pointer-events-none',
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        className,
      )}
      {...rest}
    >
      {loading ? <Spinner size={size === 'sm' ? 'xs' : 'sm'} /> : leftIcon}
      {children}
      {!loading && rightIcon}
    </button>
  );
});
