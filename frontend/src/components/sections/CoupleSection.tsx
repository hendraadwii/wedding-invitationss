'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionDivider from '@/components/ui/SectionDivider';

interface CoupleSectionProps {
  weddingData: {
    groomName: string;
    brideName: string;
  };
}

const smooth = { type: 'spring' as const, damping: 25, stiffness: 100 };

export default function CoupleSection({ weddingData }: CoupleSectionProps) {
  return (
    <section className="relative py-20 px-4 bg-[#FDF8F0] overflow-hidden">
      <div className="relative z-20 max-w-3xl mx-auto">
        <SectionDivider className="mb-10" />
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ ...smooth }}
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
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ ...smooth }}
          >
            <h3 className="font-script text-3xl md:text-4xl text-[#D4AF37] mb-1 whitespace-nowrap">
              Muhammad Alfin Nooreza
            </h3>
            <p className="text-gray-500 text-xs md:text-sm mb-6">Putra Tunggal dari Bapak Puryanto & Ibu Yekti Trapsilowati</p>
            <motion.div
              className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border-2 border-[#D4AF37]/30 shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ ...smooth }}
            >
              <Image
                src="/invitation/images/alfin.webp"
                alt="Muhammad Alfin Nooreza S. Si"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 70vw, 320px"
                priority
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="text-center w-full max-w-xs"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ ...smooth }}
          >
            <h3 className="font-script text-3xl md:text-4xl text-[#D4AF37] mb-1 whitespace-nowrap">
              Ida Emila
            </h3>
            <p className="text-gray-500 text-xs md:text-sm mb-6">Putri pertama dari Bapak Zulkifli & Ibu Yuliana</p>
            <motion.div
              className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border-2 border-[#D4AF37]/30 shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ ...smooth }}
            >
              <Image
                src="/invitation/images/ida.webp"
                alt="Ida Emila S. Ak"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 70vw, 320px"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
