import Image from 'next/image';
import { getImage } from '@/lib/placeholder-images';

export const Features = () => {
  const featureImage = getImage('single-feature-image-new');

  if (!featureImage) return null;

  return (
    <section id="features" className="py-12 lg:py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mb-6">
          Use plantas de verdade, como essa lavanda, para criar peças únicas:
        </h2>
        <div className="mt-8">
            <Image
                src={featureImage.imageUrl}
                alt={featureImage.description}
                width={1200}
                height={600}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
        </div>
      </div>
    </section>
  );
};
