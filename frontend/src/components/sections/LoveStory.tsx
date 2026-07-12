'use client';

import { motion } from 'framer-motion';

const timeline = [
  {
    year: '2019',
    title: 'First Meet',
    description: 'Bertemu pertama kali di sebuah acara seminar di Jakarta.',
  },
  {
    year: '2020',
    title: 'Relationship',
    description: 'Memutuskan untuk menjalin hubungan bersama.',
  },
  {
    year: '2023',
    title: 'Engagement',
    description: 'Melamar dan bertunangan di hadapan keluarga.',
  },
  {
    year: '2025',
    title: 'Wedding',
    description: 'Melangkah ke jenjang pernikahan yang lebih serius.',
  },
];

export default function LoveStory() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-heading-mobile md:text-heading-tablet lg:text-heading-desktop text-primary mb-4 tracking-heading">
            Love Story
          </h2>
          <p className="text-muted">Perjalanan cinta kami</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary/30 hidden md:block" />

          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="hidden md:block w-1/2" />
              <div className="md:hidden absolute left-4 top-0 w-3 h-3 rounded-full bg-accent" />
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-accent z-10 shadow-md" />
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <div className="bg-card p-6 rounded-xl shadow-md border border-primary/20 ml-8 md:ml-0">
                  <span className="text-accent font-bold text-sm">{item.year}</span>
                  <h3 className="font-serif text-xl text-primary mt-1 tracking-heading">{item.title}</h3>
                  <p className="text-muted text-sm mt-2">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
