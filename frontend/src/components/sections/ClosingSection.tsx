'use client';

import { motion } from 'framer-motion';
import SectionDivider from '@/components/ui/SectionDivider';

interface ClosingSectionProps {
  weddingData: {
    groomName: string;
    brideName: string;
  };
}

export default function ClosingSection({ weddingData }: ClosingSectionProps) {
  return (
    <section className="relative py-20 px-4 bg-[#FDF8F0] overflow-hidden">
      <div className="relative z-20 max-w-2xl mx-auto text-center">
        <SectionDivider className="mb-10" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-12 h-px bg-[#D4AF37] mx-auto mb-8" />
        </motion.div>

        <motion.h2
          className="font-serif text-heading-mobile md:text-heading-tablet lg:text-heading-desktop text-[#D4AF37] mb-6 tracking-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Terima Kasih
        </motion.h2>

        <motion.p
          className="text-gray-500 text-sm md:text-base leading-relaxed max-w-md mx-auto mb-8"
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
          <span className="font-script text-xl md:text-2xl text-[#D4AF37]">
            {weddingData.groomName}
          </span>
          <span className="font-script text-xl md:text-2xl text-[#D4AF37]">&</span>
          <span className="font-script text-xl md:text-2xl text-[#D4AF37]">
            {weddingData.brideName}
          </span>
        </motion.div>

        <motion.p
          className="text-gray-400 text-xs mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Wassalamu&apos;alaikum Warahmatullahi Wabarakatuh
        </motion.p>
      </div>
    </section>
  );
}
