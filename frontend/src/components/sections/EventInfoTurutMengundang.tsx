'use client';

import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import SectionDivider from '@/components/ui/SectionDivider';

interface EventInfoTurutMengundangProps {
  weddingData: {
    eventDate: string;
    location: string;
    mapUrl: string;
  };
}

const smooth = { type: 'spring' as const, damping: 25, stiffness: 100 };

export default function EventInfoTurutMengundang({ weddingData }: EventInfoTurutMengundangProps) {
  const date = formatDate(weddingData.eventDate);

  return (
    <section className="relative py-20 px-4 bg-white overflow-hidden">
      <div className="relative z-20 max-w-lg mx-auto">
        <SectionDivider className="mb-10" />

        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ ...smooth }}
        >
          <h2 className="font-serif text-heading-mobile md:text-heading-tablet lg:text-heading-desktop text-[#D4AF37] mb-3 tracking-heading">
            Waktu & Lokasi
          </h2>
          <p className="text-gray-400 text-xs">Merupakan suatu kehormatan apabila Anda berkenan hadir</p>
        </motion.div>

        <motion.div
          className="bg-gray-50 rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ ...smooth, delay: 0.15 }}
        >
          <div className="p-6 text-center border-b border-gray-100">
            <div className="flex items-center justify-center gap-2 text-[#D4AF37] mb-2">
              <Calendar size={14} />
              <span className="text-sm font-medium">{date}</span>
            </div>
            <div className="space-y-1">
              <p className="text-gray-600 text-xs">
                <span className="font-medium">Ngunduh Mantu</span> : 11:00 - Selesai
              </p>
            </div>
          </div>

          <div className="p-6 text-center">
            <div className="flex items-center justify-center gap-1.5 text-[#D4AF37] mb-3">
              <MapPin size={14} />
              <span className="text-xs font-medium">Lokasi</span>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed max-w-xs mx-auto">
              {weddingData.location}
            </p>
            <motion.a
              href={weddingData.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-4 px-5 py-2 bg-[#D4AF37] text-white rounded-full hover:bg-[#D4AF37]/80 transition-colors text-xs font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MapPin size={12} />
              Navigasi ke Lokasi
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="bg-gray-50 rounded-2xl shadow-sm border border-gray-100 p-6 mb-8"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ ...smooth, delay: 0.3 }}
        >
          <h3 className="font-serif text-lg text-[#D4AF37] text-center mb-4">Turut Mengundang</h3>
          <div className="space-y-3 text-center text-sm text-gray-600">
            <div>
              <p className="font-medium">Keluarga Bapak Puryanto & Ibu Yekti Trapsilowati</p>
              <p className="text-xs text-gray-400">(Orang Tua Mempelai Pria)</p>
            </div>
            <div className="w-16 h-px bg-[#D4AF37]/30 mx-auto" />
            <div>
              <p className="font-medium">Keluarga Bapak Zulkifli & Ibu Yuliana</p>
              <p className="text-xs text-gray-400">(Orang Tua Mempelai Wanita)</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="rounded-2xl overflow-hidden shadow-sm border border-gray-100"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ ...smooth, delay: 0.45 }}
        >
          <div className="bg-gray-50 p-4 text-center">
            <h3 className="font-serif text-lg text-[#D4AF37] mb-2">Denah Lokasi</h3>
            <p className="text-gray-400 text-xs mb-3">Klik tombol di bawah untuk membuka peta</p>
            <motion.a
              href={weddingData.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4AF37] text-white rounded-full text-sm font-medium hover:bg-[#D4AF37]/80 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MapPin size={14} />
              Buka di Google Maps
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
