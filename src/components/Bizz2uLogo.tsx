import React, { useState } from 'react';

interface Bizz2uLogoProps {
  className?: string;
  size?: number;
}

export const Bizz2uLogo: React.FC<Bizz2uLogoProps> = ({ className = 'w-9 h-9', size }) => {
  const [sourceIndex, setSourceIndex] = useState(0);

  // Fallback sources in priority order:
  // 1. Direct Supabase storage URL requested by user
  // 2. Root relative path /bizz2u-logo.png
  // 3. Folder relative path ./bizz2u-logo.png
  const sources = [
    'https://dswjuamvbswokvrivbtn.supabase.co/storage/v1/object/public/Bizz2u/android-chrome-192x192.png',
    '/bizz2u-logo.png',
    './bizz2u-logo.png',
    './docs/bizz2u-logo.png'
  ];

  const handleError = () => {
    if (sourceIndex < sources.length - 1) {
      setSourceIndex(prev => prev + 1);
    } else {
      setSourceIndex(sources.length); // Trigger SVG vector fallback
    }
  };

  if (sourceIndex >= sources.length) {
    // Vector fallback ensuring the bold 'B' logo is ALWAYS visually rendered
    return (
      <svg
        viewBox="0 0 100 100"
        className={`${className} shrink-0 drop-shadow-[0_2px_10px_rgba(245,200,66,0.5)]`}
        style={size ? { width: size, height: size } : undefined}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Bizz2u Logo"
      >
        <circle cx="50" cy="50" r="46" fill="#0D1322" stroke="url(#goldGrad)" strokeWidth="4" />
        <path
          d="M32 25 H54 C66 25 72 31 72 40 C72 46 68 50 62 52 C70 54 75 60 75 70 C75 80 67 85 53 85 H32 Z"
          fill="url(#goldGrad)"
        />
        <path
          d="M44 36 H52 C58 36 61 38 61 43 C61 48 58 50 52 50 H44 Z M44 59 H54 C60 59 63 62 63 68 C63 74 59 76 53 76 H44 Z"
          fill="#0D1322"
        />
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE047" />
            <stop offset="50%" stopColor="#EAB308" />
            <stop offset="100%" stopColor="#CA8A04" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  return (
    <img
      src={sources[sourceIndex]}
      alt="Bizz2u Logo"
      className={`${className} object-contain shrink-0`}
      style={size ? { width: size, height: size } : undefined}
      onError={handleError}
      loading="eager"
      decoding="async"
    />
  );
};

export default Bizz2uLogo;
