'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Copy, Check } from 'lucide-react';
import { copyToClipboard } from '@/lib/utils';
import SectionDivider from '@/components/ui/SectionDivider';

const gifts = [
  {
    type: 'bank',
    name: 'BCA',
    image: '/invitation/images/BCA.png',
    number: '7295577860',
    label: 'Ida Emila',
  },
  {
    type: 'ewallet',
    name: 'DANA',
    image: '/invitation/images/DANA.png',
    number: '089527954260',
    label: 'M Alfin Nooreza',
  },
];

const smooth = { type: 'spring' as const, damping: 25, stiffness: 100 };

export default function GiftSection() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (text: string, index: number) => {
    const success = await copyToClipboard(text);
    if (success) {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    }
  };

  return (
    <section className="relative py-20 px-4 bg-white overflow-hidden">
      <div className="relative z-20 max-w-3xl mx-auto">
        <SectionDivider className="mb-10" />
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ ...smooth }}
        >
          <h2 className="font-serif text-heading-mobile md:text-heading-tablet lg:text-heading-desktop text-[#D4AF37] mb-4 tracking-heading">
            Wedding Gift
          </h2>
          <p className="text-gray-500">
            Doa restu Anda adalah hadiah terbaik. Jika ingin memberikan hadiah lainnya:
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-xl mx-auto">
          {gifts.map((gift, index) => (
            <motion.div
              key={gift.name}
              className="bg-gray-50 p-4 md:p-6 rounded-xl shadow-md border border-[#D4AF37]/20 text-center flex flex-col items-center h-full"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ ...smooth, delay: index * 0.15 }}
              whileHover={{ scale: 1.03, y: -4 }}
            >
              <div className="flex items-center justify-center h-12 mb-3">
                <Image
                  src={gift.image}
                  alt={gift.name}
                  width={100}
                  height={40}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-500 text-sm mb-1">{gift.number}</p>
              <p className="text-gray-400 text-xs mb-4">{gift.label}</p>
              <div className="mt-auto">
                <motion.button
                  onClick={() => handleCopy(gift.number, index)}
                  className="inline-flex items-center gap-1.5 text-[#D4AF37] text-sm hover:text-[#D4AF37]/80 transition-colors"
                  whileTap={{ scale: 0.9 }}
                >
                  {copiedIndex === index ? (
                    <>
                      <Check size={14} /> Tersalin
                    </>
                  ) : (
                    <>
                      <Copy size={14} /> Salin Nomor
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
