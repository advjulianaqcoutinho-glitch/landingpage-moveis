"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface FinalCTAProps {
  onCTA: () => void;
}

export default function FinalCTA({ onCTA }: FinalCTAProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808] to-[#0a0908]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(180,140,90,0.05)_0%,transparent_70%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-[rgba(180,140,90,0.2)] to-transparent" />

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <span className="text-[#b48c5a] text-sm font-medium tracking-widest uppercase block">
            Próximo passo
          </span>

          <h2 className="text-4xl md:text-6xl font-semibold text-[#f0ede8] leading-tight">
            Pronto para ter uma entrada{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a46e] to-[#8a6840]">
              previsível de projetos?
            </span>
          </h2>

          <p className="text-[#6a6a68] text-lg max-w-xl mx-auto leading-relaxed">
            Responda ao diagnóstico gratuito e receba um plano de 40 dias mostrando de onde podem vir seus próximos projetos pela internet, o que está travando seus resultados e quais ajustes fazer para reduzir curiosos e aumentar projetos fechados.
          </p>

          <motion.button
            onClick={onCTA}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-[#c9a46e] to-[#b48c5a] text-[#080808] font-semibold text-lg overflow-hidden transition-all duration-300 shadow-[0_0_60px_rgba(180,140,90,0.3)]"
          >
            <span className="relative z-10">Quero saber mais</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#d4b07a] to-[#c9a46e] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>

          <div className="flex items-center justify-center gap-8 text-sm text-[#3a3a38]">
            <span>✓ Sem compromisso</span>
            <span>✓ 100% gratuito</span>
            <span>✓ Resposta em 24h</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
