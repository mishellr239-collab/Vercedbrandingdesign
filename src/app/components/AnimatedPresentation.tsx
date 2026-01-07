import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { BrandIntro } from "./BrandIntro";
import { BrandGuide } from "./BrandGuide";
import { LogoVariations } from "./LogoVariations";
import { ColorPalette } from "./ColorPalette";
import { BrandApplications } from "./BrandApplications";
import { BrandShowcase } from "./BrandShowcase";

export function AnimatedPresentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const slides = [
    { component: <BrandIntro />, title: "Presentación de Marca" },
    { component: <BrandGuide />, title: "Guía de Marca" },
    { component: <LogoVariations />, title: "Variaciones del Logo" },
    { component: <ColorPalette />, title: "Paleta de Colores" },
    { component: <BrandApplications />, title: "Aplicaciones de Marca" },
    { component: <BrandShowcase />, title: "Galería Premium" },
  ];

  useEffect(() => {
    if (!autoPlay) return;
    
    const timer = setTimeout(() => {
      if (currentSlide < slides.length - 1) {
        setCurrentSlide(currentSlide + 1);
      }
    }, 8000); // Cambiar después de 8 segundos

    return () => clearTimeout(timer);
  }, [currentSlide, autoPlay, slides.length]);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-8">
      {/* Patrón de fondo decorativo - Logo gigante */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center opacity-5 overflow-hidden"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg width="800" height="800" viewBox="0 0 200 200">
          <text x="100" y="120" fontSize="120" fill="white" textAnchor="middle" fontWeight="bold">
            V&C
          </text>
        </svg>
      </motion.div>

      {/* Contenido principal */}
      <div className="relative z-10 w-full max-w-6xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -100, scale: 0.9 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col items-center justify-center min-h-[600px]"
          >
            {slides[currentSlide].component}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicadores de navegación */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? "w-12 bg-cyan-400" : "w-2 bg-white/30"
            }`}
            onClick={() => {
              setCurrentSlide(index);
              setAutoPlay(false);
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      {/* Botones de navegación */}
      <div className="absolute bottom-12 right-12 flex gap-4 z-20">
        <motion.button
          className="px-6 py-3 bg-teal-600/40 backdrop-blur-md border border-cyan-400/40 rounded-xl text-white font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setCurrentSlide(Math.max(0, currentSlide - 1));
            setAutoPlay(false);
          }}
          disabled={currentSlide === 0}
          style={{ opacity: currentSlide === 0 ? 0.5 : 1 }}
        >
          ← Anterior
        </motion.button>
        
        <motion.button
          className="px-6 py-3 bg-cyan-500/40 backdrop-blur-md border border-cyan-300/40 rounded-xl text-white font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setCurrentSlide(Math.min(slides.length - 1, currentSlide + 1));
            setAutoPlay(false);
          }}
          disabled={currentSlide === slides.length - 1}
          style={{ opacity: currentSlide === slides.length - 1 ? 0.5 : 1 }}
        >
          Siguiente →
        </motion.button>
      </div>

      {/* Logo FARUM en la esquina */}
      <motion.div
        className="absolute top-8 right-8 text-white/40 text-sm tracking-wider"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <span className="font-bold">≡ FARUM</span>
        <div className="text-xs mt-1">AGENCIA CREATIVA</div>
      </motion.div>
    </div>
  );
}