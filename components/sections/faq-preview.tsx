'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

const faqItems = [
  {
    question: "Quelle est la durée d'une intervention ?",
    answer: "Environ 1h30–2h30 pour un remplacement de pare-brise, 1h pour une rénovation de phares, 2–4h pour des vitres teintées.",
  },
  {
    question: 'Comment se passent les démarches assurance ?',
    answer: "Nous vous aidons à déclarer et fournissons les documents nécessaires. La plupart des contrats couvrent tout ou partie des frais.",
  },
  {
    question: 'Proposez-vous une garantie ?',
    answer: "Oui, nos interventions sont garanties sur la main d'œuvre et les pièces posées, conformément aux conditions d'usage.",
  },
  {
    question: 'Pouvez-vous intervenir à mon domicile ?',
    answer: "Oui, notre service mobile se déplace à votre domicile, lieu de travail ou tout autre endroit de votre choix dans notre zone d'intervention. Précisez simplement votre préférence lors de la prise de rendez-vous.",
  },
  {
    question: "Faut-il remplacer systématiquement un pare-brise en cas d'impact ?",
    answer: "Non, certains impacts peuvent être réparés sans remplacement complet si leur taille, emplacement et profondeur le permettent. Nous réalisons un diagnostic pour vous proposer la solution la plus adaptée et économique.",
  },
  {
    question: 'Quels modes de paiement acceptez-vous ?',
    answer: "Nous acceptons les paiements par carte bancaire, chèque et espèces. Pour les interventions prises en charge par l'assurance, nous gérons directement les démarches avec votre assureur.",
  },
];

function FaqItem({ item, index }: { item: typeof faqItems[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/40 overflow-hidden group">
        {/* Question - Clickable Header */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center gap-5 p-6 md:p-8 text-left hover:bg-neutral-50/50 transition-colors"
        >
          {/* Icon */}
          <div className="flex-shrink-0">
            <div className={`flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 ${isOpen ? 'bg-primary' : ''}`}>
              <Image
                src="/faq.png"
                alt="FAQ"
                width={40}
                height={40}
                className={`transition-all duration-300 ${isOpen ? 'brightness-0 invert' : ''}`}
              />
            </div>
          </div>

          {/* Question */}
          <div className="flex-1">
            <h3 className="text-base md:text-lg font-bold text-neutral-900 leading-snug">
              {item.question}
            </h3>
          </div>

          {/* Chevron */}
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0"
          >
            <ChevronDown className={`h-5 w-5 transition-colors ${isOpen ? 'text-primary' : 'text-neutral-400'}`} />
          </motion.div>
        </button>

        {/* Answer - Animated */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                <div className="pl-19 border-t border-neutral-100 pt-6">
                  <p className="text-sm md:text-base leading-relaxed text-neutral-600">
                    {item.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}

export function FaqPreview() {
  return (
    <section className="section-y bg-gradient-to-br from-neutral-50 via-white to-neutral-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-page relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <HelpCircle className="h-4 w-4 text-primary" />
            <span className="text-sm font-bold uppercase tracking-wider text-primary">
              FAQ
            </span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-neutral-900 mb-6">
            QUESTIONS FRÉQUENTES
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-neutral-600">
            Les réponses aux interrogations les plus courantes sur nos services, les garanties et les démarches.
          </p>
        </motion.div>

        {/* FAQ Items - Grid Layout */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3">
          {faqItems.map((item, idx) => (
            <FaqItem key={item.question} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
