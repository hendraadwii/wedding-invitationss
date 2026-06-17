import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Wedding Invitation - Hendra Dwi & Wonyoung',
  description: 'Kami mengundang Anda untuk hadir di hari bahagia kami.',
  openGraph: {
    title: 'Wedding Invitation - Hendra Dwi & Wonyoung',
    description: 'Kami mengundang Anda untuk hadir di hari bahagia kami.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
