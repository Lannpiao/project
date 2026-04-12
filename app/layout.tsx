import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Koda Studio | Sites profissionais para negócios",
  description:
    "Criamos sites modernos, rápidos e focados em conversão para negócios que querem atrair mais clientes e crescer no digital.",
  icons: {
    icon: "/icon.png",
  },
  keywords: [
    "criação de sites",
    "sites profissionais",
    "sites para negócios",
    "desenvolvimento web",
    "landing page",
    "site institucional",
    "web design",
  ],
  authors: [{ name: "Koda Studio" }],
  openGraph: {
    title: "Koda Studio | Sites profissionais para negócios",
    description:
      "Sites modernos e estratégicos que transformam visitantes em clientes.",
    type: "website",
    locale: "pt_BR",
    siteName: "Koda Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Koda Studio | Sites profissionais para negócios",
    description:
      "Sites modernos e estratégicos que transformam visitantes em clientes.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}