import { motion } from "motion/react";
import { MapPin } from "lucide-react";

const cities = [
  { name: "São Luís", state: "MA", active: true },
  { name: "Bacabal", state: "MA", active: true },
  { name: "Santa Inês", state: "MA", active: true },
  { name: "Pedreiras", state: "MA", active: true },
  { name: "Lago da Pedra", state: "MA", active: true }
];

export default function Locations() {
  return (
    <section id="atendimento" className="py-24 bg-[#0A1A2F] relative overflow-hidden">
      <div className="w-full max-w-[75%] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight text-[#F8FAFC]">
              Presença Especializada em <span className="text-[#00E5FF]">todo o Maranhão</span>
            </h2>
            <p className="text-[#F8FAFC]/70 text-lg mb-10 leading-relaxed">
              O Dr. Ernani Castro leva sua expertise e tecnologia de ponta para as principais cidades do estado, garantindo conveniência e autoridade regional.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cities.map((city, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#00E5FF]/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#00E5FF]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#F8FAFC]">{city.name}</p>
                    <p className="text-xs text-[#F8FAFC]/40">{city.state}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative p-0 overflow-hidden">
              {/* Stylized Map Placeholder */}
              <div className="bg-transparent aspect-[4/3] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
                    <path d="M20,30 Q40,10 60,30 T90,50 T70,80 T30,70 Z" />
                  </svg>
                </div>
                <div className="relative z-10 text-center">
                  <MapPin className="w-12 h-12 text-[#00E5FF] mx-auto mb-4 animate-bounce" />
                  <p className="font-display font-bold text-xl text-[#F8FAFC]">Atendimento Regional</p>
                  <p className="text-sm text-[#F8FAFC]/40">Consulte datas disponíveis</p>
                </div>
                
                {/* City dots */}
                <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-[#00E5FF] rounded-full shadow-[0_0_10px_#00E5FF]" />
                <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-[#00E5FF] rounded-full shadow-[0_0_10px_#00E5FF]" />
                <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-[#00E5FF] rounded-full shadow-[0_0_10px_#00E5FF]" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
