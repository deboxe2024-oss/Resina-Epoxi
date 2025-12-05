import Image from 'next/image';
import { getImage } from '@/lib/placeholder-images';

export const Bonuses = () => {
  const bonusImageIds = [
    'bonus-fornecedores',
    'bonus-precificacao',
    'bonus-fotos',
    'bonus-acabamento',
    'bonus-pingentes',
    'bonus-instagram',
  ];
  const bonusImages = bonusImageIds.map(id => getImage(id)).filter(Boolean);

  return (
    <section id="bonuses" className="py-12 lg:py-24 bg-accent">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mb-10">
          TIRE SEU PROJETO DO PAPEL COM ESSES BÔNUS EXCLUSIVOS
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {bonusImages.map((image, index) => (
            <div key={index} className="flex justify-center">
              <Image
                src={image!.imageUrl}
                alt={image!.description}
                width={180}
                height={180}
                className="rounded-lg shadow-md object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
