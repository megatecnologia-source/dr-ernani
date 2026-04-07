import { motion } from "motion/react";
import { Star, Quote, ArrowRight } from "lucide-react";

const testimonials = [
  {
    text: "Muito atencioso, tira todas as dúvidas e o resultado fica maravilhoso. Me senti segura desde a primeira consulta.",
    author: "M. Silva",
    location: "São Luís"
  },
  {
    text: "Excelente profissional, super recomendo. A técnica dele é impecável e o pós-operatório foi muito tranquilo.",
    author: "R. Oliveira",
    location: "Bacabal"
  },
  {
    text: "Realizei meu sonho da mamoplastia com ele. A cicatriz ficou quase imperceptível, superou todas as minhas expectativas.",
    author: "A. Costa",
    location: "Santa Inês"
  }
];

export default function Results() {
  return (
    <section id="resultados" className="py-24 bg-[#0A1A2F] relative overflow-hidden">
      <div className="w-full max-w-[75%] mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-5xl font-display font-bold mb-4 text-[#F8FAFC] leading-tight">
            Transformações que vão <span className="text-[#00E5FF]">além do espelho</span>
          </h2>
          <p className="text-[#F8FAFC]/60 text-sm md:text-base max-w-2xl mx-auto">
            A satisfação de nossas pacientes é o nosso maior selo de qualidade e autoridade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 relative"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-white/5" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#00E5FF] text-[#00E5FF]" />
                ))}
              </div>
              <p className="text-[#F8FAFC]/80 mb-8 italic leading-relaxed">
                "{item.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00E5FF] to-[#1E3A8A] flex items-center justify-center font-bold text-[#0A1A2F]">
                  {item.author[0]}
                </div>
                <div>
                  <p className="font-bold text-[#F8FAFC]">{item.author}</p>
                  <p className="text-xs text-[#F8FAFC]/40">{item.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-snow-white/40 mb-6 uppercase tracking-widest">Acompanhe resultados reais no Instagram</p>
          <a
            href="https://www.instagram.com/drernanicastro/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cyan-tech hover:text-white transition-colors font-bold"
          >
            Ver Galeria no Instagram
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

