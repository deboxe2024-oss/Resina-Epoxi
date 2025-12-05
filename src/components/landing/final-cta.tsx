"use client";

import { Button } from "@/components/ui/button";

export const FinalCta = () => {
  const handlePurchase = () => {
    window.fbq?.('track', 'Purchase', {value: 97.00, currency: 'BRL'});
  };

  return (
    <section className="bg-rose-50/50 py-16 px-5 text-center">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold font-serif text-gray-900">
          Comece a Criar Suas Jóias Botânicas Ainda Hoje!
        </h2>
        <p className="text-xl mt-4 mb-8 text-gray-600">
          Clique no botão abaixo e garanta sua vaga na condição especial de lançamento.
        </p>
        <Button
          asChild
          size="lg"
          onClick={handlePurchase}
          className="bg-rose-500 hover:bg-rose-600 h-auto py-5 px-12 text-xl font-bold rounded-lg text-white shadow-lg transform hover:scale-105 transition-transform"
        >
          <a href="https://pay.kiwify.com.br/gVbZ3iL">
              QUERO TRANSFORMAR FOLHAS EM JÓIAS
          </a>
        </Button>
      </div>
    </section>
  );
};
