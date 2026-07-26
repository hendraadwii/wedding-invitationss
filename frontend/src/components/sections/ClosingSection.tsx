'use client';

import { motion } from 'framer-motion';

interface ClosingSectionProps {
  weddingData: {
    groomName: string;
    brideName: string;
  };
}

export default function ClosingSection({ weddingData }: ClosingSectionProps) {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-12 h-px bg-primary mx-auto mb-8" />
        </motion.div>

        <motion.h2
          className="font-serif text-heading-mobile md:text-heading-tablet lg:text-heading-desktop text-primary mb-6 tracking-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Terima Kasih
        </motion.h2>

        <motion.p
          className="text-muted text-sm md:text-base leading-relaxed max-w-md mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kami.
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-3"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <span className="font-script text-xl md:text-2xl text-primary">
            {weddingData.groomName}
          </span>
          <span className="font-script text-xl md:text-2xl text-primary">&</span>
          <span className="font-script text-xl md:text-2xl text-primary">
            {weddingData.brideName}
          </span>
        </motion.div>

        <motion.p
          className="text-muted/60 text-xs mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Wassalamu'alaikum Warahmatullahi Wabarakatuh
        </motion.p>
      </div>
    </section>
  );
}
