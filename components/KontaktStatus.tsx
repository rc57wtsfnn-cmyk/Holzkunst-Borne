"use client";

import { useSearchParams } from "next/navigation";

// Liest ?sent=ok|error aus der URL (nach dem Redirect der Cloudflare Pages
// Function) und zeigt die passende Rückmeldung. Muss Client Component sein,
// weil der Static Export keine Server-seitigen searchParams kennt.
export default function KontaktStatus() {
  const sent = useSearchParams().get("sent");

  if (sent === "ok") {
    return (
      <p className="border border-gold/40 bg-gold/10 p-4 font-sans text-[0.82rem] text-cream">
        Danke, deine Anfrage ist angekommen. Ich melde mich zeitnah.
      </p>
    );
  }

  if (sent === "error") {
    return (
      <p className="border border-red-500/40 bg-red-500/10 p-4 font-sans text-[0.82rem] text-cream">
        Das hat leider nicht geklappt. Schreib mir stattdessen direkt an{" "}
        <a href="mailto:info@holzkunst-borne.com" className="underline">
          info@holzkunst-borne.com
        </a>
        .
      </p>
    );
  }

  return null;
}
