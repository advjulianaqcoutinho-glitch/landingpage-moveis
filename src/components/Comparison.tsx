"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const rows = [
  { label: "Origem dos clientes", traditional: "Depende de indicação", method: "Fluxo constante e previsível" },
  { label: "Qualidade dos leads", traditional: "Muitos curiosos", method: "Mais qualificação prévia" },
  { label: "Previsibilidade", traditional: "Meses bons e ruins", method: "Crescimento consistente" },
  { label: "Equipe comercial", traditional: "Parada por falta de oportunidades", method: "Sempre com oportunidades reais" },
  { label: "Controle", traditional: "Refém das indicações", method: "Estratégia sob seu controle" },
];

export default function Comparison() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0b09] to-[#080808]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-[rgba(180,140,90,0.2)] to-transparent" />

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[#b48c5a] text-sm font-medium tracking-widest uppercase mb-4 block">
            Por que funciona
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#f0ede8] leading-tight">
            A diferença é{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a46e] to-[#8a6840]">
              visível
            </span>
          </h2>
        </motion.div>

        {/* Table header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 gap-4 mb-4 px-4"
        >
          <div />
          <div className="text-center">
            <span className="text-[#4a4a48] text-sm font-medium">Modelo Tradicional</span>
          </div>
          <div className="text-center">
            <span className="text-[#b48c5a] text-sm font-semibold">Método Projeto Fechado™</span>
          </div>
        </motion.div>

        {/* Rows */}
        <div className="space-y-2">
          {rows.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="grid grid-cols-3 gap-4 items-center p-4 rounded-xl border border-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.015)]"
            >
              <p className="text-[#6a6a68] text-sm font-medium">{row.label}</p>

              <div className="flex items-center gap-2 justify-center">
                <span className="text-red-500 text-sm">✗</span>
                <p className="text-[#4a4a48] text-sm text-center">{row.traditional}</p>
              </div>

              <div className="flex items-center gap-2 justify-center">
                <span className="text-[#b48c5a] text-sm">✓</span>
                <p className="text-[#c0bdb8] text-sm text-center">{row.method}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-14 text-center space-y-6"
        >
          <p className="text-[#6a6a68] max-w-xl mx-auto leading-relaxed">
            Essa diferença não aparece do dia pra noite — ela começa com entender onde exatamente sua loja está perdendo oportunidades.{" "}
            <span className="text-[#a0a098]">É exatamente isso que o diagnóstico revela.</span>
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#c9a46e] to-[#b48c5a] text-[#080808] font-semibold text-base shadow-[0_0_40px_rgba(180,140,90,0.25)]"
            onClick={() => document.dispatchEvent(new CustomEvent("openQuiz"))}
          >
            Agendar meu Diagnóstico
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
