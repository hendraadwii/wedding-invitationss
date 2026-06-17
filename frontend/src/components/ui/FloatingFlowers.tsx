'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface FlowerItem {
  id: number;
  x: number;
  delay: number;
  size: number;
  duration: number;
}

export default function FloatingFlowers() {
  const [flowers, setFlowers] = useState<FlowerItem[]>([]);
  const [height, setHeight] = useState(1000);

  useEffect(() => {
    setHeight(window.innerHeight);
    setFlowers(
      Array.from({ length: 6 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 5,
        size: Math.random() * 12 + 16,
        duration: 12 + Math.random() * 6,
      }))
    );
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {flowers.map((flower) => (
        <motion.div
          key={flower.id}
          className="absolute text-accent/20"
          style={{ left: `${flower.x}%`, bottom: '-5%', fontSize: flower.size }}
          animate={{
            y: [0, -height - 100],
            rotate: [0, 360],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: flower.duration,
            repeat: Infinity,
            delay: flower.delay,
            ease: 'easeInOut',
          }}
        >
          ✿
        </motion.div>
      ))}
    </div>
  );
}

