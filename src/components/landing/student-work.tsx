import Image from 'next/image';
import { getImage } from '@/lib/placeholder-images';

export const StudentWork = () => {
    const images = [
        { id: 'atelie-piece', label: 'Peça do nosso ateliê' },
        { id: 'aluna-piece-1', label: 'Peça da aluna' },
        { id: 'atelie-piece-2', label: 'Peça do nosso ateliê' },
        { id: 'aluna-piece-2', label: 'Peça da aluna' },
    ];
    
    const studentImages = images.map(img => ({
        ...getImage(img.id),
        label: img.label
    })).filter(Boolean);

  return (
    <section id="student-work" className="py-12 lg:py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mb-4">
          As joias dos nossos alunos não deixam dúvidas: o método funciona!
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Não importa se você nunca mexeu com resina. Ensinamos a técnica completa do zero. Veja comparações reais de peças feitas por nós e pelos nossos alunos:
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {studentImages.map((image, index) => (
                <div key={index} className="flex flex-col items-center">
                    <div className="w-full aspect-square rounded-lg overflow-hidden shadow-lg mb-4">
                        <Image
                            src={image.imageUrl!}
                            alt={image.description!}
                            width={300}
                            height={300}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <p className="font-semibold text-gray-700">{image.label}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};
