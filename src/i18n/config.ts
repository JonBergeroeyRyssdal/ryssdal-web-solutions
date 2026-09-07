import { nb } from "./nb";
import { en } from "./en";
import { es } from "./es";

export const languages = ["nb", "en", "es"] as const;
export type Language = (typeof languages)[number];
export const dictionaries = { nb, en, es };
export function isLanguage(value: string): value is Language {
  return languages.some((language) => language === value);
}
