'use client';

interface FlowerDecorationProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
}

export default function FlowerDecoration({ position, className = '' }: FlowerDecorationProps) {
  const positionClasses = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0 -scale-x-100',
    'bottom-left': 'bottom-0 left-0 -scale-y-100',
    'bottom-right': 'bottom-0 right-0 -scale-x-100 -scale-y-100',
  };

  return (
    <div className={`absolute ${positionClasses[position]} pointer-events-none z-10 ${className}`}>
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64"
      >
        {/* Leaves */}
        <path
          d="M20 180C20 180 30 140 60 120C90 100 100 110 100 110C100 110 80 130 60 150C40 170 20 180 20 180Z"
          fill="#4a7c59"
          opacity="0.8"
        />
        <path
          d="M10 160C10 160 25 130 50 115C75 100 90 105 90 105C90 105 70 120 50 140C30 160 10 160 10 160Z"
          fill="#5a8c69"
          opacity="0.7"
        />
        <path
          d="M30 190C30 190 40 155 70 135C100 115 110 125 110 125C110 125 90 145 70 165C50 185 30 190 30 190Z"
          fill="#3a6c49"
          opacity="0.6"
        />

        {/* Main flower */}
        <circle cx="70" cy="80" r="25" fill="#f8b4c8" />
        <circle cx="55" cy="65" r="20" fill="#f9c4d4" />
        <circle cx="85" cy="65" r="20" fill="#f9c4d4" />
        <circle cx="55" cy="95" r="20" fill="#f9c4d4" />
        <circle cx="85" cy="95" r="20" fill="#f9c4d4" />
        <circle cx="70" cy="80" r="12" fill="#f4a0b8" />

        {/* Small flowers */}
        <circle cx="30" cy="130" r="12" fill="#f0c0d0" />
        <circle cx="25" cy="125" r="8" fill="#f5d0e0" />
        <circle cx="35" cy="125" r="8" fill="#f5d0e0" />
        <circle cx="25" cy="135" r="8" fill="#f5d0e0" />
        <circle cx="35" cy="135" r="8" fill="#f5d0e0" />
        <circle cx="30" cy="130" r="5" fill="#e8a0b8" />

        <circle cx="100" cy="140" r="10" fill="#f0c0d0" />
        <circle cx="96" cy="136" r="7" fill="#f5d0e0" />
        <circle cx="104" cy="136" r="7" fill="#f5d0e0" />
        <circle cx="96" cy="144" r="7" fill="#f5d0e0" />
        <circle cx="104" cy="144" r="7" fill="#f5d0e0" />
        <circle cx="100" cy="140" r="4" fill="#e8a0b8" />

        {/* Buds */}
        <ellipse cx="45" cy="110" rx="6" ry="8" fill="#f4a0b8" transform="rotate(-30 45 110)" />
        <ellipse cx="90" cy="120" rx="5" ry="7" fill="#f4a0b8" transform="rotate(20 90 120)" />

        {/* Stems */}
        <path
          d="M70 105C70 105 60 130 40 160"
          stroke="#4a7c59"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M70 105C70 105 80 125 100 145"
          stroke="#4a7c59"
          strokeWidth="2"
          fill="none"
        />

        {/* Extra leaves */}
        <path
          d="M50 140C50 140 45 155 35 165C35 165 55 160 50 140Z"
          fill="#5a8c69"
          opacity="0.5"
        />
        <path
          d="M85 130C85 130 95 140 105 145C105 145 90 145 85 130Z"
          fill="#5a8c69"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
