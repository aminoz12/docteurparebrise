import type { Metadata } from 'next';
import { siteConfig } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description:
    'Politique de confidentialité et traitement des données personnelles conformément au RGPD.',
};

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="section-y pt-24 md:pt-28">
      <div className="container-page space-y-10 text-sm text-neutral-800">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Confidentialité
          </p>
          <h1 className="h2 text-neutral-900">
            Politique de confidentialité
          </h1>
          <p className="text-sm text-neutral-700">
            {siteConfig.name} s&apos;engage à protéger vos données personnelles et à
            respecter votre vie privée. Cette politique explique comment nous
            collectons, utilisons et protégeons vos informations.
          </p>
        </header>

        <section aria-labelledby="collecte">
          <h2
            id="collecte"
            className="text-base font-semibold text-neutral-900"
          >
            1. Collecte des données
          </h2>
          <p className="mt-2">
            Nous collectons les données personnelles que vous nous fournissez
            volontairement lorsque vous :
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-800">
            <li>remplissez un formulaire de contact ou de prise de rendez-vous ;</li>
            <li>nous contactez par téléphone, email ou via le chat en ligne ;</li>
            <li>visitez notre site web (données de navigation anonymisées).</li>
          </ul>
          <p className="mt-2">
            Les données collectées peuvent inclure : nom, prénom, adresse email,
            numéro de téléphone, adresse postale, informations sur votre véhicule,
            et toute autre information que vous choisissez de nous communiquer.
          </p>
        </section>

        <section aria-labelledby="utilisation">
          <h2
            id="utilisation"
            className="text-base font-semibold text-neutral-900"
          >
            2. Utilisation des données
          </h2>
          <p className="mt-2">
            Vos données personnelles sont utilisées exclusivement pour :
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-800">
            <li>répondre à vos demandes de devis, rendez-vous ou informations ;</li>
            <li>traiter et gérer vos commandes et interventions ;</li>
            <li>vous contacter concernant vos demandes ou interventions ;</li>
            <li>respecter nos obligations légales et réglementaires ;</li>
            <li>améliorer nos services et votre expérience utilisateur.</li>
          </ul>
          <p className="mt-2">
            Nous ne vendons, ne louons ni ne partageons vos données personnelles
            avec des tiers à des fins commerciales.
          </p>
        </section>

        <section aria-labelledby="conservation">
          <h2
            id="conservation"
            className="text-base font-semibold text-neutral-900"
          >
            3. Conservation des données
          </h2>
          <p className="mt-2">
            Vos données personnelles sont conservées uniquement pendant la durée
            nécessaire aux finalités pour lesquelles elles ont été collectées :
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-800">
            <li>données de contact : 3 ans à compter du dernier contact ;</li>
            <li>données de commande : durée légale de conservation (10 ans pour les factures) ;</li>
            <li>données de navigation : 13 mois maximum.</li>
          </ul>
        </section>

        <section aria-labelledby="securite">
          <h2
            id="securite"
            className="text-base font-semibold text-neutral-900"
          >
            4. Sécurité des données
          </h2>
          <p className="mt-2">
            Nous mettons en œuvre des mesures techniques et organisationnelles
            appropriées pour protéger vos données personnelles contre tout accès
            non autorisé, perte, destruction ou altération. Cependant, aucune
            méthode de transmission sur Internet n&apos;est totalement sécurisée.
          </p>
        </section>

        <section aria-labelledby="droits">
          <h2
            id="droits"
            className="text-base font-semibold text-neutral-900"
          >
            5. Vos droits
          </h2>
          <p className="mt-2">
            Conformément au Règlement général sur la protection des données
            (RGPD), vous disposez des droits suivants :
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-800">
            <li><strong>Droit d&apos;accès</strong> : vous pouvez demander une copie de vos données personnelles ;</li>
            <li><strong>Droit de rectification</strong> : vous pouvez demander la correction de données inexactes ;</li>
            <li><strong>Droit à l&apos;effacement</strong> : vous pouvez demander la suppression de vos données ;</li>
            <li><strong>Droit à la limitation</strong> : vous pouvez demander la limitation du traitement ;</li>
            <li><strong>Droit d&apos;opposition</strong> : vous pouvez vous opposer au traitement de vos données ;</li>
            <li><strong>Droit à la portabilité</strong> : vous pouvez demander le transfert de vos données.</li>
          </ul>
          <p className="mt-2">
            Pour exercer ces droits, contactez-nous à : {siteConfig.email}
          </p>
        </section>

        <section aria-labelledby="cookies">
          <h2
            id="cookies"
            className="text-base font-semibold text-neutral-900"
          >
            6. Cookies et technologies similaires
          </h2>
          <p className="mt-2">
            Notre site utilise des cookies techniques nécessaires à son bon
            fonctionnement. Ces cookies ne nécessitent pas votre consentement
            préalable. Nous n&apos;utilisons pas de cookies publicitaires ou de
            tracking tiers sans votre consentement explicite.
          </p>
        </section>

        <section aria-labelledby="modifications">
          <h2
            id="modifications"
            className="text-base font-semibold text-neutral-900"
          >
            7. Modifications de la politique
          </h2>
          <p className="mt-2">
            Nous nous réservons le droit de modifier cette politique de
            confidentialité à tout moment. Toute modification sera publiée sur
            cette page avec une mise à jour de la date de dernière modification.
            Nous vous encourageons à consulter régulièrement cette page.
          </p>
        </section>

        <section aria-labelledby="contact">
          <h2
            id="contact"
            className="text-base font-semibold text-neutral-900"
          >
            8. Contact
          </h2>
          <p className="mt-2">
            Pour toute question concernant cette politique de confidentialité ou
            le traitement de vos données personnelles, vous pouvez nous contacter :
          </p>
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
      </div>
    </section>
  );
}

