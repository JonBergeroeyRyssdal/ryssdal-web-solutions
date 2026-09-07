import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <Section id="om" className="about-section section-space" headingId="about-heading">
      <div className="row g-4 align-items-center">
        <div className="col-lg-5">
          <SectionHeading id="about-heading" eyebrow="OM MEG">Hei, jeg er Jon.</SectionHeading>
        </div>
        <div className="col-lg-7">
          <p>Jeg er utdannet backend-utvikler fra Noroff og står bak Ryssdal Web Solutions. Du samarbeider direkte med meg fra første samtale til ferdig løsning.</p>
          <p className="mb-0">Vi starter med behovet ditt. Du får et konkret forslag med pris og omfang før arbeidet begynner.</p>
        </div>
      </div>
    </Section>
  );
}
