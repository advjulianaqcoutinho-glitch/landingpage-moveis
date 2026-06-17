"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Já investi em anúncios antes e não tive resultado. Como isso é diferente?",
    a: "A maioria das agências de tráfego pago trabalha com volume: geram muitos leads baratos sem qualidade. O Método Projeto Fechado™ é o oposto. Trabalhamos com segmentação cirúrgica — alcançamos pessoas que estão ativamente em obra ou reforma, com o orçamento e o momento certos. Antes de qualquer investimento, fazemos um diagnóstico da sua operação para garantir que o sistema vai funcionar no seu caso específico.",
  },
  {
    q: "Minha cidade é pequena. Isso funciona para mim?",
    a: "Sim. O método foi validado em cidades de diferentes portes. Em cidades menores, a vantagem é ainda maior: a concorrência geralmente não usa estratégias estruturadas, o que significa que quem chegar primeiro com um sistema eficiente vai dominar o mercado local. O que importa é o volume de pessoas em reforma na sua região, não o tamanho da cidade.",
  },
  {
    q: "Quanto tempo leva para ver os primeiros resultados?",
    a: "Os primeiros resultados aparecem em 30 a 60 dias após a implementação completa do sistema. Isso varia de acordo com a estrutura da sua loja, o mercado local e a velocidade de implementação. O que posso garantir é que você vai ter mais clareza e controle desde o primeiro dia — sem mais depender da sorte ou das indicações.",
  },
  {
    q: "Preciso ter uma equipe de marketing para isso funcionar?",
    a: "Não. O sistema foi desenhado para funcionar mesmo sem equipe de marketing interna. Você precisa de uma pessoa para atender os leads qualificados que chegam — e isso geralmente já está coberto pela sua equipe comercial atual. Cuidamos de toda a parte estratégica e de geração de oportunidades.",
  },
  {
    q: "Como funciona a parceria? Qual é o investimento?",
    a: "Cada projeto é personalizado de acordo com o tamanho da sua loja, mercado e objetivos. Por isso não temos uma tabela de preços fixa. O diagnóstico gratuito existe justamente para entendermos sua situação real e apresentar uma proposta que faça sentido para o seu momento. Se não identificarmos uma oportunidade clara de crescimento, dizemos isso na hora.",
  },
  {
    q: "Trabalham com qualquer tipo de loja de móveis?",
    a: "Trabalhamos exclusivamente com lojas de móveis planejados com faturamento acima de R$50 mil mensais e ticket médio a partir de R$10 mil. Essa escolha não é por exclusividade — é porque é onde conseguimos gerar o maior retorno sobre investimento. Em lojas com ticket muito baixo ou em fase muito inicial, o sistema não consegue gerar o ROI que o cliente merece.",
  },
  {
    q: "Vocês garantem resultados?",
    a: "Nenhuma empresa séria garante resultados específicos em marketing — quem faz isso está mentindo. O que garantimos é um método comprovado, transparência total no processo e dedicação completa ao seu crescimento. Nosso histórico fala por si: lojas que implementam o método corretamente têm crescimento consistente e previsível.",
  },
];

function FAQItem({ q, a, index, inView }: { q: string; a: string; index: number; inView: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
        open
          ? "border-[rgba(180,140,90,0.25)] bg-[rgba(180,140,90,0.03)]"
          : "border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.015)] hover:border-[rgba(180,140,90,0.12)]"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left"
      >
        <span className={`font-medium leading-snug transition-colors duration-200 ${open ? "text-[#f0ede8]" : "text-[#a0a098]"}`}>
          {q}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${
            open
              ? "border-[rgba(180,140,90,0.4)] text-[#b48c5a]"
              : "border-[rgba(255,255,255,0.1)] text-[#4a4a48]"
          }`}
        >
          <Plus size={14} />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="px-6 pb-6 text-[#6a6a68] leading-relaxed text-sm">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0c0b09]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-[rgba(180,140,90,0.2)] to-transparent" />

      <div className="relative max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[#b48c5a] text-sm font-medium tracking-widest uppercase mb-4 block">
            Dúvidas frequentes
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#f0ede8] leading-tight">
            Perguntas{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a46e] to-[#8a6840]">
              respondidas
            </span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((item, i) => (
            <FAQItem key={i} q={item.q} a={item.a} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
