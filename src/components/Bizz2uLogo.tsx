import React from 'react';

interface Bizz2uLogoProps {
  className?: string;
  size?: number;
}

export const Bizz2uLogo: React.FC<Bizz2uLogoProps> = ({ className = 'w-9 h-9', size }) => {
  return (
    <img
      src="https://dswjuamvbswokvrivbtn.supabase.co/storage/v1/object/public/Bizz2u/android-chrome-192x192.png"
      alt="Bizz2u Logo"
      className={`${className} object-contain`}
      style={size ? { width: size, height: size } : undefined}
      onError={(e) => {
        e.currentTarget.src = '/bizz2u-logo.png';
      }}
    />
  );
};

export default Bizz2uLogo;
