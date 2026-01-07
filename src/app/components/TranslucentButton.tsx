import { motion } from "motion/react";
import { useState } from "react";

export function TranslucentButton() {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <motion.button
      className="relative px-10 py-5 text-lg font-semibold text-white bg-teal-500/30 backdrop-blur-lg border border-cyan-400/40 rounded-2xl overflow-hidden"
      style={{
        boxShadow: isPressed
          ? "0 4px 16px rgba(20, 184, 166, 0.2), inset 0 2px 8px rgba(0, 0, 0, 0.3)"
          : "0 8px 32px rgba(20, 184, 166, 0.35), 0 4px 16px rgba(6, 182, 212, 0.25), 0 0 40px rgba(20, 184, 166, 0.15)",
      }}
      animate={{
        scale: isPressed ? 0.95 : 1,
        y: isPressed ? 4 : 0,
      }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 12px 48px rgba(20, 184, 166, 0.45), 0 6px 24px rgba(6, 182, 212, 0.35), 0 0 60px rgba(20, 184, 166, 0.25)",
      }}
      whileTap={{
        scale: 0.95,
        y: 4,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17,
      }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      onTouchStart={() => setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
    >
      {/* Brillo sutil superior */}
      <div className="absolute inset-x-0 top-0 h-1/2 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(103, 232, 249, 0.3), transparent)' }} />
      
      {/* Contenido del botón */}
      <span className="relative z-10 tracking-wide">VERCED</span>
      
      {/* Efecto de luz al hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent pointer-events-none"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6 }}
      />
      
      {/* Resplandor inferior */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
    </motion.button>
  );
}