"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import MagneticButton from "./MagneticButton";
import { cn } from "@/lib/utils";

// pos = object-position, pro Bild auf das Kernelement gesetzt (Hochformat wird vertikal beschnitten)
// desktopOnly: der Schreibtisch ist Querformat — im Hochkant-Hero (Mobile) wird er zu stark
// beschnitten und wirkt nicht. Darum nur auf Desktop in der Rotation.
const heroSlides = [
  { src: "/images/IMG-20260625-WA0012.jpg", pos: "center 50%", alt: "Freischwebende Treppe mit indirekter LED-Beleuchtung" },
  { src: "/images/IMG-20260625-WA0014.jpg", pos: "center 32%", alt: "Einbauschrank in der Dachschräge mit Eichen-Regalnische" },
  { src: "/images/IMG-20260625-WA0006.jpg", pos: "center 50%", alt: "Meisterstück Slatewave — geschwungener Schreibtisch aus Rüster mit Steinfurnier", desktopOnly: true },
  { src: "/images/IMG-20260625-WA0016.jpg", pos: "center 42%", alt: "Raumhohe Innentür aus Eiche" },
  { src: "/images/IMG-20260625-WA0011.jpg", pos: "center 44%", alt: "Beleuchtete Massivholztreppe im Flur" },
];

const lines = ["Zeitlos.", "Modern.", "Langlebig."];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  // Rotation erst starten, wenn das erste Bild geladen ist — sonst wechseln auf
  // langsamem Netz mehrere halb geladene Bilder direkt nach dem Öffnen durch.
  const [firstLoaded, setFirstLoaded] = useState(false);

  // Auf Mobile den Querformat-Schreibtisch aus der Rotation nehmen
  const slides = isMobile ? heroSlides.filter((s) => !s.desktopOnly) : heroSlides;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.035]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const veilOpacity = useTransform(scrollYProgress, [0, 1], [1, 1.4]);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => {
      setIsMobile(mq.matches);
      setActiveIdx(0); // Index zurücksetzen, damit er nie außerhalb der gefilterten Liste liegt
    };
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Fallback: falls onLoad nicht feuert, Rotation spätestens nach 4s freigeben
  useEffect(() => {
    const t = setTimeout(() => setFirstLoaded(true), 4000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!firstLoaded) return;
    const id = setInterval(() => {
      setActiveIdx((i) => (i + 1) % slides.length);
    }, 3000);
    return () => clearInterval(id);
  }, [slides.length, firstLoaded]);

  return (
    // h-svh statt h-screen: 100vh springt auf Mobile, wenn die URL-Leiste einklappt
    <section ref={ref} className="relative h-svh min-h-[640px] overflow-hidden">
      {/* Slideshow */}
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0">
        {slides.map((slide, i) => (
          // initial explizit setzen: ohne initial rendert SSR alle Slides mit opacity 1
          // übereinander — beim Laden blitzen dann kurz alle Bilder auf ("Schnelldurchlauf")
          <motion.div
            key={slide.src}
            className="absolute inset-0"
            initial={{ opacity: i === 0 ? 1 : 0 }}
            animate={{ opacity: activeIdx === i ? 1 : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              style={{ objectPosition: slide.pos }}
              className="object-cover brightness-[0.82]"
              onLoad={i === 0 ? () => setFirstLoaded(true) : undefined}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Scrim: nur dezent unten-links für Textlesbarkeit, Bild bleibt frei */}
      <motion.div
        style={{ opacity: veilOpacity }}
        className="absolute inset-0 bg-[linear-gradient(105deg,rgba(17,12,8,0.78)_0%,rgba(17,12,8,0.32)_42%,transparent_68%),linear-gradient(to_top,rgba(17,12,8,0.72)_0%,transparent_42%)]"
      />

      {/* Text */}
      <motion.div
        style={{ y: contentY }}
        className="absolute inset-0 z-10 flex flex-col justify-end px-6 pb-28 md:px-12 md:pb-32"
      >
        <div className="max-w-3xl">
          <h1 className="font-serif text-[clamp(3rem,min(8vw,9vh),7rem)] font-normal leading-[1.02] tracking-[-0.01em]">
            {lines.map((line, i) => (
              // pb-[0.18em] gibt Descender (g, y, p) Luft unter overflow-hidden
              <span key={line} className="block overflow-hidden pb-[0.18em]">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1.1,
                    delay: 0.2 + i * 0.14,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={i === 1 ? "block italic text-gold" : "block"}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* cream statt muted + Schatten: bleibt auch auf hellen Bildstellen lesbar */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-md font-sans text-[0.92rem] font-light leading-[1.8] tracking-[0.04em] text-cream/85 [text-shadow:0_1px_14px_rgba(17,12,8,0.7)]"
          >
            Handgefertigte Holzarbeiten aus der Region Trier · Jedes Stück ein Unikat.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10"
          >
            <MagneticButton href="/kontakt" variant="ghost">
              Projekt anfragen
            </MagneticButton>
          </motion.div>
        </div>
      </motion.div>

      {/* Slide-Dots */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="absolute bottom-9 right-6 z-10 flex items-center gap-2 md:right-12"
      >
        {slides.map((_, i) => (
          // py-3 gibt der 1px-Linie eine tippbare Fläche (Touch-Ziel), ohne sie optisch zu verändern
          <button
            key={i}
            onClick={() => setActiveIdx(i)}
            aria-label={`Bild ${i + 1}`}
            className="flex items-center py-5"
          >
            <span
              className={cn(
                "h-px transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                activeIdx === i ? "w-10 bg-gold" : "w-5 bg-cream/30 hover:bg-cream/50"
              )}
            />
          </button>
        ))}
      </motion.div>
    </section>
  );
}
