import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import logoMain from "figma:asset/47447ee96f221a4ac0cc4174bb1637cea7eba955.png";
import pensImg from "figma:asset/63e690c26e210b5cabfc3e31e011d650cd04f442.png";
import tumblerImg from "figma:asset/428aa4e64001ea7c6d7ff97f6489fc69b8b1dbc9.png";
import mockupsImg from "figma:asset/fac8a36a584a90539327a94f11647ea7a506b589.png";
import wallLogoImg from "figma:asset/f17024ab547678f7793779e98356ff0c34782ee0.png";

export function BrandShowcase() {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [direction, setDirection] = useState(1);

  const photos = [logoMain, mockupsImg, wallLogoImg, pensImg, tumblerImg];

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(timer);
  }, [currentPhoto]);

  const handleNext = () => {
    setDirection(1);
    setCurrentPhoto((prev) => (prev + 1) % photos.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      {/* Main Photo Display */}
      <div className="relative w-full max-w-6xl h-[700px]">
        {/* Animated background glow */}
        <motion.div
          className="absolute inset-0 rounded-3xl"
          style={{
            background:
              "radial-gradient(circle at center, rgba(125, 211, 221, 0.2) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Photo Container */}
        <div className="relative h-full flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPhoto}
              className="absolute inset-0"
              initial={{
                opacity: 0,
                scale: 0.85,
                rotateY: direction * 25,
                z: -100,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotateY: 0,
                z: 0,
              }}
              exit={{
                opacity: 0,
                scale: 1.1,
                rotateY: -direction * 25,
                z: -100,
              }}
              transition={{
                duration: 0.9,
                ease: [0.23, 1, 0.32, 1],
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: 1500,
              }}
            >
              {/* Photo with advanced effects */}
              <motion.div
                className="relative w-full h-full rounded-3xl overflow-hidden"
                style={{
                  boxShadow:
                    "0 30px 60px -15px rgba(0, 0, 0, 0.9), 0 0 100px rgba(125, 211, 221, 0.4)",
                }}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                {/* Main Image */}
                <motion.img
                  src={photos[currentPhoto]}
                  alt="Brand showcase"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.15, filter: "brightness(0.7)" }}
                  animate={{ scale: 1, filter: "brightness(1)" }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />

                {/* Subtle overlay for depth */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                />

                {/* Animated scan line */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none"
                  animate={{ y: ["-100%", "200%"] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ height: "40%" }}
                />

                {/* Corner frames - decorative only */}
                {[
                  { top: "20px", left: "20px", rotate: 0 },
                  { top: "20px", right: "20px", rotate: 90 },
                  { bottom: "20px", right: "20px", rotate: 180 },
                  { bottom: "20px", left: "20px", rotate: 270 },
                ].map((pos, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-16 h-16 pointer-events-none"
                    style={pos}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.6 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{
                      delay: 0.5 + i * 0.05,
                      type: "spring",
                      stiffness: 200,
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
                        stroke="rgba(125, 211, 221, 0.8)"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </svg>
                  </motion.div>
                ))}

                {/* Floating particles on image */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                      left: `${10 + i * 10}%`,
                      top: "50%",
                      backgroundColor: "rgba(34, 211, 238, 0.6)",
                    }}
                    animate={{
                      y: [-20, -80, -20],
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0],
                    }}
                    transition={{
                      duration: 3,
                      delay: i * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </motion.div>

              {/* 3D Glow shadow */}
              <motion.div
                className="absolute -inset-6 rounded-3xl -z-10"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(125, 211, 221, 0.4), rgba(6, 182, 212, 0.3))",
                  filter: "blur(40px)",
                }}
                animate={{
                  opacity: [0.4, 0.7, 0.4],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation arrows - minimalist */}
        <motion.button
          className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full backdrop-blur-xl flex items-center justify-center z-20 -translate-x-20"
          style={{
            backgroundColor: "rgba(0, 84, 109, 0.4)",
            borderWidth: "2px",
            borderStyle: "solid",
          }}
          initial={{
            borderColor: "rgba(125, 211, 221, 0.3)",
          }}
          whileHover={{
            scale: 1.15,
            backgroundColor: "rgba(0, 84, 109, 0.7)",
            borderColor: "rgba(125, 211, 221, 0.8)",
          }}
          whileTap={{ scale: 0.9 }}
          onClick={handlePrev}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </motion.button>

        <motion.button
          className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full backdrop-blur-xl flex items-center justify-center z-20 translate-x-20"
          style={{
            backgroundColor: "rgba(0, 84, 109, 0.4)",
            borderWidth: "2px",
            borderStyle: "solid",
          }}
          initial={{
            borderColor: "rgba(125, 211, 221, 0.3)",
          }}
          whileHover={{
            scale: 1.15,
            backgroundColor: "rgba(0, 84, 109, 0.7)",
            borderColor: "rgba(125, 211, 221, 0.8)",
          }}
          whileTap={{ scale: 0.9 }}
          onClick={handleNext}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </motion.button>
      </div>

      {/* Bottom thumbnails - elegant */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-20">
        {photos.map((photo, index) => (
          <motion.button
            key={index}
            className="relative w-28 h-20 rounded-2xl overflow-hidden"
            onClick={() => {
              setDirection(index > currentPhoto ? 1 : -1);
              setCurrentPhoto(index);
            }}
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
            whileHover={{ scale: 1.15, y: -8 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Thumbnail image */}
            <img
              src={photo}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />

            {/* Active indicator */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{
                borderWidth: "3px",
                borderStyle: "solid",
              }}
              animate={{
                borderColor:
                  currentPhoto === index
                    ? "rgba(125, 211, 221, 1)"
                    : "rgba(255, 255, 255, 0.2)",
                boxShadow:
                  currentPhoto === index
                    ? "0 0 30px rgba(125, 211, 221, 0.6)"
                    : "none",
              }}
            />

            {/* Overlay when not active */}
            <motion.div
              className="absolute inset-0"
              animate={{
                backgroundColor:
                  currentPhoto === index
                    ? "rgba(0, 0, 0, 0)"
                    : "rgba(0, 0, 0, 0.6)",
              }}
            />

            {/* Subtle number */}
            <motion.div
              className="absolute bottom-1 right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold backdrop-blur-sm"
              style={{
                backgroundColor: "rgba(0, 84, 109, 0.7)",
              }}
              animate={{
                color: currentPhoto === index ? "#7dd3dd" : "#ffffff",
                scale: currentPhoto === index ? 1.1 : 1,
              }}
            >
              {index + 1}
            </motion.div>
          </motion.button>
        ))}
      </div>

      {/* Minimal progress indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          className="text-cyan-300 font-mono text-lg"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-2xl font-bold">
            {String(currentPhoto + 1).padStart(2, "0")}
          </span>
          <span className="text-white/30 mx-2">/</span>
          <span className="text-white/50">{String(photos.length).padStart(2, "0")}</span>
        </motion.div>
      </motion.div>
    </div>
  );
}