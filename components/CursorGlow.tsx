"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

// Custom-Cursor: kleiner Gold-Punkt + nachlaufender Ring.
// Nur auf Geräten mit feinem Zeiger (Maus), nicht Touch / reduced-motion.
export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 350, damping: 28, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 350, damping: 28, mass: 0.5 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setEnabled(true);
    document.documentElement.style.cursor = "none";

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement;
      setHovering(!!t.closest("a, button, [data-cursor]"));
    };
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.style.cursor = "";
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* Punkt */}
      <motion.div
        style={{ x, y }}
        className="pointer-events-none fixed left-0 top-0 z-[550] hidden -translate-x-1/2 -translate-y-1/2 md:block"
      >
        <motion.div
          animate={{ scale: hovering ? 0 : 1 }}
          transition={{ duration: 0.2 }}
          className="h-1.5 w-1.5 rounded-full bg-gold"
        />
      </motion.div>

      {/* Ring (läuft nach) */}
      <motion.div
        style={{ x: ringX, y: ringY }}
        className="pointer-events-none fixed left-0 top-0 z-[550] hidden -translate-x-1/2 -translate-y-1/2 md:block"
      >
        <motion.div
          animate={{
            scale: hovering ? 1.8 : 1,
            borderColor: hovering ? "var(--color-goldlt)" : "var(--color-faint)",
          }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="h-9 w-9 rounded-full border"
        />
      </motion.div>
    </>
  );
}
