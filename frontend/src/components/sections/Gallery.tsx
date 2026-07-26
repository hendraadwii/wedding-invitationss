'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const galleryImages = [
  { id: 1, src: '/invitation/images/galery_1.jpeg', alt: 'Gallery 1' },
  { id: 2, src: '/invitation/images/galery_2.jpeg', alt: 'Gallery 2' },
  { id: 3, src: '/invitation/images/galery_3.jpeg', alt: 'Gallery 3' },
  { id: 4, src: '/invitation/images/galery_4.jpeg', alt: 'Gallery 4' },
  { id: 5, src: '/invitation/images/galery_5.jpeg', alt: 'Gallery 5' },
  { id: 6, src: '/invitation/images/galery_6.jpeg', alt: 'Gallery 6' },
  { id: 7, src: '/invitation/images/galery_7.jpeg', alt: 'Gallery 7' },
  { id: 8, src: '/invitation/images/galery_8.jpeg', alt: 'Gallery 8' },
  { id: 9, src: '/invitation/images/galery_9.jpeg', alt: 'Gallery 9' },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const total = galleryImages.length;

  const goTo = (index: number) => {
    if (index < 0) setActiveIndex(total - 1);
    else if (index >= total) setActiveIndex(0);
    else setActiveIndex(index);
  };

  const getSlideClass = (index: number) => {
    const diff = index - activeIndex;
    const wrapped =
      diff > total / 2 ? diff - total : diff < -total / 2 ? diff + total : diff;

    if (wrapped === 0) return 'z-30 scale-100 opacity-100';
    if (wrapped === -1 || wrapped === total - 1) return 'z-20 scale-[0.72] opacity-50 -translate-x-[65%]';
    if (wrapped === 1 || wrapped === -(total - 1)) return 'z-20 scale-[0.72] opacity-50 translate-x-[65%]';
    if (wrapped === -2 || wrapped === total - 2) return 'z-10 scale-[0.5] opacity-0 -translate-x-[110%]';
    if (wrapped === 2 || wrapped === -(total - 2)) return 'z-10 scale-[0.5] opacity-0 translate-x-[110%]';
    return 'z-0 scale-[0.4] opacity-0';
  };

  return (
    <section className="relative py-20 px-4 bg-white overflow-hidden">

      <div className="relative z-20 max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-heading-mobile md:text-heading-tablet lg:text-heading-desktop text-[#D4AF37] mb-4 tracking-heading">
            Gallery
          </h2>
          <p className="text-gray-500">Momen indah bersama kami</p>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative flex items-center justify-center h-[420px] sm:h-[480px] md:h-[540px]">
            <AnimatePresence initial={false}>
              {galleryImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  className={`absolute ${getSlideClass(index)}`}
                  animate={{
                    scale: index === activeIndex ? 1 : 0.72,
                    opacity: index === activeIndex ? 1 : Math.abs(index - activeIndex) <= 1 ? 0.5 : 0,
                    x: index === activeIndex
                      ? '0%'
                      : (index - activeIndex) < 0
                        ? '-65%'
                        : '65%',
                    zIndex: index === activeIndex ? 30 : Math.abs(index - activeIndex) === 1 ? 20 : 10,
                  }}
                  transition={{ type: 'spring', stiffness: 200, damping: 30 }}
                >
                  <div className="relative w-[260px] sm:w-[300px] md:w-[340px] aspect-[3/4] rounded-2xl overflow-hidden border-2 border-[#D4AF37]/30 shadow-2xl cursor-pointer"
                    onClick={() => index === activeIndex ? setLightboxOpen(true) : setActiveIndex(index)}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 70vw, 340px"
                      loading="lazy"
                    />
                    {index === activeIndex && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            <button
              onClick={() => goTo(activeIndex - 1)}
              className="absolute left-2 sm:left-4 z-40 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#D4AF37]/80 hover:bg-[#D4AF37] text-white flex items-center justify-center transition-all duration-300 backdrop-blur-sm shadow-lg"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={() => goTo(activeIndex + 1)}
              className="absolute right-2 sm:right-4 z-40 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#D4AF37]/80 hover:bg-[#D4AF37] text-white flex items-center justify-center transition-all duration-300 backdrop-blur-sm shadow-lg"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          <div className="flex justify-center items-center gap-2 mt-8">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-400 ${
                  activeIndex === index
                    ? 'bg-[#D4AF37] w-7'
                    : 'bg-[#D4AF37]/25 w-2 hover:bg-[#D4AF37]/50'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setLightboxOpen(false)}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <X size={20} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goTo(activeIndex - 1); }}
              className="absolute left-2 sm:left-6 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <ChevronLeft size={24} />
            </button>

            <motion.div
              className="relative w-[85vw] h-[75vh] max-w-2xl"
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[activeIndex].src}
                alt={galleryImages[activeIndex].alt}
                fill
                className="object-contain"
                sizes="85vw"
              />
            </motion.div>

            <button
              onClick={(e) => { e.stopPropagation(); goTo(activeIndex + 1); }}
              className="absolute right-2 sm:right-6 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <ChevronRight size={24} />
            </button>

            <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => { e.stopPropagation(); setActiveIndex(index); }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? 'bg-white w-6'
                      : 'bg-white/30 w-2 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
