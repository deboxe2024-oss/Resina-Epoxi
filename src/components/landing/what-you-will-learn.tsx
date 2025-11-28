import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const modules = [
  { id: 'learn-1', title: 'Introdução à Resina', description: 'Conheça os tipos de resina, ferramentas e segurança.' },
  { id: 'learn-2', title: 'Técnicas de Pigmentação', description: 'Aprenda a criar cores e efeitos incríveis em suas peças.' },
  { id: 'learn-3', title: 'Criação de Moldes', description: 'Faça seus próprios moldes de silicone para peças exclusivas.' },
  { id: 'learn-4', title: 'Peças Decorativas', description: 'Crie porta-copos, bandejas e outros itens de decoração.' },
  { id: 'learn-5', title: 'Bijuterias em Resina', description: 'Faça anéis, pingentes e brincos únicos e cheios de estilo.' },
  { id: 'learn-6', title: 'Acabamento e Polimento', description: 'Deixe suas peças com um acabamento profissional e brilhante.' },
];

export const WhatYouWillLearn = () => {
  return (
    <section id="learn" className="py-20 sm:py-28 bg-secondary/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="learn-heading" className="font-headline text-3xl sm:text-4xl font-bold text-primary">
            O que você vai aprender no curso
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Um conteúdo completo que te levará do básico ao avançado, transformando você em um(a) especialista em resina.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module) => {
            const image = PlaceHolderImages.find(img => img.id === module.id);
            return (
              <Card key={module.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                {image && (
                  <div className="aspect-w-16 aspect-h-9">
                    <Image
                      src={image.imageUrl}
                      alt={module.title}
                      width={400}
                      height={300}
                      data-ai-hint={image.imageHint}
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{module.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{module.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
