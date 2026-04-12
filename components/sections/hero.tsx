import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0a]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/[0.07] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
          
        />
      </div>
      <div>
        agua
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            <span>Especialistas em sites para negócios</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Sites profissionais para negócios que querem{" "}
            <span className="text-gradient">atrair mais clientes</span>
          </h1>

          <p className="text-lg md:text-xl text-[#aaa] max-w-2xl mx-auto leading-relaxed mb-10">
            Desenvolvo sites modernos, rápidos e totalmente responsivos, focados
            em gerar confiança e transformar visitantes em clientes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-all glow-blue hover:scale-[1.02] active:scale-[0.98]"
            >
              Solicitar orçamento
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#projetos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium border border-[#222] hover:border-[#333] text-white bg-white/[0.03] hover:bg-white/[0.06] rounded-xl transition-all"
            >
              Ver projetos
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            {[
              { value: "50+", label: "Projetos entregues" },
              { value: "100%", label: "Responsivos" },
              { value: "5\u2605", label: "Avalia\u00e7\u00e3o" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-[#888] mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
