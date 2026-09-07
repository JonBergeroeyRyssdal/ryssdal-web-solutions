import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LanguageProvider, { SkipLink } from "@/components/LanguageProvider";
import { dictionaries, isLanguage, languages } from "@/i18n/config";
import { siteUrl, languageAlternates } from "@/i18n/seo";

type Props = { params: Promise<{ lang: string }>; children: React.ReactNode };
const locales = { nb: "nb_NO", en: "en_US", es: "es_ES" };

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Pick<Props, "params">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const t = dictionaries[lang];
  const url = new URL(`/${lang}`, siteUrl).href;
  return {
    metadataBase: siteUrl,
    title: t.title,
    description: t.heroText,
    alternates: { canonical: url, languages: languageAlternates },
    openGraph: {
      title: t.title, description: t.heroText, url,
      locale: locales[lang], alternateLocale: languages.filter((value) => value !== lang).map((value) => locales[value]),
      type: "website", siteName: "Ryssdal Web Solutions",
    },
    twitter: { card: "summary", title: t.title, description: t.heroText },
  };
}

export default async function RootLayout({ children, params }: Props) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  return (
    <html lang={lang}>
      <body className="d-flex flex-column">
        <LanguageProvider language={lang} dictionary={dictionaries[lang]}>
          <SkipLink />
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
