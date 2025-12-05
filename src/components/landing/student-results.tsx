import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const students = [
  {
    name: 'Ana Clara',
    imageSrc: 'https://images.unsplash.com/photo-1616091219469-640533905544?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxyZXNpbiUyMGpld2Vscnl8ZW58MHx8fHwxNzIxOTM4NDg3fDA&ixlib=rb-4.0.3&q=80&w=400',
    description: '“Nunca pensei que conseguiria fazer peças tão lindas! O curso é super didático, e em poucos dias já estava vendendo para as minhas amigas.”',
  },
  {
    name: 'Mariana Pires',
    imageSrc: 'https://images.unsplash.com/photo-1616091219416-e490593527a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxyZXNpbiUyMGpld2Vscnl8ZW58MHx8fHwxNzIxOTM4NDg3fDA&ixlib=rb-4.0.3&q=80&w=400',
    description: '“Estou apaixonada! O curso me deu a confiança que eu precisava para começar. Hoje, tenho uma lojinha online e meus finais de semana são produzindo jóias.”',
  },
  {
    name: 'Sofia Andrade',
    imageSrc: 'https://images.unsplash.com/photo-1599833692554-5481874554a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxyZXNpbiUyMGpld2Vscnl8ZW58MHx8fHwxNzIxOTM4NDg3fDA&ixlib=rb-4.0.3&q=80&w=400',
    description: '“O melhor investimento que fiz! A Fernanda ensina todos os segredos, e o grupo de alunas é incrível. Já recuperei o valor do curso várias vezes!”',
  },
];

export const StudentResults = () => {
  return (
    <section id="student-results" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-serif">
            Veja o que as Alunas Estão Criando
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Pessoas comuns, assim como você, que decidiram dar o primeiro passo e hoje estão transformando a natureza em arte e renda.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {students.map((student, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
              <CardContent className="p-4">
                <div className="w-full overflow-hidden rounded-lg">
                  <Image 
                    src={student.imageSrc} 
                    alt={`Peça criada por ${student.name}`}
                    width={400}
                    height={400}
                    className="w-full h-auto object-cover aspect-square group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                <div className="p-2 pt-4 text-center">
                  <p className="mt-2 text-gray-600 italic">"{student.description}"</p>
                  <h3 className="text-lg font-bold text-rose-500 mt-4">- {student.name}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
