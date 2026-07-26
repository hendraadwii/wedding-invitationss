'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface CoupleSectionProps {
  weddingData: {
    groomName: string;
    brideName: string;
  };
}

export default function CoupleSection({ weddingData }: CoupleSectionProps) {
  return (
    <section className="relative py-20 px-4 bg-white overflow-hidden">

      <div className="relative z-20 max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-heading-mobile md:text-heading-tablet lg:text-heading-desktop text-[#D4AF37] mb-4 tracking-heading">
            The Couple
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
            Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan pernikahan:
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-12">
          <motion.div
            className="text-center w-full max-w-xs"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-script text-3xl md:text-4xl text-[#D4AF37] mb-1 whitespace-nowrap">
              Muhammad Alfin Nooreza
            </h3>
            <p className="text-gray-500 text-xs md:text-sm mb-6">Putra Tunggal dari Bapak Puryanto & Ibu Yekti Trapsilowati</p>
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border-2 border-[#D4AF37]/30 shadow-lg">
              <Image
                src="/invitation/images/alfin.webp"
                alt="Muhammad Alfin Nooreza S. Si"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 70vw, 320px"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            className="text-center w-full max-w-xs"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-script text-3xl md:text-4xl text-[#D4AF37] mb-1 whitespace-nowrap">
              Ida Emila
            </h3>
            <p className="text-gray-500 text-xs md:text-sm mb-6">Putri pertama dari Bapak Zulkifli & Ibu Yuliana</p>
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border-2 border-[#D4AF37]/30 shadow-lg">
              <Image
                src="/invitation/images/ida.webp"
                alt="Ida Emila S. Ak"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 70vw, 320px"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
