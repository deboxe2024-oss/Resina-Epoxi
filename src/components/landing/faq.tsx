"use client";

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from '@/components/ui/button';

const faqItems = [
  {
    question: "Preciso ter experiência para fazer o curso?",
    answer: "Não! O curso foi desenhado para quem está começando do absoluto zero. Vou te guiar em cada detalhe do processo."
  },
  {
    question: "Onde compro os materiais?",
    answer: "Fique tranquila! No curso, você recebe uma lista completa com os melhores fornecedores de resina, moldes e tudo o que você precisa, com os melhores preços."
  },
  {
    question: "Como vou assistir às aulas?",
    answer: "Assim que sua inscrição for confirmada, você receberá um e-mail com o link para acessar a plataforma do curso. As aulas são 100% online e você pode assistir no seu ritmo, de onde estiver."
  },
  {
    question: "Terei suporte se tiver dúvidas?",
    answer: "Sim! Você terá acesso ao nosso grupo VIP de alunas no WhatsApp para tirar todas as suas dúvidas diretamente comigo e interagir com outras artesãs."
  },
  {
    question: "Por quanto tempo terei acesso ao curso?",
    answer: "O acesso é vitalício! Você pode ver e rever as aulas quantas vezes quiser, e ainda terá acesso a todas as futuras atualizações do curso sem custo adicional."
  }
];

export const Faq = () => {
  return (
    <section id="faq" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-serif">
            Perguntas Frequentes
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full mt-10">
          {faqItems.map((item, index) => (
            <AccordionItem value={`item-${index+1}`} key={index} className="border-b border-rose-100">
              <AccordionTrigger className="text-lg font-semibold text-left hover:text-rose-600">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-700">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
