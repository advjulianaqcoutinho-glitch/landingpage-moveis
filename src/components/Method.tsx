"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Atrair",
    subtitle: "Pessoas em obra ou reforma na sua região",
    desc: "Anúncios no Meta/Google focados em quem já decidiu comprar planejados, não em curioso que só quer \"dar uma olhadinha\".",
    color: "from-[#c9a46e] to-[#a07040]",
  },
  {
    number: "02",
    title: "Filtrar",
    subtitle: "Curiosos e não qualificados",
    desc: "Filtro Anti-Curioso que afasta quem não está pronto e destaca quem realmente pode virar projeto.",
    color: "from-[#b48c5a] to-[#8a6840]",
  },
  {
    number: "03",
    title: "Gerar",
    subtitle: "Oportunidades reais para o seu time",
    desc: "Entregamos para sua equipe contatos com contexto, dados e urgência — não só \"nome e telefone frio\".",
    color: "from-[#a07848] to-[#785030]",
  },
  {
    number: "04",
    title: "Fechar",
    subtitle: "Transformar em projetos de alto valor",
    desc: "Roteiro de WhatsApp e acompanhamento do funil para aumentar visitas, propostas e projetos fechados.",
    color: "from-[#8a6438] to-[#604820]",
  },
];

export default function Method() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 md:py-32 px-5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808] to-[#0c0b09]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] md:w-[600px] h-[1px] bg-gradient-to-r from-transparent via-[rgba(180,140,90,0.3)] to-transparent" />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-20"
        >
          <span className="text-[#b48c5a] text-xs font-medium tracking-widest uppercase mb-3 block">
            Metodologia exclusiva
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#f0ede8] leading-tight mb-3">
            Método{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a46e] to-[#8a6840]">
              Projeto Fechado™
            </span>
          </h2>
          <p className="text-[#5a5a58] text-sm md:text-base max-w-md mx-auto">
            Um sistema estruturado para transformar sua loja em uma máquina previsível de projetos fechados.
          </p>
        </motion.div>

        {/* Steps — vertical on mobile, horizontal on md+ */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative"
            >
              <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-[0_0_24px_rgba(180,140,90,0.15)]`}>
                <span className="text-[#080808] font-bold text-base md:text-xl">{step.number}</span>
              </div>
              <h3 className="text-[#f0ede8] font-semibold text-base md:text-xl mb-1">{step.title}</h3>
              <p className="text-[#b48c5a] text-xs md:text-sm mb-2">{step.subtitle}</p>
              <p className="text-[#4a4a48] text-xs md:text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-10 md:mt-16 p-5 rounded-2xl border border-[rgba(180,140,90,0.12)] bg-[rgba(180,140,90,0.03)] text-center"
        >
          <p className="text-[#5a5a58] text-sm">
            Desenvolvido para lojas com ticket médio acima de{" "}
            <span className="text-[#b48c5a]">R$15.000</span> e faturamento mínimo de{" "}
            <span className="text-[#b48c5a]">R$50.000/mês</span>.
          </p>
          <p className="text-[#5a5a58] text-sm mt-3">
            No diagnóstico, eu avalio em qual dessas etapas sua loja está travada e te mostro{" "}
            <span className="text-[#b48c5a]">o que ajustar primeiro.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
