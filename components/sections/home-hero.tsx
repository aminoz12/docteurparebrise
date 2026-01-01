'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock3, HomeIcon } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';

export function HomeHero() {
  return (
    <section className="section-y">
      <div className="container-page grid gap-10 md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          <motion.p
            className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground">
              24h
            </span>
            Intervention rapide atelier & domicile
          </motion.p>

          <motion.h1
            className="h1 max-w-xl text-neutral-900"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            Votre sécurité, notre priorité.
          </motion.h1>

          <motion.p
            className="max-w-lg text-base text-neutral-700"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            Remplacement de pare-brise, réparation d&apos;impact, vitres teintées et
            rénovation de phares. {siteConfig.name} vous accompagne avec des
            interventions certifiées, conformes aux exigences des assurances.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
          >
            <Link
              href="/rendez-vous"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-card transition hover:bg-[#c10500] hover:shadow-lg hover:-translate-y-0.5"
            >
              Prendre rendez-vous
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 shadow-subtle transition hover:border-primary hover:text-primary hover:shadow-card hover:-translate-y-0.5"
            >
              Nos services
            </Link>
          </motion.div>

          <motion.div
            className="mt-4 grid gap-4 text-sm text-neutral-700 sm:grid-cols-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
          >
            <div className="flex items-start gap-2">
              <div className="mt-0.5 rounded-full bg-accent/20 p-1.5 text-accent-foreground">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-neutral-900">
                  Assurance & garantie
                </p>
                <p className="text-xs text-neutral-600">
                  Démarches simplifiées avec votre assureur.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-0.5 rounded-full bg-accent/20 p-1.5 text-accent-foreground">
                <Clock3 className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-neutral-900">
                  Intervention rapide
                </p>
                <p className="text-xs text-neutral-600">
                  Créneau sous 24 à 48h selon disponibilité.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-0.5 rounded-full bg-accent/20 p-1.5 text-accent-foreground">
                <HomeIcon className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-neutral-900">
                  Atelier ou domicile
                </p>
                <p className="text-xs text-neutral-600">
                  Nous nous déplaçons sur votre lieu de choix.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="relative h-full"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.18 }}
        >
          <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 p-6 shadow-card transition hover:shadow-lg hover:-translate-y-0.5">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  Sécurité & transparence
                </p>
                <p className="mt-1 text-sm text-neutral-700">
                  Vitrage contrôlé, visibilité maximale, confort de conduite.
                </p>
              </div>
              <div className="inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                <span>4,9/5</span>
                <span className="text-[10px]">Avis clients</span>
              </div>
            </div>

            <div className="grid gap-4 text-sm text-neutral-800">
              <div className="flex items-center justify-between rounded-xl bg-white px-4 py-3 shadow-subtle transition hover:shadow-card">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-900">
                    Remplacement pare-brise
                  </p>
                  <p className="text-xs text-neutral-600">
                    Verre homologué constructeur, recalibrage ADAS.
                  </p>
                </div>
                <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground transition hover:bg-[#c10500]">
                  Sur devis
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-white px-4 py-3 shadow-subtle transition hover:shadow-card">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-900">
                    Vitres teintées
                  </p>
                  <p className="text-xs text-neutral-600">
                    Confort thermique & protection UV, législation respectée.
                  </p>
                </div>
                <span className="rounded-full border border-accent bg-accent/10 px-3 py-1 text-xs font-semibold text-neutral-900 transition hover:bg-accent hover:text-white">
                  À partir de 149€
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-white px-4 py-3 shadow-subtle transition hover:shadow-card">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-900">
                    Rénovation de phares
                  </p>
                  <p className="text-xs text-neutral-600">
                    Contrôle technique facilité, visibilité de nuit renforcée.
                  </p>
                </div>
                <span className="rounded-full bg-neutral-900 px-3 py-1 text-xs font-semibold text-white transition hover:bg-neutral-800">
                  Pack sécurité
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
