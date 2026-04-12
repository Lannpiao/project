import { Target, TrendingUp, Shield } from "lucide-react";

const highlights = [
  {
    icon: Target,
    title: "Foco em resultados",
    description:
      "Cada pixel \u00e9 pensado para guiar o visitante at\u00e9 a a\u00e7\u00e3o desejada, seja uma liga\u00e7\u00e3o, uma mensagem ou uma compra.",
  },
  {
    icon: TrendingUp,
    title: "Credibilidade instant\u00e2nea",
    description:
      "Um site profissional transmite confian\u00e7a desde o primeiro segundo. Seu neg\u00f3cio ganha autoridade no mercado.",
  },
  {
    icon: Shield,
    title: "Presen\u00e7a digital s\u00f3lida",
    description:
      "Estrutura otimizada para aparecer no Google e funcionar perfeitamente em qualquer dispositivo.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="section-padding bg-[#0a0a0a] relative">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#222] to-transparent" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
              Sobre nós
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6 leading-tight">
              Não criamos apenas sites.{" "}
              <span className="text-gradient">Criamos máquinas de vendas.</span>
            </h2>
            <p className="text-[#aaa] text-lg leading-relaxed mb-6">
              Somos especialistas em desenvolver sites estratégicos para negócios
              que precisam de presença digital profissional. Cada projeto é
              construído com foco em conversão, performance e credibilidade.
            </p>
            <p className="text-[#888] leading-relaxed">
              Entendemos que seu site é o cartão de visitas digital do seu
              neggócio. Por isso, combinamos design sofisticado com estratégia de
              marketing para entregar resultados reais.
            </p>
          </div>

          <div className="grid gap-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-[#111] border border-[#1a1a1a] card-hover group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <item.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[#888] text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
