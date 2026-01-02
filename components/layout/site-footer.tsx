'use client';

import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';
import { Phone, Mail, MapPin, Wrench, Calendar, Navigation, Clock, Shield, Car, Instagram, Facebook, Linkedin, Music } from 'lucide-react';
import Image from 'next/image';

export function SiteFooter() {
  const year = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative w-full bg-black text-white overflow-hidden border-t-4 border-red-600">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-grid-white/[0.2]" />
        </div>
      </div>

      <div className="relative z-10">
        {/* Top CTA Section */}
        <div className="border-b border-white/10">
          <div className="container-page py-16">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Besoin d'un <span className="text-red-500">pare-brise</span> rapidement ?
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Intervention rapide et professionnelle. Garantie qualité.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/rendez-vous"
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-600/25"
                >
                  <Calendar className="w-5 h-5" />
                  Prendre rendez-vous
                </Link>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  Appeler maintenant
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="container-page py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <Image
                  src="/logo.png"
                  alt="Pare-Brise Sécurité"
                  width={180}
                  height={72}
                  className="h-12 w-auto"
                  priority
                />
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Spécialiste pare-brise, vitrages, vitres teintées et rénovation de phares. 
                Intervention rapide en atelier ou à domicile.
              </p>
              
              {/* Social Media Icons */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-4">Suivez-nous</h4>
                <div className="flex gap-3">
                  <a
                    href="https://www.instagram.com/docteurparebrise"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-red-600/20 border border-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5 text-white group-hover:text-red-500 transition-colors" />
                  </a>
                  <a
                    href="https://www.facebook.com/docteurparebrise"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-red-600/20 border border-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5 text-white group-hover:text-red-500 transition-colors" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@docteurparebrise"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-red-600/20 border border-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                    aria-label="TikTok"
                  >
                    <Music className="w-5 h-5 text-white group-hover:text-red-500 transition-colors" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/docteurparebrise"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-red-600/20 border border-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-white group-hover:text-red-500 transition-colors" />
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Shield className="w-4 h-4 text-red-500" />
                  <span>Garantie</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Clock className="w-4 h-4 text-red-500" />
                  <span>Rapide</span>
                </div>
              </div>
            </div>

            {/* Services Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/services" className="text-gray-300 hover:text-red-500 transition-colors flex items-center gap-2">
                    <Wrench className="w-4 h-4" />
                    Remplacement pare-brise
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-300 hover:text-red-500 transition-colors flex items-center gap-2">
                    <Car className="w-4 h-4" />
                    Vitres teintées
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-300 hover:text-red-500 transition-colors flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Rénovation phares
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-300 hover:text-red-500 transition-colors flex items-center gap-2">
                    <Wrench className="w-4 h-4" />
                    Réparation impacts
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Contact</h3>
              <div className="space-y-4">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-start gap-3 text-gray-300 hover:text-red-500 transition-colors group"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-red-600/20 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Téléphone</p>
                    <p className="text-sm">{siteConfig.phone}</p>
                  </div>
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 text-gray-300 hover:text-red-500 transition-colors group"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-red-600/20 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <p className="text-sm">{siteConfig.email}</p>
                  </div>
                </a>
                <div className="flex items-start gap-3 text-gray-300">
                  <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Adresse</p>
                    <p className="text-sm">{siteConfig.addressLine1}</p>
                    <p className="text-sm">{siteConfig.addressLine2}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Accès rapide</h3>
              <div className="space-y-3">
                <Link
                  href="/rendez-vous"
                  className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-4 py-3 transition-all duration-300 hover:border-red-600/50 group"
                >
                  <Calendar className="w-5 h-5 text-red-500" />
                  <span className="font-medium">Rendez-vous</span>
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-4 py-3 transition-all duration-300 hover:border-red-600/50 group"
                >
                  <Navigation className="w-5 h-5 text-red-500" />
                  <span className="font-medium">Localisation</span>
                </Link>
                <Link
                  href="/mentions-legales"
                  className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-4 py-3 transition-all duration-300 hover:border-red-600/50 group"
                >
                  <Shield className="w-5 h-5 text-red-500" />
                  <span className="font-medium">Mentions légales</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container-page py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <p className="text-gray-400 font-medium">
                  © {year} {siteConfig.name}. Tous droits réservés.
                </p>
              </div>
              <div className="flex items-center gap-6">
                <Link
                  href="/mentions-legales"
                  className="text-gray-400 hover:text-red-500 text-sm transition-colors"
                >
                  Mentions légales
                </Link>
                <Link
                  href="/politique-confidentialite"
                  className="text-gray-400 hover:text-red-500 text-sm transition-colors"
                >
                  Confidentialité
                </Link>
              </div>
              {/* Social Media Links in Bottom Bar */}
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/docteurparebrise"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-all duration-300 group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 text-gray-400 group-hover:text-red-500 transition-colors" />
                </a>
                <a
                  href="https://www.facebook.com/docteurparebrise"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-all duration-300 group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 text-gray-400 group-hover:text-red-500 transition-colors" />
                </a>
                <a
                  href="https://www.tiktok.com/@docteurparebrise"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-all duration-300 group"
                  aria-label="TikTok"
                >
                  <Music className="w-4 h-4 text-gray-400 group-hover:text-red-500 transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/company/docteurparebrise"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-all duration-300 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-gray-400 group-hover:text-red-500 transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
