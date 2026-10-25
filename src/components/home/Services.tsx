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
                {service.price && <p className="mb-0"><small>Veiledende pris inkl. mva.</small></p>}
              </div>
            </ContentCard>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <p className="small text-body-secondary mb-1">{serviceDetails.fixedPriceNote}</p>
        <p className="small text-body-secondary mb-0">{serviceDetails.pricingDisclaimer}</p>
      </div>
      <div className="collaboration-panel mt-5">
        <div className="collaboration-main">
          <p className="eyebrow">Slik samarbeider vi</p>
          <h3 className="collaboration-title">Et enkelt og ryddig samarbeid.</h3>
          <p className="collaboration-intro">Fra første samtale til levering har du mulighet til å stille spørsmål og gi innspill.</p>
          <div className="delivery-included" aria-label="Inkludert i en ny nettside">
            <span>Mobiltilpasset</span>
            <span>Grunnleggende SEO</span>
          </div>
          <ol className="collaboration-benefits">
            {[
              ["Vi avklarer behovet", "Vi snakker om målet ditt, hva du har fra før og hva løsningen skal hjelpe deg med."],
              ["Du får et konkret tilbud", "Tilbudet beskriver omfang, pris og tidsplan. Endringer som påvirker avtalen, avklarer vi før de gjennomføres."],
              ["Du gir innspill underveis", "Du får se løsningen mens den tar form, slik at vi kan avklare spørsmål og justere før levering."],
            ].map(([title, text], index) => (
              <li key={title}>
                <span className="collaboration-icon" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ol>
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

