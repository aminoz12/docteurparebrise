'use client';

import { motion } from 'framer-motion';
import { Wallet, Truck, Shield, Award } from 'lucide-react';

export function WhyChooseUs() {
  const items = [
    {
      icon: Wallet,
      title: 'Réparation gratuite sans avance de frais*',
    },
    {
      icon: Truck,
      title: 'Service mobile gratuit 7j/7',
    },
    {
      icon: Shield,
      title: 'Vitrage européen homologué 43R',
    },
    {
      icon: Award,
      title: 'Garantie à vie sur site ou à domicile',
    },
  ];

  return (
    <section className="section-y bg-white relative overflow-hidden">
      <div className="container-page relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-neutral-900 mb-12">
            POURQUOI <span className="text-primary">NOUS</span> CHOISIR ?
          </h2>

          <div className="grid grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
            {items.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mb-4 flex-shrink-0">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-neutral-900 leading-tight">
                    {item.title}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

