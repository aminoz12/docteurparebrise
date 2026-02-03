'use client';

import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';

export function Location() {
  // Function to open location in navigation apps
  const openInMaps = () => {
    // Detect device and open appropriate app
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream;
    const isAndroid = /android/i.test(userAgent);

    const googleMapsUrl = siteConfig.mapsUrl;
    
    if (isIOS) {
      // Try Waze first, then Apple Maps, then Google Maps
      const wazeUrl = 'waze://?ll=48.8566,2.3522&navigate=yes';
      const appleMapsUrl = 'http://maps.apple.com/?q=48.8566,2.3522';
      
      // Try to open Waze, fallback to Apple Maps, then Google Maps
      const wazeWindow = window.open(wazeUrl, '_blank');
      setTimeout(() => {
        if (!wazeWindow || wazeWindow.closed) {
          const appleWindow = window.open(appleMapsUrl, '_blank');
          setTimeout(() => {
            if (!appleWindow || appleWindow.closed) {
              window.open(googleMapsUrl, '_blank');
            }
          }, 500);
        }
      }, 500);
    } else if (isAndroid) {
      // Try Waze first, then Google Maps
      const wazeUrl = 'waze://?ll=48.8566,2.3522&navigate=yes';
      const wazeWindow = window.open(wazeUrl, '_blank');
      setTimeout(() => {
        if (!wazeWindow || wazeWindow.closed) {
          window.open(googleMapsUrl, '_blank');
        }
      }, 500);
    } else {
      // Desktop - open Google Maps in new tab
      window.open(googleMapsUrl, '_blank');
    }
  };

  return (
    <section id="location" className="section-y bg-gradient-to-br from-neutral-50 via-white to-neutral-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-page relative z-10">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
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
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm font-bold uppercase tracking-wider text-primary">
                Localisation
              </span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-neutral-900 mb-4">
              NOUS TROUVER
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-neutral-600">
              Visitez notre atelier ou contactez-nous pour une intervention à domicile
            </p>
          </motion.div>

          {/* Map Card */}
          <motion.div
            className="rounded-3xl border-2 border-neutral-200 bg-white shadow-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Google Maps Embed - Satellite View */}
            <div className="relative w-full h-[400px] md:h-[500px] bg-neutral-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937606!2d2.3522219!3d48.856614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUxJzIzLjgiTiAywrAyMScwOC4wIkU!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus&maptype=satellite"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="Localisation de l'atelier"
              />
              {/* Click overlay to open in Google Maps */}
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-white transition-colors shadow-lg"
                aria-label="Ouvrir dans Google Maps"
              >
                Ouvrir dans Google Maps
              </a>
            </div>

            {/* Buttons */}
            <div className="p-6 bg-gradient-to-br from-neutral-50 to-white">
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  onClick={openInMaps}
                  className="flex-1 flex items-center justify-center gap-3 rounded-2xl bg-gradient-primary px-6 py-4 text-base font-bold text-white shadow-lg hover:shadow-glow transition-all duration-300 hover:scale-105"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Navigation className="h-5 w-5" />
                  Nous Localiser
                </motion.button>
                <Link
                  href="/rendez-vous"
                  className="flex-1 flex items-center justify-center gap-3 rounded-2xl bg-white border-2 border-primary px-6 py-4 text-base font-bold text-primary shadow-lg hover:bg-primary/5 transition-all duration-300 hover:scale-105"
                >
                  <span>Prendre Un Rendez-Vous</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

