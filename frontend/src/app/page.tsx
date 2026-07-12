'use client';

import { useState } from 'react';
import Hero from '@/components/sections/Hero';
import CoupleSection from '@/components/sections/CoupleSection';
import LoveStory from '@/components/sections/LoveStory';
import EventInfo from '@/components/sections/EventInfo';
import Countdown from '@/components/sections/Countdown';
import Gallery from '@/components/sections/Gallery';
import RSVP from '@/components/sections/RSVP';
import Wishes from '@/components/sections/Wishes';
import GiftSection from '@/components/sections/GiftSection';
import Footer from '@/components/sections/Footer';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const weddingData = {
    groomName: 'Muhammad Alfin',
    brideName: 'Ida Emila',
    eventDate: '2026-08-08T08:00:00',
    location: 'Jakarta Convention Center',
    mapUrl: 'https://maps.google.com',
  };

  if (!isOpen) {
    return <Hero weddingData={weddingData} onOpen={() => setIsOpen(true)} />;
  }

  return (
    <main className="min-h-screen bg-background">
      <CoupleSection weddingData={weddingData} />
      <Countdown targetDate={weddingData.eventDate} />
      <EventInfo weddingData={weddingData} />
      <Gallery />
      <RSVP />
      <Wishes />
      <GiftSection />
      <Footer weddingData={weddingData} />
    </main>
  );
}
