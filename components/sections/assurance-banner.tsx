'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const assuranceLogos = [
  'allianz.png',
  'axa.png',
  'covea.png',
  'creditagricole.png',
  'eurofil.png',
  'generali.png',
  'leocare_logo.png',
  'lovys.png',
  'macif.png',
  'maif.png',
  'matmut.png',
  'ornikar.png',
];

export function AssuranceBanner() {
  // Duplicate the array to create seamless infinite scroll
  const duplicatedLogos = [...assuranceLogos, ...assuranceLogos];

  return (
    <section className="section-y bg-gradient-to-b from-white to-neutral-50/50 relative overflow-hidden w-full">
      <div className="w-full">
        {/* Header */}
        <div className="container-page relative z-10">
          <motion.div
            className="text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight text-neutral-900 mb-4">
              <motion.span
                className="text-primary inline-block"
                animate={{
                  y: [0, -10, 0, -8, 0, -6, 0],
                  rotate: [0, -5, 5, -3, 3, 0],
                  scale: [1, 1.1, 1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                0€
              </motion.span>{' '}
              À PAYER, ON S&apos;OCCUPE DE{' '}
              <span className="text-accent">TOUT</span>.
            </h2>
            <p className="text-base md:text-lg text-neutral-600 max-w-2xl mx-auto">
              Votre assurance prend tout en charge, franchise 100% garantise.            </p>
          </motion.div>
        </div>

        {/* Scrolling Icons Container - Full Width */}
        <div className="relative w-full overflow-hidden py-4">
          <div className="flex animate-scroll-infinite">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo}-${index}`}
                className="flex-shrink-0 mx-4 md:mx-6 lg:mx-8"
              >
                <div className="relative w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 transition-all duration-300">
                  <Image
                    src={`/assurances/${logo}`}
                    alt={logo.replace('.png', '').replace('_', ' ')}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 96px, (max-width: 1024px) 128px, 160px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

