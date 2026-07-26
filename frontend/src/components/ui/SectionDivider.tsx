'use client';

import { motion } from 'framer-motion';

interface SectionDividerProps {
  className?: string;
}

const smooth = { type: 'spring' as const, damping: 25, stiffness: 100 };

export default function SectionDivider({ className = '' }: SectionDividerProps) {
  return (
    <motion.div
      className={`flex items-center justify-center gap-3 ${className}`}
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ ...smooth }}
    >
      <span className="h-px w-12 bg-[#D4AF37]/30" />
      <span className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]/50" />
      <span className="h-px w-12 bg-[#D4AF37]/30" />
    </motion.div>
  );
}
