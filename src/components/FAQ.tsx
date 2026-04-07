import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "O plano de saúde cobre a cirurgia?",
    answer: "A maioria dos procedimentos estéticos não são cobertos por planos de saúde. No entanto, cirurgias reparadoras podem ter cobertura. Realizamos uma avaliação detalhada para orientar cada caso."
  },
  {
    question: "Qual o tempo médio de recuperação?",
    answer: "O tempo varia conforme o procedimento. Em geral, atividades leves podem ser retomadas em 7 a 14 dias, enquanto exercícios físicos intensos exigem de 30 a 60 dias."
  },
  {
    question: "Como agendar consulta em cidades do interior?",
    answer: "Temos uma agenda programada para cada cidade (Bacabal, Pedreiras, etc). Você pode falar com nossa equipe pelo WhatsApp para saber a próxima data disponível na sua região."
  },
  {
    question: "Quais tecnologias são utilizadas?",
    answer: "Utilizamos o que há de mais moderno, como o Argoplasma para retração de pele e técnicas de Mamoplastia Short Scar para cicatrizes mínimas."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-[#0A1A2F] relative overflow-hidden">
      <div className="w-full max-w-[75%] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/3"
          >
            <h2 className="text-4xl font-display font-bold mb-6 text-[#F8FAFC]">
              Dúvidas <span className="text-[#00E5FF]">Frequentes</span>
            </h2>
            <p className="text-[#F8FAFC]/60 mb-8">
              Preparamos as respostas para as perguntas mais comuns das nossas pacientes. Se precisar de mais informações, nossa equipe está pronta para ajudar.
            </p>
            <a
              href="https://wa.me/559883444737?text=Ol%C3%A1%20Dr.%20Ernani%2C%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#00E5FF] text-[#0A1A2F] px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform"
            >
              <MessageCircle className="w-5 h-5" />
              Falar com a Equipe
            </a>
          </motion.div>

          <div className="lg:w-2/3 space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="overflow-hidden border-b border-white/10"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-6 flex items-center justify-between text-left transition-colors"
                >
                  <span className="font-bold text-lg text-[#F8FAFC]">{faq.question}</span>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-[#00E5FF]" />
                  ) : (
                    <Plus className="w-5 h-5 text-[#00E5FF]" />
                  )}
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="pb-6 text-[#F8FAFC]/60">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
