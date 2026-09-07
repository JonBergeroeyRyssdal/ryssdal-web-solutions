"use client";

import Link from "next/link";
import { useLanguage, type Language } from "./LanguageProvider";
const languages: { code: Language; label: string }[] = [
  { code: "nb", label: "Norsk" },
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
];

export default function LanguageSwitcher() {
  const { language, t } = useLanguage();
  return (
    <div className="language-switcher" role="group" aria-label={t.language}>
      {languages.map(({ code, label }) => (
        <Link key={code} href={`/${code}`} hrefLang={code} lang={code}
          aria-current={language === code ? "page" : undefined}>
          {label}
        </Link>
      ))}
    </div>
  );
}
