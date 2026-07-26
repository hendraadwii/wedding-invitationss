'use client';

import { motion } from 'framer-motion';
import FloatingHearts from '@/components/ui/FloatingHearts';
import { formatDate } from '@/lib/utils';

interface HeroProps {
  weddingData: {
    groomName: string;
    brideName: string;
    eventDate: string;
  };
  onOpen: () => void;
  guestName?: string;
}

export default function Hero({ weddingData, onOpen, guestName }: HeroProps) {
  const date = formatDate(weddingData.eventDate);

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
      <FloatingHearts />

      <motion.div
        className="text-center z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.p
          className="text-sm tracking-widest uppercase text-muted mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          The Wedding Of
        </motion.p>

        {guestName && (
          <motion.p
            className="text-base md:text-lg text-accent mb-4 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            Kepada Yth. {guestName}
          </motion.p>
        )}

        <motion.h1
          className="font-script text-nama-mobile md:text-nama-tablet lg:text-nama-desktop text-text mb-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {weddingData.groomName}
        </motion.h1>

        <motion.div
          className="flex items-center justify-center gap-4 my-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <span className="h-px w-12 bg-primary" />
          <span className="font-script text-ampersand-mobile md:text-ampersand-tablet lg:text-ampersand-desktop text-primary">&</span>
          <span className="h-px w-12 bg-primary" />
        </motion.div>

        <motion.h2
          className="font-script text-nama-mobile md:text-nama-tablet lg:text-nama-desktop text-text mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          {weddingData.brideName}
        </motion.h2>

        <motion.p
          className="text-muted mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {date}
        </motion.p>

        <motion.button
          onClick={onOpen}
          className="px-8 py-3 bg-accent text-background rounded-full hover:bg-accent/80 transition-colors shadow-lg font-medium tracking-button"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Buka Undangan
        </motion.button>
      </motion.div>
    </section>
  );
}
