'use client';

import { FormEvent, useState } from 'react';
import { createCalendarEventUrl, type ReservationPayload } from '@/lib/google-calendar';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, User, Phone, FileText, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  'Remplacement de pare-brise',
  'Réparation d\'impact',
  'Vitres teintées',
  'Rénovation de phares',
];

const timeSlots = [
  '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
  '11:00', '11:30', '12:00', '13:00', '13:30', '14:00',
  '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
];

type LocationChoice = 'atelier' | 'domicile';

export function RendezvousForm() {
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState<LocationChoice>('atelier');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'loading' | 'error'>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!service || !date || !time) {
      return;
    }

    setStatus('loading');

    const payload: ReservationPayload = {
      service,
      date,
      time,
      location,
      customerName: customerName || undefined,
      customerPhone: customerPhone || undefined,
      notes: notes || undefined,
    };

    try {
      // Save to Google Sheets
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to save appointment');
      }

      // Still open Google Calendar
      const url = createCalendarEventUrl(payload);
      if (typeof window !== 'undefined') {
        window.open(url, '_blank', 'noopener,noreferrer');
      }

      setStatus('success');
      
      // Reset form after success
      setTimeout(() => {
        setService('');
        setDate('');
        setTime('');
        setLocation('atelier');
        setCustomerName('');
        setCustomerPhone('');
        setNotes('');
        setStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('Error saving appointment:', error);
      setStatus('error');
    }
  }

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start font-jura">
      <motion.form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-3xl border-2 border-neutral-200 bg-white p-8 md:p-10 shadow-lg font-jura"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-2 mb-6">
          <h2 className="text-2xl font-black uppercase text-neutral-900 font-jura">Planifier votre rendez-vous</h2>
          <p className="text-sm font-bold text-neutral-600 font-jura">
            Renseignez quelques informations pour générer un rendez-vous pré-rempli dans votre Google Calendar.
          </p>
        </div>

        {/* Service Selection */}
        <div className="space-y-2">
          <label htmlFor="service" className="flex items-center gap-2 text-sm font-extrabold text-neutral-900 font-jura">
            <FileText className="h-4 w-4 text-primary" />
            Service souhaité *
          </label>
          <Select
            id="service"
            required
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full h-12 rounded-xl border-2 border-neutral-200 bg-white px-4 text-sm font-bold transition focus:border-primary focus:outline-none font-jura"
          >
            <option value="" disabled>
              Sélectionner un service
            </option>
            {services.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Select>
        </div>

        {/* Location Selection */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-extrabold text-neutral-900 font-jura">
            <MapPin className="h-4 w-4 text-primary" />
            Lieu d&apos;intervention *
          </label>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setLocation('atelier')}
              className={`flex-1 rounded-xl border-2 px-4 py-3 text-sm font-extrabold transition-all font-jura ${
                location === 'atelier'
                  ? 'border-primary bg-primary text-white shadow-md'
                  : 'border-neutral-200 bg-white text-neutral-800 hover:border-primary/60 hover:bg-primary/5'
              }`}
            >
              Atelier
            </button>
            <button
              type="button"
              onClick={() => setLocation('domicile')}
              className={`flex-1 rounded-xl border-2 px-4 py-3 text-sm font-extrabold transition-all font-jura ${
                location === 'domicile'
                  ? 'border-primary bg-primary text-white shadow-md'
                  : 'border-neutral-200 bg-white text-neutral-800 hover:border-primary/60 hover:bg-primary/5'
              }`}
            >
              À domicile
            </button>
          </div>
        </div>

        {/* Date and Time Selection */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="date" className="flex items-center gap-2 text-sm font-extrabold text-neutral-900 font-jura">
              <Calendar className="h-4 w-4 text-primary" />
              Date souhaitée *
            </label>
            <Input
              id="date"
              type="date"
              required
              min={today}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="h-12 rounded-xl border-2 border-neutral-200 px-4 text-sm font-bold transition focus:border-primary focus:outline-none font-jura"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="time" className="flex items-center gap-2 text-sm font-extrabold text-neutral-900 font-jura">
              <Clock className="h-4 w-4 text-primary" />
              Créneau horaire *
            </label>
            <Select
              id="time"
              required
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="h-12 w-full rounded-xl border-2 border-neutral-200 bg-white px-4 text-sm font-bold transition focus:border-primary focus:outline-none font-jura"
            >
              <option value="" disabled>
                Sélectionner un horaire
              </option>
              {timeSlots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </Select>
          </div>
        </div>

        {/* Customer Information */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="name" className="flex items-center gap-2 text-sm font-extrabold text-neutral-900 font-jura">
              <User className="h-4 w-4 text-primary" />
              Nom / Prénom
            </label>
            <Input
              id="name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="Ex : Martin Dupont"
              className="h-12 rounded-xl border-2 border-neutral-200 px-4 text-sm font-bold transition focus:border-primary focus:outline-none font-jura"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="flex items-center gap-2 text-sm font-extrabold text-neutral-900 font-jura">
              <Phone className="h-4 w-4 text-primary" />
              Téléphone
            </label>
            <Input
              id="phone"
              type="tel"
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
              placeholder="Ex : 06 61 69 23 60"
              className="h-12 rounded-xl border-2 border-neutral-200 px-4 text-sm font-bold transition focus:border-primary focus:outline-none font-jura"
            />
          </div>
        </div>

        {/* Additional Notes */}
        <div className="space-y-2">
          <label htmlFor="notes" className="flex items-center gap-2 text-sm font-extrabold text-neutral-900 font-jura">
            <FileText className="h-4 w-4 text-primary" />
            Informations complémentaires
          </label>
          <Textarea
            id="notes"
            rows={4}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Ex : Modèle du véhicule, présence de capteurs ADAS, particularités d'accès..."
            className="rounded-xl border-2 border-neutral-200 px-4 py-3 text-sm font-bold transition focus:border-primary focus:outline-none font-jura"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <Button
            type="submit"
            disabled={status === 'loading'}
            className="w-full h-14 rounded-xl bg-gradient-primary text-base font-extrabold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed font-jura"
          >
            {status === 'loading' ? 'Enregistrement...' : 'Confirmer Votre Rendez-vous'}
          </Button>
           </div>

        {/* Success Message */}
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 rounded-xl border-2 border-accent/50 bg-accent/10 px-6 py-4 font-jura"
          >
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-extrabold text-neutral-900 mb-1 font-jura">
                  Rendez-vous enregistré avec succès !
                </p>
                <p className="text-sm font-bold text-neutral-700 font-jura">
                  Vos informations ont été sauvegardées. Un nouvel onglet Google Calendar s&apos;est ouvert pour confirmer votre rendez-vous.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Error Message */}
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 rounded-xl border-2 border-red-500/50 bg-red-50 px-6 py-4 font-jura"
          >
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-extrabold text-red-900 mb-1 font-jura">
                  Erreur lors de l&apos;enregistrement
                </p>
                <p className="text-sm font-bold text-red-700 font-jura">
                  Veuillez réessayer ou nous contacter directement par téléphone.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </motion.form>

      <motion.aside
        className="space-y-6 rounded-3xl border-2 border-neutral-200 bg-gradient-to-br from-neutral-50 to-white p-8 shadow-lg font-jura"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div>
          <h2 className="text-xl font-black uppercase text-neutral-900 mb-4 font-jura">
            Comment ça fonctionne ?
          </h2>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-extrabold text-primary font-jura">
                1
              </div>
              <p className="text-sm font-bold text-neutral-700 pt-1 font-jura">
                Renseignez votre service, date, créneau et lieu d&apos;intervention.
              </p>
            </li>
            <li className="flex gap-3">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-extrabold text-primary font-jura">
                2
              </div>
              <p className="text-sm font-bold text-neutral-700 pt-1 font-jura">
                Nous traitons votre demande et préparons votre intervention.
              </p>
            </li>
            <li className="flex gap-3">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-extrabold text-primary font-jura">
                3
              </div>
              <p className="text-sm font-bold text-neutral-700 pt-1 font-jura">
                Un agent vous appelle pour confirmer les détails de votre rendez-vous.
              </p>
            </li>
          </ul>
        </div>

        <div className="rounded-xl bg-primary/5 p-4 border border-primary/20">
          <p className="text-xs font-extrabold text-neutral-900 mb-2 font-jura">
            💡 Avantages de cette méthode :
          </p>
          <ul className="space-y-1 text-xs font-bold text-neutral-700 font-jura">
            <li>✓ Service personnalisé avec un conseiller dédié</li>
            <li>✓ Confirmation immédiate par téléphone</li>
            <li>✓ Possibilité d'ajuster le créneau si nécessaire</li>
            <li>✓ Aucune inscription requise</li>
            <li>✓ Rapide et sécurisé</li>
          </ul>
        </div>

        <div className="pt-4 border-t border-neutral-200">
          <p className="text-xs font-bold text-neutral-600 font-jura">
            Pour toute question ou demande urgente, contactez-nous par téléphone ou via le chat en ligne.
          </p>
        </div>
      </motion.aside>
    </div>
  );
}
