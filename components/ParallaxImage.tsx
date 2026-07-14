"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  /** Wie stark das Bild im Rahmen scrubbt (px). */
  amount?: number;
  /** Basis-Skalierung des Bildes (Headroom fürs Scrubben). Kleiner = weniger Zoom, mehr Bild sichtbar. */
  zoom?: number;
  reveal?: boolean;
};

// Bild scrubbt beim Scrollen sanft im eigenen Rahmen (Tiefenwirkung)
// und wischt optional beim Reinkommen per Clip-Path auf.
export default function ParallaxImage({
  src,
  alt,
  className,
  imgClassName,
  sizes = "(max-width: 768px) 100vw, 50vw",
  amount = 60,
  zoom = 1.18,
  reveal = true,
}: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-amount, amount]);

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div
        className="absolute inset-0"
        initial={reduce || !reveal ? false : { clipPath: "inset(0 0 100% 0)" }}
        whileInView={reveal ? { clipPath: "inset(0 0 0% 0)" } : undefined}
        viewport={{ once: true, margin: "0px 0px -80px 0px" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="absolute inset-0"
          style={reduce ? undefined : { y, scale: zoom }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            className={cn("object-cover", imgClassName)}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
