import React from 'react';
import { Logo } from './logo';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4 text-center">
        <Logo />
        <p className="mt-4 text-sm">&copy; {currentYear} Jóias Botânicas. Todos os direitos reservados.</p>
        <p className="mt-4 text-xs max-w-2xl mx-auto">
          Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site. Nós fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usamos resultados reais.
        </p>
      </div>
    </footer>
  );
};
