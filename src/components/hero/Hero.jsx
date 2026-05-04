import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import Heroimg from "../../assets/hero/sagar.png";
import InteractiveBackground from "./InteractiveBackground";
import { cn } from "../../utils/cn";
import { Shield, Cloud, Code2, Server } from "lucide-react";

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out mouse movement
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      mouseX.set(clientX);
      mouseY.set(clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#0a0a0c]">
      {/* Interactive Background */}
      <InteractiveBackground />

      {/* Mouse Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px z-10 opacity-30 transition duration-300"
        style={{
          background: useTransform(
            [smoothX, smoothY],
            ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(0, 242, 255, 0.15), transparent 80%)`
          ),
        }}
      />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-bold tracking-wider uppercase"
          >
            Available for New Opportunities
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-display font-bold leading-[1] mb-8 tracking-tighter">
            SAGAR<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              SILWAL
            </span>
          </h1>
          
          <p className="text-xl text-muted leading-relaxed mb-10 max-w-xl">
            Associate Network and System Engineer @ <span className="text-white font-semibold underline decoration-primary/50 underline-offset-4">CloudHimalaya</span>. 
            Architecting secure, scalable, and resilient digital infrastructures.
          </p>

          <div className="flex flex-wrap gap-6">
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => (window.location.href = "mailto:silwalsagars4@gmail.com")}
              className="px-10 py-5 bg-primary text-background font-black rounded-xl shadow-[0_20px_40px_-15px_rgba(0,242,255,0.4)] transition-all uppercase tracking-widest text-sm"
            >
              Get In Touch
            </motion.button>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 border border-white/10 text-white font-black rounded-xl backdrop-blur-md hover:bg-white/5 transition-all uppercase tracking-widest text-sm flex items-center gap-2"
            >
              View Projects
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative group">
            {/* Cyber Ring */}
            <div className="absolute -inset-10 border border-primary/10 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute -inset-10 border-t-2 border-primary/40 rounded-full animate-[spin_3s_linear_infinite]" />
            
            <motion.div
              whileHover={{ rotateY: 10, rotateX: -10 }}
              style={{ perspective: 1000 }}
              className="relative z-10 w-72 h-72 md:w-[450px] md:h-[450px] rounded-full overflow-hidden glass border-white/10 shadow-[0_0_100px_rgba(0,242,255,0.1)] transition-all duration-500"
            >
              <img
                src={Heroimg}
                alt="Sagar Silwal"
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
            </motion.div>

            {/* Float Info Cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 px-6 py-3 md:px-8 md:py-4 glass rounded-2xl border-primary/30 shadow-2xl backdrop-blur-2xl z-20"
            >
              <div className="flex flex-col">
                <span className="text-primary font-black text-base md:text-lg">99.9%</span>
                <span className="text-muted text-[10px] md:text-xs uppercase tracking-widest font-bold">Uptime Focused</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0], x: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-4 -left-4 md:-top-10 md:-left-12 px-4 py-2 md:px-6 md:py-3 glass rounded-2xl border-secondary/30 shadow-2xl backdrop-blur-2xl flex items-center gap-2 md:gap-3 z-20"
            >
              <Shield className="text-secondary w-4 h-4 md:w-5 md:h-5" />
              <div className="flex flex-col">
                <span className="text-white font-bold text-xs md:text-sm whitespace-nowrap">SecOps</span>
                <span className="text-muted text-[8px] md:text-[10px] uppercase tracking-tighter">Hardened</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -15, 0], x: [0, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/4 -right-8 md:-right-20 px-4 py-2 md:px-6 md:py-3 glass rounded-2xl border-primary/30 shadow-2xl backdrop-blur-2xl flex items-center gap-2 md:gap-3 z-20"
            >
              <Cloud className="text-primary w-4 h-4 md:w-5 md:h-5" />
              <div className="flex flex-col">
                <span className="text-white font-bold text-xs md:text-sm whitespace-nowrap">Cloud</span>
                <span className="text-muted text-[8px] md:text-[10px] uppercase tracking-tighter">Solutions</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              className="absolute bottom-1/4 -left-8 md:-left-24 px-4 py-2 md:px-6 md:py-3 glass rounded-2xl border-white/20 shadow-2xl backdrop-blur-2xl flex items-center gap-2 md:gap-3 z-20"
            >
              <Server className="text-white w-4 h-4 md:w-5 md:h-5" />
              <div className="flex flex-col">
                <span className="text-white font-bold text-xs md:text-sm whitespace-nowrap">Infra</span>
                <span className="text-muted text-[8px] md:text-[10px] uppercase tracking-tighter">Scalable</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
