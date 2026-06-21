'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const WHATSAPP_URL =
  'https://api.whatsapp.com/send/?phone=33661692360&text&type=phone_number&app_absent=0';

export function WhatsAppFloat() {
  const [showBubble, setShowBubble] = useState(false);

  // Reveal the "Parlez-Nous ?" bubble shortly after load to draw attention.
  useEffect(() => {
    const t = setTimeout(() => setShowBubble(true), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2.5">
      {/* Popup bubble */}
      <AnimatePresence>
        {showBubble && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative mr-1 rounded-2xl rounded-br-sm bg-white px-4 py-2.5 shadow-large"
          >
            <button
              onClick={() => setShowBubble(false)}
              aria-label="Fermer"
              className="absolute -left-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-neutral-800 text-[11px] leading-none text-white shadow-md transition-colors hover:bg-neutral-900"
            >
              ×
            </button>
            <span className="whitespace-nowrap text-sm font-semibold text-neutral-900">
              Parlez-Nous&nbsp;?
            </span>
            {/* little tail */}
            <span className="absolute -bottom-1.5 right-3 h-3 w-3 rotate-45 bg-white" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp button */}
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter par WhatsApp"
        onMouseEnter={() => setShowBubble(true)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#25D366] shadow-large"
      >
        {/* pulse ring */}
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-40" />
        <Image
          src="/sociale.png"
          alt=""
          width={44}
          height={44}
          aria-hidden="true"
          className="relative"
        />
      </motion.a>
    </div>
  );
}
