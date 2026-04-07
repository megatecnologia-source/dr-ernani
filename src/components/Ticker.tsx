import { motion } from "motion/react";

const terms = [
  "PIONEIRO EM FLANCOPLASTIA NO MARANHÃO",
  "TECNOLOGIA ARGOPLASMA",
  "MAMOPLASTIA SHORT SCAR",
  "LIPO HD"
];

export default function Ticker() {
  return (
    <div className="bg-royal-classic py-4 overflow-hidden whitespace-nowrap border-y border-white/10">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex gap-12 items-center will-change-transform"
      >
        {[...terms, ...terms, ...terms].map((term, i) => (
          <span
            key={i}
            className="text-xs font-display font-bold tracking-widest text-snow-white flex items-center gap-6"
          >
            {term}
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 bg-white rotate-45" />
              <div className="w-1.5 h-1.5 bg-white rotate-45" />
              <div className="w-1.5 h-1.5 bg-white rotate-45" />
            </div>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
