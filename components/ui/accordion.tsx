'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = item.id === openId;
        return (
          <div
            key={item.id}
            className="rounded-lg border border-neutral-200 bg-white px-4 py-3 shadow-subtle"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-3 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpenId(isOpen ? null : item.id)}
            >
              <span className="text-sm font-semibold text-neutral-900">
                {item.question}
              </span>
              <span
                className={cn(
                  'flex h-6 w-6 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-500 transition',
                  isOpen && 'rotate-180 border-primary text-primary',
                )}
              >
                <ChevronDown className="h-3.5 w-3.5" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, y: -2 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -2 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                >
                  <p className="mt-3 text-sm text-neutral-700">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
