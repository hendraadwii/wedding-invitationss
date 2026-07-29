import type { Metadata } from 'next';

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

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
