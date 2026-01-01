'use client';

import { Star, Quote } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Sophie M.',
    vehicle: 'Renault Clio',
    text: 'Service exceptionnel ! L\'équipe a géré toute la paperasse avec mon assurance. Intervention rapide et professionnelle.',
    rating: 5,
    date: 'Il y a 2 semaines',
    image: '/testimonials/Sophie.png',
  },
  {
    name: 'Marc D.',
    vehicle: 'Audi A3',
    text: 'Vitres teintées posées en une matinée. Le résultat est parfait, conforme au contrôle technique. Excellent rapport qualité-prix.',
    rating: 5,
    date: 'Il y a 1 mois',
    image: '/testimonials/Marc.png',
  },
  {
    name: 'Nadia K.',
    vehicle: 'Peugeot 3008',
    text: 'Mes phares étaient complètement jaunis. Après la rénovation, c\'est le jour et la nuit ! Service rapide et efficace.',
    rating: 5,
    date: 'Il y a 3 semaines',
    image: '/testimonials/Nadia.png',
  },
  {
    name: 'Thomas L.',
    vehicle: 'BMW Série 3',
    text: 'Intervention à domicile très pratique. Le technicien était ponctuel et professionnel. Pare-brise remplacé en moins de 2h.',
    rating: 5,
    date: 'Il y a 1 semaine',
    image: '/testimonials/Thomas.png',
  },
  {
    name: 'Julie B.',
    vehicle: 'Mercedes Classe A',
    text: 'Première fois que je fais appel à leurs services. Très bonne expérience ! Dossier assurance traité rapidement.',
    rating: 5,
    date: 'Il y a 2 mois',
    image: '/testimonials/Julie.png',
  },
  {
    name: 'Pierre R.',
    vehicle: 'Volkswagen Golf',
    text: 'Vitres teintées installées avec un soin remarquable. Aucune bulle, finition impeccable. L\'équipe est compétente.',
    rating: 5,
    date: 'Il y a 3 semaines',
    image: '/testimonials/pierre.png',
  },
];

export function HomeTestimonials() {
  const [currentGroup, setCurrentGroup] = useState(0);
  
  // Split testimonials into two groups of 3
  const group1 = testimonials.slice(0, 3);
  const group2 = testimonials.slice(3, 6);
  const groups = [group1, group2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGroup((prev) => (prev === 0 ? 1 : 0));
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, []);

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
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-2xl">
            <motion.div
              className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
        >
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-bold uppercase tracking-wider text-primary">
              Avis clients
              </span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-neutral-900 mb-4">
              UNE EXPÉRIENCE PENSÉE POUR VOTRE TRANQUILLITÉ
            </h2>
            <p className="text-lg text-neutral-600">
              Chaque intervention est documentée et expliquée. Nous privilégions la transparence, le suivi et la satisfaction à long terme.
            </p>
          </div>

          {/* Rating badge */}
          <div className="flex-shrink-0">
            <div className="inline-flex flex-col items-center gap-3 rounded-3xl bg-gradient-accent px-6 py-5 shadow-lg">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-600 text-yellow-600" />
                ))}
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-neutral-900">4,9/5</div>
                <div className="text-xs font-bold text-neutral-700">sur plus de 250 avis</div>
            </div>
              <div className="flex gap-2 text-xs">
              <Link
                href="https://www.google.com/maps/search/?api=1&query=pare+brise"
                target="_blank"
                rel="noreferrer"
                  className="font-semibold text-neutral-900 underline-offset-2 hover:underline"
              >
                  Google
              </Link>
                <span className="text-neutral-600">•</span>
              <Link
                href="https://fr.trustpilot.com/"
                target="_blank"
                rel="noreferrer"
                  className="font-semibold text-neutral-900 underline-offset-2 hover:underline"
              >
                  Trustpilot
              </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid - Rotating 3 at a time */}
        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentGroup}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {groups[currentGroup].map((item, idx) => (
            <motion.article
                  key={`${item.name}-${currentGroup}-${idx}`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <div className="group relative h-full rounded-3xl border-2 border-neutral-200 bg-white p-6 md:p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/30 overflow-hidden">
                    {/* Background gradient on hover */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/0 via-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:via-primary/0 group-hover:to-accent/5 transition-all duration-500 pointer-events-none" />
                    
                    <div className="relative z-10 flex flex-col items-center text-center">
                      {/* Product Image - Centered */}
                      {item.image && (
                        <div className="mb-6 flex justify-center w-full">
                          <div className="relative aspect-[4/3] w-full max-w-xs rounded-2xl overflow-hidden bg-neutral-50">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-contain p-4"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          </div>
                        </div>
                      )}

                      {/* Header with quote icon and stars */}
                      <div className="flex items-center justify-center gap-2 mb-4 w-full">
                        <div className="flex gap-1">
                          {[...Array(item.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Quote className="h-5 w-5 text-primary" />
                        </div>
                      </div>

                      {/* Comment text - Reduced content */}
                      <p className="text-base leading-relaxed text-neutral-800 mb-6 min-h-[80px]">
                        "{item.text}"
                      </p>

                      {/* Author info */}
                      <div className="pt-4 border-t border-neutral-200 w-full">
                        <div className="flex flex-col items-center gap-1">
                          <p className="font-bold text-neutral-900">{item.name}</p>
                          <p className="text-sm text-neutral-600">{item.vehicle}</p>
                          <div className="text-xs text-neutral-500 mt-1">{item.date}</div>
                        </div>
                      </div>
                    </div>
              </div>
            </motion.article>
          ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
