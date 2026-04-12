import {
  LayoutTemplate,
  Building2,
  MapPin,
  Palette,
  RefreshCw,
} from "lucide-react";

const services = [
  {
    icon: LayoutTemplate,
    title: "Landing Pages",
    description:
      "P\u00e1ginas focadas em convers\u00e3o, ideais para campanhas e capta\u00e7\u00e3o de leads qualificados.",
  },
  {
    icon: Building2,
    title: "Sites Institucionais",
    description:
      "Presen\u00e7a digital completa para sua empresa, com design profissional e conte\u00fado estrat\u00e9gico.",
  },
  {
    icon: MapPin,
    title: "Sites para Neg\u00f3cios Locais",
    description:
      "Solu\u00e7\u00f5es otimizadas para neg\u00f3cios que atendem clientes na sua regi\u00e3o.",
  },
  {
    icon: Palette,
    title: "Portf\u00f3lios",
    description:
      "Apresente seus trabalhos com elegancia e profissionalismo em um portf\u00f3lio digital impressionante.",
  },
  {
    icon: RefreshCw,
    title: "Redesign de Sites",
    description:
      "Renova\u00e7\u00e3o completa do visual e da estrutura para sites que precisam de moderniza\u00e7\u00e3o.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="section-padding bg-[#0f0f0f] relative">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#222] to-transparent" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
            Serviços
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Soluções sob medida para{" "}
            <span className="text-gradient">cada negócio</span>
          </h2>
          <p className="text-[#aaa] text-lg">
            Do planejamento à entrega, cada projeto é desenvolvido com
            estratégia e atenção aos detalhes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-7 rounded-2xl bg-[#111] border border-[#1a1a1a] card-hover relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5 group-hover:bg-blue-500/20 transition-colors">
                  <service.icon className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-[#888] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
