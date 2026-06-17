"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";
import { X } from "lucide-react";

interface QuizProps {
  isOpen: boolean;
  onClose: () => void;
}

type Answers = Record<string, string>;

const questions = [
  { id: "projects", type: "choice", label: "Quantos projetos você fecha por mês?", options: ["0 a 2", "3 a 5", "6 a 10", "10 ou mais"] },
  { id: "ticket", type: "choice", label: "Qual é o seu ticket médio?", options: ["Até R$10 mil", "R$10 a R$20 mil", "R$20 a R$30 mil", "Acima de R$30 mil"] },
  { id: "origin", type: "choice", label: "Como a maioria dos seus clientes chegam até você?", options: ["Indicação", "Instagram", "Google", "Tráfego Pago", "Outros"] },
  { id: "challenge", type: "choice", label: "Qual é o seu maior desafio hoje?", options: ["Poucos orçamentos", "Muitos curiosos", "Dependência de indicação", "Baixa conversão", "Falta de previsibilidade"] },
  { id: "marketing", type: "choice", label: "Quanto você investe em marketing por mês?", options: ["Nada", "Até R$500", "R$500 a R$1.500", "Acima de R$1.500"] },
  { id: "interest", type: "choice", label: "Se identificarmos uma oportunidade clara de crescimento, você teria interesse em investir para implementá-la?", options: ["Sim, estou pronto", "Talvez, dependendo do caso", "Ainda não"] },
  { id: "name", type: "text", label: "Qual é o seu nome?", placeholder: "Seu nome completo" },
  { id: "company", type: "text", label: "Nome da sua loja?", placeholder: "Nome da empresa" },
  { id: "city", type: "text", label: "Em qual cidade você atua?", placeholder: "Cidade · Estado" },
  { id: "phone", type: "phone", label: "Qual é o seu WhatsApp?", placeholder: "(53) 99999-9999" },
];

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

const WHATSAPP_NUMBER = "5353999972327";

