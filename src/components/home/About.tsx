"use client";

import { useLanguage } from "@/components/LanguageProvider";
import Image from "next/image";
import portrait from "../../../public/jon-ryssdal.png";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  const { t } = useLanguage();
  return (
    <Section id="om" className="about-section section-space" headingId="about-heading">
      <div className="row g-4 align-items-center">
        <div className="col-md-4">
          <Image
            src={portrait}
            alt="Jon Bergerøy Ryssdal"
            className="about-portrait"
            sizes="(max-width: 767px) 240px, 320px"
            placeholder="blur"
          />
        </div>
        <div className="col-md-8">
          <SectionHeading id="about-heading" eyebrow={t.about}>{t.aboutTitle}</SectionHeading>
          <p>{t.aboutText}</p>
          <p className="mb-0">{t.aboutProcess}</p>
        </div>
      </div>
    </Section>
  );
}
