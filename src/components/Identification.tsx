"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
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
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-[#0c0b09] to-[#080808]" />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[#b48c5a] text-sm font-medium tracking-widest uppercase mb-4 block">
            Identificação
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#f0ede8] leading-tight">
            Você reconhece algum{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a46e] to-[#8a6840]">
              destes sinais?
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className={`group relative p-6 rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] backdrop-blur-sm cursor-default transition-all duration-300 hover:border-[rgba(180,140,90,0.2)] hover:bg-[rgba(180,140,90,0.03)] ${i === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[rgba(180,140,90,0.04)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="text-3xl mb-4 block">{item.icon}</span>
              <h3 className="text-[#f0ede8] font-medium mb-2 leading-snug">{item.title}</h3>
              <p className="text-[#6a6a68] text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-center text-[#4a4a48] text-sm mt-12"
        >
          Se você se identificou com pelo menos um destes pontos,{" "}
          <span className="text-[#b48c5a]">você está no lugar certo.</span>
        </motion.p>
      </div>
    </section>
  );
}
