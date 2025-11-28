import { UserCheck } from 'lucide-react';
import React from 'react';

const audienceItems = [
  "Para homens e mulheres, mesmo sem nenhuma experiência, que querem aprender a criar peças lindas em resina epóxi para decorar sua casa ou presentear alguém especial.",
  "Para quem deseja começar um negócio lucrativo, trabalhando de casa e ganhando uma renda extra com artesanato moderno e muito procurado.",
  "Para artesãos iniciantes ou avançados, que desejam atualizar seu trabalho, aprender novas técnicas ou adicionar produtos de alto valor ao catálogo.",
  "Para quem sempre admirou peças de resina e achou que fosse difícil, mas agora quer aprender de forma simples, prática e rápida."
];

export const TargetAudience = () => {
  return (
    <section id="target-audience" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="target-audience-heading" className="text-3xl sm:text-4xl font-bold text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
            🎯 Para quem é este curso?
          </h2>
        </div>

        <div className="mt-12 max-w-4xl mx-auto space-y-6">
          {audienceItems.map((item, index) => (
            <div key={index} className="flex items-start p-6 bg-gray-50 rounded-lg shadow-sm">
              <UserCheck className="w-8 h-8 text-primary mr-4 mt-1 flex-shrink-0" />
              <p className="text-lg text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
