'use client';

import Image from 'next/image';

export function PromotionalBar() {
  const promotions = [
    'RIEN À PAYER ! DÉPOSEZ VOTRE VOITURE AVEC L\'ASSURANCE, REPARTEZ CE SOIR AVEC TOUT RÉPARÉ !',
    '50€ CASH POUR CHAQUE AMI PARRAINÉ !',
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-yellow-500 overflow-hidden">
      <div className="relative h-10 md:h-12 flex items-center">
        <div className="flex animate-scroll whitespace-nowrap">
          {promotions.map((promo, index) => (
            <span key={index} className="mx-8 text-black font-bold text-sm md:text-base flex items-center gap-2">
              {promo}
              <Image
                src="/promo.png"
                alt="Promo"
                width={20}
                height={20}
                className="inline-block"
              />
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {promotions.map((promo, index) => (
            <span key={`duplicate-${index}`} className="mx-8 text-black font-bold text-sm md:text-base flex items-center gap-2">
              {promo}
              <Image
                src="/promo.png"
                alt="Promo"
                width={20}
                height={20}
                className="inline-block"
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

