"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

// Unterstreicht exakt das umschlossene Wort — Strich zeichnet sich beim Reinscrollen.
export default function ScrollUnderline({ children, className, delay = 0.2 }: Props) {
  const reduce = useReducedMotion();

  return (
    <span className={cn("relative inline-block", className)}>
      {children}
      <motion.span
        className="absolute -bottom-1 left-0 block h-[2px] w-full origin-left bg-gold"
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "0px 0px -40px 0px" }}
        transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      />
    </span>
  );
}