export default function Quiz({ isOpen, onClose }: QuizProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [inputValue, setInputValue] = useState("");
  const [done, setDone] = useState(false);

  const current = questions[step];
  const progress = ((step + 1) / questions.length) * 100;
  const isDataStep = ["name", "company", "city", "phone"].includes(current?.id);

  const next = useCallback(() => {
    if (step < questions.length - 1) {
      setStep((s) => s + 1);
      setInputValue("");
    } else {
      setDone(true);
    }
  }, [step]);

  const handleText = () => {
    if (!inputValue.trim()) return;
    setAnswers((a) => ({ ...a, [current.id]: inputValue.trim() }));
    next();
  };

  const handlePhone = () => {
    const digits = inputValue.replace(/\D/g, "");
    if (digits.length < 10) return;
    setAnswers((a) => ({ ...a, [current.id]: inputValue }));
    next();
  };

  const handleChoice = (option: string) => {
    setAnswers((a) => ({ ...a, [current.id]: option }));
    setTimeout(() => next(), 300);
  };

  const handleWhatsApp = () => {
    const a = answers;
    const msg = encodeURIComponent(
      `Olá Igor! Acabei de responder o diagnóstico. Minhas informações:\n\n` +
      `👤 Nome: ${a.name || ""}\n` +
      `🏪 Loja: ${a.company || ""}\n` +
      `📍 Cidade: ${a.city || ""}\n` +
      `📊 Projetos/mês: ${a.projects || ""}\n` +
      `💰 Ticket médio: ${a.ticket || ""}\n` +
      `📣 Origem dos clientes: ${a.origin || ""}\n` +
      `🎯 Maior desafio: ${a.challenge || ""}\n` +
      `📈 Investimento em marketing: ${a.marketing || ""}\n` +
      `✅ Interesse em investir: ${a.interest || ""}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  const resetQuiz = () => {
    setStep(0);
    setAnswers({});
    setInputValue("");
    setDone(false);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[rgba(4,4,4,0.93)] backdrop-blur-md"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 24 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-lg bg-[#0f0e0c] border border-[rgba(255,255,255,0.08)] rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="p-6 border-b border-[rgba(255,255,255,0.06)]">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-[#b48c5a] text-xs font-medium tracking-widest uppercase">
                  {isDataStep ? "Quase lá" : "Diagnóstico gratuito"}
                </span>
                {isDataStep && <p className="text-[#4a4a48] text-xs mt-0.5">Precisamos dos seus dados para enviar a análise</p>}
              </div>
              <button
                onClick={() => { onClose(); resetQuiz(); }}
                className="w-8 h-8 rounded-full border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[#6a6a68] hover:text-[#f0ede8] hover:border-[rgba(255,255,255,0.2)] transition-all"
              >
                <X size={14} />
              </button>
            </div>
            {!done && (
              <div className="space-y-2">
                <div className="h-1 bg-[rgba(255,255,255,0.05)] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#c9a46e] to-[#b48c5a] rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </div>
                <p className="text-[#3a3a38] text-xs text-right">{step + 1} de {questions.length}</p>
              </div>
            )}
          </div>

          <div className="p-8 min-h-[320px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {done ? (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-center space-y-6"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#c9a46e] to-[#8a6840] flex items-center justify-center mx-auto text-2xl">✓</div>
                  <div>
                    <h3 className="text-2xl font-semibold text-[#f0ede8] mb-2">Diagnóstico concluído!</h3>
                    <p className="text-[#6a6a68] leading-relaxed text-sm">Identificamos oportunidades de crescimento para sua loja. Clique abaixo para receber sua análise personalizada.</p>
                  </div>
                  <motion.button
                    onClick={handleWhatsApp}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#c9a46e] to-[#b48c5a] text-[#080808] font-semibold text-base shadow-[0_0_30px_rgba(180,140,90,0.3)]"
                  >
                    📲 Receber minha análise
                  </motion.button>
                  <p className="text-[#3a3a38] text-xs">Você será redirecionado para o WhatsApp</p>
                </motion.div>
              ) : (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-6"
                >
                  <h3 className="text-xl md:text-2xl font-semibold text-[#f0ede8] leading-snug">{current.label}</h3>

                  {(current.type === "text" || current.type === "phone") && (
                    <div className="space-y-3">
                      <input
                        autoFocus
                        type={current.type === "phone" ? "tel" : "text"}
                        value={inputValue}
                        onChange={(e) => {
                          const val = current.type === "phone" ? formatPhone(e.target.value) : e.target.value;
                          setInputValue(val);
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") current.type === "phone" ? handlePhone() : handleText();
                        }}
                        placeholder={current.placeholder}
                        className="w-full px-4 py-3.5 rounded-xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-[#f0ede8] placeholder-[#3a3a38] text-base outline-none focus:border-[rgba(180,140,90,0.4)] transition-all"
                      />
                      <motion.button
                        onClick={current.type === "phone" ? handlePhone : handleText}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={!inputValue.trim()}
                        className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#c9a46e] to-[#b48c5a] text-[#080808] font-semibold disabled:opacity-30 transition-all"
                      >
                        Continuar →
                      </motion.button>
                    </div>
                  )}

                  {current.type === "choice" && (
                    <div className="grid gap-2">
                      {current.options?.map((opt) => (
                        <motion.button
                          key={opt}
                          onClick={() => handleChoice(opt)}
                          whileHover={{ x: 4 }}
                          whileTap={{ scale: 0.98 }}
                          className={`w-full text-left px-4 py-3.5 rounded-xl border text-sm transition-all duration-200 ${
                            answers[current.id] === opt
                              ? "border-[rgba(180,140,90,0.5)] bg-[rgba(180,140,90,0.08)] text-[#c9a46e]"
                              : "border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] text-[#8a8880] hover:border-[rgba(180,140,90,0.25)] hover:text-[#c0bdb8]"
                          }`}
                        >
                          {opt}
                        </motion.button>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
