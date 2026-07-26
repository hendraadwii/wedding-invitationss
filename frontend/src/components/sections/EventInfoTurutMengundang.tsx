'use client';

import { motion } from 'framer-motion';
import SectionDivider from '@/components/ui/SectionDivider';

const smooth = { type: 'spring' as const, damping: 25, stiffness: 100 };

const guests = [
  { name: 'Bpk. Al Haetomi', title: 'Kades Pasarkemis' },
  { name: 'Bpk. Maedani / Donal', title: 'Ketua RW. 04 Kp. Kebon Kelapa' },
  { name: 'Bpk. Nana / Opek', title: 'Ketua RT. 05 Kp. Kebon Kelapa' },
  { name: 'Bpk. H. Sahanan', title: 'Sesepuh Kp. Kebon Kelapa' },
  { name: 'Bpk. Ust. Sugandi', title: 'Tokmasy. Kp. Kebon Kelapa' },
  { name: 'Bpk. M. Rahman', title: 'Sesepuh Kp. Kebon Kelapa' },
];

const families = [
  'Keluarga Besar Magelang',
  'Keluarga Besar Banjarnegara',
];

export default function EventInfoTurutMengundang() {
  const leftGuests = guests.filter((_, i) => i % 2 === 0);
  const rightGuests = guests.filter((_, i) => i % 2 === 1);

  return (
    <section className="relative py-20 px-4 bg-white overflow-hidden">
      <div className="relative z-20 max-w-lg mx-auto">
        <SectionDivider className="mb-10" />

        <motion.div
          className="bg-gray-50 rounded-2xl shadow-sm border border-gray-100 p-6"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ ...smooth }}
        >
          <h3 className="font-serif text-lg text-[#D4AF37] text-center mb-6">Turut Mengundang</h3>

          <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-4">
            {leftGuests.map((guest, i) => (
              <motion.div
                key={guest.name}
                className="text-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ ...smooth, delay: i * 0.08 }}
              >
                <p className="font-medium text-gray-800 text-sm">{guest.name}</p>
                <p className="text-[11px] text-gray-400 leading-tight">{guest.title}</p>
              </motion.div>
            ))}
            {rightGuests.map((guest, i) => (
              <motion.div
                key={guest.name}
                className="text-center"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ ...smooth, delay: i * 0.08 }}
              >
                <p className="font-medium text-gray-800 text-sm">{guest.name}</p>
                <p className="text-[11px] text-gray-400 leading-tight">{guest.title}</p>
              </motion.div>
            ))}
          </div>

          <div className="w-16 h-px bg-[#D4AF37]/30 mx-auto my-4" />

          <div className="space-y-2">
            {families.map((family, i) => (
              <motion.p
                key={family}
                className="font-medium text-gray-700 text-sm text-center"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ ...smooth, delay: 0.3 + i * 0.05 }}
              >
                {family}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
