"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Atrair",
    subtitle: "Pessoas em obra ou reforma",
    desc: "Identificamos e atraímos pessoas que estão ativamente planejando uma reforma — o momento exato de compra.",
    color: "from-[#c9a46e] to-[#a07040]",
  },
  {
    number: "02",
    title: "Filtrar",
    subtitle: "Curiosos e não qualificados",
    desc: "Mecanismos automáticos eliminam quem não tem intenção, capacidade ou timing de compra.",
    color: "from-[#b48c5a] to-[#8a6840]",
  },
  {
    number: "03",
    title: "Gerar",
    subtitle: "Oportunidades reais",
    desc: "Leads qualificados chegam prontos para receber seu orçamento, com expectativa alinhada.",
    color: "from-[#a07848] to-[#785030]",
  },
  {
    number: "04",
    title: "Fechar",
    subtitle: "Transformar em projetos",
    desc: "Processo comercial estruturado para converter oportunidades em contratos assinados.",
    color: "from-[#8a6438] to-[#604820]",
  },
];

export default function Method() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808] to-[#0c0b09]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-[rgba(180,140,90,0.3)] to-transparent" />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-[#b48c5a] text-sm font-medium tracking-widest uppercase mb-4 block">
            Metodologia exclusiva
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#f0ede8] leading-tight mb-4">
            Método{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a46e] to-[#8a6840]">
              Projeto Fechado™
            </span>
          </h2>
          <p className="text-[#6a6a68] max-w-xl mx-auto">
            Um sistema estruturado para transformar sua loja em uma máquina previsível de projetos fechados.
          </p>
        </motion.div>

        {/* Roadmap */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-8 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[rgba(180,140,90,0.15)] to-transparent hidden md:block" />

          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group relative"
              >
                {/* Number bubble */}
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(180,140,90,0.15)] group-hover:shadow-[0_0_40px_rgba(180,140,90,0.25)] transition-all duration-300`}>
                  <span className="text-[#080808] font-bold text-xl">{step.number}</span>
                </div>

                <h3 className="text-[#f0ede8] font-semibold text-xl mb-1">{step.title}</h3>
                <p className="text-[#b48c5a] text-sm mb-3">{step.subtitle}</p>
                <p className="text-[#5a5a58] text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-16 p-6 rounded-2xl border border-[rgba(180,140,90,0.12)] bg-[rgba(180,140,90,0.03)] text-center"
        >
          <p className="text-[#6a6a68] text-sm">
            O método foi desenvolvido especificamente para lojas de móveis planejados com ticket médio entre{" "}
            <span className="text-[#b48c5a]">R$15.000 e R$30.000</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
