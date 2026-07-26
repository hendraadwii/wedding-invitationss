'use client';

import { motion } from 'framer-motion';
import SectionDivider from '@/components/ui/SectionDivider';

const smooth = { type: 'spring' as const, damping: 25, stiffness: 100 };

export default function DenahLokasi() {
  return (
    <section className="relative py-20 px-4 bg-white overflow-hidden">
      <div className="relative z-20 max-w-lg mx-auto">
        <SectionDivider className="mb-10" />

        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ ...smooth }}
        >
          <h3 className="font-serif text-lg text-[#D4AF37] mb-2">Denah & Lokasi</h3>
          <p className="text-gray-400 text-xs">Klik peta untuk membuka di Google Maps</p>
        </motion.div>

        <motion.div
          className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 mb-6"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ ...smooth, delay: 0.15 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3966.7214065095695!2d106.53036577498987!3d-6.168048493819232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMTAnMDUuMCJTIDEwNsKwMzEnNTguNiJF!5e0!3m2!1sid!2sid!4v1785069407571!5m2!1sid!2sid"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="w-full"
          />
        </motion.div>

        <motion.div
          className="bg-gray-50 rounded-2xl p-5 text-center border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ ...smooth, delay: 0.3 }}
        >
          <p className="text-sm font-medium text-gray-800 leading-relaxed">
            Kp. Kebon Kelapa RT. 05 RW. 04<br />
            Desa Pasarkemis Kec. Pasarkemis<br />
            Kab. Tangerang - Banten
          </p>
        </motion.div>
      </div>
    </section>
  );
}
