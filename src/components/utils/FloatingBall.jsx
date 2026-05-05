import React, { useEffect, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";

const FloatingBall = () => {
  const x = useMotionValue(window.innerWidth / 2);
  const y = useMotionValue(window.innerHeight / 2);
  
  const velocity = useRef({ x: 3, y: 3 });
  const isDragging = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });
  const requestRef = useRef();
  const collidablesRef = useRef([]);
  const topHitCount = useRef(0);
  const lastTopHitTime = useRef(0);
  
  const gravity = 0.15;
  const friction = 0.99;
  const bounce = 0.7;
  const ballSize = 54;

  const updateCollidables = () => {
    const elements = document.querySelectorAll('.tech-border, button, .glass-card, .section-divider');
    collidablesRef.current = Array.from(elements).map(el => el.getBoundingClientRect());
  };

  useEffect(() => {
    updateCollidables();
    window.addEventListener('resize', updateCollidables);
    window.addEventListener('scroll', updateCollidables);
    return () => {
      window.removeEventListener('resize', updateCollidables);
      window.removeEventListener('scroll', updateCollidables);
    };
  }, []);

  const updatePhysics = () => {
    if (isDragging.current) {
      velocity.current = {
        x: (x.get() - lastPos.current.x) * 0.5,
        y: (y.get() - lastPos.current.y) * 0.5
      };
      lastPos.current = { x: x.get(), y: y.get() };
      requestRef.current = requestAnimationFrame(updatePhysics);
      return;
    }

    let vx = velocity.current.x;
    let vy = velocity.current.y + gravity;

    vx *= friction;
    vy *= friction;

    let nextX = x.get() + vx;
    let nextY = y.get() + vy;

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight; 

    // --- Hard Containment (Never leave the page) ---
    if (nextX <= 0) {
      nextX = 0;
      vx = Math.abs(vx) * bounce;
    } else if (nextX >= screenWidth - ballSize) {
      nextX = screenWidth - ballSize;
      vx = -Math.abs(vx) * bounce;
    }

    if (nextY <= 0) {
      // Top jitter protection
      const now = Date.now();
      if (now - lastTopHitTime.current < 500) {
        topHitCount.current++;
      } else {
        topHitCount.current = 1;
      }
      lastTopHitTime.current = now;

      if (topHitCount.current > 2) {
        nextY = 20;
        vy = 4; // Force drop
        topHitCount.current = 0;
      } else {
        nextY = 0;
        vy = Math.abs(vy) * 0.2;
      }
    } else if (nextY >= screenHeight - ballSize) {
      nextY = screenHeight - ballSize;
      
      // Random "Keep-Alive" Pulse
      // If ball is almost still, give it a random push in ANY direction
      if (Math.abs(vy) < 1.5 && Math.abs(vx) < 1.5) {
        vy = -3 - Math.random() * 3; // Jump up
        vx = (Math.random() - 0.5) * 10; // Random horizontal boost
      } else {
        vy = -Math.abs(vy) * bounce;
      }
    }

    // --- Component Collisions ---
    collidablesRef.current.forEach(rect => {
      if (
        nextX + ballSize > rect.left &&
        nextX < rect.right &&
        nextY + ballSize > rect.top &&
        nextY < rect.bottom
      ) {
        const overlapTop = (nextY + ballSize) - rect.top;
        const overlapBottom = rect.bottom - nextY;
        const overlapLeft = (nextX + ballSize) - rect.left;
        const overlapRight = rect.right - nextX;
        const minOverlap = Math.min(overlapTop, overlapBottom, overlapLeft, overlapRight);

        if (minOverlap === overlapTop) {
          nextY = rect.top - ballSize;
          // Randomize bounce a bit to keep it interesting
          vy = -Math.max(Math.abs(vy) * bounce, 2);
          vx += (Math.random() - 0.5) * 2;
        } else if (minOverlap === overlapBottom) {
          nextY = rect.bottom;
          vy = Math.abs(vy) + 1;
        } else if (minOverlap === overlapLeft) {
          nextX = rect.left - ballSize;
          vx = -Math.abs(vx) * bounce;
        } else if (minOverlap === overlapRight) {
          nextX = rect.right;
          vx = Math.abs(vx) * bounce;
        }
      }
    });

    velocity.current = { x: vx, y: vy };
    x.set(nextX);
    y.set(nextY);
    
    requestRef.current = requestAnimationFrame(updatePhysics);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(updatePhysics);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <motion.div
      drag
      dragMomentum={false}
      style={{ x, y, position: "fixed", top: 0, left: 0 }}
      onDragStart={() => {
        isDragging.current = true;
        lastPos.current = { x: x.get(), y: y.get() };
      }}
      onDragEnd={() => {
        isDragging.current = false;
      }}
      whileDrag={{ scale: 1.1, cursor: "grabbing" }}
      className="w-[54px] h-[54px] z-[100] cursor-grab pointer-events-auto touch-none"
    >
      <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
      <div className="relative w-full h-full bg-gradient-to-br from-primary via-primary/50 to-secondary rounded-full border border-white/30 shadow-[0_0_20px_rgba(0,242,255,0.5)] flex items-center justify-center backdrop-blur-md">
        <div className="w-4 h-4 bg-white/40 rounded-full blur-[1px] -translate-x-1.5 -translate-y-1.5" />
        <div className="absolute inset-2 border border-white/10 rounded-full animate-[spin_12s_linear_infinite]" />
      </div>
    </motion.div>
  );
};

export default FloatingBall;
