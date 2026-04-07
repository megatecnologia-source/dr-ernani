import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="sobre" className="section-padding bg-[#F8FAFC] relative overflow-hidden">
      {/* Background Large Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-display font-black text-[#0A1A2F]/5 whitespace-nowrap pointer-events-none select-none">
        DR. ERNANI CASTRO
      </div>

      <div className="w-full max-w-[75%] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Mobile Name (Top) */}
          <div className="lg:hidden text-center w-full">
            <h2 className="text-3xl font-display font-bold text-[#0A1A2F] mb-2">
              Doutor Ernani Sousa Castro
            </h2>
            <p className="text-[#1E3A8A] font-bold tracking-widest text-xs uppercase">
              Médico Cirurgião Plástico
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative order-1 lg:order-none"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border-8 border-gray-100 shadow-2xl">
              <img
                src="https://res.cloudinary.com/dplhygs4v/image/upload/f_auto,q_auto,w_800/v1775514728/SaveClip.App_564127220_17969272046956689_4936779480211259928_n_x4nq2h.webp"
                alt="Dr. Ernani Castro"
                className="w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 order-2 lg:order-none"
          >
            <div className="hidden lg:inline-block px-4 py-1 rounded-full bg-[#1E3A8A]/5 border border-[#1E3A8A]/10 text-[#1E3A8A] text-xs font-bold tracking-widest mb-6">
              SOBRE O DOUTOR
            </div>
            <h2 className="hidden lg:block text-4xl md:text-5xl font-display font-bold mb-8 text-[#0A1A2F]">
              Dr. Ernani Sousa Castro
            </h2>
            <p className="hidden lg:block text-[#1E3A8A] font-bold mb-6 tracking-widest text-sm">
              MÉDICO CIRURGIÃO PLÁSTICO | CRM-MA 5546 | RQE 2481
            </p>
            
            <div className="space-y-6 text-[#0A1A2F]/80 text-base md:text-lg leading-relaxed text-center lg:text-left">
              <p>
                Sou médico formado por instituições de prestígio como a <span className="text-[#0A1A2F] font-bold">USP</span> e <span className="text-[#0A1A2F] font-bold">UFPI</span>, com título de especialista em Cirurgia Plástica reconhecido e mais de 10 anos de prática clínica.
              </p>
              <p>
                Minha atuação é focada em <span className="text-[#0A1A2F] font-bold">contorno corporal de alta definição</span>, utilizando as tecnologias mais avançadas do mercado para garantir resultados naturais e seguros.
              </p>
              <p>
                Com uma trajetória pautada pela ética cristã, minha missão é elevar a autoestima de meus pacientes através da realização de sonhos, tratando cada pessoa com a atenção e o cuidado que ela merece.
              </p>
            </div>

            <div className="mt-10 flex justify-center lg:justify-start">
              <a
                href="https://wa.me/559883444737?text=Ol%C3%A1%20Dr.%20Ernani%2C%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-button text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold inline-flex items-center gap-2 hover:scale-105 transition-transform shadow-lg text-sm md:text-base"
              >
                Agende sua Consulta
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
