import React from 'react';
import Image from 'next/image';
import { getImage } from '@/lib/placeholder-images';

export const Logo = () => {
  const logo = getImage('amana-logo');
  if (!logo) return null;
  return (
    <a href="/" className="font-serif text-2xl font-bold text-primary">
      <Image 
        src={logo.imageUrl}
        alt="Amana Ateliê Logo"
        width={150}
        height={40}
        className='object-contain'
      />
    </a>
  );
};
