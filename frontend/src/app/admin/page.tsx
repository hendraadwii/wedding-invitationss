'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Copy, Check, Trash2, LogOut } from 'lucide-react';
import { supabase } from '@/lib/supabase/client';

interface Guest {
  id: string;
  name: string;
  slug: string;
  created_at: string;
}

function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [pin, setPin] = useState('');
  const [guests, setGuests] = useState<Guest[]>([]);
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === '088') {
      setAuthenticated(true);
      localStorage.setItem('admin_auth', 'true');
    } else {
      setError('PIN salah');
    }
  };

  useEffect(() => {
    if (localStorage.getItem('admin_auth') === 'true') {
      setAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (authenticated) fetchGuests();
  }, [authenticated]);

  const fetchGuests = async () => {
    const { data } = await supabase
      .from('guests')
      .select('*')
      .order('created_at', { ascending: false });
    if (data) setGuests(data);
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setLoading(true);
    setError('');
    const slug = toSlug(name);

    const { error: insertError } = await supabase.from('guests').insert([{ name: name.trim(), slug }]);

    if (insertError) {
      setError('Gagal menambah tamu. Slug mungkin sudah ada.');
    } else {
      setName('');
      fetchGuests();
    }
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    await supabase.from('guests').delete().eq('id', id);
    fetchGuests();
  };

  const handleCopy = (slug: string, index: number) => {
    navigator.clipboard.writeText(`https://akadku.vercel.app/${slug}`);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_auth');
    setAuthenticated(false);
    setPin('');
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 w-full max-w-sm text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-serif text-2xl text-[#D4AF37] mb-2">Admin Panel</h1>
          <p className="text-gray-500 text-sm mb-6">Masukkan PIN untuk akses</p>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={pin}
              onChange={(e) => { setPin(e.target.value); setError(''); }}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-center text-lg tracking-widest mb-4 focus:outline-none focus:border-[#D4AF37] text-black"
              placeholder="PIN"
              maxLength={10}
            />
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <button
              type="submit"
              className="w-full py-3 bg-[#D4AF37] text-white rounded-xl font-medium hover:bg-[#D4AF37]/80 transition-colors"
            >
              Masuk
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-10 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <h1 className="font-serif text-2xl text-[#D4AF37]">Admin Panel</h1>
            <p className="text-gray-500 text-sm">{guests.length} tamu terdaftar</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors self-start"
          >
            <LogOut size={16} /> Keluar
          </button>
        </div>

        <motion.div
          className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="font-medium text-black mb-4">Tambah Tamu</h2>
          <form onSubmit={handleAdd} className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#D4AF37] text-black"
              placeholder="Nama tamu"
            />
            <button
              type="submit"
              disabled={loading || !name.trim()}
              className="px-5 py-3 bg-[#D4AF37] text-white rounded-xl font-medium hover:bg-[#D4AF37]/80 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <Plus size={18} /> Tambah
            </button>
          </form>
          {error && <p className="text-red-500 text-sm mt-3">{error}</p>}
        </motion.div>

        <div className="space-y-3">
          <AnimatePresence>
            {guests.map((guest, i) => (
              <motion.div
                key={guest.id}
                className="bg-white rounded-2xl shadow-lg p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-black truncate">{guest.name}</p>
                  <p className="text-xs text-gray-500 truncate">akadku.vercel.app/{guest.slug}</p>
                </div>
                <div className="flex items-center gap-2 sm:ml-4">
                  <button
                    onClick={() => handleCopy(guest.slug, i)}
                    className="flex-1 sm:flex-none px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-500 hover:text-[#D4AF37] flex items-center justify-center gap-2 text-sm"
                    title="Copy URL"
                  >
                    {copiedIndex === i ? <><Check size={16} /> Tersalin</> : <><Copy size={16} /> Salin</>}
                  </button>
                  <button
                    onClick={() => handleDelete(guest.id)}
                    className="px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-500 hover:text-red-500 flex items-center justify-center gap-2 text-sm"
                    title="Hapus"
                  >
                    <Trash2 size={16} /> Hapus
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {guests.length === 0 && (
            <p className="text-center text-gray-500 py-10">Belum ada tamu</p>
          )}
        </div>
      </div>
    </div>
  );
}
