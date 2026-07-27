'use client';

import { useState, useRef } from 'react';
import HeroNgunduhMantu from '@/components/sections/HeroNgunduhMantu';
import CoupleSection from '@/components/sections/CoupleSection';
import CountdownHero from '@/components/sections/CountdownHero';
import EventInfoTurutMengundang from '@/components/sections/EventInfoTurutMengundang';
import FormalInvitation from '@/components/sections/FormalInvitation';
import DenahLokasi from '@/components/sections/DenahLokasi';
import ClosingSection from '@/components/sections/ClosingSection';
import Footer from '@/components/sections/Footer';
import MusicControl from '@/components/ui/MusicControl';

export default function NgunduhMantuPage() {
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const weddingData = {
    groomName: 'M. Alfin Nooreza',
    brideName: 'Ida Emila',
    eventDate: '2026-08-09T08:00:00',
    location: 'Kp. Kebon Kelapa RT. 05 RW. 04 Desa Pasarkemis, Kec. Pasarkemis, Kab. Tangerang - Banten',
    mapUrl: 'https://maps.app.goo.gl/zbWt9X6RwDnLeKvh6',
  };

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      if (!audioRef.current) {
        audioRef.current = new Audio('/music/when ya nikah.mp3');
        audioRef.current.loop = true;
        audioRef.current.volume = 0.5;
      }
      audioRef.current.play().catch(() => {});
    }, 500);
  };

  if (!isOpen) {
    return <HeroNgunduhMantu onOpen={handleOpen} />;
  }

  return (
    <main className="min-h-screen bg-background">
      <CountdownHero weddingData={weddingData} />
      <CoupleSection weddingData={weddingData} />
      <EventInfoTurutMengundang />
      <FormalInvitation />
      <DenahLokasi />
      <ClosingSection weddingData={weddingData} />
      <Footer />
      <MusicControl audioRef={audioRef} />
    </main>
  );
}
