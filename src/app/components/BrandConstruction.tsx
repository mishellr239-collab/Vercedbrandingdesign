import { motion } from "motion/react";
import { useState } from "react";

export function BrandConstruction() {
  const [step, setStep] = useState(0);

  const components = [
    { label: "LETRA V+C", icon: "V&C" },
    { label: "OJOS", icon: "👁️" },
    { label: "LENTES", icon: "👓" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <motion.h2
        className="text-3xl font-semibold text-white mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        CONSTRUCCIÓN DE MARCA
      </motion.h2>

      {/* Componentes individuales */}
      <div className="flex items-center justify-center gap-8 mb-16">
        {components.map((comp, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center gap-4"
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.3,
              type: "spring",
              stiffness: 200,
            }}
          >
            {/* Ícono/Elemento */}
            <motion.div
              className="w-24 h-24 flex items-center justify-center backdrop-blur-md rounded-2xl"
              style={{
                backgroundColor: "rgba(15, 118, 110, 0.4)",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "rgba(34, 211, 238, 0.3)",
              }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setStep(index + 1)}
            >
              {index === 0 && (
                <span className="text-4xl font-bold text-cyan-400">V&C</span>
              )}
              {index === 1 && (
                <svg width="50" height="50" viewBox="0 0 50 50">
                  <circle cx="25" cy="25" r="15" fill="none" stroke="#22D3EE" strokeWidth="3" />
                  <circle cx="25" cy="25" r="7" fill="#22D3EE" />
                </svg>
              )}
              {index === 2 && (
                <svg width="60" height="30" viewBox="0 0 60 30">
                  <ellipse cx="15" cy="15" rx="12" ry="10" fill="none" stroke="#22D3EE" strokeWidth="2" />
                  <line x1="27" y1="15" x2="33" y2="15" stroke="#22D3EE" strokeWidth="2" />
                  <ellipse cx="45" cy="15" rx="12" ry="10" fill="none" stroke="#22D3EE" strokeWidth="2" />
                </svg>
              )}
            </motion.div>

            {/* Label */}
            <motion.span
              className="text-sm font-medium text-cyan-300 tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.3 + 0.5 }}
            >
              {comp.label}
            </motion.span>
          </motion.div>
        ))}
      </div>

      {/* Signos más animados */}
      <div className="flex items-center justify-center gap-16 mb-16 relative">
        {[0, 1].map((index) => (
          <motion.div
            key={index}
            className="text-5xl text-cyan-400 font-light"
            initial={{ opacity: 0, rotate: 0 }}
            animate={{
              opacity: 1,
              rotate: 360,
            }}
            transition={{
              opacity: { duration: 0.3, delay: 1 + index * 0.3 },
              rotate: { duration: 1, delay: 1 + index * 0.3, ease: "backOut" },
            }}
          >
            +
          </motion.div>
        ))}
      </div>

      {/* Logo final ensamblado */}
      <motion.div
        className="flex items-center justify-center gap-4 p-8 bg-teal-800/30 backdrop-blur-lg border border-cyan-400/30 rounded-3xl relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 2,
          type: "spring",
          stiffness: 100,
        }}
      >
        {/* Efecto de brillo que recorre el logo */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
          initial={{ x: "-100%" }}
          animate={{ x: "200%" }}
          transition={{
            duration: 2,
            delay: 2.5,
            repeat: Infinity,
            repeatDelay: 3,
          }}
        />

        {/* V&C simplificado */}
        <motion.div
          className="text-6xl font-bold text-white"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.3 }}
        >
          V
        </motion.div>

        <motion.div
          className="w-12 h-12 relative"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 2.5, type: "spring" }}
        >
          <svg width="48" height="48" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="18" fill="none" stroke="#22D3EE" strokeWidth="3" />
            <circle cx="24" cy="24" r="8" fill="#22D3EE" />
          </svg>
        </motion.div>

        <motion.div
          className="text-6xl font-bold text-cyan-400"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.7 }}
        >
          C
        </motion.div>

        <motion.div
          className="ml-6 flex flex-col"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 2.9 }}
        >
          <span className="text-4xl font-bold text-white tracking-wider">VERCED</span>
          <span className="text-xl font-light text-cyan-400 tracking-widest">óptica</span>
        </motion.div>

        {/* Partículas de celebración */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-cyan-400 rounded-full"
            initial={{ scale: 0, x: 0, y: 0 }}
            animate={{
              scale: [0, 1, 0],
              x: Math.cos((i / 12) * Math.PI * 2) * 100,
              y: Math.sin((i / 12) * Math.PI * 2) * 100,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              delay: 3 + i * 0.05,
              ease: "easeOut",
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}