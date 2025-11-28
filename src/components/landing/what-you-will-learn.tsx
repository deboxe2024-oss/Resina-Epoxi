"use client";
import React from 'react';
import Image from 'next/image';
import { Bot, Package, Droplets, Palette, Zap, Gem, Sparkles, Gift, Star, DollarSign, Camera, BarChart } from 'lucide-react';

const learnItemsPart1 = [
  {
    icon: <Bot className="w-6 h-6 text-primary" />,
    title: "Começar do zero",
    description: "Como usar resina epóxi mesmo sem experiência.",
  },
  {
    icon: <Package className="w-6 h-6 text-primary" />,
    title: "Materiais certos",
    description: "O que comprar, o que evitar e como montar seu mini ateliê gastando pouco.",
  },
  {
    icon: <Droplets className="w-6 h-6 text-primary" />,
    title: "Mistura perfeita",
    description: "Proporção correta para evitar peças moles, pegajosas ou mal curadas.",
  },
];

const images1 = [
    {
        src: "https://resinaemcasa.netlify.app/_next/image?url=https%3A%2F%2Fkdloteojnkcjblhoirea.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fpublic-files%2F0.6787677202376466.jpg&w=2048&q=75",
        alt: "Resin art necklaces"
    },
    {
        src: "https://resinaemcasa.netlify.app/_next/image?url=https%3A%2F%2Fkdloteojnkcjblhoirea.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fpublic-files%2F0.14428733524604598.jpg&w=2048&q=75",
        alt: "Resin art lamp"
    },
    {
        src: "https://resinaemcasa.netlify.app/_next/image?url=https%3A%2F%2Fkdloteojnkcjblhoirea.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fpublic-files%2F0.4228239060173956.jpg&w=2048&q=75",
        alt: "Resin art keychains"
    }
]

const learnItemsPart2 = [
  {
    icon: <Palette className="w-6 h-6 text-primary" />,
    title: "Colorir a resina",
    description: "Pigmentos, glitter e pós metálicos para criar cores lindas e profissionais.",
  },
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: "Zero bolhas",
    description: "Técnicas simples para eliminar bolhas e deixar a peça lisa e cristalina.",
  },
  {
    icon: <Gem className="w-6 h-6 text-primary" />,
    title: "Moldes sem danos",
    description: "Como usar e conservar moldes sem rasgar ou grudar.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-primary" />,
    title: "Efeitos incríveis",
    description: "Swirl, degradê, camadas e profundidade.",
  },
  {
    icon: <Gift className="w-6 h-6 text-primary" />,
    title: "Inclusão de objetos",
    description: "Flores, fotos, glitter, madeira e mini elementos dentro da resina.",
  },
];

const images2 = [
    {
        src: "https://resinaemcasa.netlify.app/_next/image?url=https%3A%2F%2Fkdloteojnkcjblhoirea.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fpublic-files%2F0.9469273642130308.jpg&w=2048&q=75",
        alt: "Resin art lamp with flowers"
    },
    {
        src: "https://resinaemcasa.netlify.app/_next/image?url=https%3A%2F%2Fkdloteojnkcjblhoirea.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fpublic-files%2F0.5062421864143695.jpg&w=2048&q=75",
        alt: "Blue and white resin geode art"
    },
    {
        src: "https://resinaemcasa.netlify.app/_next/image?url=https%3A%2F%2Fkdloteojnkcjblhoirea.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fpublic-files%2F0.02168658949314306.jpg&w=2048&q=75",
        alt: "Resin pendant with wolf silhouette"
    }
]

const learnItemsPart3 = [
    {
        icon: <Star className="w-6 h-6 text-primary" />,
        title: "Desmoldar corretamente",
        description: "Como tirar as peças do molde sem quebrar ou arranhar."
    },
    {
        icon: <Sparkles className="w-6 h-6 text-primary" />,
        title: "Acabamento brilhante",
        description: "Lixar, polir e selar para dar brilho de vidro."
    },
    {
        icon: <Gem className="w-6 h-6 text-primary" />,
        title: "Peças completas",
        description: "Joias, chaveiros, porta-copos, luminárias, geodos e muito mais."
    },
     {
        icon: <DollarSign className="w-6 h-6 text-primary" />,
        title: "Economizar até 80%",
        description: "Dicas para reduzir custo e aumentar o lucro nas vendas."
    },
    {
        icon: <Camera className="w-6 h-6 text-primary" />,
        title: "Fotografar para vender",
        description: "Tire fotos lindas usando só o celular."
    },
    {
        icon: <BarChart className="w-6 h-6 text-primary" />,
        title: "Estratégias de venda",
        description: "Onde vender, como precificar e transformar o hobby em renda extra."
    },
]


export const WhatYouWillLearn = () => {
  return (
    <section id="learn" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
            O Que Você Vai Aprender
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {learnItemsPart1.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">{item.icon}</div>
              <div>
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {images1.map((image, index) => (
                <div key={index} className="rounded-lg overflow-hidden">
                    <Image
                        src={image.src}
                        alt={image.alt}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="space-y-6">
            {learnItemsPart2.slice(0, 3).map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">{item.icon}</div>
                <div>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                </div>
                </div>
            ))}
          </div>
          <div className="space-y-6">
            {learnItemsPart2.slice(3).map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">{item.icon}</div>
                <div>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                </div>
                </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {images2.map((image, index) => (
                <div key={index} className="rounded-lg overflow-hidden">
                    <Image
                        src={image.src}
                        alt={image.alt}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {learnItemsPart3.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">{item.icon}</div>
              <div>
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
