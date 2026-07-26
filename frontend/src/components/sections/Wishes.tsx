'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import type { Wish } from '@/types';
import { formatDate } from '@/lib/utils';

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
    <section className="relative py-20 px-4 bg-white overflow-hidden" id="wishes">

      <div className="relative z-20 max-w-2xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-heading-mobile md:text-heading-tablet lg:text-heading-desktop text-[#D4AF37] mb-4 tracking-heading">
            Ucapan & Doa
          </h2>
          <p className="text-gray-500">Ucapan untuk kami</p>
        </motion.div>

        {loading ? (
          <div className="text-center py-8 text-gray-500">
            Memuat ucapan...
          </div>
        ) : wishes.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            Belum ada ucapan. Jadilah yang pertama!
          </div>
        ) : (
          <div className="space-y-4">
            {wishes.map((wish, index) => (
              <motion.div
                key={`${wish.name}-${index}`}
                className="bg-gray-50 p-6 rounded-xl shadow-sm border border-[#D4AF37]/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <p className="font-medium text-gray-800 mb-2">{wish.name}</p>
                <p className="text-gray-500 text-sm">{wish.message}</p>
                <p className="text-gray-400 text-xs mt-2">
                  {formatDate(wish.created_at)}
                </p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
