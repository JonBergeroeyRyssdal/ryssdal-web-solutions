"use client";

import { useLanguage } from "@/components/LanguageProvider";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  const { t } = useLanguage();
  return (
    <Section id="om" className="about-section section-space" headingId="about-heading">
      <div className="row g-4 align-items-center">
        <div className="col-lg-5">
          <SectionHeading id="about-heading" eyebrow={t.about}>{t.aboutTitle}</SectionHeading>
        </div>
        <div className="col-lg-7">
          <p>{t.aboutText}</p>
          <p className="mb-0">{t.aboutProcess}</p>
        </div>
      </div>
    </Section>
  );
}
