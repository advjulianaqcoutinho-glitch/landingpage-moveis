"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const rows = [
  { label: "Origem dos clientes", traditional: "Depende de indicação e meses de sorte", method: "Sistema para gerar demanda fora da indicação" },
  { label: "Estratégia de anúncios", traditional: "Anúncios genéricos focados em likes e cliques", method: "Anúncios focados em quem já está em obra ou reforma" },
  { label: "Qualidade dos leads", traditional: "Leads frios e curiosos caindo direto no WhatsApp", method: "Filtro anti-curioso antes do contato com o time" },
  { label: "Atendimento comercial", traditional: "Vendedores gastando tempo com quem nunca vai fechar", method: "Roteiro pensado para projetos de R$15k–R$30k" },
  { label: "Acompanhamento", traditional: "Nenhum controle real sobre projetos vindos da internet", method: "Acompanhamento mensal de leads, visitas e projetos" },
];

export default function Comparison() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 md:py-32 px-5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0b09] to-[#080808]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] md:w-[600px] h-[1px] bg-gradient-to-r from-transparent via-[rgba(180,140,90,0.2)] to-transparent" />

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-[#b48c5a] text-xs font-medium tracking-widest uppercase mb-3 block">
            Por que funciona
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#f0ede8] leading-tight">
            A diferença é{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a46e] to-[#8a6840]">
              visível
            </span>
          </h2>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 gap-2 md:gap-4 mb-3 px-3"
        >
          <div />
          <div className="text-center">
            <span className="text-[#3a3a38] text-xs font-medium">Modelo Tradicional</span>
          </div>
          <div className="text-center">
            <span className="text-[#b48c5a] text-xs font-semibold">Método Projeto Fechado™</span>
          </div>
        </motion.div>

        {/* Rows */}
        <div className="space-y-2">
          {rows.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              className="grid grid-cols-3 gap-2 md:gap-4 items-center p-3 md:p-4 rounded-xl border border-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.015)]"
            >
              <p className="text-[#5a5a58] text-xs font-medium leading-snug">{row.label}</p>
              <div className="flex items-start gap-1.5 justify-center">
                <span className="text-red-500 text-xs mt-0.5 flex-shrink-0">✗</span>
                <p className="text-[#3a3a38] text-xs leading-snug">{row.traditional}</p>
              </div>
              <div className="flex items-start gap-1.5 justify-center">
                <span className="text-[#b48c5a] text-xs mt-0.5 flex-shrink-0">✓</span>
                <p className="text-[#b0ada8] text-xs leading-snug">{row.method}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-10 md:mt-14 text-center space-y-5"
        >
          <p className="text-[#5a5a58] text-sm max-w-lg mx-auto leading-relaxed">
            Essa diferença começa com entender onde exatamente sua loja está perdendo oportunidades.{" "}
            <span className="text-[#909090]">É exatamente isso que o diagnóstico revela.</span>
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#c9a46e] to-[#b48c5a] text-[#080808] font-bold text-base shadow-[0_0_40px_rgba(180,140,90,0.25)]"
            onClick={() => document.dispatchEvent(new CustomEvent("openQuiz"))}
          >
            Agendar meu Diagnóstico
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
