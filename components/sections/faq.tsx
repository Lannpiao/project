"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const questions = [
  {
    question: "Quanto tempo leva para criar um site?",
    answer:
      "O prazo varia conforme a complexidade do projeto. Uma landing page pode ficar pronta em 5 a 7 dias úteis. Sites institucionais mais completos levam de 10 a 20 dias úteis. Você recebe um cronograma detalhado antes de começarmos.",
  },
  {
    question: "Qual o investimento para criar um site?",
    answer:
      "Cada projeto é único e o valor depende da complexidade, número de páginas e funcionalidades necessárias. Entre em contato para receber um orçamento personalizado e sem compromisso.",
  },
  {
    question: "O site será responsivo (funciona no celular)?",
    answer:
      "Sim, todos os nossos sites são desenvolvidos com abordagem mobile first. Isso significa que eles funcionam perfeitamente em celulares, tablets e computadores, garantindo a melhor experiência para seus clientes.",
  },
  {
    question: "Vocês cuidam da hospedagem e domínio?",
    answer:
      "Sim, orientamos e podemos configurar tudo para você. Utilizamos as melhores soluções de hospedagem para garantir velocidade, segurança e estabilidade para o seu site.",
  },
  {
    question: "Consigo editar o site depois?",
    answer:
      "Sim. Dependendo do projeto, entregamos com painel de gerenciamento de conteúdo ou documentamos todo o processo para que você possa fazer atualizações. Também oferecemos planos de manutenção.",
  },
  {
    question: "O site vai aparecer no Google?",
    answer:
      "Todos os nossos sites são desenvolvidos com as melhores práticas de SEO: estrutura semântica, velocidade otimizada, meta tags e muito mais. Isso facilita o posicionamento orgânico no Google.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="section-padding bg-[#0a0a0a] relative">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#222] to-transparent" />
      </div>
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Perguntas{" "}
            <span className="text-gradient">frequentes</span>
          </h2>
          <p className="text-[#aaa] text-lg">
            Tire suas dúvidas sobre nosso processo e serviços.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {questions.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-xl bg-[#111] border border-[#1a1a1a] px-6 data-[state=open]:border-blue-500/20 transition-colors"
            >
              <AccordionTrigger className="text-left text-base font-medium text-white hover:text-blue-400 transition-colors py-5 hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#888] text-sm leading-relaxed pb-5">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}