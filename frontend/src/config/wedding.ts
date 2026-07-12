export interface WeddingConfig {
  slug: string;
  groomName: string;
  brideName: string;
  groomParent: string;
  brideParent: string;
  eventDate: string;
  location: string;
  mapUrl: string;
  loveStory: {
    year: string;
    title: string;
    description: string;
  }[];
  galleryImages: {
    id: number;
    src: string;
    alt: string;
    span?: string;
  }[];
  bankAccounts: {
    bank: string;
    accountNumber: string;
    name: string;
  }[];
  eWallets: {
    name: string;
    number: string;
  }[];
}

export const weddings: Record<string, WeddingConfig> = {
  'hendra-wonyoung': {
    slug: 'hendra-wonyoung',
    groomName: 'Hendra Dwi',
    brideName: 'Wonyoung',
    groomParent: 'Bapak Hendra & Ibu Sari',
    brideParent: 'Bapak Jang & Ibu Wonyoung',
    eventDate: '2025-08-17T09:00:00',
    location: 'Jakarta Convention Center',
    mapUrl: 'https://maps.google.com',
    loveStory: [
      { year: '2019', title: 'First Meet', description: 'Bertemu pertama kali di sebuah acara seminar di Jakarta.' },
      { year: '2020', title: 'Relationship', description: 'Memutuskan untuk menjalin hubungan bersama.' },
      { year: '2023', title: 'Engagement', description: 'Melamar dan bertunangan di hadapan keluarga.' },
      { year: '2025', title: 'Wedding', description: 'Melangkah ke jenjang pernikahan yang lebih serius.' },
    ],
    galleryImages: [
      { id: 1, src: '/invitation/hendra-wonyoung/gallery-1.jpg', alt: 'Gallery 1', span: 'row-span-2' },
      { id: 2, src: '/invitation/hendra-wonyoung/gallery-2.jpg', alt: 'Gallery 2' },
      { id: 3, src: '/invitation/hendra-wonyoung/gallery-3.jpg', alt: 'Gallery 3' },
      { id: 4, src: '/invitation/hendra-wonyoung/gallery-4.jpg', alt: 'Gallery 4', span: 'col-span-2' },
      { id: 5, src: '/invitation/hendra-wonyoung/gallery-5.jpg', alt: 'Gallery 5' },
      { id: 6, src: '/invitation/hendra-wonyoung/gallery-6.jpg', alt: 'Gallery 6' },
    ],
    bankAccounts: [
      { bank: 'BCA', accountNumber: '1234567890', name: 'Hendra Dwi' },
    ],
    eWallets: [
      { name: 'DANA', number: '081234567890' },
    ],
  },
};
