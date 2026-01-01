import type { Metadata } from 'next';
import { Wrench, SunMedium, Sparkles, KeyRound, Phone, Calendar } from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Remplacement de pare-brise, vitres teintées, rénovation de phares et bientôt reproduction de clés.',
};

const services = [
  {
    title: 'Remplacement de pare-brise & tout vitrage',
    description:
      "Pare-brise, vitres latérales, lunettes arrière, toits panoramiques : nous utilisons des vitrages homologués constructeur pour une sécurité maximale.",
    details: [
      'Diagnostic précis de l’impact ou de la fissure',
      'Prise en charge des démarches avec votre assurance',
      'Recalibrage des caméras et capteurs ADAS si nécessaire',
      'Respect strict des temps de séchage et des protocoles de sécurité',
    ],
    label: 'Garantie & assurance',
  },
  {
    title: 'Vitres teintées',
    description:
      'Confort thermique, protection UV, intimité et esthétique. Nous proposons plusieurs niveaux de teinte, tous conformes à la législation en vigueur.',
    details: [
      'Films haut de gamme anti-UV et anti-chaleur',
      'Teintes adaptées à l’avant et à l’arrière du véhicule',
      'Pose sans bulles, démontable sans traces',
      'Certificat de conformité fourni pour le contrôle technique',
    ],
    label: 'Conforme à la législation',
  },
  {
    title: 'Rénovation de phares',
    description:
      'Une solution durable pour retrouver transparence, luminosité et style, tout en facilitant le contrôle technique.',
    details: [
      'Nettoyage en profondeur et ponçage multi-grains',
      'Polissage et lustrage pour un effet avant / après immédiat',
      'Application d’une protection anti-UV longue durée',
      'Contraste renforcé et meilleure visibilité de nuit',
    ],
    label: 'Pack sécurité',
  },
  {
    title: 'Reproduction de clés',
    description:
      'Service en cours de déploiement : bientôt disponible pour vos clés et télécommandes de véhicules.',
    details: [
      'Clés simples et télécommandes électroniques',
      'Synchronisation et programmation sécurisées',
      'Conseils sur la sécurisation de votre véhicule',
    ],
    label: 'Bientôt disponible',
    comingSoon: true,
  },
];

export default function ServicesPage() {
  return (
    <section className="section-y pt-24 md:pt-28">
      <div className="container-page space-y-10">
        <header className="max-w-2xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Services
          </p>
          <h1 className="h2 text-neutral-900" dangerouslySetInnerHTML={{ __html: 'Des <span style="color: #e10600;">prestations</span> orientées sécurité et <span style="color: #ffc400;">confort</span>' }}>
          </h1>
          <p className="text-sm text-neutral-700">
            Nous intervenons sur tous les vitrages automobiles avec des
            procédures rigoureuses, pour une visibilité parfaite et une
            conformité totale à la réglementation.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => {
            const Icon =
              service.title === 'Vitres teintées'
                ? SunMedium
                : service.title.startsWith('Rénovation')
                ? Sparkles
                : service.title.startsWith('Reproduction')
                ? KeyRound
                : Wrench;

            return (
              <article
                key={service.title}
                className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-subtle transition hover:-translate-y-0.5 hover:border-primary/70 hover:shadow-card"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${
                      service.comingSoon
                        ? 'bg-accent text-accent-foreground'
                        : 'bg-primary text-primary-foreground'
                    }`}
                  >
                    {service.label}
                  </span>
                </div>

                <h2 className="mt-4 text-base font-semibold text-neutral-900">
                  {service.title}
                </h2>
                <p className="mt-2 text-sm text-neutral-700">
                  {service.description}
                </p>

                <ul className="mt-4 space-y-1.5 text-xs text-neutral-700">
                  {service.details.map((line) => (
                    <li key={line} className="flex gap-2">
                      <span className="mt-1 h-1 w-1 rounded-full bg-primary" aria-hidden="true" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                {service.title.startsWith('Rénovation') && (
                  <div className="mt-5 rounded-xl border border-dashed border-neutral-300 bg-neutral-50 px-4 py-3 text-xs text-neutral-700">
                    <p className="font-semibold text-neutral-900">Effet avant / après</p>
                    <p className="mt-1">
                      Nos rénovations de phares offrent un résultat visuel
                      immédiat. En atelier, nous vous présentons systématiquement
                      la comparaison avant / après la prestation.
                    </p>
                  </div>
                )}

                <div className="mt-5 border-t border-dashed border-neutral-200 pt-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/rendez-vous"
                      className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                    >
                      <Calendar className="h-4 w-4" />
                      Prendre Un Rendez-vous
                    </Link>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105"
                    >
                      <Phone className="h-4 w-4" />
                      Nous Appeler
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
