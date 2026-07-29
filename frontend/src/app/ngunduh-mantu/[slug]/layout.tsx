import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://akadku.vercel.app'),
  title: 'Ngunduh Mantu - Muhammad Alfin & Ida Emila',
  description: 'Kami mengundang Anda untuk hadir di acara Ngunduh Mantu kami.',
  openGraph: {
    title: 'Ngunduh Mantu - Muhammad Alfin & Ida Emila',
    description: 'Kami mengundang Anda untuk hadir di acara Ngunduh Mantu kami.',
    images: [
      {
        url: 'https://akadku.vercel.app/invitation/images/preview_ngunduh_mantu.png',
        width: 1200,
        height: 630,
        alt: 'Ngunduh Mantu - Muhammad Alfin & Ida Emila',
      },
    ],
    type: 'website',
    siteName: 'Ngunduh Mantu',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ngunduh Mantu - Muhammad Alfin & Ida Emila',
    description: 'Kami mengundang Anda untuk hadir di acara Ngunduh Mantu kami.',
    images: ['https://akadku.vercel.app/invitation/images/preview_ngunduh_mantu.png'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
