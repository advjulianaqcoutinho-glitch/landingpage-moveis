"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const results = [
  {
    name: "Carlos Mendonça",
    company: "Móveis Mendonça · São Paulo",
    metric: "+340%",
    metricLabel: "em orçamentos/mês",
    bullets: [
      "Passou de 3 para 13 orçamentos qualificados por mês",
      "Zerou a dependência de indicação em 90 dias",
      "Equipe comercial sempre com agenda cheia",
    ],
    initials: "CM",
  },
  {
    name: "Fernanda Lopes",
    company: "Lopes Planejados · Campinas",
    metric: "R$2,1M",
    metricLabel: "em novos contratos",
    bullets: [
      "Reduziu curiosos de 80% para menos de 20% dos contatos",
      "Fechou R$2,1M em contratos nos primeiros 6 meses",
      "Previsibilidade financeira real pela primeira vez",
    ],
    initials: "FL",
  },
  {
    name: "Roberto Alves",
    company: "Alves Interiores · Belo Horizonte",
    metric: "3x",
    metricLabel: "mais projetos fechados",
    bullets: [
      "Triplicou o número de projetos fechados por mês",
      "Consegue projetar faturamento com 30 dias de antecedência",
      "Parou de desperdiçar orçamento com tráfego sem filtro",
    ],
    initials: "RA",
  },
];

export default function Results() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 md:py-32 px-5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0c0b09]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] md:w-[600px] h-[1px] bg-gradient-to-r from-transparent via-[rgba(180,140,90,0.2)] to-transparent" />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-[#b48c5a] text-xs font-medium tracking-widest uppercase mb-3 block">
            Resultados reais
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#f0ede8] leading-tight">
            Resultados que lojas de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a46e] to-[#8a6840]">
              planejados têm visto
            </span>
          </h2>
          <p className="text-[#3a3a38] text-xs mt-3">Resultados variam conforme região, verba e estrutura comercial.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {results.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="p-5 rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c9a46e] to-[#8a6840] flex items-center justify-center text-[#080808] font-bold text-xs flex-shrink-0">
                  {item.initials}
                </div>
                <div>
                  <p className="text-[#f0ede8] font-medium text-sm">{item.name}</p>
                  <p className="text-[#5a5a58] text-xs">{item.company}</p>
                </div>
              </div>

              <div className="border-t border-[rgba(255,255,255,0.04)] pt-4">
                <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#c9a46e] to-[#b48c5a]">
                  {item.metric}
                </p>
                <p className="text-[#5a5a58] text-xs mb-3">{item.metricLabel}</p>
                <ul className="space-y-2">
                  {item.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-[#6a6a68]">
                      <span className="text-[#b48c5a] mt-0.5 flex-shrink-0">✓</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-6 p-4 rounded-xl border border-dashed border-[rgba(180,140,90,0.12)] text-center"
        >
          <p className="text-[#3a3a38] text-xs">
            📌 O ponto em comum é sempre o mesmo: mais previsibilidade e menos dependência de indicação.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
