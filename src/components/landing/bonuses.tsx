import React from 'react';
import Image from 'next/image';

const bonuses = [
  { 
    imageUrl: 'https://kdloteojnkcjblhoirea.supabase.co/storage/v1/object/public/public-files/0.9681884163274108.png',
    title: 'BÔNUS 1 — Lista de Fornecedores',
    description: 'Descubra onde comprar resina, moldes e materiais com os melhores preços do Brasil.',
    value: 47.00,
  },
  { 
    imageUrl: 'https://kdloteojnkcjblhoirea.supabase.co/storage/v1/object/public/public-files/0.5409870164785451.png',
    title: 'BÔNUS 2 — Moldes Caseiros de Silicone',
    description: 'Aprenda a criar seus próprios moldes personalizados gastando quase nada.',
    value: 39.00,
  },
  { 
    imageUrl: 'https://kdloteojnkcjblhoirea.supabase.co/storage/v1/object/public/public-files/0.6991364729469136.png',
    title: 'BÔNUS 3 — Luminárias com Resina',
    description: 'Passo a passo completo para criar luminárias modernas e muito valorizadas.',
    value: 39.00,
  },
  { 
    imageUrl: 'https://kdloteojnkcjblhoirea.supabase.co/storage/v1/object/public/public-files/0.4464812910082867.png',
    title: 'BÔNUS 4 — Checklist Completo de Trabalho',
    description: 'Checklist para evitar erros, organizar sua produção e garantir melhores resultados.',
    value: 29.00,
  },
  { 
    imageUrl: 'https://kdloteojnkcjblhoirea.supabase.co/storage/v1/object/public/public-files/0.27787011845584453.png',
    title: 'BÔNUS 5 — Guia de Estratégias de Vendas',
    description: 'Aprenda onde vender, como precificar e como transformar suas peças em renda extra.',
    value: 59.00,
  },
  { 
    imageUrl: 'https://kdloteojnkcjblhoirea.supabase.co/storage/v1/object/public/public-files/0.7076374826659633.png',
    title: 'BÔNUS 6 — Certificado de Conclusão',
    description: 'Receba um certificado oficial ao finalizar o curso, comprovando seu aprendizado e valorizando seu trabalho.',
    value: 37.00,
  },
];

export const Bonuses = () => {
  return (
    <section id="bonuses" className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {bonuses.map((bonus, index) => (
                <div key={index} className="flex flex-col text-center items-center p-4">
                    <Image src={bonus.imageUrl} alt={bonus.title} width={150} height={150} className="rounded-lg shadow-md mb-4" />
                    <p className="font-bold text-gray-800">{bonus.title}</p>
                    <p className="text-sm text-gray-600 mt-2">{bonus.description}</p>
                    <p className="mt-2 text-gray-500 line-through">Valor: R$ {bonus.value.toFixed(2)}</p>
                    <p className="font-bold text-primary">Só hoje: GRÁTIS</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-primary text-white rounded-xl p-8 text-center shadow-lg">
            <p className="font-semibold text-lg">🎉 TOTAL EM BÔNUS:</p>
            <p className="text-5xl font-bold my-2">R$ 250.00</p>
            <p className="text-lg font-semibold">💥 Você paga:</p>
            <p className="text-6xl font-bold text-yellow-300 my-4">R$ 0</p>
            <p className="bg-white text-primary font-bold rounded-full px-4 py-2 inline-block">Somente hoje</p>
          </div>
        </div>
        <div className="mt-12 text-center">
            <p className="text-xl font-bold text-gray-800" style={{ fontFamily: "'Poppins', sans-serif" }}>🔥 Oferta Disponível Apenas Hoje!</p>
            <p className="mt-2 text-2xl md:text-3xl font-bold text-primary" style={{ fontFamily: "'Poppins', sans-serif" }}>
                📘 Curso Resina Epóxi do Zero + 🎁 Todos os 6 Bônus Exclusivos GRÁTIS
            </p>
            <div className="mt-8 flex justify-center">
                <Image 
                    src="https://kdloteojnkcjblhoirea.supabase.co/storage/v1/object/public/public-files/0.9400414610218671.png"
                    alt="Oferta especial"
                    width={600}
                    height={300}
                    className="rounded-lg shadow-lg"
                />
            </div>
        </div>
      </div>
    </section>
  );
};
