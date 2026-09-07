import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
export default function About() {
  return (
    <Section id="om" className="about-section section-space" headingId="about-heading">
      <div className="row g-5 align-items-center">
        <div className="col-lg-5">
          <SectionHeading id="about-heading" eyebrow="RYSSDAL WEB SOLUTIONS">Du snakker med den<br />som bygger løsningen.</SectionHeading>
        </div>
        <div className="col-lg-7">
          <p className="about-lead">Jeg heter Jon Ryssdal. Med Ryssdal Web Solutions vil jeg hjelpe små bedrifter med å gjøre ideer og praktiske behov om til fungerende nettløsninger.</p>
          <p>Med bakgrunn i backend-utvikling fra Noroff og erfaring med JavaScript og .NET fra studier, er jeg opptatt av både det kunden ser og systemene bak. Målet er en løsning som er enkel å bruke og mulig å bygge videre på.</p>
          <p className="mb-0">Du samarbeider direkte med meg om behov, prioriteringer og utvikling gjennom hele prosjektet.</p>
        </div>
      </div>
    </Section>
  );
}
