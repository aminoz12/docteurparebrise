import type { Metadata } from 'next';
import Image from 'next/image';
import { ShieldCheck, Award, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'À propos',
  description:
    'Spécialiste pare-brise et vitrages auto : découvrez notre histoire, notre expertise et notre engagement qualité.',
};

export default function AProposPage() {
  return (
    <section className="section-y pt-24 md:pt-28">
      <div className="container-page grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
        <div className="space-y-6">
          <header className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              À propos
            </p>
            <h1 className="h2 text-neutral-900">Votre vitrage, notre métier</h1>
            <p className="text-sm text-neutral-700">
              Nous avons construit notre atelier autour d&apos;une idée simple :
              offrir un service vitrage auto exigeant, transparent et axé sur la
              sécurité de chaque conducteur.
            </p>
          </header>

          <div className="space-y-4 text-sm text-neutral-800">
            <p>
              Chaque pare-brise, chaque impact et chaque phare raconte une
              histoire. Derrière ces interventions, il y a toujours des trajets
              quotidiens, des déplacements familiaux ou professionnels, et surtout
              votre sécurité et celle de vos passagers.
            </p>
            <p>
              Notre équipe cumule plusieurs années d&apos;expérience en vitrage
              automobile, en relation avec les principaux assureurs du marché.
              Nous suivons régulièrement des formations pour maîtriser les
              dernières technologies de capteurs, caméras et systèmes ADAS.
            </p>
          </div>

          <dl className="grid gap-4 text-sm text-neutral-800 sm:grid-cols-3">
            <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-subtle">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-accent/20 p-1.5 text-accent-foreground">
                  <ShieldCheck className="h-4 w-4" />
                </span>
                <dt className="text-xs font-semibold uppercase tracking-wide text-neutral-900">
                  Sécurité
                </dt>
              </div>
              <dd className="mt-2 text-xs text-neutral-600">
                Procédures strictes, contrôles visuels systématiques et
                respect des recommandations constructeurs.
              </dd>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-subtle">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-accent/20 p-1.5 text-accent-foreground">
                  <Award className="h-4 w-4" />
                </span>
                <dt className="text-xs font-semibold uppercase tracking-wide text-neutral-900">
                  Qualité
                </dt>
              </div>
              <dd className="mt-2 text-xs text-neutral-600">
                Vitrages homologués, films teintés premium et produits de
                rénovation phares longue durée.
              </dd>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-subtle">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-accent/20 p-1.5 text-accent-foreground">
                  <Users className="h-4 w-4" />
                </span>
                <dt className="text-xs font-semibold uppercase tracking-wide text-neutral-900">
                  Service client
                </dt>
              </div>
              <dd className="mt-2 text-xs text-neutral-600">
                Démarches d&apos;assurance simplifiées, créneaux adaptés et
                suivi personnalisé de votre dossier.
              </dd>
            </div>
          </dl>

          <div className="space-y-3 text-sm text-neutral-800">
            <h2 className="text-sm font-semibold text-neutral-900">
              Engagements au quotidien
            </h2>
            <ul className="space-y-1.5 text-xs text-neutral-700">
              <li>• Explication claire des travaux réalisés sur votre véhicule.</li>
              <li>• Transparence sur les délais, tarifs et garanties.</li>
              <li>• Respect de la propreté de l&apos;habitacle et du véhicule.</li>
              <li>• Contrôle qualité systématique avant restitution.</li>
            </ul>
          </div>
        </div>

        <aside className="space-y-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 shadow-subtle">
          <div className="space-y-3 text-sm text-neutral-800">
            <h2 className="text-sm font-semibold text-neutral-900">
              Une équipe à taille humaine
            </h2>
            <p className="text-xs text-neutral-700">
              Nous avons volontairement conservé une structure à taille humaine
              pour privilégier l&apos;écoute et la proximité. Vous savez à qui vous
              confiez votre véhicule.
            </p>
            <ul className="space-y-2 text-xs text-neutral-700">
              <li className="flex flex-col rounded-xl border border-dashed border-neutral-200 bg-white px-3 py-2">
                <span className="font-semibold text-neutral-900">Julien</span>
                <span className="text-neutral-600">Spécialiste vitrage et calibrage ADAS</span>
              </li>
              <li className="flex flex-col rounded-xl border border-dashed border-neutral-200 bg-white px-3 py-2">
                <span className="font-semibold text-neutral-900">Sarah</span>
                <span className="text-neutral-600">Accompagnement assurance & relation client</span>
              </li>
              <li className="flex flex-col rounded-xl border border-dashed border-neutral-200 bg-white px-3 py-2">
                <span className="font-semibold text-neutral-900">Paul</span>
                <span className="text-neutral-600">Intervention à domicile et sur site</span>
              </li>
            </ul>
          </div>
          <div className="relative h-[600px] w-full -mt-2">
            <Image
              src="/team.png"
              alt="Équipe Docteur Pare-Brise"
              fill
              priority={false}
              className="rounded-xl object-contain"
            />
          </div>
        </aside>
      </div>
    </section>
  );
}
