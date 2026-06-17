"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const testimonials = [
  {
    name: "Carlos Mendonça",
    company: "Móveis Mendonça · São Paulo",
    text: "Em 60 dias já tínhamos uma fila de orçamentos qualificados. Paramos de depender de indicação.",
    metric: "+340%",
    metricLabel: "em orçamentos/mês",
    initials: "CM",
  },
  {
    name: "Fernanda Lopes",
    company: "Lopes Planejados · Campinas",
    text: "Antes eram 80% de curiosos. Hoje nossos leads chegam prontos para comprar. Mudou completamente.",
    metric: "R$2,1M",
    metricLabel: "em novos contratos",
    initials: "FL",
  },
  {
    name: "Roberto Alves",
    company: "Alves Interiores · Belo Horizonte",
    text: "Finalmente temos previsibilidade. Sabemos quantos projetos vamos fechar no mês que vem.",
    metric: "3x",
    metricLabel: "mais projetos fechados",
    initials: "RA",
  },
];

export default function Results() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0c0b09]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-[rgba(180,140,90,0.2)] to-transparent" />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[#b48c5a] text-sm font-medium tracking-widest uppercase mb-4 block">
            Resultados reais
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#f0ede8] leading-tight">
            O que nossos clientes{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a46e] to-[#8a6840]">
              conquistaram
            </span>
          </h2>
        </motion.div>

        {/* Testimonial carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="p-8 md:p-12 rounded-3xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] backdrop-blur-sm min-h-[280px] flex flex-col justify-between">
            <div>
              <div className="text-5xl text-[rgba(180,140,90,0.2)] font-serif mb-6">"</div>
              <motion.p
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-xl md:text-2xl text-[#d0cdc8] leading-relaxed mb-8 font-light"
              >
                {testimonials[active].text}
              </motion.p>
            </div>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <motion.div
                key={`info-${active}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#c9a46e] to-[#8a6840] flex items-center justify-center text-[#080808] font-bold text-sm">
                  {testimonials[active].initials}
                </div>
                <div>
                  <p className="text-[#f0ede8] font-medium">{testimonials[active].name}</p>
                  <p className="text-[#6a6a68] text-sm">{testimonials[active].company}</p>
                </div>
              </motion.div>

              <motion.div
                key={`metric-${active}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="text-right"
              >
                <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#c9a46e] to-[#b48c5a]">
                  {testimonials[active].metric}
                </p>
                <p className="text-[#6a6a68] text-xs">{testimonials[active].metricLabel}</p>
              </motion.div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === active
                    ? "w-8 h-2 bg-[#b48c5a]"
                    : "w-2 h-2 bg-[rgba(180,140,90,0.25)] hover:bg-[rgba(180,140,90,0.4)]"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Placeholder for real results */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-8 p-4 rounded-xl border border-dashed border-[rgba(180,140,90,0.15)] text-center"
        >
          <p className="text-[#3a3a38] text-xs">
            📌 Espaço reservado para prints e cases reais — adicione suas provas sociais aqui
          </p>
        </motion.div>
      </div>
    </section>
  );
}
