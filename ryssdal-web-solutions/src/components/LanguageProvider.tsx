"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Dictionary } from "@/i18n/nb";
import type { Language } from "@/i18n/config";
export type { Language } from "@/i18n/config";

const LanguageContext = createContext<{ language: Language; t: Dictionary } | null>(null);

export default function LanguageProvider({ children, language, dictionary }: { children: ReactNode; language: Language; dictionary: Dictionary }) {
  return <LanguageContext.Provider value={{ language, t: dictionary }}>{children}</LanguageContext.Provider>;
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
