import { Card, CardContent } from '@/components/ui/card';

const students = [
  {
    name: 'Mariana Silva',
    time: 'menos de 10 dias',
    description: 'Essa aluna fez uma incrível capinha de celular em resina, mostrando a rapidez com que se pode criar peças lindas.',
    videoSrc: 'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.6560235820404565.mp4',
  },
  {
    name: 'Juliana Costa',
    time: 'menos de 10 dias',
    description: 'Já essa aluna fez um relógio de parede para sua casa, um projeto prático e muito valorizado.',
    videoSrc: 'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.2960567343072176.mp4',
  },
  {
    name: 'Beatriz Almeida',
    time: 'menos de 10 dias',
    description: 'Essa aluna também faz relógios, porém para venda sob encomenda, mostrando o potencial de negócio.',
    videoSrc: 'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.2777280647460657.mp4',
  },
  {
    name: 'Camila Santos',
    time: '1 mês de curso',
    description: 'Nossa aluna mais antiga, com 1 mês de curso, já está faturando muito. Veja a quantidade de relógios que ela está fazendo com alta performance!',
    videoSrc: 'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.9340392398387358.mp4',
  },
   {
    name: 'Fernanda Oliveira',
    time: 'menos de 10 dias',
    description: 'Essa aluna também está fazendo relógios, pois é simples e lucrativo. Você pode fazer o que quiser!',
    videoSrc: 'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.459569215635111.mp4',
  },
   {
    name: 'Gabriela Pereira',
    time: 'menos de 10 dias',
    description: 'De capinhas a um lindo objeto de decoração como o que essa aluna fez.',
    videoSrc: 'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.5649383616062752.mp4',
  },
  {
    name: 'Larissa Martins',
    time: '35 dias',
    description: 'No nível intermediário, essa aluna está fazendo mesas de decoração. Ela levou apenas 35 dias para dominar a arte e conseguir sua clientela.',
    videoSrc: 'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.04027210476537424.mp4',
  },
   {
    name: 'Sofia Ribeiro',
    time: 'Conclusão do curso',
    description: 'Resultado de alto nível! Ela fez essa mesa sob encomenda para seu ex-chefe e pediu demissão após a metade do curso. Hoje, tem mais de 20 vendas mensais, o triplo do seu antigo salário.',
    videoSrc: 'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.16781002622817653.mp4',
  },
  {
    name: 'Rafael Medeiros',
    time: 'Conclusão do curso',
    description: 'Resultado de conclusão de curso. Essa resina foi feita em uma parede por nosso Aluno Rafael Medeiros.',
    videoSrc: 'https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.13282398440855303.mp4',
  },
];

export const StudentResults = () => {
  return (
    <section id="student-results" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
            ⭐ Resultados de Nossos Alunos
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Veja o que nossos alunos criaram com o conhecimento do curso. Resultados incríveis em pouco tempo!
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {students.map((student, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="w-full">
                  <video src={student.videoSrc} controls className="w-full h-auto" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">{student.name}</h3>
                  <p className="text-sm text-primary font-semibold mt-1">Resultado em {student.time}</p>
                  <p className="mt-4 text-gray-600">{student.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
