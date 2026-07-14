"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { beforeImage, afterImage } from "@/lib/images";

type Props = {
  before?: string;
  after?: string;
  beforeAlt?: string;
  afterAlt?: string;
  beforeLabel?: string;
  afterLabel?: string;
};

// Vorher/Nachher-Regler: Trennlinie mit Cursor ziehen oder klicken.
// Standard = Parkett-Aufarbeitung; via Props für andere Paare (z. B. Treppe) wiederverwendbar.
export default function BeforeAfter({
  before = beforeImage,
  after = afterImage,
  beforeAlt = "Parkett vor der Aufarbeitung — verwittert und fleckig",
  afterAlt = "Parkett nach der Aufarbeitung — abgeschliffen und geölt",
  beforeLabel = "Vorher",
  afterLabel = "Nachher",
}: Props) {
  // Mittig starten: Besucher sehen sofort beide Zustände zu gleichen Teilen
  // und verstehen auf Anhieb, dass sich der Regler ziehen lässt.
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const move = useCallback((clientX: number) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(98, Math.max(2, p)));
  }, []);

  // Ziehen während die Maus gedrückt ist — global, damit es auch außerhalb klappt.
  useEffect(() => {
    if (!dragging) return;
    const onMove = (e: MouseEvent) => move(e.clientX);
    const onTouch = (e: TouchEvent) => move(e.touches[0].clientX);
    const stop = () => setDragging(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("mouseup", stop);
    window.addEventListener("touchend", stop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchend", stop);
    };
  }, [dragging, move]);

  return (
    // touch-pan-y: vertikales Scrollen bleibt beim Browser, horizontales Ziehen beim Regler
    <div
      ref={ref}
      onMouseDown={(e) => {
        setDragging(true);
        move(e.clientX);
      }}
      onTouchStart={(e) => {
        setDragging(true);
        move(e.touches[0].clientX);
      }}
      className="relative aspect-[4/3] w-full cursor-ew-resize touch-pan-y select-none overflow-hidden border border-line md:aspect-[16/10]"
    >
      {/* Nachher (Hintergrund) */}
      <Image
        src={after}
        alt={afterAlt}
        fill
        sizes="(max-width: 900px) 100vw, 900px"
        className="object-cover"
        draggable={false}
      />

      {/* Vorher (oben, beschnitten) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src={before}
          alt={beforeAlt}
          fill
          sizes="(max-width: 900px) 100vw, 900px"
          className="object-cover"
          draggable={false}
        />
      </div>

      {/* Tags */}
      <span className="absolute bottom-4 left-4 bg-ink/70 px-2.5 py-1 font-sans text-[0.62rem] uppercase tracking-[0.18em] text-faint">
        {beforeLabel}
      </span>
      <span className="absolute bottom-4 right-4 bg-ink/70 px-2.5 py-1 font-sans text-[0.62rem] uppercase tracking-[0.18em] text-gold">
        {afterLabel}
      </span>

      {/* Trennlinie + Knopf */}
      <div
        className="pointer-events-none absolute inset-y-0 z-10 w-px -translate-x-1/2 bg-gold"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gold text-ink shadow-lg shadow-ink/40">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
            <path d="m9 6 6 6-6 6" transform="translate(6 0)" />
          </svg>
        </div>
      </div>
    </div>
  );
}
