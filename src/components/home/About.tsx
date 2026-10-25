import Image from "next/image";
import portrait from "../../../public/ryssdal-solutions.png";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <Section id="om" className="about-section section-space" headingId="about-heading">
      <div className="about-panel">
        <div className="about-image">
          <Image
            src={portrait}
            alt="Jon Bergerøy Ryssdal"
            className="about-portrait"
            sizes="(max-width: 767px) 100vw, (max-width: 1199px) 45vw, 580px"
            placeholder="blur"
          />
        </div>
        <div className="about-content">
          <SectionHeading id="about-heading" eyebrow="Om meg">Hvem du jobber med</SectionHeading>
          <p className="mb-0">Jeg heter Jon Bergerøy Ryssdal og står bak Ryssdal Web Solutions. Jeg er backend-utvikler og holder til i Moss, med særlig interesse for hvordan nettsider og systemer kan gjøre hverdagen enklere.</p>
        </div>
      </div>
    </Section>
  );
}
