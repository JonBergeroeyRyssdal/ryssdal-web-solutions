"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { getServices } from "@/data/services";
import Section from "@/components/ui/Section";
import ContentCard from "@/components/ui/ContentCard";
import SectionHeading from "@/components/ui/SectionHeading";


export default function Services() {
  const { t } = useLanguage();
  const services = getServices(t);
  return (
    <Section id="tjenester" headingId="services-heading">
      <SectionHeading id="services-heading" eyebrow={t.services}>{t.servicesTitle}</SectionHeading>
      <div className="row g-4 mt-4">
        {services.map((service) => (
          <div className="col-md-4" key={service.number}>
            <ContentCard title={service.title} description={service.text} />
          </div>
        ))}
      </div>
    </Section>
  );
}

