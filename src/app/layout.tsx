import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const BASE_URL = "https://landingpage-moveisplanejados-igor.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Igor Pacheco | Especialista em Crescimento para Lojas de Móveis Planejados",
  description:
    "Ajudo lojas de móveis planejados a gerar mais orçamentos qualificados, reduzir curiosos e diminuir a dependência de indicação. Método Projeto Fechado™.",
  keywords: [
    "móveis planejados",
    "marketing móveis planejados",
    "crescimento loja móveis",
    "Igor Pacheco",
    "Método Projeto Fechado",
    "geração de leads móveis",
    "orçamentos qualificados",
  ],
  authors: [{ name: "Igor Pacheco" }],
  creator: "Igor Pacheco",
  openGraph: {
    title: "Igor Pacheco | Especialista em Crescimento para Lojas de Móveis Planejados",
    description:
      "Diagnóstico gratuito: descubra o que está impedindo sua loja de crescer de forma consistente.",
    type: "website",
    url: BASE_URL,
    locale: "pt_BR",
    siteName: "Método Projeto Fechado™",
  },
  twitter: {
    card: "summary_large_image",
    title: "Igor Pacheco | Método Projeto Fechado™",
    description: "Diagnóstico gratuito para lojas de móveis planejados.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${BASE_URL}/#igor`,
      name: "Igor Pacheco",
      jobTitle: "Especialista em Crescimento para Lojas de Móveis Planejados",
      description: "Especialista em crescimento para lojas de móveis planejados. Criador do Método Projeto Fechado™.",
      url: BASE_URL,
      sameAs: [`https://wa.me/5353999972327`],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${BASE_URL}/#service`,
      name: "Método Projeto Fechado™",
      description: "Sistema de geração de oportunidades qualificadas para lojas de móveis planejados.",
      provider: { "@id": `${BASE_URL}/#igor` },
      url: BASE_URL,
      areaServed: "BR",
      audience: { "@type": "BusinessAudience", audienceType: "Lojas de Móveis Planejados" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Já investi em anúncios antes e não tive resultado. Como isso é diferente?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "O Método Projeto Fechado™ trabalha com segmentação cirúrgica — alcançamos pessoas que estão ativamente em obra ou reforma.",
          },
        },
        {
          "@type": "Question",
          name: "Quanto tempo leva para ver os primeiros resultados?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Os primeiros resultados aparecem em 30 a 60 dias após a implementação completa do sistema.",
          },
        },
        {
          "@type": "Question",
          name: "Funciona para cidades pequenas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. O método foi validado em cidades de diferentes portes.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-[#080808] text-white`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
