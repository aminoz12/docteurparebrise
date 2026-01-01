import type { Metadata } from 'next';
import { RendezvousForm } from '@/components/sections/rendezvous-form';
import { siteConfig } from '@/lib/siteConfig';
import { JuraFontLoader } from '@/components/layout/jura-font-loader';

export const metadata: Metadata = {
  title: 'Prise de rendez-vous',
  description:
    'Planifiez votre rendez-vous pare-brise, vitres teintées ou rénovation de phares en quelques clics.',
};

export default function RendezVousPage() {
  return (
    <>
      <JuraFontLoader />
      <section className="section-y bg-gradient-to-b from-white via-neutral-50 to-white relative overflow-hidden font-jura">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-page relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2 mb-6">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-bold uppercase tracking-wider text-primary font-jura">
              Rendez-vous
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-neutral-900 mb-4 font-jura">
            PRISE DE RENDEZ-VOUS EN LIGNE
          </h1>
          <p className="text-lg font-bold text-neutral-600 font-jura">
            Choisissez votre service, une date et un créneau horaire. Votre rendez-vous sera confirmé par un de nos agents par téléphone.
          </p>
        </div>

        <RendezvousForm />
      </div>
    </section>
    </>
  );
}
