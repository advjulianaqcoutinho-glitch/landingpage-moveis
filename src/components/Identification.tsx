"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const problems = [
  {
    icon: "🤝",
    title: "A maioria dos clientes vem por indicação",
    desc: "Quando as indicações secam, o caixa também seca. Sem controle, sem previsibilidade.",
  },
  {
    icon: "📈",
    title: "Alguns meses bons, outros ruins",
    desc: "A montanha-russa financeira impede o crescimento e gera estresse constante.",
  },
  {
    icon: "👻",
    title: "Muitos pedem orçamento e desaparecem",
    desc: "Tempo e energia perdidos com pessoas que nunca tinham intenção real de comprar.",
  },
  {
    icon: "💤",
    title: "Equipe comercial parada",
    desc: "Bons vendedores sem oportunidades. Potencial desperdiçado todo mês.",
  },
  {
    icon: "💸",
    title: "Já investiu em anúncios sem resultado",
    desc: "Dinheiro jogado fora. Promessas que não se cumpriram. Ceticismo que ficou.",
  },
];

export default function Identification() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 md:py-32 px-5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-[#0c0b09] to-[#080808]" />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-[#b48c5a] text-xs font-medium tracking-widest uppercase mb-3 block">
            Identificação
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#f0ede8] leading-tight">
            Você se vê em algum{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a46e] to-[#8a6840]">
              desses cenários?
            </span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {problems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`group relative p-5 rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] active:bg-[rgba(180,140,90,0.04)] transition-all duration-200 ${i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <span className="text-2xl mb-3 block">{item.icon}</span>
              <h3 className="text-[#e8e5e0] font-medium mb-1.5 leading-snug text-sm md:text-base">{item.title}</h3>
              <p className="text-[#5a5a58] text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center text-[#4a4a48] text-sm mt-10"
        >
          Se você se viu em 2 ou mais desses pontos,{" "}
          <span className="text-[#b48c5a]">o diagnóstico vai te mostrar exatamente onde está o problema.</span>
        </motion.p>
      </div>
    </section>
  );
}
