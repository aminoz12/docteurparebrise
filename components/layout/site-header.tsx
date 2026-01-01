'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const navItems = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Services' },
  { href: '/rendez-vous', label: 'Prise de rendez-vous' },
  { href: '/contact', label: 'Localisation / Contact' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/faq', label: 'FAQ' },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-black/95 backdrop-blur-xl shadow-sm">
      <div className="container-page flex h-24 md:h-28 items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="group flex items-center transition-transform hover:scale-105">
          <Image
            src="/logo.png"
            alt="Logo"
            width={250}
            height={100}
            className="h-20 w-auto md:h-28"
          />
        </Link>

        {/* Desktop Navigation - Redesigned */}
        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'rounded-xl px-4 py-2 text-sm font-semibold text-white/90 transition-all duration-300 hover:bg-white/10 hover:text-primary',
                pathname === item.href && 'bg-primary/20 text-primary font-bold'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA & Mobile Menu */}
        <div className="flex items-center gap-3">
          {/* Phone CTA - Desktop */}
          <a
            href="tel:+33661692360"
            className="hidden items-center gap-2 rounded-xl bg-gradient-primary px-5 py-2.5 text-sm font-bold text-white shadow-md hover:shadow-glow transition-all duration-300 hover:scale-105 md:flex"
          >
            <Phone className="h-4 w-4" />
            Appeler
          </a>

          {/* Appointment CTA - Desktop */}
          <Link
            href="/rendez-vous"
            className="hidden rounded-xl bg-gradient-primary px-6 py-2.5 text-sm font-bold text-white shadow-md hover:shadow-glow transition-all duration-300 hover:scale-105 md:inline-flex"
          >
            Rendez-vous
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl border-2 border-white/20 p-2.5 text-white transition-all hover:border-primary hover:bg-primary/20 md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Ouvrir le menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Redesigned */}
      {open && (
        <motion.div
          className="border-t border-white/20 bg-black md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <nav className="container-page flex flex-col py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'rounded-xl px-4 py-3 text-base font-semibold text-white/90 transition-all hover:bg-primary/20 hover:text-primary',
                  pathname === item.href && 'bg-primary/20 text-primary font-bold'
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 space-y-2 border-t border-white/20">
              <a
                href="tel:+33661692360"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-4 py-3 text-base font-bold text-white shadow-md"
              >
                <Phone className="h-5 w-5" />
                Appeler maintenant
              </a>
              <Link
                href="/rendez-vous"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center rounded-xl border-2 border-primary bg-primary/20 px-4 py-3 text-base font-bold text-primary"
              >
                Prendre rendez-vous
              </Link>
            </div>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
