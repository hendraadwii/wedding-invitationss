'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';
import { copyToClipboard } from '@/lib/utils';

const gifts = [
  {
    type: 'bank',
    name: 'BCA',
    number: '1234567890',
    label: 'a.n. Hendra Dwi',
  },
  {
    type: 'ewallet',
    name: 'DANA',
    number: '081234567890',
    label: 'a.n. Hendra Dwi',
  },
];

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
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-heading-mobile md:text-heading-tablet lg:text-heading-desktop text-primary mb-4 tracking-heading">
            Wedding Gift
          </h2>
          <p className="text-muted">
            Doa restu Anda adalah hadiah terbaik. Jika ingin memberikan hadiah lainnya:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-xl mx-auto">
          {gifts.map((gift, index) => (
            <motion.div
              key={gift.name}
              className="bg-card p-6 rounded-xl shadow-md border border-primary/20 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <h3 className="font-serif text-xl text-primary mb-3 tracking-heading">
                {gift.name}
              </h3>
              <p className="text-muted text-sm mb-1">{gift.number}</p>
              <p className="text-muted/60 text-xs mb-4">{gift.label}</p>
              <button
                onClick={() => handleCopy(gift.number, index)}
                className="inline-flex items-center gap-1.5 text-accent text-sm hover:text-accent/80 transition-colors"
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
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
