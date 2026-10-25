import { services, serviceDetails } from "@/data/services";
import Section from "@/components/ui/Section";
import ContentCard from "@/components/ui/ContentCard";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Services() {
  return (
    <Section id="tjenester" headingId="services-heading">
      <SectionHeading id="services-heading" eyebrow="Tjenester">Dette kan jeg hjelpe med.</SectionHeading>
      <div className="row g-4 mt-4">
        {services.map((service) => (
          <div className="col-md-6" key={service.number}>
            <ContentCard title={service.title} description={service.text}>
              <div className="mt-auto pt-3 border-top">
                <p className="mb-1"><strong>{service.price ?? "Pris etter avtale."}</strong></p>
                <p className="mb-0"><small>{service.price ? "Veiledende pris inkl. mva." : serviceDetails.fixedPriceNote}</small></p>
              </div>
            </ContentCard>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <p className="small text-body-secondary mb-0">{serviceDetails.pricingDisclaimer}</p>
      </div>
      <div className="mt-5">
        <h3>Slik samarbeider vi</h3>
        <p>{serviceDetails.aboutProcess}</p>
        <p className="mb-0">{serviceDetails.aboutCollaboration}</p>
      </div>
      <div className="mt-4">
        <h3>Betaling</h3>
        <ul>
          <li>{serviceDetails.paymentSmall}</li>
          <li>{serviceDetails.paymentFixed}</li>
          <li>{serviceDetails.paymentLarge}</li>
        </ul>
        <p className="mb-0">{serviceDetails.paymentAgreement}</p>
      </div>
    </Section>
  );
}

