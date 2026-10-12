"use client";
import { motion, MotionConfig } from "motion/react";
import type { ReactNode } from "react";

// One orchestrated load sequence: cards rise in a stagger. Respects prefers-reduced-motion.
export function Stage({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.main
        className={className}
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.07 } } }}
      >
        {children}
      </motion.main>
    </MotionConfig>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.section
      className={`card ${className}`}
      variants={{
        hidden: { opacity: 0, y: 18, scale: 0.98 },
        show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 140, damping: 20 } },
      }}
    >
      {children}
    </motion.section>
  );
}