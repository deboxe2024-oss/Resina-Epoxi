"use client";
import React from 'react';
import { Package, Leaf, Gem, Sparkles, DollarSign, Camera } from 'lucide-react';
import Image from 'next/image';

const learnItems = [
  {
    icon: <Package className="w-8 h-8 text-rose-500" />,
    title: "Materiais e Ferramentas",
    description: "Lista completa do que você precisa para começar sem gastar muito.",
  },
  {
    icon: <Leaf className="w-8 h-8 text-rose-500" />,
    title: "Coleta e Preparação",
    description: "Como selecionar, secar e preparar flores e folhas para encapsular.",
  },
  {
    icon: <Gem className="w-8 h-8 text-rose-500" />,
    title: "Técnicas de Resina",
    description: "A mistura perfeita, como evitar bolhas e obter um acabamento cristalino.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-rose-500" />,
    title: "Montagem e Acabamento",
    description: "Como transformar suas peças em brincos, colares e pingentes profissionais.",
  },
  {
    icon: <DollarSign className="w-8 h-8 text-rose-500" />,
    title: "Precificação e Vendas",
    description: "Como calcular o valor das suas jóias e onde vender para lucrar.",
  },
  {
    icon: <Camera className="w-8 h-8 text-rose-500" />,
    title: "Fotos que Vendem",
    description: "Dicas para tirar fotos incríveis das suas peças usando apenas o seu celular.",
  },
]

export const WhatYouWillLearn = () => {
  return (
    <section id="learn" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
                <p className="font-bold text-rose-500">O QUE VOCÊ VAI APRENDER</p>
                <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 font-serif">
                    O Passo a Passo Completo Para Criar Jóias Botânicas
                </h2>
                <div className="mt-8 space-y-6">
                    {learnItems.map((item, index) => (
                        <div key={index} className="flex items-start space-x-4">
                            <div className="flex-shrink-0 bg-rose-100 rounded-full p-3">{item.icon}</div>
                            <div>
                                <h3 className="font-bold text-lg text-gray-800">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <Image src="https://joiasbotanicas.com.br/passo-a-passo/wp-content/uploads/2024/07/img1-1.png" alt="Jóia de resina 1" width={300} height={400} className="rounded-lg shadow-lg object-cover w-full h-full transform hover:scale-105 transition-transform" />
                <Image src="https://joiasbotanicas.com.br/passo-a-passo/wp-content/uploads/2024/07/img2-1.png" alt="Jóia de resina 2" width={300} height={400} className="rounded-lg shadow-lg object-cover w-full h-full transform hover:scale-105 transition-transform" />
                <Image src="https://joiasbotanicas.com.br/passo-a-passo/wp-content/uploads/2024/07/img3-1.png" alt="Jóia de resina 3" width={300} height={400} className="rounded-lg shadow-lg object-cover w-full h-full transform hover:scale-105 transition-transform" />
                <Image src="https://joiasbotanicas.com.br/passo-a-passo/wp-content/uploads/2024/07/img4-1.png" alt="Jóia de resina 4" width={300} height={400} className="rounded-lg shadow-lg object-cover w-full h-full transform hover:scale-105 transition-transform" />
            </div>
        </div>
      </div>
    </section>
  );
};
