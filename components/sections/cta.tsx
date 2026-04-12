import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#0f0f0f]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#222] to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/[0.05] rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          Seu negócio merece um{" "}
          <span className="text-gradient">site profissional</span>
        </h2>

        <p className="text-[#aaa] text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
          Pare de perder clientes por não ter uma presença digital à altura do seu trabalho.
          Vamos conversar?
        </p>

        <a
          href="https://wa.me/5582999534870"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-5 text-lg font-semibold bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-all glow-blue hover:scale-[1.02] active:scale-[0.98]"
        >
          Falar no WhatsApp
          <ArrowRight className="w-5 h-5" />
        </a>

        <p className="text-[#555] text-sm mt-6">
          Atendimento rápido e orçamento sem compromisso
        </p>
      </div>
    </section>
  );
}