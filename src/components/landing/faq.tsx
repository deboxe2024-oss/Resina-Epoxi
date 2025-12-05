import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from '@/components/ui/accordion';

  
const faqItems = [
    {
      question: "Qual tipo de molde é utilizado para fabricação das joias botânicas?",
      answer: "Utilizamos moldes de silicone, que são flexíveis e ideais para a resina."
    },
    {
      question: "Vocês indicam onde comprar os materiais para produção das joias?",
      answer: "Sim! No curso, você recebe uma lista completa com os melhores fornecedores."
    },
    {
      question: "É necessário lixar e polir a superfície da resina para as peças ficarem transparentes?",
      answer: "Não! Ensinamos uma técnica para obter um acabamento brilhante sem a necessidade de lixamento e polimento."
    },
    {
      question: "Após a compra, em quanto tempo eu recebo o conteúdo?",
      answer: "O acesso é imediato! Assim que o pagamento for aprovado, você receberá um e-mail com as instruções."
    },
    {
      question: "Por quanto tempo terei acesso ao curso?",
      answer: "O acesso é vitalício! Assista às aulas quantas vezes quiser, para sempre."
    },
    {
      question: "O curso é ao vivo ou gravado?",
      answer: "O curso é 100% gravado, para você assistir no seu próprio ritmo e tempo."
    },
    {
        question: "Vou receber algum material pelos correios?",
        answer: "Não, o curso é 100% digital, incluindo as apostilas em PDF que podem ser baixadas."
    },
    {
        question: "O material para produção das joias está incluso no curso?",
        answer: "Não, o curso ensina a técnica e indica onde comprar os materiais, mas eles não estão inclusos."
    },
    {
        question: "O curso tem certificado?",
        answer: "Sim, ao concluir o curso você receberá um certificado digital de conclusão."
    },
    {
        question: "O curso inclui suporte?",
        answer: "Sim, você terá suporte direto com os professores para tirar todas as suas dúvidas."
    }
  ];
  
  export const Faq = () => {
    return (
      <section id="faq" className="py-12 lg:py-24 bg-accent">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-10">
              Perguntas Frequentes
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`} className="bg-white rounded-lg shadow-sm mb-4 px-6">
                <AccordionTrigger className="text-lg font-semibold text-left hover:text-primary data-[state=open]:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 pt-2 pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    );
  };
