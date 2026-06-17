"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface HeroProps {
  onCTA: () => void;
}

export default function Hero({ onCTA }: HeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d0c0b] via-[#0f0e0c] to-[#080808]" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(180,140,90,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(180,140,90,0.8) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(180,140,90,0.07)_0%,transparent_70%)]" />
      </motion.div>

      {/* Floating decorations — hidden on mobile for perf */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 1, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="hidden sm:block absolute top-[15%] left-[8%] w-16 h-16 border border-[rgba(180,140,90,0.12)] rounded-2xl backdrop-blur-sm"
      />
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="hidden sm:block absolute bottom-[22%] right-[8%] w-12 h-12 border border-[rgba(180,140,90,0.1)] rounded-xl backdrop-blur-sm"
      />

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 w-full max-w-4xl mx-auto px-5 text-center pt-16 pb-24">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(180,140,90,0.25)] bg-[rgba(180,140,90,0.06)] text-[#b48c5a] text-xs font-medium mb-8 backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#b48c5a] animate-pulse" />
          Sistema de clientes para lojas de móveis planejados
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight leading-[1.08] mb-5"
          style={{ fontFeatureSettings: '"ss01"' }}
        >
          <span className="text-[#f0ede8]">Sua loja recebe</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a46e] via-[#b48c5a] to-[#8a6840]">
            orçamentos
          </span>
          <span className="text-[#f0ede8]"> ou</span>
          <br />
          <span className="text-[#f0ede8]">curiosos?</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-[#7a7a78] max-w-xl mx-auto leading-relaxed mb-8"
        >
          Ajudo lojas de móveis planejados a fechar mais projetos de R$15k–R$30k por mês,
          usando anúncios + filtro anti-curioso, sem depender de indicação.
        </motion.p>

        {/* Bullets */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-2 sm:gap-6 mb-8 max-w-xs sm:max-w-none mx-auto"
        >
          {["Mais orçamentos de clientes em obra", "Menos curiosos no WhatsApp", "Mais projetos de alto valor fechados"].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-[#9a9a98]">
              <span className="text-[#b48c5a] font-bold flex-shrink-0">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col items-center gap-3"
        >
          <motion.button
            onClick={onCTA}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="group relative w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#c9a46e] to-[#b48c5a] text-[#080808] font-bold text-base overflow-hidden transition-all duration-300 shadow-[0_0_40px_rgba(180,140,90,0.3)]"
          >
            <span className="relative z-10">AGENDAR MEU DIAGNÓSTICO</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#d4b07a] to-[#c9a46e] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
          <p className="text-xs text-[#3a3a38]">100% gratuito · Sem compromisso</p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 border border-[rgba(180,140,90,0.2)] rounded-full flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 rounded-full bg-[#b48c5a] opacity-50" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
