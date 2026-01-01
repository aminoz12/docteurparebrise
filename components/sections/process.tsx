'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Clock3, HomeIcon, ShieldCheck, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Clock3,
    title: 'Choisissez votre créneau',
    description:
      "Remplissez le formulaire en ligne ou appelez-nous pour convenir d'un rendez-vous.",
    number: '01',
  },
  {
    icon: HomeIcon,
    title: 'Intervention',
    description:
      "Nous intervenons à l'atelier ou à votre domicile, avec le matériel adapté.",
    number: '02',
  },
  {
    icon: ShieldCheck,
    title: 'Contrôle qualité',
    description:
      "Vérification visuelle, tests d'étanchéité et recalibrage si nécessaire.",
    number: '03',
  },
  {
    icon: CheckCircle,
    title: 'Validation',
    description:
      'Validation ! Vous n\'avez rien à payer. Votre assurance gère tout.',
    number: '04',
  },
];

export function Process() {
  return (
    <section className="section-y bg-white relative overflow-hidden">
      <div className="container-page relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-neutral-900 mb-3">
            COMMENT ÇA MARCHE
          </h2>
          <p className="max-w-2xl mx-auto text-base text-neutral-600">
            Une prise en charge simple et transparente, de la demande à la validation finale.
          </p>
        </motion.div>

        {/* Steps - Clean Yellow Panels Design */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 overflow-hidden rounded-xl shadow-lg border border-neutral-200">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {/* Vertical divider */}
                  {idx < steps.length - 1 && (
                  <div className="absolute top-0 right-0 w-px h-full bg-white z-10" />
                )}

                {/* Yellow Panel */}
                <div className="bg-accent p-6 md:p-8 h-full transition-colors duration-300 group-hover:bg-accent/95">
                  {/* Number */}
                  <div className="text-4xl font-black text-primary mb-4 leading-none">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                </div>

                  {/* Title */}
                  <h3 
                    className="text-lg font-bold text-primary mb-3 leading-tight"
                  >
                  {step.title}
                </h3>

                  {/* Description */}
                  <p className="text-sm text-primary/90 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-lg text-neutral-600 mb-5">
            Prêt à commencer ?
          </p>
          <a
            href="/rendez-vous"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-8 py-3 text-base font-bold text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Prendre rendez-vous
            <ArrowRight className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
