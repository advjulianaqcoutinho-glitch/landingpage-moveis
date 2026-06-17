"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  { icon: "🔒", text: "Sem fidelidade longa (início com 3 meses)" },
  { icon: "🎯", text: "Apenas para lojas com faturamento mínimo de R$50k/mês" },
  { icon: "💬", text: "Suporte com retorno em até 24h úteis" },
  { icon: "🚫", text: "Nada de garantias milagrosas ou números inventados" },
  { icon: "✅", text: "Método aplicado exclusivamente em lojas de planejados" },
];

export default function TrustBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section ref={ref} className="py-12 px-5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808] to-[#0c0b09]" />
      <div className="absolute inset-0 border-y border-[rgba(180,140,90,0.08)]" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-wrap md:items-center md:justify-center gap-3 md:gap-x-10 md:gap-y-5"
      >
        {items.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: i * 0.06 }} className="flex items-center gap-2.5 p-3 md:p-0 rounded-xl md:rounded-none bg-[rgba(255,255,255,0.015)] md:bg-transparent border border-[rgba(255,255,255,0.04)] md:border-0">
            <span className="text-base">{item.icon}</span>
            <span className="text-[#5a5a58] text-sm font-medium">{item.text}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
