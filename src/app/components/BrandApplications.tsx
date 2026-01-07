import { motion } from "motion/react";
import { useState } from "react";
import stationeryImg from "figma:asset/50c86343d56c6941f79f6c065b1019dccf75f53f.png";
import uniformsImg from "figma:asset/b5f2bcdfa28f2ba032ea25c2746e30300b9077d5.png";
import merchandiseImg from "figma:asset/f95bce2a530fc7ad21e4cd1250a2f525dbf21c52.png";

export function BrandApplications() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const applications = [
    {
      title: "PAPELERÍA CORPORATIVA",
      subtitle: "Identidad en cada detalle",
      image: stationeryImg,
      description: "Tarjetas de presentación, hojas membretadas y carpetas",
      gradient: "from-[#00546d] to-[#006f8f]",
    },
    {
      title: "ESTUCHES DE LENTES",
      subtitle: "Protección con estilo",
      image: uniformsImg,
      description: "Diseño exclusivo para estuches premium",
      gradient: "from-[#006f8f] to-teal-600",
    },
    {
      title: "MERCHANDISING",
      subtitle: "Marca en el día a día",
      image: merchandiseImg,
      description: "Tazas, bolígrafos y accesorios corporativos",
      gradient: "from-teal-600 to-cyan-500",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          APLICACIONES DE MARCA
        </motion.h2>
        <motion.p
          className="text-xl text-cyan-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          La identidad VERCED en cada punto de contacto
        </motion.p>
      </motion.div>

      {/* Grid de aplicaciones */}
      <div className="grid grid-cols-1 gap-12 mb-16">
        {applications.map((app, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0, y: 100, rotateX: -20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3 + index * 0.2,
              type: "spring",
              stiffness: 100,
            }}
            onHoverStart={() => setHoveredCard(index)}
            onHoverEnd={() => setHoveredCard(null)}
          >
            <motion.div
              className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${app.gradient} p-8 cursor-pointer`}
              style={{
                transformStyle: "preserve-3d",
                perspective: 1000,
              }}
              whileHover={{
                scale: 1.02,
                rotateY: 2,
                rotateX: 2,
                transition: { duration: 0.3 },
              }}
            >
              {/* Brillo animado de fondo */}
              <motion.div
                className="absolute inset-0 opacity-0"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(125, 211, 221, 0.3) 0%, transparent 70%)",
                }}
                animate={{
                  opacity: hoveredCard === index ? 0.6 : 0,
                  scale: hoveredCard === index ? 1.2 : 1,
                }}
                transition={{ duration: 0.6 }}
              />

              <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                {/* Contenido de texto */}
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                >
                  <div>
                    <motion.div
                      className="inline-block px-4 py-2 rounded-full border-2 mb-4"
                      style={{
                        borderColor: "rgba(125, 211, 221, 0.5)",
                        backgroundColor: "rgba(0, 0, 0, 0.2)",
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-cyan-300 text-sm font-semibold tracking-wider">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </motion.div>

                    <motion.h3
                      className="text-3xl md:text-4xl font-bold text-white mb-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.2 }}
                    >
                      {app.title}
                    </motion.h3>
                    
                    <motion.p
                      className="text-xl text-cyan-200 mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 + index * 0.2 }}
                    >
                      {app.subtitle}
                    </motion.p>
                    
                    <motion.p
                      className="text-white/80 text-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 + index * 0.2 }}
                    >
                      {app.description}
                    </motion.p>
                  </div>

                  {/* Indicador decorativo */}
                  <motion.div
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + index * 0.2 }}
                  >
                    <motion.div
                      className="h-1 rounded-full bg-cyan-400"
                      initial={{ width: 0 }}
                      animate={{ width: hoveredCard === index ? 80 : 60 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="flex gap-2">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 rounded-full bg-cyan-400"
                          animate={{
                            scale: hoveredCard === index ? [1, 1.5, 1] : 1,
                            opacity: hoveredCard === index ? [1, 0.5, 1] : 0.6,
                          }}
                          transition={{
                            duration: 1,
                            delay: i * 0.1,
                            repeat: hoveredCard === index ? Infinity : 0,
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                </motion.div>

                {/* Imagen con efecto 3D */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{
                    delay: 0.6 + index * 0.2,
                    type: "spring",
                    stiffness: 100,
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Sombra de la imagen */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: "rgba(0, 0, 0, 0.3)",
                      filter: "blur(20px)",
                      transform: "translateZ(-50px)",
                    }}
                    animate={{
                      scale: hoveredCard === index ? 1.1 : 1,
                      opacity: hoveredCard === index ? 0.6 : 0.3,
                    }}
                  />

                  {/* Imagen principal */}
                  <motion.div
                    className="relative rounded-2xl overflow-hidden border-4 border-white/20"
                    whileHover={{
                      rotateY: 5,
                      rotateX: -5,
                      scale: 1.05,
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img
                      src={app.image}
                      alt={app.title}
                      className="w-full h-auto"
                    />
                    
                    {/* Overlay con gradiente */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                      animate={{
                        opacity: hoveredCard === index ? 0 : 0.3,
                      }}
                    />

                    {/* Efecto de brillo que recorre la imagen */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      initial={{ x: "-100%" }}
                      animate={{
                        x: hoveredCard === index ? "100%" : "-100%",
                      }}
                      transition={{
                        duration: 1,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>

                  {/* Partículas decorativas alrededor de la imagen */}
                  {hoveredCard === index && (
                    <>
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-3 h-3 rounded-full bg-cyan-400"
                          style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                          }}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{
                            scale: [0, 1, 0],
                            opacity: [0, 1, 0],
                            y: [-20, -60],
                          }}
                          transition={{
                            duration: 1.5,
                            delay: i * 0.1,
                            ease: "easeOut",
                          }}
                        />
                      ))}
                    </>
                  )}
                </motion.div>
              </div>
            </motion.div>

            {/* Borde brillante animado */}
            <motion.div
              className="absolute -inset-1 rounded-3xl -z-10"
              style={{
                background: `linear-gradient(45deg, ${
                  hoveredCard === index
                    ? "rgba(125, 211, 221, 0.5), rgba(6, 182, 212, 0.5)"
                    : "transparent, transparent"
                })`,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: hoveredCard === index ? 1 : 0,
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Footer con estadísticas */}
      <motion.div
        className="grid grid-cols-3 gap-6 mt-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        {[
          { number: "100+", label: "Aplicaciones de Marca" },
          { number: "360°", label: "Cobertura Visual" },
          { number: "Premium", label: "Calidad Garantizada" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="text-center p-6 rounded-2xl"
            style={{
              backgroundColor: "rgba(0, 84, 109, 0.3)",
              borderWidth: "2px",
              borderColor: "rgba(125, 211, 221, 0.3)",
              borderStyle: "solid",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.7 + index * 0.1, type: "spring" }}
            whileHover={{
              scale: 1.05,
              borderColor: "rgba(125, 211, 221, 0.6)",
            }}
          >
            <motion.div
              className="text-4xl font-bold text-cyan-400 mb-2"
              animate={{
                scale: hoveredCard !== null ? [1, 1.1, 1] : 1,
              }}
              transition={{ duration: 0.5 }}
            >
              {stat.number}
            </motion.div>
            <div className="text-white/80">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
