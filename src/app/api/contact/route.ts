import { contact } from "@/data/contact";

export const runtime = "nodejs";

// Basic per-process protection, not a distributed rate limiter. No message storage.
let windowEnd = 0;
let attempts = 0;
const MAX_BODY_BYTES = 24000;

function error(status: number) {
  return Response.json({ ok: false }, { status });
}

export async function POST(request: Request) {
  const expectedOrigin = process.env.SITE_URL || new URL(request.url).origin;
  if (request.headers.get("origin") !== new URL(expectedOrigin).origin) return error(403);
  if (!request.headers.get("content-type")?.startsWith("application/json")) return error(415);

  let input: Record<string, unknown>;
  try {
    const reader = request.body?.getReader();
    if (!reader) return error(400);
    const chunks: Uint8Array[] = [];
    let size = 0;
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > MAX_BODY_BYTES) {
        await reader.cancel();
        return error(413);
      }
      chunks.push(value);
    }
    const parsed = JSON.parse(Buffer.concat(chunks).toString("utf8"));
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return error(400);
    input = parsed;
  } catch {
    return error(400);
  }

  if (typeof input.website !== "string" || input.website.trim()) return error(400);
  const limits = { name: 120, email: 254, company: 160, phone: 40, subject: 160, message: 5000 };
  const fields: Record<string, string> = {};
  for (const [key, max] of Object.entries(limits)) {
    const value = input[key];
    if (typeof value !== "string" || value.length > max) return error(400);
    fields[key] = value.trim();
    if (key !== "message" && /[\r\n\x00-\x1f\x7f]/.test(value)) return error(400);
  }
  const { name, email, company, phone, subject, message } = fields;
  if (!name || !subject || !message || !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email)) return error(400);

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !from) return error(503);
  // Keep the authenticated mailbox; only the display name comes from the visitor.
  const fromAddress = (from.match(/<([^<>]+)>\s*$/)?.[1] || from).trim();
  if (!/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(fromAddress)) return error(503);
  const displayName = name.replace(/["\\<>]/g, " ").replace(/\s+/g, " ").trim() || "Kunde";

  const now = Date.now();
  if (now >= windowEnd) {
    windowEnd = now + 60000;
    attempts = 0;
  }
  if (attempts >= 5) {
    return Response.json({ ok: false }, { status: 429, headers: { "Retry-After": String(Math.ceil((windowEnd - now) / 1000)) } });
  }
  attempts += 1;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: `"${displayName} via Ryssdal Web Solutions" <${fromAddress}>`,
        to: [contact.email],
        reply_to: email,
        subject,
        text: `Navn: ${name}\nE-post: ${email}\nFirma / organisasjon: ${company || "Ikke oppgitt"}\nTelefon: ${phone || "Ikke oppgitt"}\n\nMelding:\n${message}`,
      }),
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) return error(502);
    const result = await response.json();
    if (typeof result.id !== "string" || !result.id) return error(502);
    return Response.json({ ok: true });
  } catch {
    return error(502);
  }
}
