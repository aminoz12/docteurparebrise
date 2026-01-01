import type { Metadata } from 'next';
import { Accordion } from '@/components/ui/accordion';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Questions fréquentes sur le remplacement de pare-brise, les assurances, la garantie et les interventions à domicile.',
};

const faqItems = [
  {
    id: 'duree-intervention',
    question: "Quelle est la durée d'une intervention ?",
    answer:
      "Pour un remplacement de pare-brise, il faut généralement compter entre 1h30 et 2h30, incluant le temps de séchage et les contrôles. Une rénovation de phares dure en moyenne 1h, tandis qu'une pose de vitres teintées s'étend de 2 à 4h selon le véhicule.",
  },
  {
    id: 'assurance',
    question: 'Comment se passent les démarches avec mon assurance ?',
    answer:
      "Dans la plupart des cas, votre garantie bris de glace prend en charge tout ou partie de l'intervention. Nous vous accompagnons dans la déclaration et pouvons vous aider à constituer votre dossier (photos, facture, références). Renseignez-vous auprès de votre assureur pour connaître le niveau de franchise et de prise en charge.",
  },
  {
    id: 'garantie',
    question: "Proposez-vous une garantie sur les travaux effectués ?",
    answer:
      "Oui, nos interventions sont garanties sur la main d'œuvre et sur les pièces posées, dans le respect des conditions d'utilisation normales du véhicule. En cas de doute après l'intervention, nous réalisons un contrôle complémentaire sans frais.",
  },
  {
    id: 'domicile',
    question: 'Pouvez-vous intervenir à mon domicile ou sur mon lieu de travail ?',
    answer:
      "Oui, notre service mobile se déplace sur le lieu de votre choix (domicile, lieu de travail, parking sécurisé) dans notre zone d'intervention. Il suffit de le préciser lors de la prise de rendez-vous.",
  },
  {
    id: 'impact',
    question: "Faut-il remplacer systématiquement un pare-brise en cas d'impact ?",
    answer:
      "Non, certains impacts peuvent être réparés sans remplacement complet, si leur taille, leur emplacement et leur profondeur le permettent. Nous réalisons un diagnostic visuel pour vous proposer la solution la plus adaptée et la plus économique.",
  },
  {
    id: 'paiement',
    question: 'Quels sont les moyens de paiement acceptés ?',
    answer:
      "Nous acceptons les paiements par carte bancaire, virement et espèces. Selon votre contrat, une partie du montant peut être réglée directement par votre assurance.",
  },
];

export default function FAQPage() {
  return (
    <section className="section-y section-muted">
      <div className="container-page space-y-8">
        <header className="max-w-2xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-600">
            FAQ
          </p>
          <h1 className="h2 text-neutral-900">
            Questions fréquentes sur nos services
          </h1>
          <p className="text-sm text-neutral-700">
            Vous trouverez ici les réponses aux interrogations les plus
            courantes concernant nos prestations, les démarches administratives
            et les conditions d&apos;intervention.
          </p>
        </header>

        <Accordion items={faqItems} />
      </div>
    </section>
  );
}
