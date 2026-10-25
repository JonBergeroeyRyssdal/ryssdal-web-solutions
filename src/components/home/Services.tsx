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
      <div className="delivery-overview mt-5">
        <div className="delivery-heading">
          <p className="eyebrow">Din nye nettside</p>
          <h3>Dette får du med en ny nettside</h3>
          <p className="section-intro">Mobiltilpasning og grunnleggende søkemotoroptimalisering er inkludert. Resten av leveransen tilpasser vi behovet ditt og beskriver i tilbudet.</p>
          <div className="delivery-included">
            <span>Mobiltilpasset</span>
            <span>Grunnleggende SEO</span>
          </div>
        </div>
        <ul className="delivery-details">
          {[
            ["Innhold med en plan", "Vi avklarer hvilke sider, funksjoner og hvilket innhold som skal være med.", "M4 4h16v16H4z M8 8h8 M8 12h8 M8 16h4"],
            ["Funksjoner du trenger", "Kontaktskjema, booking og andre funksjoner avtales etter behov.", "M12 3v18 M3 12h18"],
            ["Klar for lansering", "Vi går gjennom løsningen sammen før lansering. Hjelp med publisering, domene og hosting avklares i tilbudet.", "m5 12 4 4L19 6"],
            ["Oversikt over kostnadene", "Du får vite hva som inngår i prisen, og hvilke løpende kostnader som eventuelt kommer i tillegg.", "M6 3h12v18l-3-2-3 2-3-2-3 2V3Z M9 8h6 M9 12h6"],
          ].map(([title, text, path]) => (
            <li key={title}>
              <span className="delivery-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d={path} /></svg>
              </span>
              <div><h4>{title}</h4><p>{text}</p></div>
            </li>
          ))}
        </ul>
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

