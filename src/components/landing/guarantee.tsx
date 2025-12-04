"use client";
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { handlePurchase } from '@/lib/utils';

export const Guarantee = () => {
  return (
    <section id="guarantee" className="py-16 sm:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 text-center lg:text-left">
          <div className="flex-shrink-0">
            <Image
              src="https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.07022505416642577.png"
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
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                asChild
                size="lg"
                onClick={handlePurchase}
                className="h-14 px-8 text-lg font-bold bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                >
                <a href="https://pay.kirvano.com/0b5d35b6-1af5-43b0-bed7-9640d6f5569f">
                    QUERO ACESSAR AGORA
                </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 text-lg font-bold bg-transparent hover:bg-white/10 text-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                >
                  <a href="#student-results">
                    Resultado de nossas Alunas
                  </a>
                </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
