"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Props = {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  beforeLabel?: string;
  afterLabel?: string;
};

// Vorher/Nachher als sanfte Überblendung + Umschalter.
// Für Bildpaare mit leicht abweichender Perspektive (kein deckungsgleicher Wisch möglich) —
// die Überblendung kaschiert den Versatz, beide Fotos bleiben komplett sichtbar.
export default function BeforeAfterFade({
  before,
  after,
  beforeAlt,
  afterAlt,
  beforeLabel = "Vorher",
  afterLabel = "Nachher",
}: Props) {
  // Startet auf "Vorher" (Beton-Rohbau) — Klick auf "Nachher" liefert den Wow-Moment.
  const [showAfter, setShowAfter] = useState(false);

  return (
    <div className="flex flex-col items-center">
      {/* Bild-Stapel: Portrait-Verhältnis zeigt die Treppe fast komplett */}
      <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden border border-line">
        <Image
          src={before}
          alt={beforeAlt}
          fill
          sizes="(max-width: 640px) 100vw, 420px"
          className="object-cover"
          draggable={false}
        />
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: showAfter ? 1 : 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={after}
            alt={afterAlt}
            fill
            sizes="(max-width: 640px) 100vw, 420px"
            className="object-cover"
            draggable={false}
          />
        </motion.div>

        {/* Status-Tag oben rechts */}
        <span className="absolute right-3 top-3 bg-ink/70 px-2.5 py-1 font-sans text-[0.62rem] uppercase tracking-[0.18em] text-gold">
          {showAfter ? afterLabel : beforeLabel}
        </span>
      </div>

      {/* Umschalter */}
      <div className="mt-6 inline-flex border border-line">
        <button
          type="button"
          onClick={() => setShowAfter(false)}
          className={cn(
            "px-7 py-2.5 font-sans text-[0.7rem] uppercase tracking-[0.18em] transition-colors duration-300",
            !showAfter ? "bg-gold text-ink" : "text-muted hover:text-cream"
          )}
        >
          {beforeLabel}
        </button>
        <button
          type="button"
          onClick={() => setShowAfter(true)}
          className={cn(
            "px-7 py-2.5 font-sans text-[0.7rem] uppercase tracking-[0.18em] transition-colors duration-300",
            showAfter ? "bg-gold text-ink" : "text-muted hover:text-cream"
          )}
        >
          {afterLabel}
        </button>
      </div>
    </div>
  );
}
