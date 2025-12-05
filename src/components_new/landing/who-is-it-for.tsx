import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const WhoIsItFor = () => {
    const whoIsItForItems = [
        "Pessoas que nunca trabalharam com resina e querem aprender a técnica da maneira mais didática possível para não errar.",
        "Pessoas que já trabalham com joias em resina, mas não querem lixar e polir as peças para fazer um acabamento transparente e brilhante.",
        "Pessoas que gostam de artesanato e desejam ganhar uma renda extra com um produto diferenciado.",
    ]
  return (
    <section className="py-12 lg:py-24 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mb-6">
            Ficou em dúvida se esse curso é para você?
          </h2>
          <p className="text-xl text-gray-700 mb-10">Este curso foi feito para...</p>
        </div>
        <div className="max-w-2xl mx-auto space-y-6">
            {whoIsItForItems.map((item, index) =>(
                <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md">
                    <CheckCircle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700">{item}</p>
                </div>
            ))}
        </div>
        <div className="text-center mt-12">
            <Button asChild className='bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xl py-7 px-10 rounded-lg shadow-lg transform hover:scale-105 transition-transform'>
                <a href="#pricing">Quero começar agora e ver minhas próprias conquistas</a>
            </Button>
        </div>
      </div>
    </section>
  );
};
