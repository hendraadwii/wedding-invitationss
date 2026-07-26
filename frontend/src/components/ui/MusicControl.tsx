'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

interface MusicControlProps {
  audioRef: React.RefObject<HTMLAudioElement | null>;
}

export default function MusicControl({ audioRef }: MusicControlProps) {
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };
  }, [audioRef]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  };

  return (
    <motion.button
      onClick={toggle}
      className="fixed bottom-6 left-6 z-50 w-11 h-11 rounded-full bg-[#D4AF37] text-white shadow-lg flex items-center justify-center hover:bg-[#D4AF37]/80 transition-colors"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: 'spring' }}
      whileTap={{ scale: 0.9 }}
      aria-label={isPlaying ? 'Pause music' : 'Play music'}
    >
      {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
    </motion.button>
  );
}
