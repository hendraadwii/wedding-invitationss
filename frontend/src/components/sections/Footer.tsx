'use client';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 bg-white border-t border-gray-200">
      <div className="max-w-lg mx-auto text-center">
        <p className="text-gray-400 text-sm">
          &copy; {year} Wedding Invitation. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
