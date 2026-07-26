'use client';

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '@/lib/supabase/client';
import SectionDivider from '@/components/ui/SectionDivider';

const smooth = { type: 'spring' as const, damping: 25, stiffness: 100 };

export default function RSVP({ onSuccess }: { onSuccess?: () => void }) {
  const [form, setForm] = useState({ name: '', attendance: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.attendance) return;

    setLoading(true);
    try {
      const { error } = await supabase.from('rsvp').insert([{
        name: form.name,
        attendance: form.attendance,
        message: form.message || null,
      }]);

      if (error) throw error;

      setSubmitted(true);
      setForm({ name: '', attendance: '', message: '' });
      onSuccess?.();
    } catch {
      alert('Gagal mengirim RSVP. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-20 px-4 bg-white overflow-hidden" id="rsvp">
      <div className="relative z-20 max-w-xl mx-auto">
        <SectionDivider className="mb-10" />
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ ...smooth }}
        >
          <h2 className="font-serif text-heading-mobile md:text-heading-tablet lg:text-heading-desktop text-[#D4AF37] mb-4 tracking-heading">
            RSVP
          </h2>
          <p className="text-gray-500">
            Konfirmasi kehadiran Anda
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              className="bg-gray-50 p-8 rounded-xl shadow-md text-center border border-[#D4AF37]/20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ ...smooth }}
            >
              <p className="text-[#D4AF37] font-serif text-xl mb-2">Terima Kasih!</p>
              <p className="text-gray-500">
                Konfirmasi kehadiran Anda telah kami terima.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="bg-gray-50 p-8 rounded-xl shadow-md space-y-6 border border-[#D4AF37]/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ ...smooth, delay: 0.15 }}
            >
              <div>
                <label className="block text-sm text-gray-500 mb-2">Nama *</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-[#D4AF37]/30 focus:outline-none focus:border-[#D4AF37] bg-white text-gray-800 transition-colors"
                  placeholder="Nama lengkap"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-500 mb-2">Kehadiran *</label>
                <div className="flex gap-4">
                  {['Hadir', 'Tidak Hadir'].map((option) => (
                    <motion.button
                      key={option}
                      type="button"
                      onClick={() => setForm({ ...form, attendance: option })}
                      className={`flex-1 px-4 py-3 rounded-lg border transition-colors ${
                        form.attendance === option
                          ? 'bg-[#D4AF37] text-white border-[#D4AF37]'
                          : 'bg-white text-gray-500 border-[#D4AF37]/30 hover:border-[#D4AF37]'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {option}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-500 mb-2">Pesan</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-[#D4AF37]/30 focus:outline-none focus:border-[#D4AF37] bg-white text-gray-800 resize-none transition-colors"
                  rows={4}
                  placeholder="Tulis pesan untuk pengantin..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-[#D4AF37] text-white rounded-full hover:bg-[#D4AF37]/80 transition-colors disabled:opacity-50 font-medium tracking-button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {loading ? 'Mengirim...' : 'Kirim'}
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
