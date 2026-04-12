import {
  Paintbrush,
  MousePointerClick,
  Smartphone,
  Zap,
  Search,
  ChartBar as BarChart3,
} from "lucide-react";

const differentials = [
  {
    icon: Paintbrush,
    title: "Design Profissional",
    description:
      "Visual moderno e sofisticado que transmite credibilidade e valoriza o seu negócio.",
  },
  {
    icon: MousePointerClick,
    title: "Foco em Conversão",
    description:
      "Estrutura estratégica pensada para transformar visitantes em clientes.",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description:
      "Desenvolvido primeiro para celular, garantindo uma experiência perfeita em qualquer dispositivo.",
  },
  {
    icon: Zap,
    title: "Alta Performance",
    description:
      "Carregamento rápido que mantém visitantes no site e melhora seu posicionamento no Google.",
  },
  {
    icon: Search,
    title: "SEO Otimizado",
    description:
      "Estrutura preparada para ajudar seu negócio a aparecer nos resultados de busca.",
  },
  {
    icon: BarChart3,
    title: "Estrutura Estratégica",
    description:
      "Cada seção planejada para gerar mais contatos e oportunidades de negócio.",
  },
];

export default function Differentials() {
  return (
    <section className="section-padding bg-[#0a0a0a] relative">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#222] to-transparent" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
            Diferenciais
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Por que escolher a{" "}
            <span className="text-gradient">Koda Studio?</span>
          </h2>
          <p className="text-[#aaa] text-lg">
            Combinamos design, estratégia e tecnologia para criar sites que realmente geram clientes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item) => (
            <div
              key={item.title}
              className="group text-center p-7 rounded-2xl bg-[#111] border border-[#1a1a1a] card-hover"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-5 group-hover:bg-blue-500/20 transition-colors">
                <item.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-[#888] text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}