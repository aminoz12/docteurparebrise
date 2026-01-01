'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) {
      setStatus('error');
      return;
    }
    // Here you would integrate with your newsletter provider (e.g. Mailchimp, ConvertKit)
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus('idle'), 5000);
  }

  return (
    <section className="section-y bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container-page relative z-10">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Card - Completely Redesigned */}
          <div className="relative rounded-3xl border-2 border-white/20 bg-white/10 backdrop-blur-md p-10 md:p-16 shadow-2xl overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
            
            <div className="relative z-10 text-center space-y-8">
              {/* Icon */}
              <motion.div
                className="inline-flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-accent shadow-lg">
                  <Mail className="h-10 w-10 text-neutral-900" />
                </div>
              </motion.div>

              {/* Content */}
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
                  RESTEZ INFORMÉ
                </h2>
                <p className="text-lg text-neutral-300 max-w-xl mx-auto">
                  Recevez nos conseils entretien, promotions et nouveautés. Un e-mail par mois maximum.
                </p>
              </div>

              {/* Form - Redesigned */}
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
              >
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="Votre adresse e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-14 rounded-2xl border-2 border-white/20 bg-white/10 backdrop-blur-md text-neutral-900 placeholder:text-neutral-500 focus:border-white/40 focus:bg-white/20 transition-all"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="h-14 rounded-2xl bg-gradient-primary px-8 font-bold text-white shadow-lg hover:shadow-glow transition-all duration-300 hover:scale-105"
                >
                  <Send className="mr-2 h-5 w-5" />
                  S'inscrire
                </Button>
              </form>

              {/* Status messages */}
              {status === 'success' && (
                <motion.div
                  className="flex items-center justify-center gap-2 text-sm font-semibold text-accent"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <CheckCircle2 className="h-5 w-5" />
                  Inscription réussie ! Merci de votre confiance.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  className="flex items-center justify-center gap-2 text-sm font-semibold text-red-400"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <AlertCircle className="h-5 w-5" />
                  Veuillez entrer une adresse e-mail valide.
                </motion.div>
              )}

              {/* Privacy note */}
              <p className="text-xs text-neutral-400">
                Nous respectons votre vie privée. Vous pouvez vous désinscrire à tout moment.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
