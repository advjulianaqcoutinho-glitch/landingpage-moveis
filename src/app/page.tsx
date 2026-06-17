"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Identification from "@/components/Identification";
import Method from "@/components/Method";
import About from "@/components/About";
import Results from "@/components/Results";
import Comparison from "@/components/Comparison";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import MobileCTA from "@/components/MobileCTA";
import Quiz from "@/components/Quiz";

export default function Home() {
  const [quizOpen, setQuizOpen] = useState(false);
  const openQuiz = () => setQuizOpen(true);

  return (
    <>
      <div className="grain-overlay" />

      <Navbar onCTA={openQuiz} />

      <main className="pt-16">
        <Hero onCTA={openQuiz} />
        <Identification />
        <Method />
        <About onCTA={openQuiz} />
        <Results />
        <Comparison />
        <FAQ />
        <FinalCTA onCTA={openQuiz} />
      </main>

      <footer className="py-8 px-6 border-t border-[rgba(255,255,255,0.04)]">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-[#3a3a38] text-sm">
            © {new Date().getFullYear()} Igor Pacheco · Especialista em crescimento para lojas de móveis planejados
          </p>
          <p className="text-[#2a2a28] text-xs">Método Projeto Fechado™ · Todos os direitos reservados</p>
        </div>
      </footer>

      <MobileCTA onCTA={openQuiz} />
      <Quiz isOpen={quizOpen} onClose={() => setQuizOpen(false)} />
    </>
  );
}
