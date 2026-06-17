'use client';

import { motion } from 'framer-motion';

interface CoupleSectionProps {
  weddingData: {
    groomName: string;
    brideName: string;
  };
}

export default function CoupleSection({ weddingData }: CoupleSectionProps) {
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
            The Couple
          </h2>
          <p className="text-text/60 max-w-md mx-auto">
            Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan pernikahan:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-48 h-48 mx-auto rounded-full bg-primary mb-6 flex items-center justify-center shadow-lg">
              <span className="font-serif text-2xl text-text">HD</span>
            </div>
            <h3 className="font-serif text-2xl text-text mb-2">{weddingData.groomName}</h3>
            <p className="text-text/60">Putra dari Bapak Hendra & Ibu Sari</p>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-48 h-48 mx-auto rounded-full bg-accent/30 mb-6 flex items-center justify-center shadow-lg">
              <span className="font-serif text-2xl text-text">WY</span>
            </div>
            <h3 className="font-serif text-2xl text-text mb-2">{weddingData.brideName}</h3>
            <p className="text-text/60">Putri dari Bapak Jang & Ibu Wonyoung</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
