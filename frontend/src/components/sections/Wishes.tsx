'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import type { Wish } from '@/types';
import { formatDate } from '@/lib/utils';
import { supabase } from '@/lib/supabase/client';

export default function Wishes() {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWishes = async () => {
      try {
        const { data, error } = await supabase
          .from('rsvp')
          .select('name, attendance, message, created_at')
          .not('message', 'is', null)
          .order('created_at', { ascending: false });

        if (error) throw error;
        if (data) setWishes(data);
      } catch {
        console.error('Failed to fetch wishes');
      } finally {
        setLoading(false);
      }
    };

    fetchWishes();
  }, []);

  return (
    <section className="relative py-16 px-4 bg-white overflow-hidden" id="wishes">
      <div className="relative z-20 max-w-xl mx-auto">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-heading-mobile md:text-heading-tablet lg:text-heading-desktop text-[#D4AF37] mb-3 tracking-heading">
            Ucapan & Doa
          </h2>
          {wishes.length > 0 && (
            <p className="text-gray-400 text-xs">{wishes.length} ucapan masuk</p>
          )}
        </motion.div>

        {loading ? (
          <div className="text-center py-6 text-gray-400 text-sm">
            Memuat ucapan...
          </div>
        ) : wishes.length === 0 ? (
          <motion.div
            className="text-center py-10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <MessageCircle size={20} className="text-gray-300" />
            </div>
            <p className="text-gray-400 text-xs">Belum ada ucapan. Jadilah yang pertama!</p>
          </motion.div>
        ) : (
          <div className="relative">
            <div
              className="overflow-y-auto max-h-[340px] pr-1 scrollbar-hide"
              style={{
                maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
              }}
            >
              <div className="space-y-2.5 pb-4">
                {wishes.map((wish, index) => (
                  <motion.div
                    key={`${wish.name}-${wish.created_at}-${index}`}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-20px' }}
                    transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.2) }}
                    className="bg-gray-50 px-4 py-3 rounded-xl border border-gray-100 hover:border-[#D4AF37]/30 transition-colors duration-300"
                  >
                    <div className="flex items-start justify-between gap-2 mb-0.5">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <p className="font-medium text-gray-800 text-xs truncate">{wish.name}</p>
                        {wish.attendance && (
                          <span className={`text-[9px] px-1.5 py-[1px] rounded-full flex-shrink-0 ${
                            wish.attendance === 'Hadir'
                              ? 'bg-green-50 text-green-600 border border-green-200'
                              : 'bg-red-50 text-red-600 border border-red-200'
                          }`}>
                            {wish.attendance}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-300 text-[10px] flex-shrink-0">
                        {formatDate(wish.created_at)}
                      </p>
                    </div>
                    <p className="text-gray-500 text-xs leading-relaxed">{wish.message}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
