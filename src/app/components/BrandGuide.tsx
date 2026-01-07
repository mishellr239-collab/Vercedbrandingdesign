import { motion } from "motion/react";
import { useState, useEffect } from "react";
import brandGuideImg from "figma:asset/45c35bbff3ecccf654eac677210eea2dbf666c05.png";
import officeLogoImg from "figma:asset/31f7a2e0a06ebe99a4e5937fd286573cecd27e7d.png";

export function BrandGuide() {
  const [showOffice, setShowOffice] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOffice(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center gap-8">
      {/* Brand Guide - Logo y Colores */}
      <motion.div
        className="relative w-[48%] rounded-3xl overflow-hidden shadow-2xl"
        initial={{ x: -100, opacity: 0, rotateY: -20 }}
        animate={{ x: 0, opacity: 1, rotateY: 0 }}
        transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Animated glow */}
        <motion.div
          className="absolute -inset-4 rounded-3xl -z-10"
          style={{
            background:
              "linear-gradient(135deg, rgba(125, 211, 221, 0.6), rgba(6, 182, 212, 0.5))",
            filter: "blur(40px)",
          }}
          animate={{
            opacity: [0.4, 0.9, 0.4],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Main image */}
        <motion.img
          src={brandGuideImg}
          alt="Guía de Marca VERCED"
          className="w-full h-auto relative z-10"
          initial={{ scale: 1.2, filter: "brightness(0.7)" }}
          animate={{ scale: 1, filter: "brightness(1)" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* Floating elements animation */}
        <motion.div
          className="absolute top-1/4 right-8 w-16 h-16 rounded-full z-20"
          style={{
            background:
              "linear-gradient(135deg, rgba(125, 211, 221, 0.8), rgba(6, 182, 212, 0.6))",
          }}
          animate={{
            y: [-10, 10, -10],
            scale: [1, 1.2, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 left-8 w-12 h-12 rounded-full z-20"
          style={{
            background:
              "linear-gradient(135deg, rgba(0, 84, 109, 0.8), rgba(0, 54, 69, 0.6))",
          }}
          animate={{
            y: [10, -10, 10],
            scale: [1, 1.3, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        {/* Particle effects */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${15 + i * 14}%`,
              top: "50%",
              backgroundColor: "rgba(125, 211, 221, 0.8)",
            }}
            animate={{
              y: [-20, -60, -20],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Scan line */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent pointer-events-none"
          animate={{ y: ["-100%", "200%"] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ height: "40%" }}
        />

        {/* Corner decorations */}
        {[
          { top: "20px", left: "20px", rotate: 0 },
          { top: "20px", right: "20px", rotate: 90 },
          { bottom: "20px", right: "20px", rotate: 180 },
          { bottom: "20px", left: "20px", rotate: 270 },
        ].map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-16 h-16 pointer-events-none z-20"
            style={pos}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.8 }}
            transition={{
              delay: 0.8 + i * 0.1,
              type: "spring",
              stiffness: 150,
            }}
          >
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              style={{ transform: `rotate(${pos.rotate}deg)` }}
            >
              <path
                d="M 8 8 L 28 8 M 8 8 L 8 28"
                stroke="rgba(125, 211, 221, 1)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>
        ))}
      </motion.div>

      {/* Office Logo - Aparece después */}
      {showOffice && (
        <motion.div
          className="relative w-[48%] rounded-3xl overflow-hidden shadow-2xl"
          initial={{ x: 100, opacity: 0, rotateY: 20 }}
          animate={{ x: 0, opacity: 1, rotateY: 0 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* Animated glow */}
          <motion.div
            className="absolute -inset-4 rounded-3xl -z-10"
            style={{
              background:
                "linear-gradient(135deg, rgba(125, 211, 221, 0.5), rgba(0, 84, 109, 0.4))",
              filter: "blur(40px)",
            }}
            animate={{
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Main image */}
          <motion.img
            src={officeLogoImg}
            alt="Logo VERCED en Oficina"
            className="w-full h-auto relative z-10"
            initial={{ scale: 1.2, filter: "brightness(0.6)" }}
            animate={{ scale: 1, filter: "brightness(1)" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          {/* Light ray effects */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-0 left-1/2 w-1 h-full origin-top"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(125, 211, 221, 0.4), transparent)",
                transform: `rotate(${i * 20 - 30}deg)`,
              }}
              animate={{
                opacity: [0, 0.6, 0],
                scaleY: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 4,
                delay: i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* 3D depth effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom right, rgba(34, 211, 238, 0.1), transparent, rgba(13, 148, 136, 0.1))",
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Scan line */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-white/8 to-transparent pointer-events-none"
            animate={{ y: ["-100%", "200%"] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
              delay: 1,
            }}
            style={{ height: "35%" }}
          />
        </motion.div>
      )}
    </div>
  );
}