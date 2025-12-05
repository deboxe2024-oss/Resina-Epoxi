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
    const detailsImage = getImage('what-you-will-learn-side-image');

  return (
    <section id="details" className="py-12 lg:py-24 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mb-10">
            O que exatamente você irá aprender?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {generalBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <CircleCheckBig className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
          <div>
            {detailsImage && (
                <Image
                    src={detailsImage.imageUrl}
                    alt={detailsImage.description}
                    width={500}
                    height={500}
                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
            )}
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
