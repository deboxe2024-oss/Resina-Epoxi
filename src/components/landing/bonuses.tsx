import Image from 'next/image';
import { getImage } from '@/lib/placeholder-images';

export const Bonuses = () => {
  const bonusImageIds = [
    'bonus-new-1',
    'bonus-new-2',
    'bonus-new-3',
    'bonus-new-4',
    'bonus-new-5',
    'bonus-new-6',
    'bonus-new-7',
    'bonus-new-8',
    'bonus-new-9',
  ];
  const bonusImages = bonusImageIds.map(id => getImage(id)).filter(Boolean);

  return (
    <section id="bonuses" className="py-12 lg:py-24 bg-accent">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mb-10">
          TIRE SEU PROJETO DO PAPEL COM ESSES BÔNUS EXCLUSIVOS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {bonusImages.map((image, index) => (
            <div key={index} className="flex justify-center">
              <Image
                src={image!.imageUrl}
                alt={image!.description}
                width={400}
                height={400}
                className="rounded-lg shadow-md object-cover w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
