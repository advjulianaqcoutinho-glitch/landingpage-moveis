"use client";

import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";

interface MobileCTAProps {
  onCTA: () => void;
}

export default function MobileCTA({ onCTA }: MobileCTAProps) {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (v) => setVisible(v > 400));
  }, [scrollY]);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={visible ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-0 left-0 right-0 z-40 sm:hidden px-4 pb-6 pt-3"
      style={{
        background: "linear-gradient(to top, rgba(8,8,8,0.98) 60%, transparent)",
      }}
    >
      <button
        onClick={onCTA}
        className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#c9a46e] to-[#b48c5a] text-[#080808] font-semibold text-base shadow-[0_0_40px_rgba(180,140,90,0.4)]"
      >
        Receber meu plano gratuito
      </button>
    </motion.div>
  );
}
