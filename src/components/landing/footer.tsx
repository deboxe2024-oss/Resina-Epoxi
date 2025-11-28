import React from 'react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-gray-900 text-gray-400">
      <div className="container text-center text-sm">
        <p>&copy; {currentYear} Resina Master. Todos os direitos reservados.</p>
        <p className="mt-2">Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site.</p>
      </div>
    </footer>
  );
};
