import { forwardRef, InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          'h-10 w-full rounded-md border border-border bg-white px-3 text-sm text-neutral-900 shadow-sm transition focus-visible:border-primary',
          className,
        )}
        {...props}
      />
    );
  },
);

Input.displayName = 'Input';
