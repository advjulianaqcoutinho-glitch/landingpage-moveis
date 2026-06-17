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
    <section ref={ref} className="py-16 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808] to-[#0c0b09]" />
      <div className="absolute inset-0 border-y border-[rgba(180,140,90,0.08)]" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-x-10 gap-y-5"
      >
        {items.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: i * 0.08 }} className="flex items-center gap-2.5">
            <span className="text-lg">{item.icon}</span>
            <span className="text-[#6a6a68] text-sm font-medium">{item.text}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
