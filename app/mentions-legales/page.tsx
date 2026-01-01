import type { Metadata } from 'next';
import { siteConfig } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Mentions légales & Politique de confidentialité',
  description:
    'Informations légales, politique de confidentialité et traitement des données personnelles.',
};

export default function MentionsLegalesPage() {
  return (
    <section className="section-y pt-24 md:pt-28">
      <div className="container-page space-y-10 text-sm text-neutral-800">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Légal
          </p>
          <h1 className="h2 text-neutral-900">
            Mentions légales & Politique de confidentialité
          </h1>
          <p className="text-sm text-neutral-700">
            Ce site présente les services de vitrage automobile proposés par
            {" "}
            {siteConfig.name}. Vous trouverez ci-dessous les informations
            légales et notre approche en matière de protection des données.
          </p>
        </header>

        <section aria-labelledby="editeur">
          <h2
            id="editeur"
            className="text-base font-semibold text-neutral-900"
          >
            1. Éditeur du site
          </h2>
          <p className="mt-2">
            {siteConfig.name}
            <br />
            {siteConfig.addressLine1}
            <br />
            {siteConfig.addressLine2}
            <br />
            Tél : {siteConfig.phone}
            <br />
            Email : {siteConfig.email}
          </p>
        </section>

        <section aria-labelledby="hebergeur">
          <h2
            id="hebergeur"
            className="text-base font-semibold text-neutral-900"
          >
            2. Hébergeur
          </h2>
          <p className="mt-2">
            Le site est hébergé par un prestataire spécialisé en hébergement
            web, situé au sein de l&apos;Union européenne. Les données techniques
            nécessaires au bon fonctionnement du site (logs, mesures
            d&apos;audience anonymisées) sont conservées pour une durée limitée.
          </p>
        </section>

        <section aria-labelledby="donnees">
          <h2
            id="donnees"
            className="text-base font-semibold text-neutral-900"
          >
            3. Données personnelles
          </h2>
          <p className="mt-2">
            Les formulaires présents sur ce site (prise de rendez-vous,
            contact, etc.) recueillent uniquement les informations nécessaires
            au traitement de votre demande : identité, coordonnées, informations
            relatives à votre véhicule et à votre disponibilité.
          </p>
          <p className="mt-2">
            Ces informations ne sont pas revendues et sont utilisées
            exclusivement pour :
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-800">
            <li>répondre à vos demandes de devis ou de rendez-vous ;</li>
            <li>vous recontacter en cas de besoin lié à une intervention ;</li>
            <li>respecter nos obligations légales (facturation, garantie).</li>
          </ul>
        </section>

             
          
        <section aria-labelledby="droits">
          <h2
            id="droits"
            className="text-base font-semibold text-neutral-900"
          >
            4. Droits des personnes
          </h2>
          <p className="mt-2">
            Conformément au Règlement général sur la protection des données
            (RGPD), vous disposez d&apos;un droit d&apos;accès, de rectification,
            de limitation et de suppression des données vous concernant.
          </p>
          <p className="mt-2">
            Pour exercer ces droits, vous pouvez nous contacter à l&apos;adresse
            suivante : {siteConfig.email}.
          </p>
        </section>

        <section aria-labelledby="cookies">
          <h2
            id="cookies"
            className="text-base font-semibold text-neutral-900"
          >
            5. Cookies & mesure d&apos;audience
          </h2>
          <p className="mt-2">
            Ce site peut utiliser des cookies techniques nécessaires à son bon
            fonctionnement (sécurité, performance, adaptation au terminal).
            Toute mesure d&apos;audience, si elle est mise en place, est réalisée
            de manière anonyme et dans le respect des recommandations de la
            CNIL.
          </p>
        </section>
      </div>
    </section>
  );
}
