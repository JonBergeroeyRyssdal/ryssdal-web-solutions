"use client";

import { useLanguage } from "@/components/LanguageProvider";
import Section from "@/components/ui/Section";
import ArrowLink from "@/components/ui/ArrowLink";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <Section id="hjem" className="hero" headingId="hero-heading">
      <p className="eyebrow">RYSSDAL WEB SOLUTIONS</p>
      <h1 id="hero-heading">{t.heroTitle}<br /><span>{t.heroAccent}</span></h1>
      <p className="hero-intro">{t.heroText}</p>
      <div className="mt-4">
        <ArrowLink className="btn btn-accent" href="#kontakt">{t.contactAction}</ArrowLink>
      </div>
    </Section>
  );
}
