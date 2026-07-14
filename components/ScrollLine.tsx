"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  delay?: number;
  origin?: "left" | "center";
};

// Gold-Akzentstrich, der beim Reinscrollen gezeichnet wird.
export default function ScrollLine({ className, delay = 0.15, origin = "left" }: Props) {
  const reduce = useReducedMotion();

  return (
    <motion.span
      className={cn(
        "block h-px bg-gold",
        origin === "center" ? "origin-center" : "origin-left",
        className
      )}
      initial={reduce ? false : { scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "0px 0px -40px 0px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}
