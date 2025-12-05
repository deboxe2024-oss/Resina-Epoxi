import { Button } from '@/components/ui/button';

export const Pricing = () => {
  return (
    <section id="pricing" className="py-12 lg:py-24 bg-white">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mb-4">
          Comece agora seu novo projeto de vida!
        </h2>

        <div className="my-8">
            <p className="text-5xl lg:text-6xl font-black text-gray-800">12x de R$ 15,41</p>
            <p className="text-2xl text-gray-600 mt-2">ou R$149,00 à vista</p>
        </div>

        <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-2xl py-8 px-12 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
          <a href="#">
            Quero me inscrever
          </a>
        </Button>
      </div>
    </section>
  );
};
