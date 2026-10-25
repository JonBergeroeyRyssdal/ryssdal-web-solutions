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
            title="Konkurransedyktige priser og høy kvalitet"
            description="Som selvstendig utvikler kan jeg holde kostnadene nede og tilby konkurransedyktige priser. Jeg legger vekt på gjennomarbeidede løsninger som er enkle å bruke, fungerer godt på mobil og er lette å videreutvikle."
          />
        </div>
        <div className="col-md-6">
          <ContentCard
            title="Også de små oppdragene er velkomne"
            description="Du trenger ikke et stort prosjekt for å ta kontakt. Jeg tar også mindre oppgraderinger, feilretting og nye funksjoner – oppdrag som ikke alltid passer inn hos større byråer. Vi tilpasser arbeidet til det du trenger, slik at et lite behov ikke blir et unødvendig stort prosjekt."
          />
        </div>
        <div className="col-md-6">
          <ContentCard
            title="Tydelige avtaler fra start"
            description="Du får et konkret forslag med pris og omfang før vi starter. Jeg forklarer valgene i et språk du forstår, og endringer som påvirker pris eller omfang, avtaler vi før de gjennomføres."
          />
        </div>
      </div>
    </Section>
  );
}
