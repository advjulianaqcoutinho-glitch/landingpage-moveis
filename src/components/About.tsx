"use client";

import { motion, useInView } from "framer-motion";

const credentials = [
  { number: "50+", label: "lojas atendidas" },
  { number: "R$12M+", label: "em projetos gerados" },
  { number: "3x", label: "média de crescimento" },
];

export default function About({ onCTA }: { onCTA: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 md:py-32 px-5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0b09] to-[#080808]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] md:w-[600px] h-[1px] bg-gradient-to-r from-transparent via-[rgba(180,140,90,0.2)] to-transparent" />

      <div className="relative max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-w-sm mx-auto md:max-w-none"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(180,140,90,0.12)] to-transparent rounded-3xl blur-2xl scale-105" />
              <div className="relative rounded-3xl overflow-hidden border border-[rgba(180,140,90,0.15)] bg-[#1a1510]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/igor.jpg" alt="Igor Pacheco" className="w-full object-cover object-top" style={{ aspectRatio: "4/5" }} />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#080808] to-transparent" />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -bottom-3 -right-3 px-3 py-2.5 rounded-2xl border border-[rgba(180,140,90,0.25)] bg-[#0f0e0c] backdrop-blur-sm shadow-xl"
              >
                <p className="text-[#b48c5a] text-xs font-medium tracking-wide">Método Projeto Fechado™</p>
                <p className="text-[#f0ede8] text-sm font-semibold">Igor Pacheco</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="space-y-5"
          >
            <div>
              <span className="text-[#b48c5a] text-xs font-medium tracking-widest uppercase block mb-3">Quem é Igor Pacheco</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#f0ede8] leading-tight mb-4">
                Especialista que{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a46e] to-[#8a6840]">entende o seu mercado</span>
              </h2>
            </div>
            <div className="space-y-3 text-[#5a5a58] leading-relaxed text-sm md:text-base">
              <p>Passei anos estudando por que lojas de móveis planejados com excelentes produtos não conseguiam crescer de forma consistente. A resposta era sempre a mesma: <span className="text-[#909090]">dependência de indicação e falta de um sistema previsível de geração de oportunidades.</span></p>
              <p>Desenvolvi o <span className="text-[#b48c5a] font-medium">Método Projeto Fechado™</span> especificamente para resolver esse problema. Não é tráfego pago genérico. É um sistema completo que atrai, filtra e converte pessoas que estão <span className="text-[#909090]">ativamente planejando uma reforma</span>.</p>
              <p>Trabalho exclusivamente com lojas de móveis planejados com faturamento acima de R$50 mil mensais, porque é onde consigo gerar o maior impacto.</p>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-2">
              {credentials.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="text-center p-3 rounded-xl border border-[rgba(180,140,90,0.1)] bg-[rgba(180,140,90,0.03)]"
                >
                  <p className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#c9a46e] to-[#b48c5a]">{c.number}</p>
                  <p className="text-[#3a3a38] text-xs mt-0.5">{c.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.button
              onClick={onCTA}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-gradient-to-r from-[#c9a46e] to-[#b48c5a] text-[#080808] font-bold text-sm shadow-[0_0_30px_rgba(180,140,90,0.2)]"
            >
              Agendar meu Diagnóstico →
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
