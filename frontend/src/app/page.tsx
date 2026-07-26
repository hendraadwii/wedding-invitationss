'use client';

import { useState } from 'react';
import Hero from '@/components/sections/Hero';
import CoupleSection from '@/components/sections/CoupleSection';
import CountdownHero from '@/components/sections/CountdownHero';
import QuranSection from '@/components/sections/QuranSection';
import EventInfo from '@/components/sections/EventInfo';
import Gallery from '@/components/sections/Gallery';
import RSVP from '@/components/sections/RSVP';
import Wishes from '@/components/sections/Wishes';
import GiftSection from '@/components/sections/GiftSection';
import ClosingSection from '@/components/sections/ClosingSection';
import Footer from '@/components/sections/Footer';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [wishRefreshKey, setWishRefreshKey] = useState(0);

  const weddingData = {
    groomName: 'Muhammad Alfin',
    brideName: 'Ida Emila',
    eventDate: '2026-08-08T08:00:00',
    location: 'Perumahan Taman Buah Sukamantri, Blok AB 8 No. 2, RT 04/RW 12, Desa Sukamantri, Kecamatan Pasar Kemis, Kabupaten Tangerang, Banten',
    mapUrl: 'https://maps.app.goo.gl/zbWt9X6RwDnLeKvh6',
  };

  if (!isOpen) {
    return <Hero weddingData={weddingData} onOpen={() => setIsOpen(true)} />;
  }

  return (
    <main className="min-h-screen bg-background">
      <CountdownHero weddingData={weddingData} />
      <QuranSection />
      <CoupleSection weddingData={weddingData} />
      <EventInfo weddingData={weddingData} />
      <Gallery />
      <RSVP onSuccess={() => setWishRefreshKey((k) => k + 1)} />
      <Wishes key={wishRefreshKey} />
      <GiftSection />
      <ClosingSection weddingData={weddingData} />
      <Footer />
    </main>
  );
}
