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
      <div className="collaboration-panel mt-5">
        <div className="collaboration-main">
          <p className="eyebrow">Slik samarbeider vi</p>
          <h3 className="collaboration-title">Et enkelt og ryddig samarbeid.</h3>
          <p className="collaboration-intro">{serviceDetails.aboutProcess}</p>
          <ul className="collaboration-benefits">
            {[
              ["Direkte kontakt", "Du samarbeider direkte med meg og har én person å forholde deg til."],
              ["Tydelige avtaler", "Vi går gjennom forslaget sammen. Endringer som påvirker pris eller omfang, avtales før de gjennomføres."],
              ["Oppfølging underveis", "Vi har en løpende dialog, slik at du kan gi innspill og vi kan tilpasse løsningen til behovene dine."],
            ].map(([title, text]) => (
              <li key={title}>
                <span className="collaboration-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m5 12 4 4L19 6" />
                  </svg>
                </span>
                <div>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <aside className="collaboration-payment" aria-labelledby="payment-heading">
          <h3 id="payment-heading">Betaling</h3>
          <ul>
            <li>{serviceDetails.paymentSmall}</li>
            <li>{serviceDetails.paymentFixed}</li>
            <li>{serviceDetails.paymentLarge}</li>
          </ul>
          <p className="collaboration-payment-note">{serviceDetails.paymentAgreement}</p>
        </aside>
      </div>
    </Section>
  );
}

