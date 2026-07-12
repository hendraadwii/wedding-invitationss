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
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-heading-mobile md:text-heading-tablet lg:text-heading-desktop text-primary mb-4 tracking-heading">
            The Couple
          </h2>
          <p className="text-muted max-w-md mx-auto">
            Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan pernikahan:
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-6 md:gap-10 items-start">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border-2 border-primary/30 shadow-lg mb-6">
              <Image
                src="/invitation/images/alfin.webp"
                alt={weddingData.groomName}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 45vw, 280px"
                priority
              />
            </div>
            <h3 className="font-script text-2xl md:text-3xl text-primary mb-2">
              {weddingData.groomName}
            </h3>
            <p className="text-muted text-xs md:text-sm">Putra Tunggal dari Bapak Puryanto & Ibu Yekti Trapsilowati</p>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border-2 border-primary/30 shadow-lg mb-6">
              <Image
                src="/invitation/images/ida.webp"
                alt={weddingData.brideName}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 45vw, 280px"
                priority
              />
            </div>
            <h3 className="font-script text-2xl md:text-3xl text-primary mb-2">
              {weddingData.brideName}
            </h3>
            <p className="text-muted text-xs md:text-sm">Putri pertama dari Bapak Zulkifli & Ibu Yuliana</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
