"use client";
import { handlePurchase } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const WhyBuyToday = () => {
  return (
    <section className="py-10 px-5">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Por Que Comprar Agora?
        </h2>

        <ul className="max-w-3xl mx-auto mt-5 text-lg leading-relaxed space-y-2 text-left">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✔</span>
            <span>
              Você vai parar de desperdiçar resina tentando sozinho(a) sem
              saber o que está fazendo.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✔</span>
            <span>
              Vai economizar tempo aprendendo técnicas que funcionam de
              verdade.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✔</span>
            <span>
              Vai começar a produzir peças lindas que vendem — mesmo sendo
              iniciante.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✔</span>
            <span>
              Vai poder faturar R$ 300 a R$ 1.200 por mês apenas com encomendas
              simples.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✔</span>
            <span>
              Vai ter acesso a um método testado que evita erros e acelera
              resultados.
            </span>
          </li>
        </ul>

        <div className="text-center mt-8">
          <Button
            asChild
            size="lg"
            onClick={handlePurchase}
            className="bg-green-500 hover:bg-green-600 h-auto py-4 px-10 text-xl font-extrabold rounded-lg text-white"
          >
            <a href="https://pay.kirvano.com/0b5d35b6-1af5-43b0-bed7-9640d6f5569f">QUERO COMEÇAR AGORA</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
