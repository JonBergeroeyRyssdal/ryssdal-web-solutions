import Section from "@/components/ui/Section";
import ArrowLink from "@/components/ui/ArrowLink";

export default function Hero() {
  return (
    <Section id="hjem" className="hero" headingId="hero-heading">
      <p className="eyebrow">RYSSDAL WEB SOLUTIONS</p>
      <h1 id="hero-heading">
        Nettløsninger for
        <br />
        <span>bedrifter og organisasjoner</span>
      </h1>
      <p className="hero-intro">
        Jeg lager nettsider og digitale løsninger for små og mellomstore
        bedrifter, organisasjoner og foreninger. Jeg samarbeider med kunder i
        Østfold, resten av Norge og internasjonalt.
      </p>
      <div className="mt-4">
        <p>
          Lurer du på hva som er mulig? Ta kontakt, så finner vi en løsning
          sammen.
        </p>
        <ArrowLink className="btn btn-accent" href="#kontakt">
          Ta kontakt
        </ArrowLink>
      </div>
    </Section>
  );
}
