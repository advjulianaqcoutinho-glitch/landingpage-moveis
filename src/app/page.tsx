"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Identification from "@/components/Identification";
import Method from "@/components/Method";
import Results from "@/components/Results";
import Comparison from "@/components/Comparison";
import FinalCTA from "@/components/FinalCTA";
import Quiz from "@/components/Quiz";

export default function Home() {
  const [quizOpen, setQuizOpen] = useState(false);

  return (
    <>
      <div className="grain-overlay" />
      <main>
        <Hero onCTA={() => setQuizOpen(true)} />
        <Identification />
        <Method />
        <Results />
        <Comparison />
        <FinalCTA onCTA={() => setQuizOpen(true)} />
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[rgba(255,255,255,0.04)]">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#3a3a38] text-sm">
            © {new Date().getFullYear()} Igor Pacheco · Especialista em crescimento para lojas de móveis planejados
          </p>
          <p className="text-[#2a2a28] text-xs">
            Método Projeto Fechado™ · Todos os direitos reservados
          </p>
        </div>
      </footer>

      <Quiz isOpen={quizOpen} onClose={() => setQuizOpen(false)} />
    </>
  );
}
