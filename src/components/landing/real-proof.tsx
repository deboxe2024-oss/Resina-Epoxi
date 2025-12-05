import Image from 'next/image';
import { Check } from 'lucide-react';
import { getImage } from '@/lib/placeholder-images';

const proofPoints = [
    "Empresa real e registrada, com CNPJ, emissão de nota fiscal e presença em feiras e eventos presenciais.",
    "Suporte direto: você fala com a gente (Isabelle e Samuel) para tirar suas dúvidas.",
    "Garantia incondicional de 7 dias – se não gostar, devolvemos 100% do valor sem burocracia.",
    "Nosso trabalho já foi destaque na TV Globo Minas e na Rede Minas.",
    "Nossa empresa é bem avaliada no Google e conta com mais de 158 mil seguidores nas redes sociais (@amana.atelie)",
    "Hospedagem segura: o curso está disponível na Hotmart, a maior plataforma de cursos online do mundo."
]

export const RealProof = () => {
    const tvImage = getImage('tv-globo-minas');
    return (
        <section className="py-12 lg:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mb-4">
                        A gente entende o seu medo.
                    </h2>
                    <p className="text-lg text-gray-700 mb-10">
                        Infelizmente, existem muitos golpes na internet. Por isso, aqui estão alguns pontos que comprovam a seriedade do nosso curso:
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-4">
                        {proofPoints.map((point, index) => (
                             <div key={index} className="flex items-start gap-3">
                                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                                <p className="text-gray-700">{point}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center">
                        <div className="relative w-full max-w-md group">
                            {tvImage &&
                                <Image
                                    src={tvImage.imageUrl}
                                    alt={tvImage.description}
                                    width={500}
                                    height={300}
                                    className="rounded-lg shadow-lg"
                                />
                            }
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center rounded-lg">
                                <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
