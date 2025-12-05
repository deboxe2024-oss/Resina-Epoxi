import React from 'react';
import Image from 'next/image';

export const Instructor = () => {
  return (
    <section id="instructor" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/3 flex justify-center">
            <Image
              src="https://joiasbotanicas.com.br/passo-a-passo/wp-content/uploads/2024/07/profile.png"
              alt="Fernanda Ayres, Instrutora"
              width={300}
              height={300}
              className="rounded-full object-cover aspect-square shadow-lg"
            />
          </div>
          <div className="w-full lg:w-2/3 text-center lg:text-left">
            <h2 className="text-sm font-bold uppercase tracking-wider text-rose-500">QUEM VAI TE ENSINAR</h2>
            <p className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 font-serif">
              Fernanda Ayres
            </p>
            <p className="mt-1 text-lg font-medium text-gray-500">Artesã e Especialista em Jóias Botânicas</p>
            <div className="mt-6 text-gray-700 space-y-4 text-base">
              <p>
                Apaixonada pela natureza desde criança, Fernanda Ayres encontrou na arte da resina uma forma de eternizar a beleza das flores e folhas. O que começou como um hobby rapidamente se transformou em uma paixão e, em seguida, em um negócio de sucesso.
              </p>
              <p>
                Com mais de 5 anos de experiência, Fernanda já ajudou centenas de mulheres a descobrirem seu potencial criativo e a conquistarem independência financeira através do artesanato.
              </p>
              <p>
                Sua missão é mostrar que qualquer pessoa, com a orientação certa, pode criar peças únicas e encantadoras, transformando um simples hobby em uma fonte de realização pessoal e renda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
