'use client';

import { Heart } from 'lucide-react';

interface FooterProps {
  weddingData: {
    groomName: string;
    brideName: string;
  };
}

export default function Footer({ weddingData }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 bg-card border-t border-primary/20">
      <div className="max-w-lg mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="font-script text-lg text-primary">
            {weddingData.groomName}
          </span>
          <Heart size={16} className="text-accent fill-accent" />
          <span className="font-script text-lg text-primary">
            {weddingData.brideName}
          </span>
        </div>
        <p className="text-muted/60 text-sm">
          &copy; {year} Wedding Invitation. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
