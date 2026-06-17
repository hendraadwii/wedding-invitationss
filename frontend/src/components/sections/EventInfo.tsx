'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Calendar } from 'lucide-react';
import { formatDate, formatTime } from '@/lib/utils';

interface EventInfoProps {
  weddingData: {
    eventDate: string;
    location: string;
    mapUrl: string;
  };
}

export default function EventInfo({ weddingData }: EventInfoProps) {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl text-text mb-4">
            Event
          </h2>
          <p className="text-text/60">Merupakan suatu kehormatan apabila Anda berkenan hadir</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white p-8 rounded-xl shadow-md border border-primary/20 text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-primary flex items-center justify-center mb-4">
              <span className="font-serif text-lg text-text">Akad</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-2 text-text/60">
                <Calendar size={16} />
                <span>{formatDate(weddingData.eventDate)}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-text/60">
                <Clock size={16} />
                <span>{formatTime(weddingData.eventDate)} - Selesai</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-text/60">
                <MapPin size={16} />
                <span>{weddingData.location}</span>
              </div>
              <a
                href={weddingData.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-2 bg-accent text-white rounded-full hover:bg-accent/80 transition-colors text-sm"
              >
                Buka Google Maps
              </a>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border border-accent/20 text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-accent/30 flex items-center justify-center mb-4">
              <span className="font-serif text-lg text-text">Resepsi</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-2 text-text/60">
                <Calendar size={16} />
                <span>{formatDate(weddingData.eventDate)}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-text/60">
                <Clock size={16} />
                <span>11:00 - Selesai</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-text/60">
                <MapPin size={16} />
                <span>{weddingData.location}</span>
              </div>
              <a
                href={weddingData.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-2 bg-accent text-white rounded-full hover:bg-accent/80 transition-colors text-sm"
              >
                Buka Google Maps
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
