import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Igor Pacheco | Especialista em Crescimento para Lojas de Móveis Planejados",
  description:
    "Ajudo lojas de móveis planejados a gerar mais orçamentos qualificados, reduzir curiosos e diminuir a dependência de indicação.",
  keywords: ["móveis planejados", "marketing móveis", "crescimento loja móveis", "Igor Pacheco", "Método Projeto Fechado"],
  openGraph: {
    title: "Igor Pacheco | Especialista em Crescimento para Lojas de Móveis Planejados",
    description:
      "Ajudo lojas de móveis planejados a gerar mais orçamentos qualificados, reduzir curiosos e diminuir a dependência de indicação.",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-[#080808] text-white`}>
        {children}
      </body>
    </html>
  );
}
