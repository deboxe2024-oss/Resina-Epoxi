"use client";
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const Hero = () => {
    const handlePurchase = () => {
        window.fbq?.('track', 'Purchase', {value: 97.00, currency: 'BRL'});
    };

  return (
    <section id="hero" className="relative w-full bg-white flex items-center justify-center text-center text-gray-800 py-16 sm:py-24">
      <div className="relative container z-10 flex flex-col items-center gap-6 px-4">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 font-serif">
            Aprenda a Eternizar a Natureza em Jóias Únicas e Exclusivas!
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-600">
            Descubra o passo a passo para criar peças incríveis com flores e folhas naturais e transforme seu hobby em um negócio lucrativo, mesmo que você seja uma completa iniciante.
          </p>
        </div>
        
        <Card className="max-w-4xl w-full overflow-hidden shadow-2xl border-2 border-rose-500/20 bg-black">
          <CardContent className="p-0 relative aspect-video">
            <video 
              src="https://video.wixstatic.com/video/b56f8a_162383818e6946059437d97435f3590c/1080p/mp4/file.mp4" 
              controls 
              className="w-full h-full object-cover"
              poster="https://joiasbotanicas.com.br/passo-a-passo/wp-content/uploads/2024/07/thumb-vsl.png"
              >
                Seu navegador não suporta o elemento de vídeo.
            </video>
          </CardContent>
        </Card>
        
        <div className="flex flex-col items-center gap-4 mt-4">
          <Button
            asChild
            size="lg"
            onClick={handlePurchase}
            className="h-16 px-10 text-xl font-bold bg-rose-500 hover:bg-rose-600 text-white rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 animate-pulse"
          >
            <a href="https://pay.kiwify.com.br/gVbZ3iL">
              QUERO TRANSFORMAR FOLHAS EM JÓIAS
            </a>
          </Button>
          <p className="text-gray-500 text-sm mt-2">Pagamento seguro | Acesso imediato</p>
        </div>
      </div>
    </section>
  );
};
