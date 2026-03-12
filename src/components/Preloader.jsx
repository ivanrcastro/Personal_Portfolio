import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = [
  "Hello", "Hola", "Ciao", "Bonjour", "Willkommen", 
  "Welkom", "Hej", "Hei", "こんにちは", "안녕하세요", 
  "你好", "Olá", "System.Start()", "WELCOME"
];

export const Preloader = ({ finishLoading }) => {
  const [index, setIndex] = useState(0);
  const isLastWord = index === words.length - 1;

  useEffect(() => {
    // Se ainda não é a última palavra, avançamos
    if (index < words.length - 1) {
      const timeout = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 200); // Aumentado para 200ms para estabilidade com AnimatePresence
      return () => clearTimeout(timeout);
    } 
    // Se é a última, aguardamos o encerramento
    else {
      const finalTimeout = setTimeout(() => {
        finishLoading();
      }, 1500); 
      return () => clearTimeout(finalTimeout);
    }
  }, [index, finishLoading]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
    >
      <div className="flex flex-col items-center">
        
        {/* LED STATUS */}
        <motion.div 
          animate={{
            backgroundColor: isLastWord ? "#22c55e" : "#ef4444",
            boxShadow: isLastWord 
              ? "0 0 20px rgba(34, 197, 94, 0.8)" 
              : "0 0 10px rgba(239, 68, 68, 0.4)",
          }}
          className="mb-8 h-3 w-3 rounded-full border border-white/10"
        />
        
        {/* TEXT CONTAINER - Essencial ter altura fixa para não saltar */}
        <div className="h-20 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={`word-${index}`} // Key mais robusta
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.12, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-mono font-bold tracking-tighter"
            >
              {words[index]}
            </motion.p>
          </AnimatePresence>
        </div>
        
        {/* PROGRESS BAR */}
        <div className="mt-12 h-[2px] w-40 bg-border/30 relative overflow-hidden">
          <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: isLastWord ? "0%" : "100%" }}
            transition={{ 
              repeat: isLastWord ? 0 : Infinity, 
              duration: 0.8, 
              ease: "linear" 
            }}
            className={`absolute inset-0 ${isLastWord ? "bg-green-500" : "bg-primary"}`}
          />
        </div>
      </div>
    </motion.div>
  );
};