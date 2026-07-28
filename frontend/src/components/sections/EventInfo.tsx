'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Calendar } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import SectionDivider from '@/components/ui/SectionDivider';

interface EventInfoProps {
  weddingData: {
    eventDate: string;
    location: string;
    mapUrl: string;
  };
}

const smooth = { type: 'spring' as const, damping: 25, stiffness: 100 };

export default function EventInfo({ weddingData }: EventInfoProps) {
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
          className="bg-gray-50 rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ ...smooth, delay: 0.15 }}
        >
          <div className="p-6 text-center border-b border-gray-100">
            <div className="flex items-center justify-center gap-2 text-[#D4AF37] mb-2">
              <Calendar size={14} />
              <span className="text-sm font-medium">{formatDate(weddingData.eventDate)}</span>
            </div>
            <div className="space-y-1">
              <p className="text-gray-600 text-sm">
                <span className="font-medium">Akad Nikah</span> : 08:00 - Selesai
              </p>
              <p className="text-gray-600 text-sm">
                <span className="font-medium">Resepsi</span> : 10:00 - Selesai
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
      </div>
    </section>
  );
}
