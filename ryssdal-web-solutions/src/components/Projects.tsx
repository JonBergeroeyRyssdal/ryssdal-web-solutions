import Section from "@/components/ui/Section";
import ContentCard from "@/components/ui/ContentCard";
import SectionHeading from "@/components/ui/SectionHeading";
import ArrowLink from "@/components/ui/ArrowLink";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <Section id="prosjekter" className="section-space projects-section" headingId="projects-heading">
      <SectionHeading id="projects-heading" eyebrow="PROSJEKTER">Fra behov til ferdig løsning.</SectionHeading>
      {projects.length > 0 ? (
        <div className="row g-4 mt-4">
          {projects.map((project) => (
            <div className="col-md-6 col-lg-4" key={project.title}>
              <ContentCard
                label={<span className="example-label align-self-start mb-4">{project.category}</span>}
                title={project.title}
                description={project.description}
                action={project.href && (
                  <ArrowLink href={project.href} aria-label={`Se prosjekt: ${project.title}`}>Se prosjekt</ArrowLink>
                )}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="projects-empty mt-4">
          <div>
            <h3>Prosjekter kommer her</h3>
            <p className="mb-0">Her vil jeg vise løsninger jeg har utviklet, og fortelle om behovene bak dem.</p>
          </div>
          <ArrowLink href="#kontakt">Har du en idé til et prosjekt?</ArrowLink>
        </div>
      )}
    </Section>
  );
}
