'use client';

import { motion } from 'framer-motion';
import SectionDivider from '@/components/ui/SectionDivider';

const smooth = { type: 'spring' as const, damping: 25, stiffness: 100 };

export default function FormalInvitation() {
  return (
    <section className="relative py-16 px-4 bg-[#FDF8F0] overflow-hidden">
      <div className="relative z-20 max-w-lg mx-auto">
        <SectionDivider className="mb-10" />

        <motion.div
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ ...smooth }}
        >
          <motion.p
            className="text-xs text-gray-400 mb-6 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ...smooth, delay: 0.1 }}
          >
            Kp. Kebon Kelapa, Agustus 2026
          </motion.p>

          <motion.p
            className="font-semibold text-[#D4AF37] mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ...smooth, delay: 0.15 }}
          >
            Assalamu&apos;alaikum Warahmatullahi Wabarokatuh
          </motion.p>

          <motion.p
            className="text-sm text-gray-600 leading-relaxed mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ...smooth, delay: 0.2 }}
          >
            Dengan memohon Rahmat dan Ridho Allah SWT, kami bermaksud menyelenggarakan <span className="font-semibold text-gray-800">NGUNDUH MANTU</span>, yang Insya Allah akan dilaksanakan pada:
          </motion.p>

          <motion.div
            className="bg-gray-50 rounded-xl p-4 mb-4 text-sm text-gray-600 space-y-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ...smooth, delay: 0.25 }}
          >
            <p><span className="font-medium text-gray-800">Hari</span> : Minggu</p>
            <p><span className="font-medium text-gray-800">Tanggal</span> : 09 Agustus 2026</p>
            <p><span className="font-medium text-gray-800">Jam</span> : 08.00 WIB s/d Selesai</p>
            <p className="leading-relaxed">
              <span className="font-medium text-gray-800">Tempat</span> : Kp. Kebon Kelapa RT. 05 RW. 04. Desa Pasarkemis Kec. Pasarkemis, Kab. Tangerang - Banten
            </p>
          </motion.div>

          <motion.p
            className="text-sm text-gray-600 leading-relaxed mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ...smooth, delay: 0.3 }}
          >
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan do&apos;a restu kepada putra-putri kami.
          </motion.p>

          <motion.p
            className="text-sm text-gray-600 leading-relaxed mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ...smooth, delay: 0.35 }}
          >
            Atas kehadiran dan do&apos;a restunya, kami ucapkan terima kasih.
          </motion.p>

          <motion.p
            className="font-semibold text-[#D4AF37] mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ...smooth, delay: 0.4 }}
          >
            Wassalamu&apos;alaikum Warahmatullahi Wabarokatuh
          </motion.p>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...smooth, delay: 0.45 }}
          >
            <p className="text-sm font-semibold text-gray-800">Bpk. Puryanto</p>
            <p className="text-sm text-gray-600">&amp; Ibu Yekti Trapsilowati / Budhe Soto</p>
            <p className="text-xs text-gray-400 italic mt-1 mb-3">Kedua Mempelai</p>
            <p className="font-script text-xl text-[#D4AF37]">M. Alfin Nooreza &amp; Ida Emila</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
