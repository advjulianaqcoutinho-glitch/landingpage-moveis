"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

interface ExitIntentProps {
  onCTA: () => void;
}

export default function ExitIntent({ onCTA }: ExitIntentProps) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    let timeout: ReturnType<typeof setTimeout>;
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 10 && !dismissed) {
        timeout = setTimeout(() => setVisible(true), 200);
      }
    };
    const mobileTimeout = setTimeout(() => {
      if (!dismissed && window.innerWidth < 768) setVisible(true);
    }, 40000);
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(timeout);
      clearTimeout(mobileTimeout);
    };
  }, [dismissed]);

  const dismiss = () => { setVisible(false); setDismissed(true); };
  const handleCTA = () => { dismiss(); onCTA(); };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] flex items-center justify-center p-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={dismiss} className="absolute inset-0 bg-[rgba(4,4,4,0.88)] backdrop-blur-md" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-md bg-[#0f0e0c] border border-[rgba(255,255,255,0.08)] rounded-3xl overflow-hidden shadow-2xl text-center"
          >
            <div className="h-1 w-full bg-gradient-to-r from-[#c9a46e] to-[#8a6840]" />
            <div className="p-8 space-y-6">
              <button onClick={dismiss} className="absolute top-5 right-5 w-8 h-8 rounded-full border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[#4a4a48] hover:text-[#f0ede8] transition-all">
                <X size={14} />
              </button>
              <div className="text-4xl">⚠️</div>
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-[#f0ede8] leading-snug">Espera — você está saindo sem o seu plano gratuito</h3>
                <p className="text-[#6a6a68] leading-relaxed text-sm">Leva menos de 2 minutos. Você vai descobrir exatamente o que está impedindo sua loja de crescer — sem custo, sem compromisso.</p>
              </div>
              <div className="space-y-3">
                <motion.button onClick={handleCTA} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full py-4 rounded-xl bg-gradient-to-r from-[#c9a46e] to-[#b48c5a] text-[#080808] font-semibold shadow-[0_0_30px_rgba(180,140,90,0.25)]">
                  Quero meu diagnóstico gratuito
                </motion.button>
                <button onClick={dismiss} className="w-full py-3 text-[#3a3a38] text-sm hover:text-[#6a6a68] transition-colors">
                  Não, prefiro continuar sem crescer
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
