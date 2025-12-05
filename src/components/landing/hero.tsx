'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getImage } from '@/lib/placeholder-images';
import Image from 'next/image';

export const Hero = () => {
    const videoThumbnail = getImage('video-thumbnail');
  return (
    <section id="hero" className="relative w-full bg-accent flex items-center py-16 sm:py-24">
         <div className="absolute inset-0 opacity-10">
            <Image 
                src="https://images.unsplash.com/photo-1599692958189-1bdd94c34570?q=80&w=2070&auto=format&fit=crop"
                alt="Fundo de folhas"
                fill
                className="object-cover"
            />
        </div>
      <div className="container z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
            Transforme plantas em joias e crie uma nova história na sua vida!
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Aprenda o passo a passo completo para criar joias perfeitas mesmo sem experiência e fature até R$7000,00 por mês.
          </p>
          <p className="mt-4 text-md font-semibold text-gray-600">
            O melhor curso para iniciantes: Confiável e testado por mais de 3 mil alunos no Brasil e exterior.
          </p>
          <div className="mt-8 flex flex-col items-center md:items-start">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xl py-7 px-10 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
                <a href="#pricing">QUERO APRENDER</a>
            </Button>
            <p className="mt-4 text-gray-800 font-semibold">12 x de R$ 15,41 ou <br className="sm:hidden" /> R$149,00 a vista.</p>
          </div>
        </div>
        
        <div className="flex justify-center">
            {videoThumbnail && (
                <a href="#video-modal" className="block w-full max-w-md relative group">
                     <Card className="overflow-hidden shadow-2xl border-2 border-primary/20">
                        <CardContent className="p-0 relative aspect-video">
                            <Image
                                src={videoThumbnail.imageUrl}
                                alt={videoThumbnail.description}
                                fill
                                className="object-cover transition-transform group-hover:scale-110"
                            />
                             <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white p-4">
                                <div className='bg-white/20 p-4 rounded-full backdrop-blur-sm'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                                </div>
                                <p className="font-bold text-sm mt-2 bg-primary/80 px-2 py-1 rounded">ASSISTA E DESCUBRA</p>
                                <p className="font-bold text-lg mt-2 text-center">COMO JOIAS BOTÂNICAS PODEM MUDAR SUA VIDA?</p>
                            </div>
                        </CardContent>
                    </Card>
                </a>
            )}
        </div>
      </div>
    </section>
  );
};
