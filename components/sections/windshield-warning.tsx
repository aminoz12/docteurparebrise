'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const steps = [
  {
    number: '1',
    text: 'Attention ! Les impacts sur votre paret.',
    position: 'top-right',
  },
  {
    number: '2',
    text: 'visibilité. Il est établiles aux accidents.',
    position: 'middle-right',
  },
  {
    number: '3',
    text: 'Rouler  et les occupants du véhicule. Le pare-brise contribue majoritairement à l\'intégrité structurelle de votre véhicule.',
    position: 'lower-right',
  },
  {
    number: '4',
    text: 'Conduire avecnt de prendre la route.',
    position: 'bottom-right',
  },
];

export function WindshieldWarning() {
  return (
    <section className="section-y bg-neutral-200 relative overflow-hidden">
      <div className="container-page relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-neutral-900 mb-4">
            ATTENTION ! VOS IMPACTS PEUVENT SE TRANSFORMER EN GRANDES FISSURES
          </h2>
        </motion.div>

        {/* Car with curved steps around it - Matching infographic design */}
        <div className="relative min-h-[700px] md:min-h-[800px] lg:min-h-[900px] flex items-center justify-start px-0 md:px-4">
          {/* Car Image - Positioned far to the left */}
          <motion.div
            className="relative z-10 w-full max-w-md md:max-w-lg lg:max-w-xl -ml-4 md:-ml-8 lg:-ml-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/car.png"
              alt="Voiture avec pare-brise endommagé"
              width={800}
              height={600}
              className="w-full h-auto drop-shadow-lg"
            />
          </motion.div>

          {/* Steps arranged in curve on the right - Matching infographic exactly */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative w-full max-w-7xl h-full">
              {steps.map((step, idx) => {
                // Precise positioning to match infographic curve
                const positions = [
                  { top: '5%', right: '8%', transform: 'translateY(0)' }, // Step 1 - Top right
                  { top: '28%', right: '6%', transform: 'translateY(-50%)' }, // Step 2 - Middle right upper
                  { bottom: '28%', right: '6%', transform: 'translateY(50%)' }, // Step 3 - Lower middle right
                  { bottom: '5%', right: '8%', transform: 'translateY(0)' }, // Step 4 - Bottom right
                ];

                const pos = positions[idx];

                return (
                  <motion.div
                    key={step.number}
                    className="absolute z-20 max-w-[280px] md:max-w-sm lg:max-w-md pointer-events-auto"
                    style={{
                      top: pos.top,
                      right: pos.right,
                      bottom: pos.bottom,
                      transform: pos.transform,
                    }}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + idx * 0.15 }}
                  >
                    <div className="flex items-start gap-3 md:gap-4">
                      {/* Number Circle - Teal color like infographic */}
                      <div className="flex-shrink-0">
                        <div className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-teal-500 text-white text-xl md:text-2xl font-black shadow-md">
                          {step.number}
                        </div>
                      </div>

                      {/* Text */}
                      <div className="flex-1 pt-1">
                        <p className="text-sm md:text-base text-neutral-900 leading-relaxed">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
