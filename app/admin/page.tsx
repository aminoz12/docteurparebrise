'use client';

import { useEffect, useState } from 'react';
import { Calendar, Clock, MapPin, User, Phone, FileText, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

type Appointment = {
  timestamp: string;
  service: string;
  date: string;
  time: string;
  location: string;
  customerName: string;
  customerPhone: string;
  notes: string;
};

export default function AdminDashboard() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAppointments = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/appointments');
      if (!response.ok) {
        throw new Error('Failed to fetch appointments');
      }
      const data = await response.json();
      setAppointments(data.appointments || []);
      setError(null);
    } catch (err) {
      setError('Erreur lors du chargement des rendez-vous');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
    // Refresh every 30 seconds
    const interval = setInterval(fetchAppointments, 30000);
    return () => clearInterval(interval);
  }, []);

  const formatDate = (dateString: string) => {
    if (!dateString) return 'N/A';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      });
    } catch {
      return dateString;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white py-12 px-4">
      <div className="container-page max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-black uppercase text-neutral-900 mb-2">
                Tableau de bord
              </h1>
              <p className="text-lg font-bold text-neutral-600">
                Gestion des rendez-vous et clients
              </p>
            </div>
            <button
              onClick={fetchAppointments}
              disabled={loading}
              className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all disabled:opacity-50"
            >
              <RefreshCw className={`h-5 w-5 ${loading ? 'animate-spin' : ''}`} />
              Actualiser
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl border-2 border-neutral-200 p-6 shadow-lg"
          >
            <div className="text-3xl font-black text-primary mb-2">
              {appointments.length}
            </div>
            <div className="text-sm font-bold text-neutral-600 uppercase">
              Total Rendez-vous
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl border-2 border-neutral-200 p-6 shadow-lg"
          >
            <div className="text-3xl font-black text-accent mb-2">
              {appointments.filter((apt) => {
                const aptDate = new Date(apt.date);
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                return aptDate >= today;
              }).length}
            </div>
            <div className="text-sm font-bold text-neutral-600 uppercase">
              À venir
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl border-2 border-neutral-200 p-6 shadow-lg"
          >
            <div className="text-3xl font-black text-primary mb-2">
              {new Set(appointments.map((apt) => apt.customerPhone).filter(Boolean)).size}
            </div>
            <div className="text-sm font-bold text-neutral-600 uppercase">
              Clients uniques
            </div>
          </motion.div>
        </div>

        {/* Appointments List */}
        {loading && appointments.length === 0 ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
            <p className="mt-4 font-bold text-neutral-600">Chargement...</p>
          </div>
        ) : error ? (
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 text-center">
            <p className="font-bold text-red-900">{error}</p>
          </div>
        ) : appointments.length === 0 ? (
          <div className="bg-white rounded-2xl border-2 border-neutral-200 p-12 text-center shadow-lg">
            <Calendar className="h-16 w-16 text-neutral-300 mx-auto mb-4" />
            <p className="text-xl font-bold text-neutral-600 mb-2">
              Aucun rendez-vous pour le moment
            </p>
            <p className="text-sm font-bold text-neutral-500">
              Les rendez-vous apparaîtront ici une fois enregistrés
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border-2 border-neutral-200 shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary/10">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-black uppercase text-neutral-900">
                      Date/Heure
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-black uppercase text-neutral-900">
                      Service
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-black uppercase text-neutral-900">
                      Lieu
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-black uppercase text-neutral-900">
                      Client
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-black uppercase text-neutral-900">
                      Téléphone
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-black uppercase text-neutral-900">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {appointments
                    .sort((a, b) => {
                      const dateA = new Date(`${a.date}T${a.time}`);
                      const dateB = new Date(`${b.date}T${b.time}`);
                      return dateB.getTime() - dateA.getTime();
                    })
                    .map((apt, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="hover:bg-neutral-50 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-primary" />
                            <div>
                              <div className="font-bold text-neutral-900">
                                {formatDate(apt.date)}
                              </div>
                              <div className="text-sm font-bold text-neutral-600 flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {apt.time}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-accent" />
                            <span className="font-bold text-neutral-900">{apt.service}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span className="font-bold text-neutral-700">{apt.location}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          {apt.customerName ? (
                            <div className="flex items-center gap-2">
                              <User className="h-4 w-4 text-neutral-400" />
                              <span className="font-bold text-neutral-900">{apt.customerName}</span>
                            </div>
                          ) : (
                            <span className="text-neutral-400 font-bold">—</span>
                          )}
                        </td>
                        <td className="px-6 py-4">
                          {apt.customerPhone ? (
                            <a
                              href={`tel:${apt.customerPhone.replace(/\s/g, '')}`}
                              className="flex items-center gap-2 text-primary hover:text-primary/80 font-bold transition-colors"
                            >
                              <Phone className="h-4 w-4" />
                              {apt.customerPhone}
                            </a>
                          ) : (
                            <span className="text-neutral-400 font-bold">—</span>
                          )}
                        </td>
                        <td className="px-6 py-4">
                          {apt.notes ? (
                            <span className="text-sm font-bold text-neutral-700 line-clamp-2">
                              {apt.notes}
                            </span>
                          ) : (
                            <span className="text-neutral-400 font-bold">—</span>
                          )}
                        </td>
                      </motion.tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

