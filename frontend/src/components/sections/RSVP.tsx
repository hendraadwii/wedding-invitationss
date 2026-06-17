'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';

export default function RSVP() {
  const [form, setForm] = useState({ name: '', attendance: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.attendance) return;

    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rsvp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSubmitted(true);
        setForm({ name: '', attendance: '', message: '' });
      }
    } catch {
      alert('Gagal mengirim RSVP. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-4 bg-secondary/30" id="rsvp">
      <div className="max-w-xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl text-text mb-4">
            RSVP
          </h2>
          <p className="text-text/60">
            Konfirmasi kehadiran Anda
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            className="bg-white p-8 rounded-xl shadow-md text-center border border-primary/20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <p className="text-accent font-serif text-xl mb-2">Terima Kasih!</p>
            <p className="text-text/60">
              Konfirmasi kehadiran Anda telah kami terima.
            </p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow-md space-y-6 border border-primary/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <label className="block text-sm text-text/60 mb-2">Nama *</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-primary/30 focus:outline-none focus:border-accent bg-background"
                placeholder="Nama lengkap"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-text/60 mb-2">Kehadiran *</label>
              <div className="flex gap-4">
                {['Hadir', 'Tidak Hadir'].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setForm({ ...form, attendance: option })}
                    className={`flex-1 px-4 py-3 rounded-lg border transition-colors ${
                      form.attendance === option
                        ? 'bg-accent text-white border-accent'
                        : 'bg-background text-text/60 border-primary/30 hover:border-accent'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm text-text/60 mb-2">Pesan</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-primary/30 focus:outline-none focus:border-accent bg-background resize-none"
                rows={4}
                placeholder="Tulis pesan untuk pengantin..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-accent text-white rounded-full hover:bg-accent/80 transition-colors disabled:opacity-50"
            >
              {loading ? 'Mengirim...' : 'Kirim'}
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
}
