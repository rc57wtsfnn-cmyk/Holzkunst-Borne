/// <reference types="@cloudflare/workers-types" />

// Cloudflare Pages Function — läuft neben dem statischen Next.js-Export.
// Nimmt das Kontaktformular entgegen und schickt die Mail über Brevo (EU, kein US-Transfer).

interface Env {
  BREVO_API_KEY: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const formData = await context.request.formData();
  const name = formData.get("name");
  const kontakt = formData.get("kontakt");
  const art = formData.get("art");
  const nachricht = formData.get("nachricht");

  if (!name || !kontakt) {
    return Response.redirect(new URL("/kontakt?sent=error", context.request.url), 303);
  }

  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": context.env.BREVO_API_KEY ?? "",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sender: { name: "Holzkunst Borne Website", email: "no-reply@holzkunst-borne.com" },
      to: [{ email: "info@holzkunst-borne.com" }],
      replyTo: {
        email: String(kontakt).includes("@") ? String(kontakt) : "info@holzkunst-borne.com",
      },
      subject: `Neue Anfrage von ${name} — ${art ?? "Projekt"}`,
      textContent: `Name: ${name}\nKontakt: ${kontakt}\nArt: ${art}\n\nNachricht:\n${nachricht}`,
    }),
  });

  if (!res.ok) {
    return Response.redirect(new URL("/kontakt?sent=error", context.request.url), 303);
  }

  return Response.redirect(new URL("/kontakt?sent=ok#anfrage", context.request.url), 303);
};
