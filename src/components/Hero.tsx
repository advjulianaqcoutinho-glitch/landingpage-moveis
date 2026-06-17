"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface HeroProps {
  onCTA: () => void;
}

export default function Hero({ onCTA }: HeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d0c0b] via-[#0f0e0c] to-[#080808]" />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(180,140,90,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(180,140,90,0.8) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(180,140,90,0.06)_0%,transparent_70%)]" />
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(180,140,90,0.04)_0%,transparent_70%)]" />
      </motion.div>

      {/* Floating elements */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 1, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] left-[8%] w-20 h-20 border border-[rgba(180,140,90,0.15)] rounded-2xl backdrop-blur-sm"
      />
      <motion.div
        animate={{ y: [0, 10, 0], rotate: [0, -1, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[20%] right-[8%] w-14 h-14 border border-[rgba(180,140,90,0.12)] rounded-xl backdrop-blur-sm"
      />
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[60%] left-[4%] w-2 h-2 rounded-full bg-[rgba(180,140,90,0.4)]"
      />
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-[30%] right-[6%] w-3 h-3 rounded-full bg-[rgba(180,140,90,0.25)]"
      />

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(180,140,90,0.25)] bg-[rgba(180,140,90,0.06)] text-[#b48c5a] text-sm font-medium mb-10 backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#b48c5a] animate-pulse" />
          Sistema de clientes para lojas de móveis planejados
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] mb-6"
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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg md:text-xl text-[#8a8880] max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Ajudo lojas de móveis planejados a fechar mais projetos de R$15k–R$30k por mês,
          usando anúncios + filtro anti-curioso, sem depender de indicação.
        </motion.p>

        {/* Bullets */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-12"
        >
          {["Mais orçamentos de clientes em obra/reforma", "Menos curiosos enchendo o WhatsApp", "Mais projetos de alto valor fechados todo mês"].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-[#a0a098]">
              <span className="text-[#b48c5a] font-semibold">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            onClick={onCTA}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-[#c9a46e] to-[#b48c5a] text-[#080808] font-semibold text-base overflow-hidden transition-all duration-300 shadow-[0_0_40px_rgba(180,140,90,0.25)]"
          >
            <span className="relative z-10">Quero saber mais</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#d4b07a] to-[#c9a46e] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
          <p className="text-xs text-[#4a4a48]">Descubra como aumentar projetos vindos da internet · Sem compromisso · 100% gratuito</p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 border border-[rgba(180,140,90,0.25)] rounded-full flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 rounded-full bg-[#b48c5a] opacity-60" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
