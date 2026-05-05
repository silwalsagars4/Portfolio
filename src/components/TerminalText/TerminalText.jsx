import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const TerminalText = ({ text, delay = 0, className = "" }) => {
  const [displayedText, setDisplayedText] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (isInView) {
      const startTimeout = setTimeout(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
          if (currentIndex <= text.length) {
            setDisplayedText(text.slice(0, currentIndex));
            currentIndex++;
          } else {
            clearInterval(interval);
          }
        }, 50); // 50ms per character for a deliberate tech feel

        return () => clearInterval(interval);
      }, delay * 1000);

      return () => clearTimeout(startTimeout);
    }
  }, [isInView, text, delay]);

  return (
    <div ref={ref} className={`font-mono inline ${className}`}>
      <span>{displayedText}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "steps(2)" }}
        className="inline-block w-2 h-4 ml-1 bg-primary align-middle"
      />
    </div>
  );
};

export default TerminalText;
