'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { PackageCheck, Zap, Clock3 } from 'lucide-react';

const features = [
  {
    icon: PackageCheck,
    title: 'Stock toujours disponible',
    description: 'Une large gamme de pare-brise et vitrages en stock permanent pour tous types de véhicules.',
  },
  {
    icon: Zap,
    title: 'Réparation instantanée',
    description: 'Intervention immédiate , sans commande ni délai d’attente.',
  },
  {
    icon: Clock3,
    title: 'Gain de temps garanti',
    description: 'Votre véhicule réparé le jour même, vous repartez sans perdre une minute.',
  },
];

export function StockDisponible() {
  return (
    <section className="section-y bg-gradient-to-b from-white via-neutral-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-page relative z-10">
        <div className="grid items-center gap-10 lg:gap-16 lg:grid-cols-[1.8fr_1fr]">
          {/* Image - Left on desktop, below text on mobile */}
          <motion.div
            className="relative order-2 lg:order-1 lg:self-start"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-[4/3] lg:aspect-[4/3] w-full overflow-hidden rounded-3xl border-2 border-neutral-200 shadow-xl">
              <Image
                src="/stock.png"
                alt="Stock de pare-brise toujours disponible"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 64vw"
              />
            </div>
          </motion.div>

          {/* Text - Right on desktop, above image on mobile */}
          <motion.div
            className="order-1 lg:order-2 lg:self-start"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-neutral-900 mb-4">
              STOCK TOUJOURS DISPO,{' '}
              <span className="text-primary">RÉPARATION INSTANTANÉE</span>
            </h2>
            {/* Designed list titles */}
            <div className="space-y-4">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={idx}
                    className="group flex items-start gap-4 rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.15 * idx }}
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-neutral-900">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
