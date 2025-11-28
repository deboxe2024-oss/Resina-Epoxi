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
    question: "Quando recebo o curso e os bônus?",
    answer: "O acesso é imediato após a confirmação do pagamento. Você receberá um e-mail com todas as instruções para acessar a plataforma do curso e todos os bônus."
  },
  {
    question: "Onde posso comprar resina e materiais na minha cidade?",
    answer: "No bônus 'Lista de Fornecedores', você encontrará uma lista completa com os melhores e mais baratos fornecedores de todo o Brasil, muitos dos quais vendem online e entregam em sua casa."
  },
  {
    question: "Como posso assistir ao curso digital?",
    answer: "Você pode assistir às aulas em qualquer dispositivo com acesso à internet: celular, tablet, computador ou smart TV. O acesso é vitalício, então você pode ver e rever as aulas quantas vezes quiser."
  },
  {
    question: "Existe suporte para dúvidas?",
    answer: "Sim! Você terá suporte diretamente com a professora para tirar todas as suas dúvidas durante o curso, garantindo que você não fique travado em nenhuma etapa."
  },
  {
    question: "Qual é o preço?",
    answer: "O curso completo com todos os bônus está com uma oferta especial de lançamento por apenas R$ 29,90. Este é um pagamento único, sem mensalidades."
  }
];

export const Faq = () => {
  return (
    <section id="faq" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
            ❓ Perguntas Frequentes
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full mt-10">
          {faqItems.map((item, index) => (
            <AccordionItem value={`item-${index+1}`} key={index}>
              <AccordionTrigger className="text-lg font-semibold text-left">{item.question}</AccordionTrigger>
              <AccordionContent className="text-base text-gray-700">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
            asChild
            size="lg"
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
              className="h-14 px-8 text-lg font-bold rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <a href="#student-results">
                Resultado de nossas Alunas
              </a>
            </Button>
        </div>
      </div>
    </section>
  );
};
