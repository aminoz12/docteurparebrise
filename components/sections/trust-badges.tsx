'use client';

import { motion } from 'framer-motion';
import { Award, ShieldCheck, Users, Clock3 } from 'lucide-react';

const badges = [
  {
    icon: Award,
    label: 'Certifié constructeur',
    description: 'Utilisation de vitrages homologués et conformes.',
    color: 'primary',
  },
  {
    icon: ShieldCheck,
    label: 'Garantie 2 ans',
    description: "Tous nos travaux sont couverts par une garantie pièces et main d'œuvre.",
    color: 'primary',
  },
  {
    icon: Users,
    label: '4,9/5 sur 250 avis',
    description: 'Satisfaction clients vérifiée sur Google et Trustpilot.',
    color: 'accent',
  },
  {
    icon: Clock3,
    label: 'Intervention sous 24h',
    description: 'Disponibilité rapide pour vous dépanner sans attendre.',
    color: 'accent',
  },
];

export function TrustBadges() {
  return (
    <section className="section-y bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container-page relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-bold uppercase tracking-wider text-white">
              Confiance
            </span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-6">
            POURQUOI NOUS FAIRE CONFIANCE ?
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-neutral-300">
            Des engagements forts pour garantir votre sécurité et votre tranquillité.
          </p>
        </motion.div>

        {/* Badges Grid - Completely Redesigned */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {badges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="group relative h-full rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-8 transition-all duration-500 hover:bg-white/20 hover:border-white/40 hover:-translate-y-2 hover:shadow-2xl">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl ${
                      badge.color === 'primary'
                        ? 'bg-gradient-primary'
                        : 'bg-gradient-accent'
                    } shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white">
                      {badge.label}
                    </h3>
                    <p className="text-sm leading-relaxed text-neutral-300">
                      {badge.description}
                    </p>
                  </div>

                  {/* Hover glow */}
                  <div className={`absolute inset-0 rounded-3xl ${
                    badge.color === 'primary'
                      ? 'bg-primary/0 group-hover:bg-primary/10'
                      : 'bg-accent/0 group-hover:bg-accent/10'
                  } transition-all duration-500 pointer-events-none`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
