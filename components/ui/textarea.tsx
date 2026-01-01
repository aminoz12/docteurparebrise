import { forwardRef, TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          'w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-neutral-900 shadow-sm transition focus-visible:border-primary',
          className,
        )}
        {...props}
      />
    );
  },
);

Textarea.displayName = 'Textarea';
