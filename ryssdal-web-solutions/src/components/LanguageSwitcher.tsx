"use client";

import { useLanguage, type Language } from "./LanguageProvider";
const languages: { code: Language; label: string }[] = [
  { code: "nb", label: "Norsk" },
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
];

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();
  return (
    <div className="language-switcher" role="group" aria-label={t.language}>
      {languages.map(({ code, label }) => (
        <button key={code} type="button" lang={code} aria-pressed={language === code}
          onClick={() => setLanguage(code)}>{label}</button>
      ))}
    </div>
  );
}
