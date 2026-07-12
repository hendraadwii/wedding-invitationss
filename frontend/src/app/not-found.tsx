import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <h1 className="font-serif text-6xl text-accent mb-4">404</h1>
      <p className="text-muted mb-8">Halaman tidak ditemukan</p>
      <Link
        href="/"
        className="px-8 py-3 bg-accent text-background rounded-full hover:bg-accent/80 transition-colors font-medium tracking-button"
      >
        Kembali
      </Link>
    </div>
  );
}
