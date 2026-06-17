'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import type { Wish } from '@/types';

export default function Wishes() {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWishes = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wishes`);
        if (res.ok) {
          const data = await res.json();
          setWishes(data);
        }
      } catch {
        console.error('Failed to fetch wishes');
      } finally {
        setLoading(false);
      }
    };

    fetchWishes();
    const interval = setInterval(fetchWishes, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 bg-background" id="wishes">
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl text-text mb-4">
            Wishes
          </h2>
          <p className="text-text/60">Ucapan untuk kami</p>
        </motion.div>

        {loading ? (
          <div className="text-center py-8 text-text/60">
            Memuat ucapan...
          </div>
        ) : wishes.length === 0 ? (
          <div className="text-center py-8 text-text/60">
            Belum ada ucapan. Jadilah yang pertama!
          </div>
        ) : (
          <div className="space-y-4">
            {wishes.map((wish, index) => (
              <motion.div
                key={`${wish.name}-${index}`}
                className="bg-white p-6 rounded-xl shadow-sm border border-primary/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <p className="font-medium text-text mb-2">{wish.name}</p>
                <p className="text-text/60 text-sm">{wish.message}</p>
                <p className="text-text/40 text-xs mt-2">
                  {new Date(wish.created_at).toLocaleDateString('id-ID')}
                </p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
