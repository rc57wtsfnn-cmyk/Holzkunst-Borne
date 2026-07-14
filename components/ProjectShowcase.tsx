"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  projects,
  categoryLabels,
  treppeBeforeImage,
  treppeAfterImage,
  type Category,
} from "@/lib/images";
import BeforeAfter from "@/components/BeforeAfter";
import BeforeAfterFade from "@/components/BeforeAfterFade";
import MagneticButton from "@/components/MagneticButton";
import { cn } from "@/lib/utils";

// Feste Reihenfolge der Kategorien
const order: Category[] = ["treppen", "parkett", "moebel"];

export default function ProjectShowcase() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<Category>("treppen");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Nächste Kategorie in fester Reihenfolge — leitet den Besucher am Sektionsende weiter
  const next = order[(order.indexOf(active) + 1) % order.length];
  const goNext = () => {
    setActive(next);
    setLightbox(null);
    // Zurück zum Sektionsanfang (Header 64px + Sticky-Filterleiste einrechnen)
    if (sectionRef.current) {
      window.scrollTo({
        top: sectionRef.current.getBoundingClientRect().top + window.scrollY - 140,
        behavior: "smooth",
      });
    }
  };

  // Bilder der aktiven Kategorie — die Lightbox indiziert genau hierauf
  const items = projects.filter((p) => p.category === active);

  // Spaltenzahl an die Bildanzahl koppeln, damit keine Reihe "verloren" wirkt
  const colClass =
    items.length === 4 || items.length <= 2
      ? "columns-1 sm:columns-2"
      : "columns-1 sm:columns-2 lg:columns-3";

  // Deep-Link von der Startseite (/projekte#treppen usw.) wählt die Kategorie vor
  useEffect(() => {
    const h = window.location.hash.replace("#", "") as Category;
    if (order.includes(h)) setActive(h);
  }, []);

  const close = () => setLightbox(null);
  const step = (dir: number) =>
    setLightbox((i) => (i === null ? i : (i + dir + items.length) % items.length));

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight")
        setLightbox((i) => (i === null ? i : (i + 1) % items.length));
      if (e.key === "ArrowLeft")
        setLightbox((i) => (i === null ? i : (i - 1 + items.length) % items.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, items.length]);

  return (
    <>
      {/* Kategorie-Auswahl — anklickbar, kein Scrollen bis ans Ende */}
      <div className="sticky top-[64px] z-[90] flex flex-wrap justify-center gap-2.5 border-b border-line bg-ink/95 px-4 py-4 backdrop-blur-md sm:gap-3">
        {order.map((cat, i) => (
          <button
            key={cat}
            onClick={() => {
              setActive(cat);
              setLightbox(null);
            }}
            className={cn(
              // py-3 auf Mobile = größeres Touch-Ziel, ab sm wieder kompakter
              "border px-4 py-3 font-sans text-[0.68rem] uppercase tracking-[0.12em] transition-colors duration-300 sm:px-6 sm:py-2.5 sm:text-[0.7rem] sm:tracking-[0.14em]",
              active === cat
                ? "border-gold text-gold"
                : "border-faint text-muted hover:border-cream hover:text-cream"
            )}
          >
            <span className="mr-2 text-[0.6rem] opacity-50">
              {String(i + 1).padStart(2, "0")}
            </span>
            {categoryLabels[cat]}
          </button>
        ))}
      </div>

      {/* Inhalt der aktiven Kategorie */}
      <section ref={sectionRef} className="px-4 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          {/* key={active} → beim Kategoriewechsel remountet der Block und spielt den Enter-Fade.
              Kein AnimatePresence/exit (hängt mit React 19 im mode="wait"). */}
          <motion.div
              key={active}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Kopf */}
              <div className="mb-10 flex items-end justify-between gap-6 px-2">
                <div>
                  <span className="eyebrow mb-4 block">
                    {String(order.indexOf(active) + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-serif text-[clamp(2rem,4.5vw,3.6rem)] leading-[1.04]">
                    {categoryLabels[active]}
                  </h2>
                </div>
                <span className="mb-3 hidden h-px flex-1 max-w-[40%] bg-gold/60 md:block" />
              </div>

              {/* Masonry-Raster */}
              <div className={`${colClass} gap-3 px-2`}>
                {items.map((p, i) => (
                  <motion.button
                    key={p.src}
                    initial={reduce ? false : { opacity: 0, y: 26 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: (i % 3) * 0.07,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    onClick={() => setLightbox(i)}
                    className="group relative mb-3 block w-full overflow-hidden break-inside-avoid"
                  >
                    <Image
                      src={p.src}
                      alt={p.title}
                      width={800}
                      height={1000}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="w-full brightness-[0.88] transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06] group-hover:brightness-100"
                    />
                    {/* Schleier lichtet sich */}
                    <span className="absolute inset-0 bg-ink/25 transition-opacity duration-700 group-hover:opacity-0" />
                    {/* Gold-Linie: Desktop beim Hover, Mobile zeichnet sie sich beim Reinscrollen */}
                    <span className="absolute left-0 top-0 hidden h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100 md:block" />
                    <motion.span
                      initial={reduce ? false : { scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
                      transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute left-0 top-0 h-px w-full origin-left bg-gold md:hidden"
                    />
                    {/* Titel: auf Mobile sichtbar, auf Desktop erst beim Hover */}
                    <div className="absolute inset-x-0 bottom-0 translate-y-0 bg-gradient-to-t from-ink/90 to-transparent p-5 pt-12 text-left opacity-100 transition-all duration-500 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                      <h4 className="font-serif text-lg text-cream">{p.title}</h4>
                      <p className="mt-0.5 font-sans text-[0.72rem] tracking-[0.06em] text-gold">
                        {p.meta}
                      </p>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Vorher / Nachher (Treppe) — Crossfade Beton → Eiche-LED */}
              {active === "treppen" && (
                <div className="mx-auto mt-16 max-w-4xl px-2 text-center">
                  <span className="eyebrow mb-5 block">Aus Ranz mach Glanz</span>
                  <h3 className="font-serif text-[clamp(1.8rem,3.5vw,3rem)]">
                    Vorher / Nachher
                  </h3>
                  <p className="mx-auto mb-10 mt-4 max-w-lg font-sans text-[0.92rem] font-light leading-[1.9] text-muted">
                    Aus rohem Beton wird eine Treppe, die den Raum trägt. Massive
                    Eichenstufen, indirekt beleuchtet. Klick auf „Nachher".
                  </p>
                  <BeforeAfterFade
                    before={treppeBeforeImage}
                    after={treppeAfterImage}
                    beforeAlt="Treppe im Beton-Rohbau vor der Verkleidung"
                    afterAlt="Fertige Massivholztreppe aus Eiche mit indirekter LED-Beleuchtung"
                  />
                </div>
              )}

              {/* Vorher / Nachher (Parkett) — Wisch-Regler, ~10% kompakter */}
              {active === "parkett" && (
                <div className="mx-auto mt-16 max-w-[50rem] px-2 text-center">
                  <span className="eyebrow mb-5 block">Aus Ranz mach Glanz</span>
                  <h3 className="font-serif text-[clamp(1.8rem,3.5vw,3rem)]">
                    Vorher / Nachher
                  </h3>
                  <p className="mx-auto mb-10 mt-4 max-w-lg font-sans text-[0.92rem] font-light leading-[1.9] text-muted">
                    Ein alter Boden muss nicht raus. Abschleifen, ölen, aufarbeiten — und
                    aus müde wird Charakter. Zieh den Regler.
                  </p>
                  <BeforeAfter />
                </div>
              )}

              {/* Weiterleitung am Sektionsende: nächste Kategorie bzw. Kontakt-CTA */}
              <div className="mt-16 flex flex-col items-center gap-4 border-t border-line pt-12 text-center md:mt-20">
                {active !== "moebel" ? (
                  <>
                    <span className="font-sans text-[0.62rem] uppercase tracking-[0.22em] text-faint">
                      Weiter geht&apos;s
                    </span>
                    <button
                      onClick={goNext}
                      className="group inline-flex items-center gap-3 font-serif text-[clamp(1.4rem,3vw,2rem)] text-cream transition-colors duration-300 hover:text-gold"
                    >
                      {categoryLabels[next]}
                      <span className="inline-block text-gold transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5">
                        →
                      </span>
                    </button>
                  </>
                ) : (
                  <>
                    <span className="font-sans text-[0.62rem] uppercase tracking-[0.22em] text-faint">
                      Dein Projekt fehlt hier noch
                    </span>
                    <MagneticButton href="/kontakt" variant="ghost">
                      Projekt anfragen
                    </MagneticButton>
                  </>
                )}
              </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[500] flex items-center justify-center bg-[rgba(10,7,4,0.97)] p-4"
          >
            <button
              onClick={close}
              className="absolute right-3 top-3 grid h-11 w-11 place-items-center font-serif text-3xl text-cream/60 transition-opacity hover:opacity-100 md:right-6 md:top-5"
              aria-label="Schließen"
            >
              ×
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              className="absolute left-4 grid h-11 w-11 place-items-center rounded-full border border-faint text-cream transition-colors hover:border-gold hover:text-gold md:left-8"
              aria-label="Zurück"
            >
              ‹
            </button>
            {/* drag="x": Wischen blättert durchs Album (v. a. Mobile) — Bild federt zurück */}
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.25}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) step(1);
                else if (info.offset.x > 60) step(-1);
              }}
              className="relative max-h-[88vh] max-w-[90vw] touch-pan-y"
            >
              <Image
                src={items[lightbox].src}
                alt={items[lightbox].title}
                width={1400}
                height={1700}
                className="max-h-[88vh] w-auto object-contain"
              />
              <div className="absolute inset-x-0 -bottom-px bg-gradient-to-t from-ink/90 to-transparent p-5 pt-12">
                <h4 className="font-serif text-xl text-cream">
                  {items[lightbox].title}
                </h4>
                <p className="font-sans text-[0.75rem] tracking-[0.06em] text-gold">
                  {items[lightbox].meta}
                </p>
              </div>
            </motion.div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              className="absolute right-4 grid h-11 w-11 place-items-center rounded-full border border-faint text-cream transition-colors hover:border-gold hover:text-gold md:right-8"
              aria-label="Weiter"
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
