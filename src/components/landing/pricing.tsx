import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ShieldCheck } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const paymentMethods = PlaceHolderImages.find(img => img.id === 'payment-methods');

const features = [
  "Acesso vitalício ao curso completo",
  "Suporte individual via WhatsApp",
  "Aulas 100% online para assistir quando quiser",
  "Certificado de conclusão incluso",
  "Todos os 4 bônus exclusivos",
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-background">
      <div className="container flex flex-col items-center">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="pricing-heading" className="font-headline text-3xl sm:text-4xl font-bold text-primary">
            Oferta Especial por Tempo Limitado
          </h2>
        </div>
        
        <Card className="mt-12 max-w-lg w-full shadow-2xl border-2 border-primary/50">
          <CardHeader className="text-center bg-primary/10 p-6">
            <CardDescription className="text-lg line-through">De R$ 297,00 por apenas</CardDescription>
            <CardTitle className="text-5xl font-bold text-primary !mt-2">12x de R$ 9,74</CardTitle>
            <p className="font-semibold text-lg">ou R$ 97,00 à vista</p>
          </CardHeader>
          <CardContent className="p-6 sm:p-8">
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="flex-col gap-4 px-6 sm:px-8 pb-8">
            <Button
              asChild
              size="lg"
              className="w-full h-14 text-lg font-bold bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <a href="#">
                QUERO APROVEITAR A OFERTA
              </a>
            </Button>
            <div className="flex items-center text-sm text-muted-foreground">
              <ShieldCheck className="w-4 h-4 mr-2 text-green-600"/>
              <span>Compra 100% segura e protegida.</span>
            </div>
            {paymentMethods && (
              <div className="pt-4">
                <Image
                  src={paymentMethods.imageUrl}
                  alt={paymentMethods.description}
                  data-ai-hint={paymentMethods.imageHint}
                  width={400}
                  height={50}
                  className="object-contain"
                />
              </div>
            )}
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};
