import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="bg-navy-deep py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-snow-white/60 text-lg font-medium">
            Cirurgia Plástica com tecnologia de ponta e cuidado humano no Maranhão
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <div className="text-center md:text-left">
            <img
              src="https://res.cloudinary.com/dplhygs4v/image/upload/v1775514728/LOGO-ERNANI-CASTRO-300x84_mzunbm.png"
              alt="Dr. Ernani Castro Logo"
              className="h-10 w-auto object-contain mb-4 mx-auto md:mx-0"
              referrerPolicy="no-referrer"
            />
            <p className="text-snow-white/40 text-sm">Cirurgia Plástica de Alta Performance</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-xs text-snow-white/40">
              © {new Date().getFullYear()} Dr. Ernani Castro. Todos os direitos reservados.
            </p>
            <p className="text-xs text-snow-white/60">
              Criação de site profissional por <span className="text-cyan-tech font-bold">Bydo Marketing</span> e <span className="text-cyan-tech font-bold">Mega Tecnologia</span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
