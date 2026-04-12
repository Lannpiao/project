import { Store, Wrench, Globe } from "lucide-react";

const audiences = [
  {
    icon: Store,
    title: "Negócios Locais",
    description:
      "Restaurantes, clínicas, academias, salões e comércios que precisam ser encontrados e passar credibilidade online.",
    examples: ["Restaurantes", "Clínicas", "Academias", "Lojas"],
  },
  {
    icon: Wrench,
    title: "Prestadores de Serviço",
    description:
      "Profissionais e empresas que querem apresentar seus serviços de forma profissional e captar mais clientes.",
    examples: ["Advogados", "Contadores", "Consultores", "Arquitetos"],
  },
  {
    icon: Globe,
    title: "Empresas em Crescimento",
    description:
      "Negócios que entendem a importância de uma presença digital forte para escalar e se posicionar no mercado.",
    examples: ["Startups", "Agências", "E-commerces", "Franquias"],
  },
];

export default function TargetAudience() {
  return (
    <section className="section-padding bg-[#0f0f0f] relative">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#222] to-transparent" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
            Para quem é
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Ideal para quem leva{" "}
            <span className="text-gradient">negócios a sério</span>
          </h2>
          <p className="text-[#aaa] text-lg">
            Nossos sites são para empresas e profissionais que entendem o valor
            de uma presença digital bem construída.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {audiences.map((item) => (
            <div
              key={item.title}
              className="group p-7 rounded-2xl bg-[#111] border border-[#1a1a1a] card-hover"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5 group-hover:bg-blue-500/20 transition-colors">
                <item.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-[#888] text-sm leading-relaxed mb-5">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.examples.map((ex) => (
                  <span
                    key={ex}
                    className="text-xs px-3 py-1.5 rounded-full bg-blue-500/5 border border-blue-500/10 text-blue-400/80"
                  >
                    {ex}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}