import { motion } from "motion/react";
import { useState, useEffect } from "react";
import brandIntroImg from "figma:asset/14b7604c361de6a3781c5272652f216125aed423.png";

export function BrandIntro() {
  const [showLogo, setShowLogo] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const logoTimer = setTimeout(() => setShowLogo(true), 800);
    const textTimer = setTimeout(() => setShowText(true), 1500);
    return () => {
      clearTimeout(logoTimer);
      clearTimeout(textTimer);
    };
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
      {/* Animated background circles */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(125, 211, 221, 0.4), transparent)",
          filter: "blur(60px)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          x: [-20, 20, -20],
          y: [-20, 20, -20],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(6, 182, 212, 0.4), transparent)",
          filter: "blur(60px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [20, -20, 20],
          y: [20, -20, 20],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {/* Main content container */}
      <motion.div
        className="relative w-full max-w-6xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* Outer glow effect */}
        <motion.div
          className="absolute -inset-8 rounded-3xl -z-10"
          style={{
            background:
              "linear-gradient(135deg, rgba(125, 211, 221, 0.3), rgba(6, 182, 212, 0.25))",
            filter: "blur(50px)",
          }}
          animate={{
            opacity: [0.4, 0.7, 0.4],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Main image card */}
        <motion.div
          className="relative rounded-3xl overflow-hidden shadow-2xl"
          style={{
            boxShadow:
              "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 80px rgba(125, 211, 221, 0.2)",
          }}
        >
          {/* Background image */}
          <motion.img
            src={brandIntroImg}
            alt="Presentación de Marca VERCED Óptica"
            className="w-full h-auto relative z-10"
            initial={{ scale: 1.15, filter: "brightness(0.6)" }}
            animate={{ scale: 1, filter: "brightness(1)" }}
            transition={{ duration: 1.8, ease: "easeOut" }}
          />

          {/* Animated overlay gradient */}
          <motion.div
            className="absolute inset-0 pointer-events-none z-20"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, transparent 30%, rgba(0, 54, 69, 0.2) 100%)",
            }}
            animate={{
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Light rays effect */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-0 left-1/2 w-1 origin-top z-15"
              style={{
                height: "100%",
                background:
                  "linear-gradient(to bottom, rgba(125, 211, 221, 0.15), transparent)",
                transform: `translateX(-50%) rotate(${i * 30 - 75}deg)`,
              }}
              animate={{
                opacity: [0, 0.6, 0],
                scaleY: [0.8, 1.1, 0.8],
              }}
              transition={{
                duration: 5,
                delay: i * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Floating particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full z-25"
              style={{
                left: `${10 + (i * 6) % 80}%`,
                top: `${20 + (i * 7) % 60}%`,
                backgroundColor:
                  i % 2 === 0
                    ? "rgba(125, 211, 221, 0.6)"
                    : "rgba(6, 182, 212, 0.6)",
                boxShadow: "0 0 10px rgba(125, 211, 221, 0.8)",
              }}
              animate={{
                y: [-30, -80, -30],
                x: [0, (i % 3 - 1) * 20, 0],
                opacity: [0, 1, 0],
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: 4 + (i % 3),
                delay: i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Pulsing corner accents */}
          {[
            { top: "20px", left: "20px", rotate: 0 },
            { top: "20px", right: "20px", rotate: 90 },
            { bottom: "20px", right: "20px", rotate: 180 },
            { bottom: "20px", left: "20px", rotate: 270 },
          ].map((pos, i) => (
            <motion.div
              key={i}
              className="absolute w-24 h-24 pointer-events-none z-30"
              style={pos}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                scale: { delay: 1.2 + i * 0.15, type: "spring", stiffness: 150 },
                opacity: {
                  duration: 2,
                  delay: 1.2 + i * 0.15,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <svg
                width="96"
                height="96"
                viewBox="0 0 96 96"
                style={{ transform: `rotate(${pos.rotate}deg)` }}
              >
                <path
                  d="M 12 12 L 40 12 M 12 12 L 12 40"
                  stroke="rgba(125, 211, 221, 1)"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M 8 8 L 28 8 M 8 8 L 8 28"
                  stroke="rgba(6, 182, 212, 0.5)"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>
          ))}

          {/* Animated scan lines */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-white/8 to-transparent pointer-events-none z-20"
            animate={{ y: ["-100%", "200%"] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ height: "40%" }}
          />

          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent pointer-events-none z-20"
            animate={{ x: ["-100%", "200%"] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "linear",
              delay: 2,
            }}
            style={{ width: "30%" }}
          />

          {/* 3D depth lines */}
          {showLogo && (
            <>
              <motion.div
                className="absolute top-0 left-0 right-0 h-px z-30"
                style={{
                  background:
                    "linear-gradient(to right, transparent, rgba(125, 211, 221, 0.8), transparent)",
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-px z-30"
                style={{
                  background:
                    "linear-gradient(to right, transparent, rgba(125, 211, 221, 0.8), transparent)",
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
              />
            </>
          )}
        </motion.div>

        {/* Bottom accent line with glow */}
        {showText && (
          <motion.div
            className="absolute -bottom-2 left-1/2 w-3/4 h-1 rounded-full z-40"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(125, 211, 221, 0.8), transparent)",
              boxShadow: "0 0 20px rgba(125, 211, 221, 0.6)",
            }}
            initial={{ scaleX: 0, x: "-50%" }}
            animate={{ scaleX: 1, x: "-50%" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        )}
      </motion.div>

      {/* Ambient light orbs */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 rounded-full pointer-events-none"
          style={{
            left: `${15 + i * 12}%`,
            top: `${10 + (i % 3) * 30}%`,
            background:
              "radial-gradient(circle, rgba(125, 211, 221, 0.8), transparent)",
            filter: "blur(8px)",
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [0.8, 1.3, 0.8],
          }}
          transition={{
            duration: 5 + (i % 3),
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}