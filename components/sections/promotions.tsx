'use client';

import { motion } from 'framer-motion';
import { Gift, Tag, Users, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const promotions = [
  {
    icon: Tag,
    title: 'Franchise offerte',
    description: 'Votre franchise est prise en charge à 100%',
    value: '0€',
    color: 'primary',
    highlight: true,
  },
  {
    icon: Gift,
    title: 'Jusqu\'à 200€ offert',
    description: 'Économisez jusqu\'à 200€ sur votre intervention',
    value: '200€',
    color: 'accent',
    highlight: true,
  },
  {
    icon: Gift,
    title: 'Coupon de 50€ offert',
    description: 'Pour chaque pare-brise remplacé, recevez un bon de 50€.',
    value: '50€',
    color: 'primary',
    highlight: false,
  },
  {
    icon: Users,
    title: 'Parrainage = 50€',
    description: 'Parrainez un ami = repartez avec 50€ en espèce ou virement',
    value: '50€',
    color: 'accent',
    highlight: false,
  },
];

export function Promotions() {
  return (
    <section className="section-y bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden">
      <div className="container-page relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-neutral-900 mb-4">
            OFFRES <span className="text-primary">EXCEPTIONNELLES</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-neutral-600">
            Profitez de nos promotions exclusives et économisez sur vos interventions
          </p>
        </motion.div>

        {/* Promotions Row */}
        <div className="grid gap-6 sm:gap-8 grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto mb-12">
          {promotions.map((promo, idx) => {
            const Icon = promo.icon;
            return (
              <motion.div
                key={idx}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {/* Icon */}
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl mb-4 ${
                    promo.color === 'primary'
                      ? 'bg-primary/10 text-primary'
                      : 'bg-accent/10 text-accent'
                  }`}
                >
                  <Icon className="h-8 w-8" />
                </div>

                {/* Value */}
                <div
                  className={`text-3xl md:text-4xl font-black mb-2 ${
                    promo.color === 'primary' ? 'text-primary' : 'text-accent'
                  }`}
                >
                  {promo.value}
                </div>

                {/* Content */}
                <h3 className="text-lg md:text-xl font-bold text-neutral-900 mb-2">
                  {promo.title.includes('200€') ? (
                    <>
                      <span className="text-sm md:text-base">Jusqu&apos;à </span>
                      <motion.span
                        className="text-primary inline-block"
                        animate={{
                          y: [0, -5, 0, -4, 0, -3, 0],
                          scale: [1, 1.05, 1, 1.03, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        200€
                      </motion.span>
                      <span> offert</span>
                    </>
                  ) : (
                    promo.title
                  )}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {promo.description.includes('200€') ? (
                    <>
                      Économisez jusqu&apos;à{' '}
                      <motion.span
                        className="text-primary font-bold inline-block"
                        animate={{
                          y: [0, -5, 0, -4, 0, -3, 0],
                          scale: [1, 1.05, 1, 1.03, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        200€
                      </motion.span>
                      {' '}sur votre intervention
                    </>
                  ) : (
                    promo.description
                  )}
                </p>

                {/* Checkmark */}
                <div className="mt-4 flex items-center gap-2 text-sm text-neutral-500">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Garanti</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/rendez-vous"
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-4 text-base font-bold shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            <Gift className="h-5 w-5" />
            Profiter des offres
          </Link>
          <p className="mt-4 text-sm text-neutral-500">
            Offres valables selon conditions
          </p>
        </motion.div>
      </div>
    </section>
  );
}

