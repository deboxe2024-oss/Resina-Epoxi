"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { handlePurchase } from "@/lib/utils";

const testimonials = [
  {
    name: "Fernanda M.",
    text: "“Eu nunca tinha mexido com resina, mas já na primeira semana fiz essa peça da foto! Vendi 6 unidades por R$ 35 cada e recuperei o valor do curso no mesmo dia!”",
    imageSrc: "https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.07542055012686255.png",
    imageHint: "resin art piece",
  },
  {
    name: "Camila L.",
    text: "“O curso mudou a minha vida. Nunca imaginei que aprenderia tão rápido. Estou muito feliz!”",
    imageSrc: "https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.1179219706373561.png",
    imageHint: "resin keychains",
  },
  {
    name: "Nélio M.",
    text: "“Tentava aprender sozinho e errava tudo. O curso me fez acertar minhas primeiras peças!”",
    imageSrc: "https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.8394377842172932.png",
    imageHint: "resin coasters",
  },
];

export const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-10 px-5 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-extrabold mb-2.5 text-gray-900">
          Resultados Reais de Alunas do Curso
        </h2>
        <p className="text-center text-lg mb-10 max-w-3xl mx-auto text-gray-600">
          Mulheres comuns, sem nenhuma experiência, criando peças incríveis em poucos dias — e muitas já fazem renda extra!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-5 flex flex-col"
            >
              <div className="relative w-full mb-4">
                <Image
                  src={testimonial.imageSrc}
                  alt={`Resultado da aluna ${testimonial.name}`}
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-auto"
                  data-ai-hint={testimonial.imageHint}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800">
                {testimonial.name}
              </h3>
              <p className="text-base text-gray-600 mt-2 flex-grow">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button
            asChild
            size="lg"
            onClick={handlePurchase}
            className="bg-orange-500 hover:bg-orange-600 h-auto py-4 px-10 text-xl font-extrabold rounded-lg text-white"
          >
            <a href="https://pay.kirvano.com/0b5d35b6-1af5-43b0-bed7-9640d6f5569f">QUERO TER RESULTADOS COMO ESSAS ALUNAS</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
