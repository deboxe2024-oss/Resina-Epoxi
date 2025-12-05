import Image from 'next/image';
import { getImage } from '@/lib/placeholder-images';
import { Check } from 'lucide-react';


const benefits = [
    {
        icon: Check,
        text: "Terapia criativa: alivie o estresse e descubra um novo propósito."
    },
    {
        icon: Check,
        text: "Confiança e orgulho: crie peças incríveis com suas próprias mãos."
    },
    {
        icon: Check,
        text: "Contato com a natureza: trabalhe com plantas e melhore seu humor."
    },
    {
        icon: Check,
        text: "Conheça pessoas novas: se desafie participando de feiras na sua cidade."
    }
]

export const Achievements = () => {
    const incomeImage = getImage('autonomy-image');
    const therapyImage = getImage('therapy-image');

    return (
        <section className="py-12 lg:py-24 bg-accent">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mb-6">
                        O que as joias botânicas podem te ajudar a conquistar:
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    {incomeImage && (
                        <div className="flex justify-center">
                            <Image
                                src={incomeImage.imageUrl}
                                alt={incomeImage.description}
                                width={500}
                                height={500}
                                className="rounded-lg shadow-xl w-full h-auto object-cover"
                            />
                        </div>
                    )}
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <Check className="w-7 h-7 text-primary" />
                            Autonomia financeira: trabalhe em casa, no seu ritmo (com algo sério)!
                        </h3>
                        <p className="text-gray-700 text-lg mb-4">
                            É um produto artesanal, com baixo preço de custo: com apenas 3 gramas de resina (menos de R$1,00) é possível criar um pingente pequeno com um pedacinho da natureza.
                        </p>
                        <p className="text-gray-700 text-lg">
                            Não é necessário maquinário para secar a resina.
                        </p>
                    </div>
                </div>

                 <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-4 order-last md:order-first">
                         {benefits.map((item, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <item.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                <p className="text-lg text-gray-700">{item.text}</p>
                            </div>
                        ))}
                    </div>
                    {therapyImage && (
                        <div className="flex justify-center">
                            <Image
                                src={therapyImage.imageUrl}
                                alt={therapyImage.description}
                                width={500}
                                height={500}
                                className="rounded-lg shadow-xl w-full h-auto object-cover"
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
