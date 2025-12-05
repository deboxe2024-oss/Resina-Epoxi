import Image from 'next/image';
import { getImage } from '@/lib/placeholder-images';

export const DigitalBooks = () => {
  const manualImage = getImage('manual-joias');
  const guiaImage = getImage('guia-23-problemas');

  return (
    <section className="py-12 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-primary">
            Além de todo o conteúdo em vídeo, você também irá receber nossos livros digitais!
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">MANUAL DE JOIAS BOTÂNICAS</h3>
                <p className="text-gray-600 mb-6 text-lg">
                    O manual é nosso livro digital com todo o conteúdo teórico para ampliar seu conhecimento na técnica. Leia no celular, computador ou imprima!
                </p>
                <p className="text-gray-600 text-lg">
                    Com este conhecimento, será possível replicar as peças que ensinamos e também criar modelos com outras plantas, com diferentes tamanhos e formatos.
                </p>
            </div>
            <div className="flex justify-center">
                {manualImage && (
                    <Image
                        src={manualImage.imageUrl}
                        alt={manualImage.description}
                        width={500}
                        height={500}
                        className="rounded-lg shadow-lg"
                    />
                )}
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
            <div className="flex justify-center md:order-last">
                {guiaImage && (
                     <Image
                        src={guiaImage.imageUrl}
                        alt={guiaImage.description}
                        width={500}
                        height={500}
                        className="rounded-lg shadow-lg"
                    />
                )}
            </div>
            <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">GUIA "23 PROBLEMAS DOS INICIANTES"</h3>
                <p className="text-gray-600 text-lg">
                    Todos os iniciantes cometem os mesmos erros: Bolhas, resina mole, peças tortas, plantas enrugadas… Após 3 anos ensinando a técnica, reunimos os 23 principais erros mais comuns e mostramos como evitá-los.
                </p>
            </div>
        </div>

      </div>
    </section>
  );
};
