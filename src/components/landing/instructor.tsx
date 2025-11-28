import React from 'react';
import Image from 'next/image';

export const Instructor = () => {
  return (
    <section id="instructor" className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/3 flex justify-center">
            <Image
              src="https://resinaemcasa.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofessora.67a57a12.png&w=640&q=75"
              alt="Vanessa Carvalho, Instrutora"
              width={300}
              height={300}
              className="rounded-full object-cover aspect-square shadow-lg"
            />
          </div>
          <div className="w-full lg:w-2/3 text-center lg:text-left">
            <h2 className="text-sm font-bold uppercase tracking-wider text-primary">👩‍🏫 Instrutora Responsável</h2>
            <p className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Vanessa Carvalho
            </p>
            <p className="mt-1 text-lg font-medium text-gray-500">Especialista em Resina Epóxi & Artesanato Moderno</p>
            <div className="mt-6 text-gray-700 space-y-4 text-base">
              <p>
                Vanessa atua no artesanato há mais de 10 anos, começando desde jovem ao lado de familiares que trabalhavam com peças decorativas manuais.
              </p>
              <p>
                Nos últimos anos, já ajudou mais de 3.000 alunos a aprenderem resina do zero, criando peças incríveis — desde pingentes até luminárias sofisticadas.
              </p>
              <p>
                Sua didática simples e prática permite que qualquer pessoa, mesmo quem nunca pegou em resina antes, consiga aprender rapidamente e criar peças profissionais.
              </p>
               <p>
                No curso, Vanessa revela todas as técnicas, segredos, erros que você deve evitar e truques de economia, guiando você do início até o acabamento final de cada peça.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
