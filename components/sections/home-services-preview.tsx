'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const services = [
  {
    title: 'PARE-BRISE & TOUT VITRAGE',
    description: 'Garantie & prise en charge par l\'assurance\nIntervention rapide à domicile ou en atelier',
    image: '/parebrise.png',
    separateLines: true,
    color: 'primary',
  },
  {
    title: 'VITRES<br>TEINTÉES',
    description: 'Plusieurs niveaux de teinte disponibles\nConformité avec la législation en vigueur',
    image: '/vitrage.png',
    separateLines: true,
    color: 'accent',
  },
  {
    title: 'RÉNOVATION DE PHARES',
    description: 'Résultats visibles (avant/après)\nAmélioration de la visibilité et de la sécurité',
    image: '/phares.png',
    separateLines: true,
    color: 'primary',
  },
  {
    title: 'REPRODUCTION DE CLÉS',
    description: 'Service en cours de mise en place',
    image: '/cle.png',
    separateLines: true,
    color: 'accent',
  },
];

export function HomeServicesPreview() {
  return (
    <section className="section-y bg-gradient-to-b from-white via-neutral-50/50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 section-pattern opacity-30" />
      
      <div className="container-page relative z-10">
        {/* Header - Redesigned */}
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
              Nos Services
            </span>
          </motion.div>
              
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-neutral-900 mb-6">
            DES <span className="text-accent">SOLUTIONS</span> PROFESSIONNELLES POUR VOTRE <span className="text-primary">VÉHICULE</span>
            </h2>
          
          <p className="max-w-2xl mx-auto text-lg text-neutral-600">
            Expertise, qualité et rapidité pour tous vos besoins en vitrage automobile
          </p>
        </motion.div>

        {/* Services Grid - Completely Redesigned */}
        <div className="grid gap-4 md:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              className={`group relative ${idx === 0 ? 'md:justify-self-start' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              {/* Card */}
              <div className="relative h-full w-full rounded-3xl overflow-hidden bg-white border-2 border-neutral-200 shadow-lg transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-2xl group-hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 to-neutral-200" />
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                    className="object-cover transition-transform duration-700 group-hover:scale-125"
                />
                  
                  {/* Badge */}
                  <div className="absolute top-4 right-4">
                    <div className={`rounded-full px-3 py-1.5 text-xs font-bold ${
                      service.color === 'primary'
                        ? 'bg-primary text-white'
                        : 'bg-accent text-neutral-900'
                    } shadow-lg`}>
                      Service
                    </div>
                  </div>
              </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 
                    className="text-xl font-bold text-neutral-900 group-hover:text-primary transition-colors"
                    dangerouslySetInnerHTML={{ __html: service.title }}
                  />
                  
              {service.separateLines ? (
                    <div className="space-y-2.5">
                  {service.description.split('\n').map((line, index) => (
                    <div
                      key={index}
                          className="flex items-start gap-2.5"
                    >
                          <CheckCircle2 className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                            service.color === 'primary' ? 'text-primary' : 'text-accent'
                          }`} />
                          <span className="text-sm font-medium text-neutral-700 leading-relaxed">
                        {line}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                    <p className="text-sm text-neutral-700 leading-relaxed">
                      {service.description}
                    </p>
                  )}

                  {/* CTA Link */}
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary group/link"
                  >
                    <span>En savoir plus</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                  </div>

                {/* Hover effect border */}
                <div className={`absolute inset-0 rounded-3xl border-2 ${
                  service.color === 'primary' ? 'border-primary' : 'border-accent'
                } opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/rendez-vous"
            className="inline-flex items-center gap-3 rounded-2xl bg-gradient-primary px-8 py-4 text-lg font-bold text-white shadow-lg hover:shadow-glow transition-all duration-300 hover:scale-105"
          >
            Réservez Un Rendez-Vous
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
