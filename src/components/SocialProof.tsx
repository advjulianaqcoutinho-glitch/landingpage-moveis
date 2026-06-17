"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const notifications = [
  { city: "São Paulo", state: "SP", action: "iniciou o diagnóstico" },
  { city: "Campinas", state: "SP", action: "recebeu o plano gratuito" },
  { city: "Belo Horizonte", state: "MG", action: "iniciou o diagnóstico" },
  { city: "Curitiba", state: "PR", action: "concluiu o diagnóstico" },
  { city: "Porto Alegre", state: "RS", action: "recebeu o plano gratuito" },
  { city: "Florianópolis", state: "SC", action: "iniciou o diagnóstico" },
  { city: "Goiânia", state: "GO", action: "concluiu o diagnóstico" },
  { city: "Recife", state: "PE", action: "recebeu o plano gratuito" },
  { city: "Salvador", state: "BA", action: "iniciou o diagnóstico" },
  { city: "Fortaleza", state: "CE", action: "concluiu o diagnóstico" },
];

function getTimeAgo() {
  const mins = Math.floor(Math.random() * 25) + 2;
  return mins === 1 ? "1 min atrás" : `${mins} min atrás`;
}

export default function SocialProof() {
  const [current, setCurrent] = useState<(typeof notifications)[0] | null>(null);
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const [timeAgo, setTimeAgo] = useState("");

  useEffect(() => {
    const initialDelay = setTimeout(() => {
      showNotification(0);
    }, 8000);

    return () => clearTimeout(initialDelay);
  }, []);

  function showNotification(idx: number) {
    const item = notifications[idx % notifications.length];
    setTimeAgo(getTimeAgo());
    setCurrent(item);
    setVisible(true);

    setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        const next = idx + 1;
        setIndex(next);
        showNotification(next);
      }, 12000 + Math.random() * 8000);
    }, 5000);
  }

  return (
    <div className="fixed bottom-24 sm:bottom-6 left-4 sm:left-6 z-30 pointer-events-none">
      <AnimatePresence>
        {visible && current && (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 px-4 py-3 rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(15,14,12,0.92)] backdrop-blur-xl shadow-xl max-w-[280px]"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#c9a46e] to-[#8a6840] flex items-center justify-center flex-shrink-0 text-[#080808] text-xs font-bold">
              {current.city[0]}
            </div>
            <div className="min-w-0">
              <p className="text-[#f0ede8] text-xs font-medium leading-tight">
                {current.city} · {current.state}
              </p>
              <p className="text-[#6a6a68] text-xs leading-tight">{current.action}</p>
              <p className="text-[#3a3a38] text-[10px] mt-0.5">{timeAgo}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
