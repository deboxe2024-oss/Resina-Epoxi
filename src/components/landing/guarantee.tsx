import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const guaranteeSeal = PlaceHolderImages.find(img => img.id === 'guarantee-seal');

export const Guarantee = () => {
  return (
    <section id="guarantee" className="py-20 sm:py-28 bg-secondary/30">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {guaranteeSeal && (
            <div className="flex-shrink-0">
              <Image
                src={guaranteeSeal.imageUrl}
                alt={guaranteeSeal.description}
                data-ai-hint={guaranteeSeal.imageHint}
                width={250}
                height={250}
                className="object-contain"
              />
            </div>
          )}
          <div className="max-w-xl text-center lg:text-left">
            <h2 id="guarantee-heading" className="font-headline text-3xl sm:text-4xl font-bold text-foreground">
              Risco Zero Para Você!
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Sua satisfação é nossa prioridade. Por isso, oferecemos uma garantia incondicional de 7 dias. Se por qualquer motivo você não gostar do conteúdo ou achar que o curso não é para você, basta nos enviar um único e-mail e devolveremos 100% do seu investimento. Sem perguntas, sem burocracia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
