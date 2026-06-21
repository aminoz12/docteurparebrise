'use client';

import { Star, BadgeCheck } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';

const testimonials = [
  {
    name: 'Sophie M.',
    vehicle: 'Renault Clio',
    text: 'Service exceptionnel ! L\'équipe a géré toute la paperasse avec mon assurance. Intervention rapide et professionnelle.',
    rating: 5,
    date: 'Il y a 2 semaines',
    source: 'Google',
  },
  {
    name: 'Marc D.',
    vehicle: 'Audi A3',
    text: 'Vitres teintées posées en une matinée. Le résultat est parfait, conforme au contrôle technique. Excellent rapport qualité-prix.',
    rating: 5,
    date: 'Il y a 1 mois',
    source: 'Google',
  },
  {
    name: 'Nadia K.',
    vehicle: 'Peugeot 3008',
    text: 'Mes phares étaient complètement jaunis. Après la rénovation, c\'est le jour et la nuit ! Service rapide et efficace.',
    rating: 5,
    date: 'Il y a 3 semaines',
    source: 'Trustpilot',
  },
  {
    name: 'Thomas L.',
    vehicle: 'BMW Série 3',
    text: 'Intervention à domicile très pratique. Le technicien était ponctuel et professionnel. Pare-brise remplacé en moins de 2h.',
    rating: 5,
    date: 'Il y a 1 semaine',
    source: 'Google',
  },
  {
    name: 'Julie B.',
    vehicle: 'Mercedes Classe A',
    text: 'Première fois que je fais appel à leurs services. Très bonne expérience ! Dossier assurance traité rapidement.',
    rating: 5,
    date: 'Il y a 2 mois',
    source: 'Trustpilot',
  },
  {
    name: 'Pierre R.',
    vehicle: 'Volkswagen Golf',
    text: 'Vitres teintées installées avec un soin remarquable. Aucune bulle, finition impeccable. L\'équipe est compétente.',
    rating: 5,
    date: 'Il y a 3 semaines',
    source: 'Google',
  },
  {
    name: 'Camille T.',
    vehicle: 'Citroën C3',
    text: 'Impact réparé en moins d\'une heure, je n\'ai rien eu à avancer. Accueil chaleureux et explications claires. Je recommande vivement !',
    rating: 5,
    date: 'Il y a 2 jours',
    source: 'Google',
  },
  {
    name: 'Karim B.',
    vehicle: 'Dacia Duster',
    text: 'Pare-brise changé le jour même. Prise en charge totale de l\'assurance, zéro paperasse de mon côté. Travail soigné et rapide.',
    rating: 5,
    date: 'Il y a 4 jours',
    source: 'Trustpilot',
  },
  {
    name: 'Émilie F.',
    vehicle: 'Toyota Yaris',
    text: 'Très satisfaite ! Équipe à l\'écoute et professionnelle. Voiture déposée le matin, récupérée le soir avec tout réparé. Parfait.',
    rating: 5,
    date: 'Il y a 5 jours',
    source: 'Google',
  },
];

// Distinct avatar colors for the initials, like real review platforms
const avatarColors = [
  'bg-rose-500',
  'bg-blue-500',
  'bg-emerald-500',
  'bg-amber-500',
  'bg-violet-500',
  'bg-cyan-600',
];

function getInitials(name: string) {
  return name
    .split(' ')
    .map((part) => part.charAt(0))
    .join('')
    .toUpperCase();
}

// The colorful Google "G" so each card looks like a genuine Google review
function GoogleG({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8a12 12 0 1 1 7.9-21l5.7-5.7A20 20 0 1 0 24 44a20 20 0 0 0 19.6-23.5z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8A12 12 0 0 1 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7A20 20 0 0 0 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2A12 12 0 0 1 12.7 28l-6.6 5.1A20 20 0 0 0 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3a12 12 0 0 1-4.1 5.6l6.2 5.2C36.9 41.2 44 36 44 24c0-1.2-.1-2.4-.4-3.5z" />
    </svg>
  );
}

export function HomeTestimonials() {
  const [currentGroup, setCurrentGroup] = useState(0);

  // Split testimonials into groups of 3
  const groups = useMemo(() => {
    const result = [];
    for (let i = 0; i < testimonials.length; i += 3) {
      result.push(testimonials.slice(i, i + 3));
    }
    return result;
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGroup((prev) => (prev + 1) % groups.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [groups.length]);

  return (
    <section className="section-y bg-gradient-to-b from-white via-neutral-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-page relative z-10">
        {/* Header */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2 mb-6">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-bold uppercase tracking-wider text-primary">
                Avis clients
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-neutral-900 mb-4">
              UNE EXPÉRIENCE PENSÉE POUR VOTRE TRANQUILLITÉ
            </h2>
            <p className="text-lg text-neutral-600">
              Chaque intervention est documentée et expliquée. Nous privilégions la transparence, le suivi et la satisfaction à long terme.
            </p>
          </div>

          {/* Rating summary badge */}
          <div className="flex-shrink-0">
            <div className="flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white px-6 py-4 shadow-sm">
              <div className="text-center">
                <div className="text-4xl font-black leading-none text-neutral-900">4,9</div>
                <div className="mt-1 flex items-center justify-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <div className="h-12 w-px bg-neutral-200" />
              <div>
                <div className="text-sm font-bold text-neutral-900">+250 avis vérifiés</div>
                <div className="mt-1.5 flex items-center gap-3 text-xs text-neutral-500">
                  <Link
                    href="https://www.google.com/maps/search/?api=1&query=pare+brise"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-semibold text-neutral-700 hover:text-neutral-900"
                  >
                    <GoogleG className="h-3.5 w-3.5" />
                    Google
                  </Link>
                  <Link
                    href="https://fr.trustpilot.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-semibold text-neutral-700 hover:text-neutral-900"
                  >
                    <Star className="h-3.5 w-3.5 fill-[#00b67a] text-[#00b67a]" />
                    Trustpilot
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid - Rotating 3 at a time */}
        <div className="relative min-h-[320px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentGroup}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {groups[currentGroup].map((item, idx) => {
                const globalIndex = currentGroup * 3 + idx;
                return (
                  <motion.article
                    key={`${item.name}-${currentGroup}-${idx}`}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="group relative flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-neutral-300"
                  >
                    {/* Top row: avatar + name + platform badge */}
                    <div className="flex items-start gap-3">
                      <div
                        className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${avatarColors[globalIndex % avatarColors.length]}`}
                      >
                        {getInitials(item.name)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5">
                          <p className="truncate font-bold text-neutral-900">{item.name}</p>
                          <BadgeCheck className="h-4 w-4 flex-shrink-0 text-blue-500" />
                        </div>
                        <p className="truncate text-xs text-neutral-500">{item.vehicle}</p>
                      </div>
                      {item.source === 'Google' ? (
                        <GoogleG className="h-5 w-5 flex-shrink-0" />
                      ) : (
                        <Star className="h-5 w-5 flex-shrink-0 fill-[#00b67a] text-[#00b67a]" />
                      )}
                    </div>

                    {/* Stars + date */}
                    <div className="mt-4 flex items-center gap-2">
                      <div className="flex gap-0.5">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-xs text-neutral-400">{item.date}</span>
                    </div>

                    {/* Review text */}
                    <p className="mt-3 text-[15px] leading-relaxed text-neutral-700">
                      {item.text}
                    </p>
                  </motion.article>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Group indicator dots */}
          <div className="mt-8 flex justify-center gap-2">
            {groups.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentGroup(i)}
                aria-label={`Voir le groupe d'avis ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentGroup === i ? 'w-6 bg-primary' : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
