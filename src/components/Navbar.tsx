"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface NavbarProps {
  onCTA: () => void;
}

export default function Navbar({ onCTA }: NavbarProps) {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  return (
    <motion.header className="fixed top-0 left-0 right-0 z-40">
      <motion.div
        className="absolute inset-0 bg-[#080808] border-b border-[rgba(255,255,255,0.06)] backdrop-blur-xl"
        style={{ opacity: bgOpacity }}
      />
      <div className="relative max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Image src="/logo-metodo.svg" alt="Método Projeto Fechado" width={200} height={40} className="h-8 w-auto" />
        <motion.button
          onClick={onCTA}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="hidden sm:flex px-5 py-2.5 rounded-full bg-gradient-to-r from-[#c9a46e] to-[#b48c5a] text-[#080808] font-semibold text-sm shadow-[0_0_20px_rgba(180,140,90,0.2)]"
        >
          Diagnóstico gratuito
        </motion.button>
      </div>
    </motion.header>
  );
}
