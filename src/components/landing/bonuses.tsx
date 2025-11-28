import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Award, BookOpen, Calculator, Users } from 'lucide-react';

const bonuses = [
  { id: 'bonus-1', title: 'Guia de Fornecedores', description: 'Uma lista selecionada dos melhores e mais baratos fornecedores de resina e materiais.', icon: <BookOpen className="w-12 h-12 text-primary" /> },
  { id: 'bonus-2', title: 'Planilha de Precificação', description: 'Calcule o preço de venda de suas peças de forma simples e garanta seu lucro.', icon: <Calculator className="w-12 h-12 text-primary" /> },
  { id: 'bonus-3', title: 'Comunidade VIP de Alunos', description: 'Troque experiências, tire dúvidas e faça networking com outros artistas de resina.', icon: <Users className="w-12 h-12 text-primary" /> },
  { id: 'bonus-4', title: 'Certificado de Conclusão', description: 'Receba um lindo certificado para comprovar sua nova habilidade e especialização.', icon: <Award className="w-12 h-12 text-primary" /> },
];

export const Bonuses = () => {
  return (
    <section id="bonuses" className="py-20 sm:py-28 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="bonuses-heading" className="font-headline text-3xl sm:text-4xl font-bold text-primary">
            E ainda tem mais... Bônus Exclusivos!
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ao se inscrever hoje, você garante acesso imediato a estes bônus incríveis que vão acelerar seus resultados.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bonuses.map((bonus) => {
            return (
              <Card key={bonus.id} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="items-center">
                  {bonus.icon}
                  <CardTitle className="font-headline text-xl pt-4">{bonus.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{bonus.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="mt-16 text-center">
            <Button
              asChild
              size="lg"
              className="h-14 px-8 text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <a href="#pricing">
                QUERO GARANTIR MEU ACESSO COM BÔNUS
              </a>
            </Button>
        </div>
      </div>
    </section>
  );
};
