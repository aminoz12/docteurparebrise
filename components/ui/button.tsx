import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export type ButtonVariant = 'primary' | 'outline' | 'ghost';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', fullWidth, ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center rounded-full text-sm font-semibold transition focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60';

    const variants: Record<ButtonVariant, string> = {
      primary:
        'bg-primary text-primary-foreground shadow-subtle hover:bg-[#c10500]',
      outline:
        'border border-neutral-200 bg-white text-neutral-900 hover:border-primary hover:text-primary',
      ghost:
        'text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900',
    };

    return (
      <button
        ref={ref}
        className={cn(
          base,
          variants[variant],
          fullWidth ? 'w-full px-4 py-2.5' : 'px-4 py-2',
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';
