import React, { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  title: string;
  caption: string;
}

const BeforeAfterSlider = ({ before, after, title, caption }: BeforeAfterSliderProps) => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPos(percent);
  };

  const onMouseDown = () => setIsDragging(true);
  const onMouseUp = () => setIsDragging(false);
  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleGlobalMouseUp);
    return () => window.removeEventListener("mouseup", handleGlobalMouseUp);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div
        ref={containerRef}
        className="relative aspect-square w-full rounded-2xl overflow-hidden cursor-ew-resize select-none border border-white/10 group"
        onMouseMove={onMouseMove}
        onTouchMove={onTouchMove}
        onMouseDown={onMouseDown}
      >
        {/* After Image (Background) */}
        <img
          src={after}
          alt="Depois"
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
          loading="lazy"
        />

        {/* Before Image (Clipped) */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <img
            src={before}
            alt="Antes"
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
        </div>

        {/* Slider Line & Handle */}
        <div
          className="absolute inset-y-0 z-30 w-0.5 bg-white pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-[0_0_20px_rgba(0,0,0,0.3)] flex items-center justify-center">
            <div className="flex gap-0.5">
              <div className="w-0.5 h-4 bg-gray-300 rounded-full" />
              <div className="w-0.5 h-4 bg-gray-300 rounded-full" />
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="absolute top-4 left-4 z-40 px-3 py-1 bg-black/30 backdrop-blur-md rounded text-[10px] font-black tracking-widest text-[#F8FAFC] border border-white/10">
          ANTES
        </div>
        <div className="absolute top-4 right-4 z-40 px-3 py-1 bg-black/30 backdrop-blur-md rounded text-[10px] font-black tracking-widest text-[#00E5FF] border border-[#00E5FF]/20 shadow-[0_0_15px_rgba(0,229,255,0.4)]">
          DEPOIS
        </div>

        {/* Overlay Hint */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </div>

      <div className="mt-6 text-center">
        <h3 className="text-xl font-display font-bold text-white mb-2">{title}</h3>
        <p className="text-[10px] text-snow-white/40 tracking-[0.3em] uppercase font-bold">
          Arraste para comparar
        </p>
      </div>
    </div>
  );
};

const results = [
  {
    title: "Flancoplastia & Contorno",
    caption: "Redefinição da silhueta e cintura.",
    before: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=70&w=600",
    after: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=70&w=600"
  },
  {
    title: "Mamoplastia Short Scar",
    caption: "Simetria e projeção com cicatriz reduzida.",
    before: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=70&w=600",
    after: "https://images.unsplash.com/photo-1588776814546-1ffce47267a5?auto=format&fit=crop&q=70&w=600"
  },
  {
    title: "Lipoaspiração HD",
    caption: "Definição muscular e abdômen atlético.",
    before: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=70&w=600",
    after: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=70&w=600"
  },
  {
    title: "Contorno Corporal",
    caption: "Harmonia entre cintura e glúteos.",
    before: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=70&w=600",
    after: "https://images.unsplash.com/photo-1515377666659-81735e0ff041?auto=format&fit=crop&q=70&w=600"
  },
  {
    title: "Mastopexia",
    caption: "Elevação e rejuvenescimento do colo.",
    before: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=70&w=600",
    after: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=70&w=600"
  },
  {
    title: "Definição Abdominal",
    caption: "Lipo HD com foco em relevos naturais.",
    before: "https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?auto=format&fit=crop&q=70&w=600",
    after: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=70&w=600"
  }
];

export default function ResultsGallery() {
  return (
    <section id="resultados-galeria" className="section-padding bg-[#0A1A2F] w-full overflow-hidden">
      <div className="w-full max-w-[75%] mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20 text-[#00E5FF] text-xs font-bold tracking-widest mb-6">
            TRANSFORMAÇÕES REAIS
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Resultados que Inspiram
          </h2>
          <p className="text-snow-white/60 max-w-2xl mx-auto">
            Veja a diferença que o cuidado especializado pode fazer no seu corpo e rosto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {results.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <BeforeAfterSlider
                before={item.before}
                after={item.after}
                title={item.title}
                caption={item.caption}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
