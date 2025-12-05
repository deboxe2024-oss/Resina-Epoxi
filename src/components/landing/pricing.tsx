"use client";
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Lock } from 'lucide-react';
import Image from 'next/image';

export const Pricing = () => {
    const handlePurchase = () => {
        window.fbq?.('track', 'Purchase', {value: 97.00, currency: 'BRL'});
    };

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-rose-50/50">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-serif">
                Garanta sua Vaga na Condição Especial de Lançamento
            </h2>
            <p className="mt-4 text-lg text-gray-600">
                Acesso imediato ao curso completo + todos os bônus por um preço que cabe no seu bolso. Mas corra, porque esta oferta é por tempo limitado!
            </p>
        </div>

        <div 
            className="mt-10 max-w-md mx-auto bg-white rounded-2xl shadow-2xl border-2 border-rose-500 overflow-hidden"
        >
            <div className="p-8 relative">
                <p className="font-bold text-gray-500 uppercase tracking-wider">Oferta de Lançamento</p>
                <div className='my-4'>
                    <span className="text-xl text-gray-500 line-through">De R$ 297,00</span>
                    <p className="text-sm font-bold uppercase text-rose-500">Por apenas 12x de</p>
                </div>

                <div className="my-2">
                  <span className="text-6xl md:text-7xl font-black text-rose-500">
                     R$ 9,74
                  </span>
                </div>
                <p className="font-semibold text-gray-600">ou R$ 97,00 à vista</p>
                

                <Button
                    asChild
                    onClick={handlePurchase}
                    className="w-full h-14 text-lg font-bold bg-rose-500 hover:bg-rose-600 text-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 mt-6"
                >
                    <a href="https://pay.kiwify.com.br/gVbZ3iL">
                        QUERO GARANTIR MINHA VAGA
                    </a>
                </Button>
                <div className="mt-4 flex items-center justify-center text-sm text-gray-500">
                    <Lock className="w-4 h-4 mr-2 text-green-600"/>
                    <span>Compra 100% segura</span>
                </div>
                 <Image 
                    src="https://joiasbotanicas.com.br/passo-a-passo/wp-content/uploads/2024/07/selos.png"
                    alt="Métodos de pagamento"
                    width={300}
                    height={50}
                    className="mx-auto mt-4"
                 />
            </div>
        </div>
      </div>
    </section>
  );
};
