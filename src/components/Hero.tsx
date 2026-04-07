import { motion } from "motion/react";
import { ArrowRight, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden w-full bg-[#0A1A2F]">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-[center_right] md:bg-right"
        style={{ 
          backgroundImage: `url('https://res.cloudinary.com/dplhygs4v/image/upload/f_auto,q_auto,w_1920/v1775529343/DR_ERNANI_-_IMAGEM_HERO_cvuxml.png')`,
        }}
      />

      {/* Subtle Gradient Overlay for Text Contrast on Mobile/Desktop */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-white/40 via-white/10 to-transparent md:from-white/20 md:via-transparent md:to-transparent" />

      {/* Floating Content - Centered on Mobile, Left-aligned on Desktop */}
      <div className="w-full max-w-[90%] md:max-w-[75%] mx-auto px-4 md:px-6 relative z-20 mt-28 md:mt-32">
        <div className="max-w-4xl text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center md:items-start"
          >
            <h1 className="text-lg md:text-2xl lg:text-3xl font-display leading-[1.2] mb-4 md:mb-6 tracking-tight drop-shadow-md">
              <span className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-[#00E5FF]">Dr. Ernani Castro</span> <br />
              <span className="font-bold text-white">Especialista em cirurgia de Mama</span> <br />
              <span className="font-bold text-white">Short Scar, Argoplasma e Contorno Corporal.</span>
            </h1>
            
            <p className="text-sm md:text-lg lg:text-xl text-white/90 font-bold mb-6 md:mb-10 leading-tight max-w-2xl drop-shadow-sm">
              Tratamentos exclusivos e tecnologia de ponta para transformar <br className="hidden md:block" />
              seu corpo com consistência e segurança.
            </p>
            
            <div className="flex flex-col items-center md:items-start gap-4 md:gap-8 w-full">
              <a
                href="https://wa.me/559883444737?text=Ol%C3%A1%20Dr.%20Ernani%2C%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-button text-white px-6 py-3 md:px-14 md:py-5 rounded-xl font-bold flex items-center justify-center gap-3 hover:scale-105 transition-transform shadow-xl group w-full md:w-fit text-sm md:text-lg whitespace-nowrap"
              >
                Agende sua Consulta
                <ArrowRight className="w-4 h-4 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <div className="flex items-center gap-3 text-[#0A1A2F] text-[10px] md:text-base font-bold bg-white/60 backdrop-blur-md p-2 md:p-3 rounded-xl shadow-sm border border-white/20">
                <div className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-[#00E5FF] flex items-center justify-center flex-shrink-0 shadow-md">
                  <MapPin className="w-3 h-3 md:w-5 md:h-5 text-[#0A1A2F]" />
                </div>
                <span>Atendimento presencial em São Luís e região</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
