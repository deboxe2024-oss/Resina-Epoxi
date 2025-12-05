import Image from 'next/image';
import { Check } from 'lucide-react';
import { getImage } from '@/lib/placeholder-images';

const proofPoints = [
    "Empresa real e registrada, com CNPJ, emissão de nota fiscal e presença em feiras e eventos presenciais.",
    "Suporte direto: você fala com a gente (Isabelle e Samuel) para tirar suas dúvidas.",
    "Garantia incondicional de 7 dias – se não gostar, devolvemos 100% do valor sem burocracia.",
    "Nosso trabalho já foi destaque na TV Globo Minas e na Rede Minas."
]

export const RealProof = () => {
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

                <div className="flex justify-center">
                    <div className="space-y-4 max-w-2xl">
                        {proofPoints.map((point, index) => (
                             <div key={index} className="flex items-start gap-3">
                                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                                <p className="text-gray-700">{point}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
