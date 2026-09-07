import Section from "@/components/ui/Section";
import ContentCard from "@/components/ui/ContentCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/data/services";

export default function Services() {
  return (
    <Section id="tjenester" headingId="services-heading">
      <SectionHeading id="services-heading" eyebrow="TJENESTER">Dette kan jeg hjelpe med.</SectionHeading>
      <div className="row g-4 mt-4">
        {services.map((service) => (
          <div className="col-md-4" key={service.number}>
            <ContentCard title={service.title} description={service.text} />
          </div>
        ))}
      </div>
    </Section>
  );
}
