'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';
import { copyToClipboard } from '@/lib/utils';

const bankAccounts = [
  {
    bank: 'BCA',
    accountNumber: '1234567890',
    name: 'Hendra Dwi',
  },
  {
    bank: 'Mandiri',
    accountNumber: '0987654321',
    name: 'Wonyoung',
  },
];

const eWallets = [
  {
    name: 'GoPay',
    number: '081234567890',
  },
  {
    name: 'OVO',
    number: '081234567890',
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
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl text-text mb-4">
            Wedding Gift
          </h2>
          <p className="text-text/60">
            Doa restu Anda adalah hadiah terbaik. Jika ingin memberikan hadiah lainnya:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md border border-primary/20"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-serif text-xl text-text mb-4 text-center">
              Transfer Bank
            </h3>
            <div className="space-y-4">
              {bankAccounts.map((account, index) => (
                <div
                  key={account.bank}
                  className="p-4 rounded-lg bg-secondary/50 border border-primary/20"
                >
                  <p className="font-medium text-text">{account.bank}</p>
                  <p className="text-text/80 text-sm">{account.accountNumber}</p>
                  <p className="text-text/60 text-xs">a.n. {account.name}</p>
                  <button
                    onClick={() => handleCopy(account.accountNumber, index)}
                    className="flex items-center gap-1 mt-2 text-accent text-sm hover:text-accent/80"
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
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-xl shadow-md border border-primary/20"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-serif text-xl text-text mb-4 text-center">
              E-Wallet
            </h3>
            <div className="space-y-4">
              {eWallets.map((wallet, index) => (
                <div
                  key={wallet.name}
                  className="p-4 rounded-lg bg-secondary/50 border border-primary/20"
                >
                  <p className="font-medium text-text">{wallet.name}</p>
                  <p className="text-text/80 text-sm">{wallet.number}</p>
                  <button
                    onClick={() => handleCopy(wallet.number, bankAccounts.length + index)}
                    className="flex items-center gap-1 mt-2 text-accent text-sm hover:text-accent/80"
                  >
                    {copiedIndex === bankAccounts.length + index ? (
                      <>
                        <Check size={14} /> Tersalin
                      </>
                    ) : (
                      <>
                        <Copy size={14} /> Salin Nomor
                      </>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block bg-white p-6 rounded-xl shadow-md border border-accent/20">
            <h3 className="font-serif text-lg text-text mb-4">QRIS</h3>
            <div className="w-48 h-48 mx-auto bg-primary/30 rounded-lg flex items-center justify-center">
              <span className="text-text/40 text-sm">QRIS Code</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
