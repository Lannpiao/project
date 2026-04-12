import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Bella Hair Studio",
    category: "Salão de Beleza",
    description:
      "Site institucional com agendamento online e galeria de serviços.",
    image:
      "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "BarberKing",
    category: "Barbearia",
    description:
      "Landing page com foco em conversão e design masculino premium.",
    image:
      "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Café Origem",
    category: "Cafeteria",
    description:
      "Site com cardápio digital, localização e identidade visual acolhedora.",
    image:
      "https://images.pexels.com/photos/1995010/pexels-photo-1995010.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Prime Imóveis",
    category: "Imobiliária",
    description:
      "Plataforma de imóveis com filtros avançados e integração com WhatsApp.",
    image:
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];
export default function Projects() {
  return (
    <section id="projetos" className="section-padding bg-[#0f0f0f] relative">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#222] to-transparent" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
            Portfólio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Projetos que{" "}
            <span className="text-gradient">geram resultados</span>
          </h2>
          <p className="text-[#aaa] text-lg">
            Conheça alguns dos sites que desenvolvemos para negócios reais.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-2xl bg-[#111] border border-[#1a1a1a] overflow-hidden card-hover"
            >
              <div className="relative h-56 md:h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors duration-500" />
                <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <ExternalLink className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="p-6">
                <span className="text-blue-400 text-xs font-semibold uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mt-1 mb-2">
                  {project.title}
                </h3>
                <p className="text-[#888] text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
