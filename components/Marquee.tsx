"use client";

import { motion, useReducedMotion } from "motion/react";

const items = [
  "Massivholz",
  "Eiche",
  "Nussbaum",
  "Fischgrät",
  "Landhausdiele",
  "Freischwebende Treppen",
  "Glasgeländer",
  "LED-Beleuchtung",
  "Einbauschränke",
  "Innentüren",
  "Aufarbeitung",
  "Maßarbeit",
];

// Endlos laufendes Material-/Leistungs-Band.
export default function Marquee() {
  const reduce = useReducedMotion();
  const row = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-line bg-ink2 py-6">
      {/* Verlauf an den Rändern */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink2 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink2 to-transparent" />

      <motion.div
        className="flex w-max items-center gap-10"
        animate={reduce ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 32, ease: "linear", repeat: Infinity }}
      >
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap">
            <span className="font-serif text-xl italic text-cream/80">{item}</span>
            <span className="h-1 w-1 rounded-full bg-gold" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
