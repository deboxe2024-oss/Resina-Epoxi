import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Mariana Silva',
    rating: 5,
    comment: 'O curso superou todas as minhas expectativas! A didática é incrível e o suporte faz toda a diferença. Já estou vendendo minhas primeiras peças!',
  },
  {
    name: 'João Pedro',
    rating: 5,
    comment: 'Nunca imaginei que seria capaz de criar peças tão bonitas. O passo a passo é muito claro e fácil de seguir. Recomendo de olhos fechados!',
  },
  {
    name: 'Ana Clara',
    rating: 5,
    comment: 'Estava procurando uma forma de relaxar e acabei descobrindo uma nova paixão e uma fonte de renda. O curso Resina Master é transformador.',
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-accent fill-accent' : 'text-muted-foreground/50'}`}
      />
    ))}
  </div>
);

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-secondary/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="testimonials-heading" className="font-headline text-3xl sm:text-4xl font-bold text-primary">
            Veja o que nossos alunos estão dizendo
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A satisfação de quem confia em nosso método é a nossa maior recompensa.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col shadow-lg">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <p className="font-bold text-lg">{testimonial.name}</p>
                  <StarRating rating={testimonial.rating} />
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground italic">"{testimonial.comment}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
