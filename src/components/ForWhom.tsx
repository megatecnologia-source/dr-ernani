import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const points = [
  "Deseja eliminar flacidez e gordura localizada com tecnologia de ponta.",
  "Busca um contorno corporal de alta definição e resultados naturais.",
  "Já tentou outros métodos e não obteve os resultados desejados.",
  "Valoriza a segurança de um cirurgião pioneiro e experiente.",
  "Deseja melhorar a autoestima e a estética corporal sem sacrificar a saúde.",
  "Precisa de um acompanhamento médico especializado e humanizado."
];

export default function ForWhom() {
  return (
    <section id="para-quem" className="section-padding bg-[#0A1A2F] relative overflow-hidden">
      <div className="w-full max-w-[75%] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-[#F8FAFC]">
                Para quem <span className="text-[#00E5FF]">é:</span>
              </h2>
              <p className="text-lg text-[#F8FAFC]/70 mb-10 leading-relaxed">
                Para <span className="text-[#F8FAFC] font-bold">homens e mulheres</span> que buscam excelência em cirurgia plástica e resultados que transformam a vida. É para você que:
              </p>
              
              <div className="space-y-6">
                {points.map((point, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-[#00E5FF]/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-[#00E5FF]" />
                    </div>
                    <p className="text-[#F8FAFC]/80 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative z-10">
              <div className="w-full max-w-[500px] mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white/5">
                <img
                  src="https://res.cloudinary.com/dplhygs4v/image/upload/v1775514728/SaveClip.App_654019156_18086431382211751_3033090636564330698_n_ag180s.jpg"
                  alt="Transformação"
                  className="w-full h-auto block"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
