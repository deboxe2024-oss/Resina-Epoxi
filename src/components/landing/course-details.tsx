import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { getImage } from '@/lib/placeholder-images';

export const CourseDetails = () => {
    const learnItems = [
        "Técnicas de desidratação de flores e folhas (prensagem).",
        "Como preparar a resina sem risco de erro.",
        "Aplicar camadas de resina de forma simples, criando peças brilhantes e transparentes sem lixar e polir.",
    ];

    const courseIncludes = [
        "5 horas de vídeo-aulas práticas.",
        "Apostilas ilustradas (PDF).",
        "Suporte direto com os professores para tirar dúvidas.",
        "Assista quando quiser, no seu tempo.",
    ];

    const finalPieces = [
        getImage('final-piece-1'),
        getImage('final-piece-2'),
        getImage('final-piece-3'),
        getImage('final-piece-4'),
    ]

  return (
    <section id="details" className="py-12 lg:py-24 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mb-10">
            O que exatamente você irá aprender?
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            {learnItems.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">{item}</p>
              </div>
            ))}
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                <p className='text-center text-lg font-semibold text-gray-800 mb-4'>Veja o vídeo com a explicação detalhada das aulas do curso:</p>
                <div className='aspect-video rounded-lg overflow-hidden'>
                     <video 
                        src="https://firebasestorage.googleapis.com/v0/b/studio-9a7a7.appspot.com/o/courses%2Fjoias-botanicas%2Fvideo-aulas.mp4?alt=media"
                        controls 
                        className="w-full h-full object-cover"
                        />
                </div>
            </div>
            <div className="space-y-4 mt-8">
                {courseIncludes.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <p className="text-md text-gray-700">{item}</p>
                    </div>
                ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-center text-gray-800 mb-6">
              Esses são alguns exemplos de joias botânicas que criamos do zero até o final do curso:
            </h3>
            <div className="grid grid-cols-2 gap-4">
                {finalPieces.map((image, index) => image && (
                    <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                        <Image 
                            src={image.imageUrl}
                            alt={image.description}
                            width={300}
                            height={300}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
             <div className="mt-8 text-center bg-white p-6 rounded-lg shadow-lg border border-primary/20">
                <h3 className="text-2xl font-bold text-primary mb-2">Comece a aprender agora mesmo: acesso imediato!</h3>
                <p className="text-gray-600">Assim que você se matricular no curso, terá acesso imediato a todo o conteúdo.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
