import Section from "@/components/ui/Section";
import ArrowLink from "@/components/ui/ArrowLink";

export default function Hero() {
  return (
    <Section id="hjem" className="hero" headingId="hero-heading">
      <p className="eyebrow">RYSSDAL WEB SOLUTIONS</p>
      <h1 id="hero-heading">Nettsider for<br /><span>små bedrifter.</span></h1>
      <p className="hero-intro">Jeg hjelper deg med en ny nettside, forbedringer av den du har, eller en løsning som sparer deg for manuelt arbeid.</p>
      <div className="mt-4">
        <ArrowLink className="btn btn-accent" href="#kontakt">Ta kontakt</ArrowLink>
      </div>
    </Section>
  );
}
