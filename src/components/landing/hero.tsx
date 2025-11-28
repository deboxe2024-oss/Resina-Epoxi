import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="hero" className="relative w-full bg-white flex items-center justify-center text-center text-gray-800 py-16 sm:py-24">
      <div className="relative container z-10 flex flex-col items-center gap-6 px-4">
        <div className="max-w-4xl">
          <p className="font-bold text-primary mb-2 uppercase tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>OFERTA DE LANÇAMENTO</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Aprenda Resina Epóxi do Zero e Crie Peças Lindas Para Vender
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-600" style={{ fontFamily: "'Poppins', sans-serif" }}>
            — Mesmo Sem Nenhuma Experiência ou Muito Dinheiro Para Investir
          </p>
        </div>
        
        <Card className="max-w-3xl w-full overflow-hidden shadow-2xl border-2 border-primary/20 bg-black">
          <CardContent className="p-0 relative aspect-video">
            <video 
              src="https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.10367605469102437.mp4" 
              controls 
              className="w-full h-full object-cover"
              poster="https://resinaemcasa.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplaceholder-video.9b244799.jpg&w=1920&q=75"
              >
                Seu navegador não suporta o elemento de vídeo.
            </video>
          </CardContent>
        </Card>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-center text-gray-600 font-medium">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-500"/>
            <span>Técnicas do Zero ao Avançado</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-500"/>
            <span>Aulas 100% Práticas</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-500"/>
            <span>Acesso Vitalício</span>
          </div>
        </div>

        <Button
          asChild
          size="lg"
          className="h-14 px-8 text-lg font-bold bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
        >
          <a href="#pricing">
            QUERO GARANTIR MINHA VAGA
          </a>
        </Button>

        <p className="text-gray-600">✨ + de 3.000 alunas satisfeitas</p>
      </div>
    </section>
  );
};
