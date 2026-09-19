"use client";

import { useLanguage } from "@/components/LanguageProvider";
import Section from "@/components/ui/Section";
import ContentCard from "@/components/ui/ContentCard";
import SectionHeading from "@/components/ui/SectionHeading";
import ArrowLink from "@/components/ui/ArrowLink";
import { projects } from "@/data/projects";

export default function Projects() {
  const { t, language } = useLanguage();
  return (
    <Section id="prosjekter" className="section-space projects-section" headingId="projects-heading">
      <SectionHeading id="projects-heading" eyebrow={t.projects}>{t.projectsTitle}</SectionHeading>
      {projects.length > 0 ? (
        <div className="row g-4 mt-4">
          {projects.map((project) => (
            <div className="col-md-6 col-lg-4" key={project.title}>
              <ContentCard
                label={<span className="example-label align-self-start mb-4">{({ Kundeprosjekt: t.clientProject, Demoprosjekt: t.demoProject, Studieprosjekt: t.studyProject })[project.category]}</span>}
                title={project.translations?.[language]?.title ?? project.title}
                description={project.translations?.[language]?.description ?? project.description}
                action={project.href && (
                  <ArrowLink href={project.href} aria-label={`${t.viewProject}: ${project.translations?.[language]?.title ?? project.title}`}>{t.viewProject}</ArrowLink>
                )}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="projects-empty mt-4">
          <div>
            <h3>{t.projectsEmpty}</h3>
            <p className="mb-0">{t.projectsText}</p>
          </div>
        </div>
      )}
    </Section>
  );
}
