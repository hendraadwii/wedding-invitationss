'use client';

import { motion } from 'framer-motion';
import FloatingHearts from '@/components/ui/FloatingHearts';
import Image from 'next/image';

interface HeroNgunduhMantuProps {
  onOpen: () => void;
  guestName?: string;
}

const smooth = { type: 'spring' as const, damping: 25, stiffness: 100 };

export default function HeroNgunduhMantu({ onOpen, guestName }: HeroNgunduhMantuProps) {
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
        className="text-center z-10 max-w-md mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.p
          className="text-sm tracking-widest uppercase text-white/70 mb-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...smooth, delay: 0.2 }}
        >
          Undangan
        </motion.p>

        <motion.h1
          className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#D4AF37] mb-3 tracking-heading"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...smooth, delay: 0.3 }}
        >
          Ngunduh Mantu
        </motion.h1>

        <motion.p
          className="text-white/70 text-sm mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...smooth, delay: 0.4 }}
        >
          Minggu, 09 Agustus 2026
        </motion.p>

        <motion.div
          className="relative w-full max-w-md mx-auto mb-6"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...smooth, delay: 0.45 }}
        >
          <img
            src="/invitation/images/ngunduh-cover.png"
            alt="Ngunduh Mantu"
            className="w-full h-auto"
          />
        </motion.div>

        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...smooth, delay: 0.5 }}
        >
          <p className="text-sm text-white/70 mb-1">Diselenggarakan oleh</p>
          <p className="text-base font-semibold text-[#D4AF37]">Bpk. Puryanto &amp; Ibu Yekti Trapsilowati</p>
          <p className="text-xs text-white/50 italic">/ Budhe Soto</p>
        </motion.div>

        <motion.p
          className="text-xs text-white/50 leading-relaxed mb-6 max-w-xs mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...smooth, delay: 0.6 }}
        >
          Kp. Kebon Kelapa RT. 05 RW. 04 Desa Pasarkemis, Kec. Pasarkemis, Kab. Tangerang - Banten
        </motion.p>

        {guestName && (
          <motion.div
            className="mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...smooth, delay: 0.8 }}
          >
            <p className="text-sm text-white/70 mb-1">Kepada Yth. Bapak/Ibu/Saudara/i</p>
            <p className="text-xl md:text-2xl font-bold text-[#D4AF37]">{guestName}</p>
          </motion.div>
        )}

        <motion.button
          onClick={onOpen}
          className="px-8 py-3 bg-accent text-background rounded-full hover:bg-accent/80 transition-colors shadow-lg font-medium tracking-button"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...smooth, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Buka Undangan
        </motion.button>
      </motion.div>
    </section>
  );
}
