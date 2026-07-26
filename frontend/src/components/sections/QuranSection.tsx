'use client';

import { motion } from 'framer-motion';
import SectionDivider from '@/components/ui/SectionDivider';

const smooth = { type: 'spring' as const, damping: 25, stiffness: 100 };

export default function QuranSection() {
  return (
    <section className="relative py-16 px-4 bg-white overflow-hidden">
      <div className="relative z-20 max-w-2xl mx-auto text-center">
        <SectionDivider className="mb-10" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ ...smooth, duration: 0.6 }}
        >
          <p className="text-gray-500 text-sm mb-2 uppercase tracking-wider">QS. Ar-Rum : 21</p>
          <div className="w-12 h-px bg-[#D4AF37] mx-auto mb-8" />
        </motion.div>

        <motion.p
          className="font-arabic text-2xl md:text-3xl leading-relaxed text-gray-800 mb-8"
          dir="rtl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ ...smooth, delay: 0.2 }}
        >
          وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ
        </motion.p>

        <motion.p
          className="text-gray-500 text-sm md:text-base leading-relaxed max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ ...smooth, delay: 0.4 }}
        >
          &ldquo;Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup dari jenismu sendiri,
          supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang.
          Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir.&rdquo;
        </motion.p>
      </div>
    </section>
  );
}
