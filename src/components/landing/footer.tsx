import React from 'react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 text-center text-sm">
        <p>&copy; {currentYear} Amana Atelie LTDA | CNPJ: 39.382.941/0001-72. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};
