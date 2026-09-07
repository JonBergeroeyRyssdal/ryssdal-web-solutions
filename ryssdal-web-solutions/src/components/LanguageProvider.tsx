"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { nb, type Dictionary } from "@/i18n/nb";
import { en } from "@/i18n/en";
import { es } from "@/i18n/es";

export type Language = "nb" | "en" | "es";
const dictionaries = { nb, en, es };
const LanguageContext = createContext<{ language: Language; t: Dictionary; setLanguage: (language: Language) => void } | null>(null);

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("nb");
  useEffect(() => {
    try {
      const saved = localStorage.getItem("rws-language");
      if (saved === "nb" || saved === "en" || saved === "es") {
        // Restore the preference only after hydration so server and client agree.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLanguage(saved);
      }
    } catch { /* Language selection still works when storage is unavailable. */ }
  }, []);
  useEffect(() => {
    document.documentElement.lang = language;
    document.title = dictionaries[language].title;
  }, [language]);
  function selectLanguage(next: Language) {
    setLanguage(next);
    try { localStorage.setItem("rws-language", next); } catch { /* Storage is optional. */ }
  }
  return <LanguageContext.Provider value={{ language, t: dictionaries[language], setLanguage: selectLanguage }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage requires LanguageProvider");
  return context;
}

export function SkipLink() {
  const { t } = useLanguage();
  return <a className="skip-link" href="#main-content">{t.skip}</a>;
}
