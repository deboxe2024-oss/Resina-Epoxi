import React from 'react';
import { Logo } from './logo';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

export const Header = () => {
  return (
    <header className={cn('sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60')}>
      <div className="container flex h-20 items-center justify-between">
        <Logo />
        <nav className="hidden md:flex gap-6 items-center">
            <a href="#details" className="text-sm font-medium hover:text-primary transition-colors">O Curso</a>
            <a href="#student-work" className="text-sm font-medium hover:text-primary transition-colors">Depoimentos</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">Quem Somos</a>
            <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">Dúvidas</a>
        </nav>
        <Button asChild className='hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground font-bold'>
            <a href="#pricing">Quero me Inscrever</a>
        </Button>
      </div>
    </header>
  );
};
