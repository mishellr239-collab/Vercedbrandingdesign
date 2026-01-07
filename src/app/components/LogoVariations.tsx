import { motion } from "motion/react";
import { useState } from "react";

export function LogoVariations() {
  const [selectedVariation, setSelectedVariation] = useState<number | null>(null);

  const variations = [
    { bg: "bg-[#00546d]", title: "Versión Principal", subtitle: "Fondo Oscuro" },
    { bg: "bg-white", title: "Versión Clara", subtitle: "Fondo Blanco", dark: true },
    { bg: "bg-gradient-to-br from-teal-800 to-teal-900", title: "Versión Horizontal", subtitle: "Layout Alternativo" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <motion.h2
        className="text-3xl font-semibold text-white mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        VARIACIONES DEL LOGO
      </motion.h2>
      
      <motion.p
        className="text-cyan-300 text-center mb-12 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Diferentes aplicaciones según el contexto
      </motion.p>

      <div className="grid grid-cols-2 gap-8 mb-12">
        {/* Versión Principal - Fondo Oscuro */}
        <motion.div
          className="relative cursor-pointer group"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
          onClick={() => setSelectedVariation(0)}
        >
          <div className="bg-[#00546d] rounded-2xl p-12 flex flex-col items-center justify-center h-80 relative overflow-hidden border-2 border-transparent group-hover:border-cyan-400 transition-all">
            {/* Logo */}
            <motion.div
              className="flex flex-col items-center gap-3"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              <div className="flex items-center gap-2">
                <svg width="60" height="60" viewBox="0 0 60 60">
                  <path d="M 10 10 L 20 35 L 25 35 L 35 10" stroke="white" strokeWidth="4" strokeLinecap="round" fill="none" />
                </svg>
                <svg width="50" height="50" viewBox="0 0 50 50">
                  <circle cx="25" cy="25" r="18" stroke="#7dd3dd" strokeWidth="3" fill="none" />
                  <circle cx="25" cy="25" r="8" fill="#7dd3dd" />
                </svg>
                <span className="text-5xl font-bold text-white">C</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-white tracking-wider">VERCED</span>
                <span className="text-lg text-cyan-300 tracking-widest">óptica</span>
              </div>
            </motion.div>

            {/* Efecto hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.8 }}
            />
          </div>
          
          <motion.div
            className="mt-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <h3 className="text-white font-semibold text-lg">Versión Principal</h3>
            <p className="text-cyan-300 text-sm">Fondo Oscuro</p>
          </motion.div>
        </motion.div>

        {/* Versión Clara - Fondo Blanco */}
        <motion.div
          className="relative cursor-pointer group"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
          onClick={() => setSelectedVariation(1)}
        >
          <div className="bg-white rounded-2xl p-12 flex flex-col items-center justify-center h-80 relative overflow-hidden border-2 border-transparent group-hover:border-cyan-400 transition-all">
            <motion.div
              className="flex flex-col items-center gap-3"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.7, type: "spring" }}
            >
              <div className="flex items-center gap-2">
                <svg width="60" height="60" viewBox="0 0 60 60">
                  <path d="M 10 10 L 20 35 L 25 35 L 35 10" stroke="#00546d" strokeWidth="4" strokeLinecap="round" fill="none" />
                </svg>
                <svg width="50" height="50" viewBox="0 0 50 50">
                  <circle cx="25" cy="25" r="18" stroke="#7dd3dd" strokeWidth="3" fill="none" />
                  <circle cx="25" cy="25" r="8" fill="#7dd3dd" />
                </svg>
                <span className="text-5xl font-bold text-[#00546d]">C</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-[#00546d] tracking-wider">VERCED</span>
                <span className="text-lg text-cyan-500 tracking-widest">óptica</span>
              </div>
            </motion.div>

            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.8 }}
            />
          </div>
          
          <motion.div
            className="mt-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <h3 className="text-white font-semibold text-lg">Versión Clara</h3>
            <p className="text-cyan-300 text-sm">Fondo Blanco</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Versión Horizontal */}
      <motion.div
        className="relative cursor-pointer group"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        whileHover={{ scale: 1.01 }}
        onClick={() => setSelectedVariation(2)}
      >
        <div className="bg-gradient-to-br from-[#00546d] to-[#006f8f] rounded-2xl p-12 flex items-center justify-center h-56 relative overflow-hidden border-2 border-transparent group-hover:border-cyan-400 transition-all">
          <motion.div
            className="flex items-center gap-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.9, type: "spring" }}
          >
            {/* Logo horizontal */}
            <div className="flex items-center gap-2">
              <svg width="50" height="50" viewBox="0 0 50 50">
                <path d="M 8 8 L 16 30 L 20 30 L 28 8" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none" />
              </svg>
              <svg width="40" height="40" viewBox="0 0 40 40">
                <circle cx="20" cy="20" r="14" stroke="#7dd3dd" strokeWidth="2.5" fill="none" />
                <circle cx="20" cy="20" r="6" fill="#7dd3dd" />
              </svg>
              <span className="text-4xl font-bold text-white">C</span>
            </div>
            
            <div className="h-16 w-px bg-cyan-400/50" />
            
            <div className="flex items-center gap-8">
              <span className="text-4xl font-bold text-white tracking-wider">VERCED</span>
              <span className="text-2xl text-cyan-300 tracking-widest font-light">óptica</span>
            </div>
          </motion.div>

          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.8 }}
          />
        </div>
        
        <motion.div
          className="mt-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <h3 className="text-white font-semibold text-lg">Versión Horizontal</h3>
          <p className="text-cyan-300 text-sm">Layout Alternativo</p>
        </motion.div>
      </motion.div>

      {/* Logo alternativo - círculos */}
      <motion.div
        className="mt-12 flex items-center justify-center gap-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <span className="text-white text-lg font-medium mr-4">LOGO ALTERNATIVO</span>
        
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className={`w-24 h-24 rounded-full flex items-center justify-center ${
              i === 2 ? "bg-[#7dd3dd]" : "bg-[#00546d]"
            }`}
            style={{ borderWidth: '2px', borderColor: 'rgba(34, 211, 238, 0.3)', borderStyle: 'solid' }}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              delay: 1.2 + i * 0.15,
              type: "spring",
              stiffness: 200,
            }}
            whileHover={{ scale: 1.1, rotate: 360 }}
          >
            <div className="flex items-center gap-1">
              <svg width="30" height="30" viewBox="0 0 30 30">
                <path d="M 5 5 L 10 18 L 13 18 L 18 5" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
              </svg>
              <svg width="25" height="25" viewBox="0 0 25 25">
                <circle cx="12.5" cy="12.5" r="9" stroke={i === 2 ? "#00546d" : "#7dd3dd"} strokeWidth="1.5" fill="none" />
                <circle cx="12.5" cy="12.5" r="4" fill={i === 2 ? "#00546d" : "#7dd3dd"} />
              </svg>
              <span className={`text-xl font-bold ${i === 2 ? "text-[#00546d]" : "text-white"}`}>C</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}