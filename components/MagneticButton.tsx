"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "ghost" | "gold";
  className?: string;
};

// Ruhiger Premium-Button: dezenter Fill-Sweep + nachrückender Pfeil. Kein Magnet-Wiggle.
export default function MagneticButton({
  href,
  children,
  variant = "ghost",
  className,
}: Props) {
  const base =
    "group relative inline-flex items-center justify-center gap-2.5 overflow-hidden px-9 py-3.5 font-sans text-[0.72rem] uppercase tracking-[0.2em] transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]";

  const variants = {
    // Ghost: Rahmen, Gold füllt sanft von unten, Text wird dunkel
    ghost: "border border-cream/40 text-cream hover:border-gold hover:text-ink",
    // Gold: solide, leicht aufhellend
    gold: "bg-gold text-ink hover:bg-goldlt",
  };

  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {/* Fill-Sweep nur beim Ghost-Button */}
      {variant === "ghost" && (
        <span className="absolute inset-0 -z-0 origin-bottom scale-y-0 bg-gold transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100" />
      )}
      <span className="relative z-10 flex items-center gap-2.5">
        {children}
        <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  );
}
