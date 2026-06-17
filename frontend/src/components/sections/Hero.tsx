'use client';

import { motion } from 'framer-motion';
import FloatingHearts from '@/components/ui/FloatingHearts';

interface HeroProps {
  weddingData: {
    groomName: string;
    brideName: string;
    eventDate: string;
  };
  onOpen: () => void;
}

export default function Hero({ weddingData, onOpen }: HeroProps) {
  const date = new Date(weddingData.eventDate).toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-primary/30 to-background px-4 overflow-hidden">
      <FloatingHearts />

      <motion.div
        className="text-center z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.p
          className="text-sm tracking-widest uppercase text-text/60 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          The Wedding Of
        </motion.p>

        <motion.h1
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-text mb-2"
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
          <span className="h-px w-12 bg-accent" />
          <span className="text-accent text-2xl">&</span>
          <span className="h-px w-12 bg-accent" />
        </motion.div>

        <motion.h2
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-text mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          {weddingData.brideName}
        </motion.h2>

        <motion.p
          className="text-text/60 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {date}
        </motion.p>

        <motion.button
          onClick={onOpen}
          className="px-8 py-3 bg-accent text-white rounded-full hover:bg-accent/80 transition-colors shadow-lg"
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
