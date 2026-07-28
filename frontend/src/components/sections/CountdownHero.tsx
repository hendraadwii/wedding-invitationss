'use client';

import { motion } from 'framer-motion';
import { useCountdown } from '@/hooks/useCountdown';
import { formatDate } from '@/lib/utils';

interface CountdownHeroProps {
  weddingData: {
    groomName: string;
    brideName: string;
    eventDate: string;
  };
}

const smooth = { type: 'spring' as const, damping: 25, stiffness: 100 };

export default function CountdownHero({ weddingData }: CountdownHeroProps) {
  const date = formatDate(weddingData.eventDate);
  const { days, hours, minutes, seconds } = useCountdown(weddingData.eventDate);

  const items = [
    { label: 'Hari', value: days },
    { label: 'Jam', value: hours },
    { label: 'Menit', value: minutes },
    { label: 'Detik', value: seconds },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      <img
        src="/invitation/images/mobile.webp"
        alt=""
        className="absolute inset-0 w-full h-full object-cover block md:hidden"
      />
      <img
        src="/invitation/images/desktop.webp"
        alt=""
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
      />
      <div className="absolute inset-0 bg-background/60" />

      <div className="relative z-10 text-center">
        <motion.p
          className="text-sm tracking-widest uppercase text-muted mb-4"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ ...smooth, delay: 0.1 }}
        >
          The Wedding Of
        </motion.p>

        <motion.h1
          className="font-serif text-nama-mobile md:text-nama-tablet lg:text-nama-desktop text-text mb-2"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ ...smooth, delay: 0.2 }}
        >
          {weddingData.groomName}
        </motion.h1>

        <motion.div
          className="flex items-center justify-center gap-4 my-4"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ ...smooth, delay: 0.3 }}
        >
          <span className="h-px w-12 bg-primary" />
          <span className="font-serif text-ampersand-mobile md:text-ampersand-tablet lg:text-ampersand-desktop text-primary">&</span>
          <span className="h-px w-12 bg-primary" />
        </motion.div>

        <motion.h2
          className="font-serif text-nama-mobile md:text-nama-tablet lg:text-nama-desktop text-text mb-6"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ ...smooth, delay: 0.4 }}
        >
          {weddingData.brideName}
        </motion.h2>

        <motion.p
          className="text-muted mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ ...smooth, delay: 0.5 }}
        >
          {date}
        </motion.p>

        <motion.h3
          className="font-serif text-heading-mobile md:text-heading-tablet lg:text-heading-desktop text-text mb-8 tracking-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ ...smooth, delay: 0.6 }}
        >
          Menuju Hari Bahagia
        </motion.h3>

        <div className="flex justify-center gap-6 mb-8">
          {items.map((item, index) => (
            <motion.div
              key={item.label}
              className="text-center"
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ ...smooth, delay: 0.5 + index * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-accent">
                {String(item.value).padStart(2, '0')}
              </div>
              <div className="text-[10px] md:text-xs text-muted uppercase tracking-wider mt-1">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-muted text-sm max-w-md mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ ...smooth, delay: 0.9 }}
        >
          Insya Allah kami menantikan kehadiran Anda
        </motion.p>
      </div>
    </section>
  );
}
