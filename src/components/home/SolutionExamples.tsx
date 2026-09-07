import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
export default function SolutionExamples() {
  return (
    <Section id="eksempler" className="section-space examples-section" headingId="examples-heading">
      <div className="row g-5">
        <div className="col-lg-5">
          <SectionHeading id="examples-heading" eyebrow="MULIGHETER I PRAKSIS">Små grep.<br />Mindre manuelt arbeid.</SectionHeading>
          <p className="section-intro">Her er eksempler på hva en tilpasset nettløsning kan gjøre. Vi velger funksjonene som faktisk trengs.</p>
          <span className="example-label">Eksempler på løsninger</span>
        </div>
        <div className="col-lg-7">
          <article className="example-row">
            <span aria-hidden="true">01</span>
            <div>
              <h3>Bedre forespørsler fra nye kunder</h3>
              <p>Et skjema hjelper kunden med å beskrive oppdraget, slik at du får informasjonen du trenger for å følge opp.</p>
            </div>
          </article>
          <article className="example-row">
            <span aria-hidden="true">02</span>
            <div>
              <h3>Samlet oversikt over oppdrag</h3>
              <p>En intern oversikt viser hva som er nytt, hva som pågår og hva som er ferdig. Mindre leting i e-post og løse notater.</p>
            </div>
          </article>
          <article className="example-row">
            <span aria-hidden="true">03</span>
            <div>
              <h3>Færre opplysninger å registrere to ganger</h3>
              <p>En integrasjon overfører informasjon mellom tjenester, der systemene støtter det.</p>
            </div>
          </article>
        </div>
      </div>
    </Section>
  );
}
