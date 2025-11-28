import { Palette } from 'lucide-react';
import React from 'react';

const audienceItems = [
  "Iniciantes que nunca trabalharam com resina e querem começar do zero.",
  "Pessoas que buscam uma nova fonte de renda criativa e prazerosa.",
  "Artesãos que desejam aprimorar suas técnicas e agregar valor aos seus produtos.",
  "Qualquer pessoa que queira aprender um novo hobby e criar peças únicas.",
  "Empreendedores que buscam um negócio com baixo investimento e alta lucratividade."
];

export const TargetAudience = () => {
  return (
    <section id="target-audience" className="py-20 sm:py-28 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="target-audience-heading" className="font-headline text-3xl sm:text-4xl font-bold text-primary">
            Para quem é o curso Resina Master?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Este curso foi desenhado para atender a todos os níveis de habilidade e interesse, desde o curioso iniciante ao artesão experiente.
          </p>
        </div>

        <ul className="mt-12 max-w-2xl mx-auto space-y-4">
          {audienceItems.map((item, index) => (
            <li key={index} className="flex items-start">
              <Palette className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" />
              <span className="text-lg text-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
