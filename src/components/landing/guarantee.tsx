"use client";
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export const Guarantee = () => {
  const handlePurchase = () => {
    window.fbq?.('track', 'Purchase', {value: 97.00, currency: 'BRL'});
  };

  return (
    <section id="guarantee" className="py-16 sm:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 text-center lg:text-left">
          <div className="flex-shrink-0">
            <Image
              src="https://joiasbotanicas.com.br/passo-a-passo/wp-content/uploads/2024/07/garantia.png"
              alt="Selo de Garantia de 7 dias"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <div className="max-w-2xl">
            <h2 id="guarantee-heading" className="text-3xl sm:text-4xl font-bold font-serif">
              Sua Satisfação ou Seu Dinheiro de Volta
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Você tem 7 dias para explorar todo o conteúdo do curso. Se por qualquer motivo você não ficar 100% satisfeita, basta enviar um e-mail e nós devolveremos todo o seu investimento. Sem perguntas, sem burocracia. O risco é todo nosso.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  onClick={handlePurchase}
                  className="h-14 px-8 text-lg font-bold bg-rose-500 hover:bg-rose-600 text-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                >
                  <a href="https://pay.kiwify.com.br/gVbZ3iL">
                    QUERO COMEÇAR COM RISCO ZERO
                  </a>
                </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
