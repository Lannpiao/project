"use client";

import { useState, useEffect } from "react";
import { Menu, X, Code as Code2 } from "lucide-react";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Processo", href: "#processo" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
          scrolled || mobileOpen
            ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                <Code2 className="w-5 h-5 text-blue-400" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                Koda<span className="text-blue-400">Studio</span>
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm text-[#aaa] hover:text-white transition-colors rounded-lg hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/5582999534870"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 px-5 py-2.5 text-sm font-medium bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all"
              >
                Solicitar orçamento
              </a>
            </nav>

            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors"
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-[50] bg-[#050816]/90 backdrop-blur-md">
          <div className="h-full overflow-y-auto px-6 py-6">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="px-4 py-3.5 text-base text-[#aaa] hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="https://wa.me/5582999534870"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="mt-4 px-5 py-3.5 text-base font-medium bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-center transition-all"
              >
                Solicitar orçamento
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}