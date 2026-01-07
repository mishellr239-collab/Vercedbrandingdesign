import { motion } from "motion/react";
import { useState } from "react";

export function ColorPalette() {
  const [hoveredColor, setHoveredColor] = useState<number | null>(null);

  const colors = [
    {
      name: "PANTONE 309 C",
      hex: "#00546d",
      cmyk: "C: 100% M: 53% Y: 48% K: 49%",
      rgb: "R: 0 G: 58 B: 73",
      usage: "Color Principal - Fondo Oscuro",
    },
    {
      name: "PANTONE 3165 C",
      hex: "#006f8f",
      cmyk: "C: 100% M: 42% Y: 47% K: 41%",
      rgb: "R: 0 G: 77 B: 90",
      usage: "Color Secundario - Degradados",
    },
    {
      name: "PANTONE 3242 C",
      hex: "#7dd3dd",
      cmyk: "C: 55% M: 0% Y: 24% K: 0%",
      rgb: "R: 106 G: 217 B: 212",
      usage: "Color de Acento - Detalles",
    },
    {
      name: "BLANCO",
      hex: "#ffffff",
      cmyk: "C: 0% M: 0% Y: 0% K: 0%",
      rgb: "R: 255 G: 255 B: 255",
      usage: "Color Complementario - Textos",
      border: true,
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <motion.h2
        className="text-3xl font-semibold text-white mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        COLORES CORPORATIVOS
      </motion.h2>
      
      <motion.p
        className="text-cyan-300 text-center mb-12 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Paleta de colores oficial de la marca
      </motion.p>

      <div className="grid grid-cols-2 gap-8">
        {colors.map((color, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0, y: 50, rotateX: -30 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2 * index,
              type: "spring",
              stiffness: 100,
            }}
            onHoverStart={() => setHoveredColor(index)}
            onHoverEnd={() => setHoveredColor(null)}
          >
            <motion.div
              className="rounded-2xl overflow-hidden backdrop-blur-md border-2 border-cyan-400/30 relative"
              whileHover={{ scale: 1.03, borderColor: "rgba(125, 211, 221, 0.6)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Sección de color grande */}
              <motion.div
                className="h-48 relative overflow-hidden"
                style={{ backgroundColor: color.hex }}
                animate={{
                  scale: hoveredColor === index ? 1.05 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                {color.border && (
                  <div className="absolute inset-0 border border-gray-300" />
                )}
                
                {/* Cuadro de muestra */}
                <motion.div
                  className="absolute top-6 left-6 w-20 h-20 border-2 border-white/50 rounded-lg"
                  style={{ backgroundColor: color.hex }}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3 + index * 0.2, type: "spring" }}
                />

                {/* Texto en el color */}
                <div className="absolute bottom-6 right-6 text-right">
                  <motion.div
                    className={`text-2xl font-bold ${
                      color.name === "BLANCO" ? "text-teal-900" : "text-white"
                    }`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.2 }}
                  >
                    {color.name}
                  </motion.div>
                </div>

                {/* Efecto de onda al hover */}
                {hoveredColor === index && (
                  <motion.div
                    className="absolute inset-0"
                    initial={{ scale: 0, opacity: 0.5 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 1, repeat: Infinity }}
                    style={{
                      background: `radial-gradient(circle, ${color.hex} 0%, transparent 70%)`,
                    }}
                  />
                )}
              </motion.div>

              {/* Información del color */}
              <div className="bg-teal-900/60 backdrop-blur-md p-6">
                <motion.div
                  className="grid grid-cols-2 gap-4 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 + index * 0.2 }}
                >
                  <div>
                    <div className={`text-xs ${color.name === "BLANCO" ? "text-gray-400" : "text-cyan-400"} mb-1`}>
                      CMYK
                    </div>
                    <div className="text-white text-sm font-mono">{color.cmyk.split(" ").slice(0, 2).join(" ")}</div>
                    <div className="text-white text-sm font-mono">{color.cmyk.split(" ").slice(2).join(" ")}</div>
                  </div>
                  <div>
                    <div className={`text-xs ${color.name === "BLANCO" ? "text-gray-400" : "text-cyan-400"} mb-1`}>
                      RGB
                    </div>
                    <div className="text-white text-sm font-mono">{color.rgb.split(" ").slice(0, 2).join(" ")}</div>
                    <div className="text-white text-sm font-mono">{color.rgb.split(" ").slice(2).join(" ")}</div>
                  </div>
                </motion.div>

                <motion.div
                  className="pt-4 border-t border-cyan-400/20"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.2 }}
                >
                  <div className="text-xs text-cyan-400 mb-1">USO RECOMENDADO</div>
                  <div className="text-white text-sm">{color.usage}</div>
                </motion.div>

                {/* Código HEX con efecto de copia */}
                <motion.div
                  className="mt-4 flex items-center justify-between rounded-lg px-4 py-2"
                  style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
                  whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                >
                  <span className="text-cyan-300 font-mono text-sm">{color.hex.toUpperCase()}</span>
                  <motion.button
                    className="text-xs text-cyan-400 hover:text-cyan-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigator.clipboard.writeText(color.hex)}
                  >
                    Copiar
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>

            {/* Partículas de color */}
            {hoveredColor === index && (
              <>
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full"
                    style={{ backgroundColor: color.hex }}
                    initial={{
                      x: "50%",
                      y: "50%",
                      scale: 0,
                    }}
                    animate={{
                      x: `${50 + Math.cos((i / 6) * Math.PI * 2) * 100}%`,
                      y: `${50 + Math.sin((i / 6) * Math.PI * 2) * 100}%`,
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      ease: "easeOut",
                    }}
                  />
                ))}
              </>
            )}
          </motion.div>
        ))}
      </div>

      {/* Muestra de combinaciones */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <h3 className="text-white text-xl font-semibold mb-6 text-center">
          COMBINACIONES RECOMENDADAS
        </h3>
        
        <div className="flex justify-center gap-6">
          {[
            { bg: "#00546d", accent: "#7dd3dd", text: "white" },
            { bg: "#ffffff", accent: "#7dd3dd", text: "#00546d" },
            { bg: "#006f8f", accent: "#7dd3dd", text: "white" },
          ].map((combo, i) => (
            <motion.div
              key={i}
              className="rounded-xl overflow-hidden w-48 h-32"
              style={{ backgroundColor: combo.bg }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.7 + i * 0.15, type: "spring" }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <div className="p-4 h-full flex flex-col justify-between">
                <div className="flex items-center gap-2">
                  <motion.div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: combo.accent }}
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-xs" style={{ color: combo.text }}>VERCED</span>
                </div>
                <div
                  className="h-1 rounded-full"
                  style={{ backgroundColor: combo.accent }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}