import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'accent' | 'outline' | 'primary';
}

export function Badge({ className, variant = 'accent', ...props }: BadgeProps) {
  const base = 'inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium';
  const variants = {
    accent: 'bg-accent/15 text-accent-foreground border border-accent/40',
    outline: 'border border-neutral-300 text-neutral-700 bg-white',
    primary: 'bg-primary text-primary-foreground',
  } as const;

  return (
    <span className={cn(base, variants[variant], className)} {...props} />
  );
}
