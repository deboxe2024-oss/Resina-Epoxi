import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>WhatsApp</title>
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.223.298-.372.099-.149.05-.272-.025-.421-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);


export const Hero = () => {
  return (
    <section id="hero" className="relative w-full bg-background flex items-center justify-center text-center text-foreground py-20">
      <div className="relative container z-10 flex flex-col items-center gap-6">
        <div className="max-w-4xl">
          <p className="font-bold text-primary mb-2">OFERTA DE LANÇAMENTO</p>
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Aprenda Resina Epóxi do Zero e Crie Peças Lindas Para Vender
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-muted-foreground">
            — Mesmo Sem Nenhuma Experiência ou Muito Dinheiro Para Investir
          </p>
        </div>
        
        <Card className="max-w-3xl w-full overflow-hidden shadow-2xl border-2 border-primary/20 bg-black/20 backdrop-blur-sm">
          <CardContent className="p-0 relative aspect-video">
            <video 
              src="https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.10367605469102437.mp4" 
              controls 
              className="w-full h-full object-cover"
              poster="/placeholder-video.jpg"
              >
                Seu navegador não suporta o elemento de vídeo.
            </video>
          </CardContent>
        </Card>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-center text-muted-foreground">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-primary"/>
            <span>Técnicas do Zero ao Avançado</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-primary"/>
            <span>Aulas 100% Práticas</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-primary"/>
            <span>Acesso Vitalício</span>
          </div>
        </div>

        <Button
          asChild
          size="lg"
          className="h-14 px-8 text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
        >
          <a href="#pricing">
            QUERO GARANTIR MINHA VAGA
          </a>
        </Button>

        <p className="text-muted-foreground">✨ + de 3.000 alunas satisfeitas</p>
      </div>
    </section>
  );
};
