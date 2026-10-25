import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ContentCard from "@/components/ui/ContentCard";

export default function WhyChooseMe() {
  return (
    <Section id="hvorfor-velge-meg" headingId="why-choose-me-heading">
      <SectionHeading id="why-choose-me-heading" eyebrow="Fordeler">
        Hvorfor velge meg?
      </SectionHeading>
      <div className="row g-4 mt-4">
        <div className="col-md-6">
          <ContentCard
            title="Direkte kontakt med utvikleren"
            description="Du snakker med den som faktisk bygger løsningen. Jeg følger prosjektet fra første samtale til ferdig levering, så det er kort vei fra spørsmål og innspill til handling."
          />
        </div>
        <div className="col-md-6">
          <ContentCard
            title="Konkurransedyktige priser"
            description="Som selvstendig utvikler kan jeg holde kostnadene nede. Du betaler for arbeidet med løsningen, og vi prioriterer det som gir mest verdi innenfor budsjettet ditt."
          />
        </div>
        <div className="col-md-6">
          <ContentCard
            title="Start enkelt, bygg videre etter hvert"
            description="Du trenger ikke gjøre alt på én gang. Vi starter med det viktigste og kan legge til flere funksjoner når behovet oppstår. Også små oppgraderinger og enkeltoppdrag er velkomne."
          />
        </div>
        <div className="col-md-6">
          <ContentCard
            title="Råd du kan forstå"
            description="Jeg forklarer tekniske valg i et vanlig språk og hjelper deg å vurdere hva du trenger. Du trenger ingen teknisk bakgrunn for å være med på beslutningene."
          />
        </div>
      </div>
    </Section>
  );
}
