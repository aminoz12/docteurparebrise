'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check, Star, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const tiers = [
  {
    name: 'Impact simple',
    price: 'Sur devis',
    description: 'Réparation rapide sans remplacement du vitrage.',
    features: [
      'Diagnostic visuel gratuit',
      'Réparation en 30–45 min',
      'Garantie 1 an',
      'Prise en charge assurance possible',
    ],
    badge: null,
    popular: false,
    icon: '🔧',
  },
  {
    name: 'Pare-brise complet',
    price: 'Sur devis',
    description: 'Remplacement avec verre homologué et recalibrage ADAS.',
    features: [
      'Verre constructeur homologué',
      'Recalibrage caméras ADAS inclus',
      'Garantie 2 ans',
      'Dossier assurance simplifié',
    ],
    badge: 'Le plus choisi',
    popular: true,
    icon: '🛡️',
  },
  {
    name: 'Pack confort',
    price: 'À partir de 249€',
    description: 'Vitres teintées + rénovation phares, en une seule visite.',
    features: [
      'Vitres teintées conformes',
      'Rénovation complète des phares',
      'Effet avant / après garanti',
      'Durée totale ~3h',
    ],
    badge: 'Pack sécurité',
    popular: false,
    icon: '✨',
  },
];

export function PricingHighlights() {
  return (
    <section className="section-y bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 section-pattern opacity-20" />
      
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
            className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-bold uppercase tracking-wider text-primary">
            Tarifs & packs
            </span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-neutral-900 mb-6">
            DES SOLUTIONS PROFESSIONNELLES POUR VOTRE VÉHICULE
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-neutral-600">
            Chaque intervention est personnalisée selon votre véhicule et vos attentes. Contactez-nous pour un devis précis.
          </p>
        </motion.div>

        {/* Pricing Cards - Completely Redesigned */}
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <div
                className={`relative h-full rounded-3xl border-2 p-8 transition-all duration-500 hover:-translate-y-2 ${
                  tier.popular
                    ? 'border-primary bg-gradient-to-br from-primary/5 via-white to-primary/5 shadow-2xl scale-105'
                    : 'border-neutral-200 bg-white shadow-lg hover:shadow-2xl hover:border-primary/30'
                }`}
              >
                {/* Popular badge */}
              {tier.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className={`rounded-full px-4 py-1.5 text-xs font-bold shadow-lg ${
                      tier.badge === 'Pack sécurité'
                        ? 'bg-gradient-accent text-neutral-900'
                        : 'bg-gradient-primary text-white'
                    }`}>
                  {tier.badge}
                    </div>
                  </div>
              )}

                {/* Icon */}
                <div className="mb-6">
                  <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl text-3xl ${
                    tier.popular
                      ? 'bg-gradient-primary'
                      : 'bg-gradient-to-br from-neutral-100 to-neutral-200'
                  }`}>
                    {tier.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                {tier.name}
              </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {tier.description}
                    </p>
                  </div>

                  <div className="py-4 border-y border-neutral-200">
                    <div className="text-4xl font-black gradient-text-primary">
                      {tier.price}
                    </div>
                  </div>

                  <ul className="space-y-3">
                {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className={`mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full ${
                          tier.popular
                            ? 'bg-primary text-white'
                            : 'bg-primary/10 text-primary'
                        }`}>
                          <Check className="h-4 w-4" />
                        </div>
                        <span className="text-sm text-neutral-700 leading-relaxed">
                          {feature}
                        </span>
                  </li>
                ))}
              </ul>

                  <div className="pt-4">
                    <Link href="/rendez-vous">
                <Button
                        variant={tier.popular ? 'primary' : 'outline'}
                        className={`w-full rounded-xl font-bold ${
                          tier.popular
                            ? 'bg-gradient-primary hover:shadow-glow'
                            : ''
                        }`}
                >
                  Demander un devis
                        <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                    </Link>
                  </div>
                </div>

                {/* Glow effect for popular */}
                {tier.popular && (
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-primary/10 pointer-events-none" />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-sm text-neutral-600 max-w-2xl mx-auto">
            Les tarifs indiqués sont des estimations. Un devis personnalisé vous sera communiqué après diagnostic visuel ou par téléphone.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
