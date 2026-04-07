import { motion } from "motion/react";
import { Sparkles, Scissors, Zap, Heart, ArrowRight } from "lucide-react";

const specialties = [
  {
    title: "Flancoplastia",
    description: "Técnica exclusiva para definição da cintura e elevação de glúteos e culotes. Pioneiro no Maranhão.",
    icon: Scissors,
    badge: "Pioneiro"
  },
  {
    title: "Argoplasma",
    description: "O que há de mais moderno na tecnologia para tratar flacidez e retração de pele com precisão.",
    icon: Zap,
    badge: "Tecnologia"
  },
  {
    title: "Mamoplastia Short Scar",
    description: "Seios harmoniosos com cicatrizes reduzidas e técnica de refinamento para resultados naturais.",
    icon: Sparkles,
  },
  {
    title: "Lipo HD & Abdominoplastia",
    description: "Definição muscular e contorno harmônico com resultados naturais e escultura de alta definição.",
    icon: Heart,
  }
];

export default function Specialties() {
  return (
    <section id="especialidades" className="section-padding bg-[#F8FAFC] relative overflow-hidden">
      <div className="w-full max-w-[75%] mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block px-3 py-1 rounded-full bg-[#1E3A8A]/5 border border-[#1E3A8A]/10 text-[#1E3A8A] text-[10px] md:text-xs font-bold tracking-widest mb-4 md:mb-6">
            PROTOCOLOS EXCLUSIVOS
          </div>
          <h2 className="text-2xl md:text-5xl font-display font-bold mb-4 md:mb-6 text-[#0A1A2F] leading-tight">
            Procedimentos que você <br className="hidden md:block" /> <span className="text-[#1E3A8A]">encontra no consultório:</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {specialties.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#F8FAFC] border border-gray-100 p-6 md:p-10 rounded-3xl group hover:bg-[#0A1A2F] transition-all duration-500 cursor-default flex flex-col items-center text-center md:items-start md:text-left"
            >
              <div className="mb-6 md:mb-8 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#1E3A8A]/5 flex items-center justify-center group-hover:bg-transparent transition-colors">
                <item.icon className="w-7 h-7 md:w-8 md:h-8 text-[#1E3A8A] group-hover:text-[#00E5FF] group-hover:drop-shadow-[0_0_8px_#00E5FF] transition-all duration-500" />
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold mb-3 md:mb-4 text-[#0A1A2F] group-hover:text-[#F8FAFC] transition-colors duration-500">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-[#0A1A2F]/60 leading-relaxed mb-6 group-hover:text-[#F8FAFC]/80 transition-colors duration-500">
                {item.description}
              </p>
              <div className="flex items-center gap-2 text-[#1E3A8A] group-hover:text-[#00E5FF] font-bold text-xs md:text-sm transition-colors duration-500 mt-auto">
                SAIBA MAIS
                <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
