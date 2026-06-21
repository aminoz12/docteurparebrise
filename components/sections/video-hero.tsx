'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Check, ShieldCheck, Star, Clock } from 'lucide-react';
import Image from 'next/image';
import { siteConfig } from '@/lib/siteConfig';

const benefits = ['Zéro frais', 'Zéro stress', 'Satisfaction garantie'];

const trust = [
  { icon: Star, label: '4,9/5 sur 250+ avis' },
  { icon: ShieldCheck, label: 'Garantie 2 ans' },
  { icon: Clock, label: 'Intervention le jour même' },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function VideoHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 h-full w-full object-cover object-center"
          src="/hero.mp4"
          poster="/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        {/* Cinematic overlay — deep gradient for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/45" />
        <div className="absolute inset-0 bg-[radial-gradient(125%_95%_at_50%_115%,rgba(0,0,0,0.9)_0%,transparent_62%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 pt-20 pb-12">
        <motion.div
          className="w-full max-w-3xl text-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Heading */}
          <motion.h1
            variants={item}
            className="flex flex-wrap items-baseline justify-center gap-x-3 font-display font-bold tracking-tight leading-[1.1] text-2xl sm:text-3xl md:text-4xl"
          >
            <span className="gradient-text-accent uppercase">Franchise offerte</span>
            <span className="font-light text-white/70">+ jusqu’à</span>
            <span className="font-extrabold text-white">200€</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-xl font-display text-base font-light leading-relaxed text-white/75 sm:text-lg"
          >
            Aucune démarche nécessaire — on s’occupe de tout pour vous.
          </motion.p>

          {/* Benefit chips */}
          <motion.div
            variants={item}
            className="mt-7 flex flex-wrap items-center justify-center gap-2.5"
          >
            {benefits.map((b) => (
              <span
                key={b}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm font-medium text-white/90 backdrop-blur-md"
              >
                <Check className="h-3.5 w-3.5 text-accent" />
                {b}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row"
          >
            <Link
              href="/rendez-vous"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-9 py-4 font-display text-base font-semibold uppercase tracking-wide text-white shadow-glow transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl sm:w-auto"
            >
              Prendre rendez-vous
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-9 py-4 font-display text-base font-semibold uppercase tracking-wide text-white backdrop-blur-md transition-all duration-300 hover:scale-[1.03] hover:border-white/50 hover:bg-white/10 sm:w-auto"
            >
              <Image src="/sociale.png" alt="" width={20} height={20} aria-hidden="true" />
              Contacter par WhatsApp
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-white/10 pt-7"
          >
            {trust.map(({ icon: Icon, label }) => (
              <span key={label} className="flex items-center gap-2 text-white/70">
                <Icon className="h-4 w-4 text-accent" />
                <span className="font-display text-xs font-medium tracking-wide sm:text-sm">
                  {label}
                </span>
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
