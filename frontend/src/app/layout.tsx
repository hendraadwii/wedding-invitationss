import type { Metadata } from 'next';
import { Great_Vibes, Playfair_Display, Poppins, Amiri } from 'next/font/google';
import './globals.css';

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-script',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const amiri = Amiri({
  weight: '400',
  subsets: ['arabic'],
  variable: '--font-arabic',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://akadku.vercel.app'),
  title: 'Wedding Invitation - Muhammad Alfin & Ida Emila',
  description: 'Kami mengundang Anda untuk hadir di hari bahagia kami.',
  openGraph: {
    title: 'Wedding Invitation - Muhammad Alfin & Ida Emila',
    description: 'Kami mengundang Anda untuk hadir di hari bahagia kami.',
    images: [
      {
        url: '/invitation/images/preview_wedding.png',
        width: 1200,
        height: 630,
        alt: 'Wedding Invitation - Muhammad Alfin & Ida Emila',
      },
    ],
    type: 'website',
    siteName: 'Wedding Invitation',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wedding Invitation - Muhammad Alfin & Ida Emila',
    description: 'Kami mengundang Anda untuk hadir di hari bahagia kami.',
    images: ['/invitation/images/preview_wedding.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${greatVibes.variable} ${playfair.variable} ${poppins.variable} ${amiri.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
