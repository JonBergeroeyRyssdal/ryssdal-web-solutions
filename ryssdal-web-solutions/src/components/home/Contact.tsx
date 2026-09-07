"use client";

import { useLanguage } from "@/components/LanguageProvider";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ArrowLink from "@/components/ui/ArrowLink";
import { contact } from "@/data/contact";

export default function Contact() {
  const { t } = useLanguage();
  return (
    <Section id="kontakt" className="contact-section section-space" headingId="contact-heading">
      <div className="row g-4 align-items-center">
        <div className="col-lg-7">
          <SectionHeading id="contact-heading" eyebrow={t.contact}>{t.contactTitle}</SectionHeading>
          <p className="hero-intro mb-0">{t.contactText}</p>
        </div>
        <div className="col-lg-5">
          <ArrowLink className="contact-email" href={`mailto:${contact.email}?subject=${encodeURIComponent(t.subject)}`}>{contact.email}</ArrowLink>
          <p className="mt-3 mb-0"><a className="contact-email" href={`tel:${contact.phone}`}>{contact.phoneLabel}</a></p>
        </div>
      </div>
    </Section>
  );
}
