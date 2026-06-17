'use client';

import { motion } from 'framer-motion';
import { useCountdown } from '@/hooks/useCountdown';

interface CountdownProps {
  targetDate: string;
}

export default function Countdown({ targetDate }: CountdownProps) {
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  const items = [
    { label: 'Hari', value: days },
    { label: 'Jam', value: hours },
    { label: 'Menit', value: minutes },
    { label: 'Detik', value: seconds },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-primary/20 to-background">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          className="font-serif text-3xl md:text-4xl text-text mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Menuju Hari Bahagia
        </motion.h2>
        <motion.p
          className="text-text/60 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Waktu yang tersisa hingga acara dimulai
        </motion.p>

        <div className="grid grid-cols-4 gap-4">
          {items.map((item, index) => (
            <motion.div
              key={item.label}
              className="bg-white rounded-xl shadow-md p-4 border border-primary/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="font-serif text-3xl md:text-4xl text-accent mb-1">
                {String(item.value).padStart(2, '0')}
              </div>
              <div className="text-xs text-text/60 uppercase tracking-wider">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
