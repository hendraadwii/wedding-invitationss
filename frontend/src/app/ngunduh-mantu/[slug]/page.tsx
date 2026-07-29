'use client';

import { useState, useRef, useEffect, use } from 'react';
import { motion } from 'framer-motion';
import HeroNgunduhMantu from '@/components/sections/HeroNgunduhMantu';
import CoupleSection from '@/components/sections/CoupleSection';
import CountdownHero from '@/components/sections/CountdownHero';
import EventInfoTurutMengundang from '@/components/sections/EventInfoTurutMengundang';
import FormalInvitation from '@/components/sections/FormalInvitation';
import DenahLokasi from '@/components/sections/DenahLokasi';
import ClosingSection from '@/components/sections/ClosingSection';
import Footer from '@/components/sections/Footer';
import MusicControl from '@/components/ui/MusicControl';
import { supabase } from '@/lib/supabase/client';

export default function NgunduhMantuGuestPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [isOpen, setIsOpen] = useState(false);
  const [guestName, setGuestName] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const weddingData = {
    groomName: 'M. Alfin Nooreza',
    brideName: 'Ida Emila',
    eventDate: '2026-08-09T09:00:00',
    location: 'Kp. Kebon Kelapa RT. 05 RW. 04 Desa Pasarkemis, Kec. Pasarkemis, Kab. Tangerang - Banten',
    mapUrl: 'https://maps.app.goo.gl/zbWt9X6RwDnLeKvh6',
  };

  useEffect(() => {
    const fetchGuest = async () => {
      const { data } = await supabase
        .from('guests')
        .select('name')
        .eq('slug', slug)
        .eq('type', 'ngunduh-mantu')
        .single();

      if (data) {
        setGuestName(data.name);
      } else {
        setNotFound(true);
      }
      setLoading(false);
    };
    fetchGuest();
  }, [slug]);

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

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FDF8F0] flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="w-8 h-8 border-2 border-[#D4AF37] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-400 text-sm">Memuat undangan...</p>
        </motion.div>
      </div>
    );
  }

  if (notFound) {
    return (
      <div className="min-h-screen bg-[#FDF8F0] flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-6xl mb-4">😔</p>
          <h1 className="font-serif text-2xl text-gray-700 mb-2">Undangan Tidak Ditemukan</h1>
          <p className="text-gray-400">Hubungi mempelai untuk mendapatkan undangan yang valid.</p>
        </div>
      </div>
    );
  }

  if (!isOpen) {
    return <HeroNgunduhMantu onOpen={handleOpen} guestName={guestName || undefined} />;
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
