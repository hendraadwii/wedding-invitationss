'use client';

import { useState, useRef } from 'react';
import Hero from '@/components/sections/Hero';
import CoupleSection from '@/components/sections/CoupleSection';
import CountdownHero from '@/components/sections/CountdownHero';
import EventInfoTurutMengundang from '@/components/sections/EventInfoTurutMengundang';
import RSVP from '@/components/sections/RSVP';
import Wishes from '@/components/sections/Wishes';
import ClosingSection from '@/components/sections/ClosingSection';
import Footer from '@/components/sections/Footer';
import MusicControl from '@/components/ui/MusicControl';

export default function NgunduhMantuPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [wishRefreshKey, setWishRefreshKey] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const weddingData = {
    groomName: 'Muhammad Alfin',
    brideName: 'Ida Emila',
    eventDate: '2026-08-08T08:00:00',
    location: 'Perumahan Taman Buah Sukamantri Blok AB-8 No. 2, RT 04/RW 12, Desa Sukamantri, Kecamatan Pasar Kemis, Kabupaten Tangerang, Provinsi Banten',
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
    return <Hero weddingData={weddingData} onOpen={handleOpen} />;
  }

  return (
    <main className="min-h-screen bg-background">
      <CountdownHero weddingData={weddingData} />
      <CoupleSection weddingData={weddingData} />
      <EventInfoTurutMengundang weddingData={weddingData} />
      <RSVP onSuccess={() => setWishRefreshKey((k) => k + 1)} />
      <Wishes key={wishRefreshKey} />
      <ClosingSection weddingData={weddingData} />
      <Footer />
      <MusicControl audioRef={audioRef} />
    </main>
  );
}
