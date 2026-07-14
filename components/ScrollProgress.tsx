"use client";

import { motion, useScroll, useSpring } from "motion/react";

// Dünner Gold-Fortschrittsbalken oben.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[300] h-px origin-left bg-gradient-to-r from-gold to-goldlt"
    />
  );
}
