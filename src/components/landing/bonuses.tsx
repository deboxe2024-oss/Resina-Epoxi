import React from 'react';
import Image from 'next/image';

const bonuses = [
  { 
    imageUrl: 'https://joiasbotanicas.com.br/passo-a-passo/wp-content/uploads/2024/07/bonus1.png',
    title: 'Bônus 1: Lista de Fornecedores',
    description: 'Acesse a lista secreta de fornecedores para comprar materiais de alta qualidade com o melhor preço.',
  },
  { 
    imageUrl: 'https://joiasbotanicas.com.br/passo-a-passo/wp-content/uploads/2024/07/bonus2.png',
    title: 'Bônus 2: Guia de Precificação',
    description: 'Aprenda a calcular o preço de venda das suas peças para ter um negócio lucrativo e sustentável.',
  },
  { 
    imageUrl: 'https://joiasbotanicas.com.br/passo-a-passo/wp-content/uploads/2024/07/bonus3.png',
    title: 'Bônus 3: Como Vender na Internet',
    description: 'Um guia completo para você divulgar e vender suas joias nas redes sociais e em marketplaces.',
  },
  { 
    imageUrl: 'https://joiasbotanicas.com.br/passo-a-passo/wp-content/uploads/2024/07/bonus4.png',
    title: 'Bônus 4: Grupo VIP de Alunas',
    description: 'Faça parte da nossa comunidade exclusiva de alunas para tirar dúvidas e trocar experiências.',
  },
];

export const Bonuses = () => {
  return (
    <section id="bonuses" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
            <p className="font-bold text-rose-500">E AINDA TEM MAIS!</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 font-serif">
                Leve 4 Bônus Exclusivos
            </h2>
            <p className="mt-4 text-lg text-gray-600">
                Comprando hoje você garante acesso a 4 bônus incríveis que vão acelerar seus resultados e te ajudar a lucrar com suas peças.
            </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bonuses.map((bonus, index) => (
            <div key={index} className="flex flex-col text-center items-center p-4 bg-rose-50/50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Image src={bonus.imageUrl} alt={bonus.title} width={120} height={120} className="mb-4" />
                <h3 className="font-bold text-gray-800 text-lg font-serif">{bonus.title}</h3>
                <p className="text-sm text-gray-600 mt-2 flex-grow">{bonus.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
