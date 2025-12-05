import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { CircleCheckBig } from 'lucide-react';
import { getImage } from '@/lib/placeholder-images';

const generalBenefits = [
  'Técnicas de desidratação de flores e folhas (prensagem).',
  'Como preparar a resina sem risco de erro.',
  'Aplicar camadas de resina de forma simples, criando peças brilhantes e transparentes sem lixar e polir.',
];

const videoBenefits = [
    '5 horas de vídeo-aulas práticas.',
    'Apostilas ilustradas (PDF).',
    'Suporte direto com os professores para tirar dúvidas.',
    'Assista quando quiser, no seu tempo.',
]

const courseModules = [
  {
    title: 'Introdução',
    items: [
      'Introdução',
      'Materiais e espaço de trabalho',
      'Resina: como funciona e como preparar',
      'Materiais de apoio para donwload e lista de fornecedores',
      'Como saber a quantidade de resina em cada etapa?',
    ],
  },
  {
    title: 'Módulo 01',
    items: [
      'Introdução à desidratação das plantas',
      'Passo a passo: produção da prensa botânica',
      'Desidratação de plantas no microondas + prensa botânica (Exemplo: Arruda)',
      'Desidratação na prensa botânica (Exemplo: Gipso)',
      'Materiais simples que irão melhorar os resultados da desidratação das plantas na prensa botânica',
      'Desidratação de plantas com miolo alto (exemplo: Girassol)',
      'Dica rápida: Desidratação do dente de leão',
      'Armazenamento de plantas desidratadas',
    ],
  },
  {
    title: 'Módulo 02',
    items: [
      'ETAPA 1: Preparação das plantas',
      'ETAPA 2: Protocolo de imobilização',
      'ETAPA 3: Aplicação da camada central de resina',
      'ETAPA 4: Correção das imperfeições e preparação para a próxima camada de resina',
      'ETAPA 5: Criando a superfície frontal da joia',
      'ETAPA 6: Análise das peças e preparação para próxima etapa',
      'ETAPA 7: Criação da superfície traseira da joia com resina pigmentada e transparente',
      'ETAPA 8: Análise final das peças',
      'ETAPA EXTRA: Correção de peças defeituosas',
      'ETAPA 9: Furo e limpeza',
      'ETAPA 10: Montagem das joias botânicas',
    ],
  },
  {
    title: 'Aulas bônus',
    items: [
      'Dicas para vender joias botânicas – Relato de experiência da Amana Ateliê',
      'Passo a passo: brinco de mini girassol',
      'Cronograma de produção das joias botânicas',
      'Rotina de produção – duas semanas na Amana Ateliê',
      'Produção de colares para convite de madrinhas de casamento',
      'Mega encomenda para uma grande empresa: 300 colares em 15 dias',
      'Produção para feira mística: Colares de pedras com plantas',
    ],
  },
];

export const CourseDetails = () => {
    const finalPieceImages = [
        getImage('final-piece-1'),
        getImage('final-piece-2'),
        getImage('final-piece-3'),
        getImage('final-piece-4'),
    ].filter(Boolean);

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
            {generalBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <CircleCheckBig className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">{benefit}</p>
              </div>
            ))}
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                <p className="text-center text-lg font-semibold text-gray-800 mb-4">
                    Veja o vídeo com a explicação detalhada das aulas do curso:
                </p>
                <div className="aspect-video rounded-lg overflow-hidden">
                    <video
                        src="https://firebasestorage.googleapis.com/v0/b/studio-9a7a7.appspot.com/o/courses%2Fjoias-botanicas%2Fvideo-aulas.mp4?alt=media"
                        controls
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
            <div className="space-y-4 mt-8">
                {videoBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-4">
                        <CircleCheckBig className="w-5 h-5 text-primary flex-shrink-0" />
                        <p className="text-md text-gray-700">{benefit}</p>
                    </div>
                ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-center text-gray-800 mb-6">
                Esses são alguns exemplos de joias botânicas que criamos do zero até o final do curso:
            </h3>
            <div className="grid grid-cols-2 gap-4">
                {finalPieceImages.map((image, index) => (
                    <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src={image!.imageUrl}
                            alt={image!.description}
                            width={300}
                            height={300}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
            <div className="mt-8 text-center bg-white p-6 rounded-lg shadow-lg border border-primary/20">
                <h3 className="text-2xl font-bold text-primary mb-2">
                    Comece a aprender agora mesmo: acesso imediato!
                </h3>
                <p className="text-gray-600">
                    Assim que você se matricular no curso, terá acesso imediato a todo o conteúdo.
                </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16">
            <h3 className="text-2xl font-bold text-primary text-center mb-6">
                Clique nos tópicos para conhecer todas as aulas.
            </h3>
            <Accordion type="single" collapsible className="w-full">
                {courseModules.map((module, index) => (
                    <AccordionItem key={index} value={`item-${index + 1}`} className="bg-white rounded-lg shadow-sm mb-4 px-6">
                        <AccordionTrigger className="text-lg font-semibold text-left hover:text-primary data-[state=open]:text-primary">
                            {module.title}
                        </AccordionTrigger>
                        <AccordionContent className="pt-2 pb-4">
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                {module.items.map((item, itemIndex) => (
                                    <li key={itemIndex}>{item}</li>
                                ))}
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
      </div>
    </section>
  );
};
