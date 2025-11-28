import React from 'react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background border-t">
      <div className="container text-center text-muted-foreground">
        <p>&copy; {currentYear} Resina Master. Todos os direitos reservados.</p>
        <div className="mt-2 text-sm">
          <a href="#" className="hover:text-primary transition-colors px-2">Política de Privacidade</a>
          <span>&bull;</span>
          <a href="#" className="hover:text-primary transition-colors px-2">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
};
