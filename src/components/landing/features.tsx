import Image from 'next/image';
import { getImage } from '@/lib/placeholder-images';

export const Features = () => {
  const featureImage = getImage('single-feature-image');

  if (!featureImage) return null;

  return (
    <section id="features" className="py-12 lg:py-24 bg-white">
      <div className="container mx-auto px-0">
        <Image
          src={featureImage.imageUrl}
          alt={featureImage.description}
          width={1200}
          height={600}
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};
