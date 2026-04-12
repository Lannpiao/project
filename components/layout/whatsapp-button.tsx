"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5582999534870"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] flex items-center justify-center shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/40 transition-all duration-300 hover:scale-110"
    >
      <MessageCircle className="w-6 h-6 text-white" />
    </a>
  );
}
