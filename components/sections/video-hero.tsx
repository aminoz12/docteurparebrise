'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, Shield, Clock, Award } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export function VideoHero() {
  const [currentImage, setCurrentImage] = useState('/hero1.png');

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImage('/hero2.png');
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Image Background with rotation */}
      <div className="absolute inset-0 z-0">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={currentImage}
            alt="Pare-brise professionnel"
            fill
            className="object-cover"
            priority
            quality={100}
          />
        </motion.div>
        {/* Enhanced overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
        {/* Additional vignette effect */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/40" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-[1] overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-600/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-end justify-center pb-20 md:pb-16">
        <div className="container-page mx-auto px-6 w-full">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              className="space-y-3 md:space-y-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {/* Main heading */}
              <motion.h1
                className="font-n27 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl drop-shadow-lg mb-1 md:mb-4">
                  <span className="text-primary">DOCTEUR</span>{' '}
                  <span className="text-white">PARE-BRISE</span>
                </span>
                <span className="block text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl drop-shadow-lg uppercase">
                  VOTRE PARE-BRISE RÉPARÉ À{' '}
                  <motion.span
                    className="gradient-text-accent inline-block"
                    animate={{
                      y: [0, -10, 0, -8, 0, -6, 0],
                      rotate: [0, -5, 5, -3, 3, 0],
                      scale: [1, 1.1, 1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    0€
                  </motion.span>
                </span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                className="font-arthur-schwarz mx-auto max-w-3xl text-lg sm:text-xl md:text-2xl text-white/90 font-bold drop-shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Nous gérons tout avec votre assurance.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Link
                  href="/rendez-vous"
                  className="group relative inline-flex items-center justify-center rounded-2xl bg-gradient-primary px-10 py-5 text-lg font-n27 font-bold text-white shadow-glow overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Prendre rendez-vous
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-hover opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                
                <Link
                  href="tel:+33661692360"
                  className="group inline-flex items-center justify-center rounded-2xl glass-dark px-10 py-5 text-lg font-n27 font-bold text-white border-2 border-white/30 transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:border-white/50"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Appeler maintenant
                </Link>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                className="flex flex-wrap items-center justify-center gap-6 pt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <div className="flex items-center gap-2 text-white/90">
                  <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-sm font-semibold">4,9/5 sur 250+ avis</span>
                </div>
                <div className="h-4 w-px bg-white/30" />
                <div className="flex items-center gap-2 text-white/90">
                  <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-sm font-semibold">Garantie 2 ans</span>
                </div>
                <div className="h-4 w-px bg-white/30" />
                <div className="flex items-center gap-2 text-white/90">
                  <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-sm font-semibold">Intervention sous 24h</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
