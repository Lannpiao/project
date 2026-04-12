import { MessageSquare, PenTool, Code as Code2, Settings, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Entendimento",
    description:
      "Conversamos sobre seu negócio, público-alvo e objetivos para criar a estratégia ideal.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Planejamento",
    description:
      "Definimos a estrutura, conteúdo e design alinhados com a identidade da sua marca.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Desenvolvimento",
    description:
      "Construímos o site com tecnologia moderna, responsividade e alta performance.",
  },
  {
    icon: Settings,
    number: "04",
    title: "Ajustes",
    description:
      "Realizamos revisões e refinamentos até que tudo esteja exatamente como desejado.",
  },
  {
    icon: Rocket,
    number: "05",
    title: "Entrega",
    description:
      "Seu site é publicado e configurado, pronto para receber visitantes e gerar resultados.",
  },
];

export default function Process() {
  return (
    <section id="processo" className="section-padding bg-[#0a0a0a] relative">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#222] to-transparent" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
            Processo
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Do briefing ao{" "}
            <span className="text-gradient">site no ar</span>
          </h2>
          <p className="text-[#aaa] text-lg">
            Um processo claro e organizado para que você acompanhe cada etapa.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative group">
              <div className="p-6 rounded-2xl bg-[#111] border border-[#1a1a1a] card-hover text-center h-full">
                <div className="text-xs font-bold text-blue-400/50 mb-3 tracking-widest">
                  {step.number}
                </div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <step.icon className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-[#888] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-[#333]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}