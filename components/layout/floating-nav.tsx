'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';

export function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/services', label: 'Services' },
    { href: '/rendez-vous', label: 'Rendez-vous' },
    { href: '/a-propos', label: 'À propos' },
    { href: '/contact', label: 'Contact' },
    { href: '/contact', label: 'Localisation' },
  ];

  return (
    <>
      {/* Floating Navigation Bar */}
      <motion.nav
        className={`fixed top-10 md:top-12 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-black/95 backdrop-blur-md border-b border-white/20 shadow-large'
            : 'bg-black/95 backdrop-blur-sm border-b border-white/20'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container-page mx-auto px-6">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center transition-transform hover:scale-105"
            >
              <Image
                src="/logo.png"
                alt="Logo"
                width={250}
                height={100}
                className="h-20 w-auto md:h-28"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              {navItems.map((item) => (
                <Link
                  key={`${item.href}-${item.label}`}
                  href={item.href}
                  className="text-white/90 hover:text-primary hover:scale-105 transition-all text-sm font-semibold tracking-wide"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="tel:+33961113016"
                className="flex items-center space-x-2 bg-primary text-white px-5 py-2.5 rounded-full hover:bg-primary/90 transition-all hover:scale-105 shadow-medium hover:shadow-glow"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm font-semibold">Appeler</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white hover:text-primary transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-white hover:text-primary transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Mobile Navigation Items */}
              <div className="flex flex-col items-center space-y-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={`${item.href}-${item.label}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-white text-xl font-medium hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Contact Info */}
              <motion.div
                className="flex flex-col items-center space-y-4 pt-8 border-t border-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <a
                  href="tel:+33961113016"
                  className="flex items-center space-x-2 text-white hover:text-primary transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span>+33 6 61 69 23 60</span>
                </a>
                <a
                  href="mailto:parebrisedocteur@gmail.com"
                  className="flex items-center space-x-2 text-white hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span>parebrisedocteur@gmail.com</span>
                </a>
                <div className="flex items-center space-x-2 text-white">
                  <MapPin className="h-5 w-5" />
                  <span>Paris, France</span>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.7 }}
              >
                <Link
                  href="/rendez-vous"
                  onClick={() => setIsOpen(false)}
                  className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all hover:scale-105"
                >
                  Prendre rendez-vous
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
