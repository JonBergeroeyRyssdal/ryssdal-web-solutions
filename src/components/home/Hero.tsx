import Section from "@/components/ui/Section";

export default function Hero() {
  return (
    <Section id="hjem" className="hero" headingId="hero-heading">
      <p className="eyebrow">RYSSDAL WEB SOLUTIONS</p>
      <h1 id="hero-heading">
        Nettløsninger
        <br />
        <span>som gjør jobben.</span>
      </h1>
      <p className="hero-intro">
        Jeg lager nettløsninger for bedrifter og organisasjoner i Østfold og
        resten av Norge.
      </p>
      <p className="mt-4 mb-0">
        Lurer du på hva som er mulig? <a className="hero-contact-link" href="#kontakt">Ta kontakt</a>,
        så finner vi en løsning sammen.
      </p>
    </Section>
  );
}
