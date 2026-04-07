import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Sobre Mim", href: "#sobre" },
    { name: "Especialidades", href: "#especialidades" },
    { name: "Resultados", href: "#resultados" },
    { name: "Onde eu Atendo", href: "#atendimento" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0A1A2F]/95 backdrop-blur-md py-3 shadow-2xl" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[90%] lg:max-w-[85%] mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://res.cloudinary.com/dplhygs4v/image/upload/v1775514728/LOGO-ERNANI-CASTRO-300x84_mzunbm.png"
            alt="Dr. Ernani Castro Logo"
            className="h-8 md:h-10 lg:h-12 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden xl:flex items-center gap-4 lg:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] lg:text-xs font-bold text-white/80 hover:text-[#00E5FF] transition-colors uppercase tracking-widest whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/559883444737?text=Ol%C3%A1%20Dr.%20Ernani%2C%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#00E5FF] text-[#0A1A2F] px-5 py-2.5 rounded-full text-[10px] font-black flex items-center gap-2 hover:scale-105 transition-transform shadow-[0_0_15px_rgba(0,229,255,0.4)]"
          >
            <Phone className="w-3.5 h-3.5" />
            AGENDAR AGORA
          </a>
        </div>

        {/* Mobile Toggle & Action */}
        <div className="flex items-center gap-4 lg:hidden">
          <a
            href="https://wa.me/559883444737?text=Ol%C3%A1%20Dr.%20Ernani%2C%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#00E5FF] text-[#0A1A2F] px-4 py-2 rounded-full text-[10px] font-black shadow-[0_0_10px_rgba(0,229,255,0.3)]"
          >
            AGENDAR
          </a>
          <button
            className="text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0A1A2F] border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-bold text-white uppercase tracking-widest"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/559883444737?text=Ol%C3%A1%20Dr.%20Ernani%2C%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-button text-white px-6 py-4 rounded-xl text-center font-bold"
              >
                AGENDAR AGORA
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
