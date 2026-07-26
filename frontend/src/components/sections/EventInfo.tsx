'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Calendar } from 'lucide-react';
import { formatDate } from '@/lib/utils';

interface EventInfoProps {
  weddingData: {
    eventDate: string;
    location: string;
    mapUrl: string;
  };
}

export default function EventInfo({ weddingData }: EventInfoProps) {
  return (
    <section className="relative py-20 px-4 bg-white overflow-hidden">

      <div className="relative z-20 max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-heading-mobile md:text-heading-tablet lg:text-heading-desktop text-[#D4AF37] mb-4 tracking-heading">
            Event
          </h2>
          <p className="text-gray-500">Merupakan suatu kehormatan apabila Anda berkenan hadir</p>
        </motion.div>

        <motion.div
          className="max-w-md mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gray-50 p-8 rounded-xl shadow-md border border-[#D4AF37]/20 text-center">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 text-gray-500">
                <Calendar size={16} />
                <span>{formatDate(weddingData.eventDate)}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-500">
                <Clock size={16} />
                <span>Akad Nikah : 08:00 - Selesai</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-500">
                <Clock size={16} />
                <span>Resepsi : 10:00 - Selesai</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-500">
                <MapPin size={16} />
                <span>{weddingData.location}</span>
              </div>
              <a
                href={weddingData.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-2 bg-[#D4AF37] text-white rounded-full hover:bg-[#D4AF37]/80 transition-colors text-sm font-medium tracking-button"
              >
                Navigasi ke Lokasi
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
