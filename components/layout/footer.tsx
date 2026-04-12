import { Code as Code2 } from "lucide-react";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Processo", href: "#processo" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          <div className="space-y-4">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-blue-400" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                koda<span className="text-blue-400">Studio</span>
              </span>
            </a>
            <p className="text-sm text-[#888] leading-relaxed max-w-xs">
              Especialistas em criação de sites profissionais para negócios que
              querem crescer no digital.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Navegação
            </h4>
            <nav className="flex flex-col gap-2.5">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#888] hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Contato
            </h4>
            <div className="flex flex-col gap-2.5 text-sm text-[#888]">
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                WhatsApp
              </a>
              <a
                href="mailto:contato@devstudio.com.br"
                className="hover:text-white transition-colors"
              >
                contato@kodastudio.com.br
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#1a1a1a] text-center text-sm text-[#555]">
          <p>&copy; {new Date().getFullYear()} Koda Studio. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}