// Set SITE_URL to the public origin before deploying. Local builds use localhost.
export const siteUrl = new URL(process.env.SITE_URL || "http://localhost:3000");
if (!["http:", "https:"].includes(siteUrl.protocol) || siteUrl.pathname !== "/" || siteUrl.search || siteUrl.hash || siteUrl.username || siteUrl.password) {
  throw new Error("SITE_URL must be an HTTP(S) origin, for example https://your-domain.no");
}
export const languageAlternates = {
  nb: new URL("/nb", siteUrl).href,
  en: new URL("/en", siteUrl).href,
  es: new URL("/es", siteUrl).href,
  "x-default": new URL("/nb", siteUrl).href,
};
