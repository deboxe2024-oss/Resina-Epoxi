import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { getImage } from '@/lib/placeholder-images';

export const Features = () => {
  const imageIds = ['lavender-1', 'lavender-2', 'lavender-3', 'lavender-4'];
  const images = imageIds.map(id => getImage(id)).filter(Boolean);

  return (
    <section id="features" className="py-12 lg:py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mb-6">
          Use plantas de verdade, como essa lavanda, para criar peças únicas:
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform">
              <Image
                src={image!.imageUrl}
                alt={image!.description}
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Você ama flores, natureza e artesanato… mas está em dúvida se consegue transformar isso em algo real?
          </h3>
          <p className="text-gray-600 text-lg mb-4">
            Muitos dos nossos alunos chegaram até aqui com os mesmos medos:
          </p>
          <div className="space-y-2 text-gray-700 italic text-lg mb-8">
            <p>“E se eu estragar a resina?”</p>
            <p>“E se ninguém gostar do meu trabalho?”</p>
          </div>

          <p className="text-gray-600 text-lg mb-6">
            Nós entendemos você. E por isso criamos esse curso: confiável, claro e acessível, que te guia em cada etapa.
          </p>
          <p className="text-lg font-semibold text-gray-800 mb-10">
            Nosso método é o atalho que você precisa para fabricar joias em resina sem perder tempo e material em testes que dão errado.
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xl py-7 px-10 rounded-lg shadow-lg">
            <a href="#pricing">
              QUERO CRIAR MINHAS PRÓPRIAS JOIAS
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
