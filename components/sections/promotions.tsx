'use client';

import { motion } from 'framer-motion';
import { Gift, Tag, Users, Sparkles, CheckCircle2 } from 'lucide-react';
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
    icon: Sparkles,
    title: '3/4 vitre teinté offert',
    description: 'Profitez de vitres teintées offertes sur votre véhicule',
    value: 'GRATUIT',
    color: 'accent',
    highlight: true,
  },
  {
    icon: Gift,
    title: 'Coupon de 50€',
    description: 'Pour chaque pare-brise remplacé, un coupon de 50€ vous est donné',
    value: '50€',
    color: 'primary',
    highlight: false,
  },
  {
    icon: Users,
    title: 'Parrainage = 50€',
    description: 'Parrainez un ami qui change son pare-brise et repartez avec 50€ en espèce ou virement',
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

        {/* Promotions Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mb-12">
          {promotions.map((promo, idx) => {
            const Icon = promo.icon;
            return (
              <motion.div
                key={idx}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div
                  className={`relative h-full rounded-2xl p-8 border ${
                    promo.highlight
                      ? 'bg-white border-primary/20 shadow-lg'
                      : 'bg-white border-neutral-200 shadow-sm'
                  } transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1`}
                >
                  {/* Highlight indicator */}
                  {promo.highlight && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary to-accent rounded-t-2xl" />
                  )}

                  {/* Value badge */}
                  <div
                    className={`inline-flex items-center justify-center rounded-lg px-4 py-2 mb-6 ${
                      promo.highlight
                        ? promo.color === 'primary'
                          ? 'bg-primary text-white'
                          : 'bg-accent text-neutral-900'
                        : promo.color === 'primary'
                        ? 'bg-primary/10 text-primary'
                        : 'bg-accent/10 text-accent'
                    } font-bold text-lg`}
                  >
                    {promo.value}
                  </div>

                  {/* Icon */}
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-xl mb-6 ${
                      promo.color === 'primary'
                        ? 'bg-primary/10 text-primary'
                        : 'bg-accent/10 text-accent'
                    }`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-3">
                    {promo.title.includes('200€') ? (
                      <>
                        <span className="text-sm md:text-lg">Jusqu&apos;à </span>
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
                  <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
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
                  <div className="mt-6 flex items-center gap-2 text-sm text-neutral-500">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Garanti</span>
                  </div>
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

