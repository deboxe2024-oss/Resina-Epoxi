import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export const Guarantee = () => {
  return (
    <section id="guarantee" className="py-16 sm:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 text-center lg:text-left">
          <div className="flex-shrink-0">
            <Image
              src="https://resinaemcasa.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fselo-garantia.4f220d91.png&w=256&q=75"
              alt="Selo de Garantia de 7 dias"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <div className="max-w-2xl">
            <h2 id="guarantee-heading" className="text-3xl sm:text-4xl font-bold">
              Garantia de 7 dias — risco zero!
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Se você não gostar do curso, por qualquer motivo, basta nos enviar um e-mail dentro de 7 dias e devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia. O risco é todo nosso.
            </p>
            <div className="mt-8">
                <Button
                asChild
                size="lg"
                className="h-14 px-8 text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                >
                <a href="#pricing">
                    QUERO ACESSAR AGORA
                </a>
                </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
