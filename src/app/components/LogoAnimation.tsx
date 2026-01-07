import { motion } from "motion/react";

export function LogoAnimation() {
  return (
    <div className="relative">
      {/* Logo V&C con animación de entrada */}
      <motion.div
        className="flex items-center gap-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.23, 1, 0.32, 1],
        }}
      >
        {/* Letra V */}
        <motion.svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
        >
          <motion.path
            d="M 15 15 L 30 50 L 35 50 L 50 15"
            stroke="white"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </motion.svg>

        {/* Letra & */}
        <motion.svg
          width="60"
          height="80"
          viewBox="0 0 60 80"
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: "backOut" }}
        >
          <motion.path
            d="M 30 25 Q 40 15 30 10 Q 20 15 30 25 Q 20 35 30 45"
            stroke="white"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
          />
        </motion.svg>

        {/* Círculo/Ojo */}
        <motion.div
          className="relative"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.9, type: "spring", stiffness: 200 }}
        >
          <svg width="60" height="60" viewBox="0 0 60 60">
            <motion.circle
              cx="30"
              cy="30"
              r="25"
              stroke="#22D3EE"
              strokeWidth="4"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 1 }}
            />
            <motion.circle
              cx="30"
              cy="30"
              r="10"
              fill="#22D3EE"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 1.5, type: "spring" }}
            />
          </svg>
          
          {/* Pulso del ojo */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-cyan-400"
            initial={{ scale: 1, opacity: 0.8 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
              delay: 2,
            }}
          />
        </motion.div>

        {/* Letra C */}
        <motion.svg
          width="70"
          height="80"
          viewBox="0 0 70 80"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <motion.path
            d="M 50 15 Q 20 15 20 40 Q 20 65 50 65"
            stroke="#22D3EE"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          />
        </motion.svg>
      </motion.div>

      {/* Texto VERCED */}
      <motion.div
        className="mt-8 flex items-center gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
      >
        {["V", "E", "R", "C", "E", "D"].map((letter, index) => (
          <motion.span
            key={index}
            className="text-6xl font-bold text-white"
            initial={{ opacity: 0, y: 20, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              duration: 0.5,
              delay: 1.8 + index * 0.1,
              type: "spring",
              stiffness: 200,
            }}
            whileHover={{
              scale: 1.2,
              color: "#22D3EE",
              transition: { duration: 0.2 },
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>

      {/* Texto Óptica */}
      <motion.div
        className="text-3xl font-light text-cyan-400 tracking-wider"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.5 }}
      >
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 2.6 }}
        >
          óptica
        </motion.span>
      </motion.div>

      {/* Partículas flotantes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-cyan-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            y: [-20, -60],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: 3 + Math.random() * 2,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
