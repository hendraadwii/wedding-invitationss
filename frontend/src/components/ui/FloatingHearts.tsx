'use client';

import { useState, useEffect } from 'react';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface HeartItem {
  id: number;
  x: number;
  delay: number;
  size: number;
  duration: number;
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<HeartItem[]>([]);
  const [height, setHeight] = useState(1000);

  useEffect(() => {
    setHeight(window.innerHeight);
    setHearts(
      Array.from({ length: 8 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 3,
        size: Math.random() * 16 + 12,
        duration: 8 + Math.random() * 4,
      }))
    );
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute"
          style={{ left: `${heart.x}%`, bottom: '-5%' }}
          animate={{
            y: [0, -height - 100],
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0.5],
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: 'easeInOut',
          }}
        >
          <Heart
            size={heart.size}
            className="text-accent/30"
            fill="currentColor"
          />
        </motion.div>
      ))}
    </div>
  );
}

