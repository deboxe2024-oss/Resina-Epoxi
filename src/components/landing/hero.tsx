'use client';
import { Button } from '@/components/ui/button';
import { getImage } from '@/lib/placeholder-images';
import Image from 'next/image';

export const Hero = () => {
  const heroImage = getImage('hero-background-new');

  return (
    <>
      <section id="hero-image" className="bg-background">
        <div className="container mx-auto px-0 sm:px-4">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              width={1920}
              height={1080}
              className="w-full h-auto"
              priority
            />
          )}
        </div>
      </section>
      <section 
        id="hero-content" 
        className="text-center py-10 lg:py-16 bg-background"
      >
        <div className="container relative z-10 mx-auto px-4">
          <h1 className="text-3xl lg:text-5xl font-extrabold text-primary leading-tight mb-4">
            Transforme plantas em joias e crie uma nova história na sua vida!
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Aprenda o passo a passo completo para criar joias perfeitas mesmo sem experiência e fature até R$7.000,00 por mês.
          </p>
          <p className="text-md lg:text-lg text-gray-600 font-semibold mb-10">
            O melhor curso para iniciantes: Confiável e testado por mais de 3 mil alunos no Brasil e exterior.
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xl py-7 px-10 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
            <a href="https://pay.kirvano.com/0b5d35b6-1af5-43b0-bed7-9640d6f5569f">
              QUERO APRENDER
            </a>
          </Button>
          <div className="mt-6 text-gray-800 font-semibold">
            <p className="text-lg">12x de R$ 15,41</p>
            <p className="text-sm">ou R$149,00 à vista</p>
          </div>
        </div>
      </section>
    </>
  );
};
