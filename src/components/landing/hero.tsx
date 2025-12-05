'use client';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <section id="hero" className="relative text-center py-20 lg:py-32 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://joiasbotanicas.com.br/wp-content/uploads/2023/07/Captura-de-Tela-2023-07-25-as-12.08.38-1.png')"}}>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container relative z-10 mx-auto px-4">
        <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
          Transforme plantas em joias e crie uma nova história na sua vida!
        </h1>
        <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          Aprenda o passo a passo completo para criar joias perfeitas mesmo sem experiência e fature até R$7.000,00 por mês.
        </p>
        <p className="text-md lg:text-lg text-white/80 font-semibold mb-10">
          O melhor curso para iniciantes: Confiável e testado por mais de 3 mil alunos no Brasil e exterior.
        </p>
        <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xl py-7 px-10 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
          <a href="#pricing">
            QUERO APRENDER
          </a>
        </Button>
        <div className="mt-6 text-white font-semibold">
          <p className="text-lg">12x de R$ 15,41</p>
          <p className="text-sm">ou R$149,00 à vista</p>
        </div>
      </div>
    </section>
  );
};
