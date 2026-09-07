import Section from "@/components/ui/Section";
import ContentCard from "@/components/ui/ContentCard";
import SectionHeading from "@/components/ui/SectionHeading";
import ArrowLink from "@/components/ui/ArrowLink";
import { services } from "@/data/services";

export default function Services() {
  return (
    <Section id="tjenester" className="section-space" headingId="services-heading">
      <div className="row mb-5 align-items-end g-3">
        <div className="col-lg-7">
          <SectionHeading id="services-heading" eyebrow="TJENESTER">Hva trenger bedriften din?</SectionHeading>
        </div>
        <div className="col-lg-5">
          <p className="section-intro mb-0">En ny nettside eller en løsning på en tidkrevende oppgave? Vi begynner der det gir verdi for deg.</p>
        </div>
      </div>
      <div className="row g-4">{services.map((service) => <div className="col-md-6 col-lg-4" key={service.number}>
        <ContentCard
          label={<span className="service-number">{service.number} /</span>}
          title={service.title}
          description={service.text}
          action={<ArrowLink href="#kontakt">Snakk med meg om løsningen</ArrowLink>}
        >
          <ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul>
        </ContentCard>
      </div>)}</div>
      <div className="mt-5 border-top pt-4">
        <h3>Start enkelt. Bygg videre når du trenger det.</h3>
        <p className="section-intro">En bedriftsnettside kan være første steg. Trenger du å oppdatere innhold selv, kobler vi på et egnet publiseringsverktøy. Booking, innlogging og andre funksjoner kan avtales som egne utvidelser.</p>
        <p className="mb-0">Du får et tilbud basert på innhold og funksjoner. Domene, hosting og eventuelle abonnementer på eksterne tjenester spesifiseres separat.</p>
      </div>
    </Section>
  );
}
