import { DollarSign, Smile, Leaf, Users } from 'lucide-react';

const achievements = [
    {
        icon: DollarSign,
        title: "Fonte de renda!",
        description: "Nós começamos este trabalho como um hobby e em apenas 5 meses se tornou nossa fonte de renda principal. Mudamos de carreira e hoje vivemos exclusivamente das vendas de joias botânicas!"
    },
    {
        icon: Smile,
        title: "Terapia criativa",
        description: "Alivie o estresse e descubra um novo propósito."
    },
    {
        icon: Leaf,
        title: "Contato com a naturezas",
        description: "Trabalhe com plantas e melhore seu humor."
    },
    {
        icon: Users,
        title: "Conheça pessoas novas",
        description: "Se desafie participando de feiras na sua cidade."
    }
]

export const Achievements = () => {
    return (
        <section className="py-12 lg:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mb-6">
                        O que as joias botânicas podem te ajudar a conquistar:
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
                    {achievements.map((item, index) => (
                        <div key={index} className="flex items-start gap-6 p-6 bg-accent rounded-lg shadow-sm">
                            <div className="flex-shrink-0">
                                <item.icon className="w-10 h-10 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
