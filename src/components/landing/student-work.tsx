import Image from 'next/image';
import { getImage } from '@/lib/placeholder-images';

export const StudentWork = () => {
    const images = [
        'student-work-1',
        'student-work-2',
        'student-work-3',
        'student-work-4',
        'student-work-5',
        'student-work-6',
        'student-work-7',
        'student-work-8',
        'student-work-9',
    ];
    
    const studentImages = images.map(id => getImage(id)).filter(Boolean);

  return (
    <section id="student-work" className="py-12 lg:py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mb-4">
          As joias dos nossos alunos não deixam dúvidas: o método funciona!
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Não importa se você nunca mexeu com resina. Ensinamos a técnica completa do zero. Veja comparações reais de peças feitas por nós e pelos nossos alunos:
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {studentImages.map((image, index) => (
                <div key={index} className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden shadow-lg bg-gray-100">
                    <Image
                        src={image!.imageUrl}
                        alt={image!.description}
                        width={400}
                        height={400}
                        className="w-full h-full object-contain"
                    />
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};
