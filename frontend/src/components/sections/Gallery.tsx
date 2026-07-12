'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const galleryImages = [
  { id: 1, src: '/images/gallery-1.jpg', alt: 'Gallery 1', span: 'row-span-2' },
  { id: 2, src: '/images/gallery-2.jpg', alt: 'Gallery 2', span: '' },
  { id: 3, src: '/images/gallery-3.jpg', alt: 'Gallery 3', span: '' },
  { id: 4, src: '/images/gallery-4.jpg', alt: 'Gallery 4', span: 'col-span-2' },
  { id: 5, src: '/images/gallery-5.jpg', alt: 'Gallery 5', span: '' },
  { id: 6, src: '/images/gallery-6.jpg', alt: 'Gallery 6', span: '' },
];

export default function Gallery() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-heading-mobile md:text-heading-tablet lg:text-heading-desktop text-primary mb-4 tracking-heading">
            Gallery
          </h2>
          <p className="text-muted">Momen indah bersama kami</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className={`relative overflow-hidden rounded-xl ${image.span}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative w-full h-full min-h-[200px] bg-card">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
