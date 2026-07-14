"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Start" },
  { href: "/projekte", label: "Projekte" },
  { href: "/kontakt", label: "Über uns & Kontakte" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  // Hintergrund-Scroll sperren, solange das Mobile-Menü offen ist
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[210] flex items-center justify-between px-6 transition-[padding] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] md:px-12",
        scrolled
          ? "border-b border-line bg-ink/95 py-3 backdrop-blur-xl"
          // Kein border-b hier (auch nicht transparent) — border + Gradient-Hintergrund
          // erzeugen bei manchen Zoomstufen eine sichtbare 1px-Nahtlinie am Header-Rand.
          : "bg-gradient-to-b from-ink/75 via-ink/30 to-transparent py-5"
      )}
    >
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/images/logo.png"
          alt="Holzkunst Borne"
          width={96}
          height={96}
          className={cn(
            // Negatives my lässt das Logo größer wirken, ohne die Headerhöhe zu ändern
            // (Layout-Höhe bleibt wie vorher, das runde Logo ragt leicht über die Kanten)
            "rounded-full object-cover transition-[width,height,margin] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
            scrolled ? "-my-1 h-12 w-12" : "-my-3 h-20 w-20 md:my-0 md:h-24 md:w-24"
          )}
          priority
        />
        <span className={cn(
          "font-serif uppercase tracking-[0.12em] text-cream transition-[font-size] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
          scrolled ? "text-[0.95rem]" : "text-[0.82rem] md:text-[1.2rem]"
        )}>
          Holzkunst Borne
        </span>
      </Link>

      <nav className="hidden items-center gap-12 md:flex">
        {links.map((l) => {
          const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
          return (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "relative font-sans text-[0.72rem] uppercase tracking-[0.18em] transition-colors duration-300",
                active ? "text-cream" : "text-muted hover:text-cream"
              )}
            >
              {l.label}
              {active && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1.5 left-0 h-px w-full bg-gold"
                />
              )}
            </Link>
          );
        })}
        <Link
          href="/kontakt"
          className="border-b border-gold/40 pb-px font-sans text-[0.72rem] uppercase tracking-[0.18em] text-gold transition-colors hover:border-goldlt hover:text-goldlt"
        >
          Projekt anfragen
        </Link>
      </nav>

      {/* Burger */}
      {/* 44px-Touch-Ziel: Padding vergrößert die Tippfläche, -m gleicht das Layout aus */}
      <button
        aria-label="Menü"
        onClick={() => setOpen((v) => !v)}
        className="relative z-[230] -m-2.5 flex h-11 w-11 flex-col items-center justify-center gap-[5px] p-2.5 md:hidden"
      >
        <motion.span
          animate={open ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
          className="block h-0.5 w-6 bg-cream"
        />
        <motion.span
          animate={open ? { opacity: 0 } : { opacity: 1 }}
          className="block h-0.5 w-6 bg-cream"
        />
        <motion.span
          animate={open ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
          className="block h-0.5 w-6 bg-cream"
        />
      </button>

    </header>

    {/* Mobile-Menü AUSSERHALB des Headers — sonst macht dessen backdrop-blur den
        Header zum Containing-Block und die fixed-Elemente kollabieren auf Headerhöhe. */}
    <AnimatePresence>
      {open && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[180] bg-ink/70 backdrop-blur-sm md:hidden"
        />
      )}
    </AnimatePresence>

    <AnimatePresence>
      {open && (
        <motion.nav
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-y-0 right-0 z-[190] flex w-3/4 max-w-xs flex-col justify-center gap-5 border-l border-line bg-ink2 px-10 md:hidden"
        >
          {[...links, { href: "/kontakt", label: "Projekt anfragen", cta: true }].map((l, i) => (
            <motion.div
              key={l.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 + i * 0.07 }}
            >
              {/* py-2 macht jede Zeile zum vollwertigen Touch-Ziel; CTA in Gold wie auf Desktop */}
              <Link
                href={l.href}
                className={cn(
                  "block py-2 font-sans text-base uppercase tracking-[0.16em]",
                  "cta" in l && l.cta ? "text-gold" : "text-cream"
                )}
              >
                {l.label}
              </Link>
            </motion.div>
          ))}
        </motion.nav>
      )}
    </AnimatePresence>
    </>
  );
}
