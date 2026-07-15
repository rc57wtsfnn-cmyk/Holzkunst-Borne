# Holzkunst Borne — Website

Website für Holzkunst Borne (Tischlermeister Julian Borne, Trierweiler-Udelfangen).

## Tech-Stack

- **Next.js 16** (App Router), als statischer Export (`output: "export"`)
- **Tailwind CSS 4** + **Motion** (Animationen) + **Lenis** (Smooth Scroll)
- Hosting: **Cloudflare Pages** (Auto-Deploy bei jedem Push)
- Kontaktformular: **Cloudflare Pages Function** + **Brevo** (E-Mail-Versand, EU)

## Lokal entwickeln

```bash
npm install
npm run dev        # Dev-Server auf http://localhost:3000
```

## Build

```bash
npm run build      # erzeugt statischen Export im Ordner out/
```

## Deployment (Cloudflare Pages)

Cloudflare Pages ist mit diesem GitHub-Repo verbunden. **Jeder Push auf `main`
löst automatisch einen neuen Deploy aus.** Einstellungen im Cloudflare-Projekt:

- **Build-Command:** `npm run build`
- **Output-Verzeichnis:** `out`
- **Environment-Variable:** `BREVO_API_KEY` (API-Key aus dem Brevo-Account)

## Kontaktformular

Das Formular auf `/kontakt` postet an die Cloudflare Pages Function unter
[`functions/api/kontakt.ts`](functions/api/kontakt.ts). Die verschickt die Anfrage
per Brevo an `info@holzkunst-borne.com`. Ohne gültigen `BREVO_API_KEY` (Env-Var in
Cloudflare) kommt keine Mail an — der Nutzer sieht dann die Fehlermeldung.

## Inhalte ändern

Aktuell stehen Texte und Bildverweise direkt im Code:

- Seiten: `app/` (z. B. `app/page.tsx`, `app/kontakt/page.tsx`)
- Bausteine: `components/`
- Bilder: `public/images/`

> Geplant: **TinaCMS** — damit Inhalte künftig ohne Code über eine Oberfläche
> bearbeitet werden können. Noch nicht eingebaut.

## Domain umstellen

Läuft die echte Domain, an einer Stelle die Basis-URL setzen:

- [`app/layout.tsx`](app/layout.tsx) → `SITE_URL`
- [`app/sitemap.ts`](app/sitemap.ts) und [`app/robots.ts`](app/robots.ts) → `BASE`

## Rechtliches

Impressum (`/impressum`) und Datenschutz (`/datenschutz`) sind gepflegt. Die
Brevo-Anschrift im Datenschutz ist noch als Platzhalter markiert und beim Go-Live
zu ergänzen. **Kein anwaltlich geprüfter Text** — bei Bedarf durch eRecht24 o. Ä.
absichern.
