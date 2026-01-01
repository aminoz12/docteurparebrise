import type { Metadata } from 'next';
import { MapPin, Phone, MessageCircle, Mail, Navigation2 } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Localisation & contact',
  description:
    'Retrouvez notre atelier, nos coordonnées et les moyens de nous joindre : téléphone, WhatsApp, email et itinéraires GPS.',
};

export default function ContactPage() {
  const mapQuery = encodeURIComponent(
    `${siteConfig.addressLine1} ${siteConfig.addressLine2}`,
  );
  const mapEmbedUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
  const appleMapsUrl = `https://maps.apple.com/?q=${mapQuery}`;
  const wazeUrl = `https://waze.com/ul?q=${mapQuery}`;

  const whatsappNumber = siteConfig.phone.replace(/[^0-9]/g, '');

  return (
    <section className="section-y section-muted pt-24 md:pt-28">
      <div className="container-page space-y-8">
        <header className="max-w-2xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Contact & accès
          </p>
          <h1 className="h2 text-neutral-900">Localisation & contact</h1>
          <p className="text-sm text-neutral-700">
            Atelier facilement accessible, ligne téléphonique directe et
            messagerie instantanée pour vos urgences vitrage.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-subtle">
              <iframe
                title="Localisation de l'atelier pare-brise"
                src={mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-80 w-full border-0"
              />
            </div>
          </div>

          <aside className="space-y-5 rounded-2xl border border-neutral-200 bg-white p-6 shadow-subtle">
            <div className="space-y-3">
              <h2 className="h3 text-neutral-900">Nos coordonnées</h2>
              <div className="space-y-3 text-sm text-neutral-700">
                <div className="flex gap-3">
                  <span className="mt-0.5 rounded-full bg-accent/20 p-1.5 text-accent-foreground">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span>
                    {siteConfig.addressLine1}
                    <br />
                    {siteConfig.addressLine2}
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="mt-0.5 rounded-full bg-accent/20 p-1.5 text-accent-foreground">
                    <Phone className="h-4 w-4" />
                  </span>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-sm font-semibold text-neutral-900 hover:text-primary"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
                <div className="flex gap-3">
                  <span className="mt-0.5 rounded-full bg-accent/20 p-1.5 text-accent-foreground">
                    <MessageCircle className="h-4 w-4" />
                  </span>
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-neutral-900 hover:text-primary"
                  >
                    WhatsApp Direct
                  </a>
                </div>
                <div className="flex gap-3">
                  <span className="mt-0.5 rounded-full bg-accent/20 p-1.5 text-accent-foreground">
                    <Mail className="h-4 w-4" />
                  </span>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm font-semibold text-neutral-900 hover:text-primary"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-3 text-sm text-neutral-700">
              <h3 className="text-sm font-semibold text-neutral-900">
                Horaires d&apos;ouverture
              </h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-neutral-700">
                <span>Lundi – Vendredi</span>
                <span className="text-right">8h30 – 12h30 / 14h – 18h30</span>
                <span>Samedi</span>
                <span className="text-right">9h – 13h (sur rendez-vous)</span>
                <span>Dimanche</span>
                <span className="text-right">Fermé</span>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <h3 className="text-sm font-semibold text-neutral-900">
                Itinéraires GPS
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 text-xs font-semibold text-accent-foreground transition hover:bg-primary hover:text-primary-foreground"
                >
                  <Navigation2 className="h-3.5 w-3.5" />
                  Google Maps
                </Link>
                <Link
                  href={appleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-accent bg-accent/10 px-3 py-1.5 text-xs font-semibold text-neutral-900 transition hover:border-primary hover:text-primary"
                >
                  <Navigation2 className="h-3.5 w-3.5 text-accent" />
                  Apple Maps
                </Link>
                <Link
                  href={wazeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-accent bg-accent/10 px-3 py-1.5 text-xs font-semibold text-neutral-900 transition hover:border-primary hover:text-primary"
                >
                  <Navigation2 className="h-3.5 w-3.5 text-accent" />
                  Waze
                </Link>
              </div>
              <p className="text-xs text-neutral-500">
                Les boutons utilisent des icônes jaunes (sécurité) et passent en
                rouge au survol pour matérialiser l&apos;action.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
