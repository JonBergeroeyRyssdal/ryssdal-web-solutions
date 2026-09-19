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
          <div className="col-md-6" key={service.number}>
            <ContentCard title={service.title} description={service.text}>
              <div className="mt-auto pt-3 border-top">
                <p className="mb-1"><strong>{service.price}</strong></p>
                <p className="mb-0"><small>{t.pricesIncludeVat}</small></p>
              </div>
            </ContentCard>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <p>{t.fixedPriceNote}</p>
        <p className="small text-body-secondary mb-0">{t.pricingDisclaimer}</p>
      </div>
      <div className="mt-5">
        <h3>{t.collaborationTitle}</h3>
        <p>{t.aboutProcess}</p>
        <p className="mb-0">{t.aboutCollaboration}</p>
      </div>
      <div className="mt-4">
        <h3>{t.paymentTitle}</h3>
        <ul>
          <li>{t.paymentSmall}</li>
          <li>{t.paymentFixed}</li>
          <li>{t.paymentLarge}</li>
        </ul>
        <p className="mb-0">{t.paymentAgreement}</p>
      </div>
    </Section>
  );
}

