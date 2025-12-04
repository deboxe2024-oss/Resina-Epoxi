"use client";

import { Button } from "@/components/ui/button";
import { handlePurchase } from "@/lib/utils";

export const FinalCta = () => {
  return (
    <section className="text-center py-12 px-5">
      <h2 className="text-3xl font-extrabold text-gray-900">
        Pronto(a) para transformar criatividade em renda?
      </h2>
      <p className="text-xl mt-2.5 mb-8 max-w-3xl mx-auto text-gray-600">
        Clique abaixo e garanta seu acesso imediato ao curso enquanto ainda está no ar.
      </p>
      <Button
        asChild
        size="lg"
        onClick={handlePurchase}
        className="bg-orange-500 hover:bg-orange-600 h-auto py-5 px-12 text-2xl font-black rounded-xl text-white"
      >
        <a href="https://pay.kirvano.com/0b5d35b6-1af5-43b0-bed7-9640d6f5569f">
            QUERO GARANTIR MINHA VAGA AGORA
        </a>
      </Button>
    </section>
  );
};
