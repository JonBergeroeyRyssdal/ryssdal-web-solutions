import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="prosjekter" className="section-space projects-section" aria-labelledby="projects-heading">
      <div className="container">
        <p className="eyebrow">PROSJEKTER</p>
        <h2 id="projects-heading">Fra behov til ferdig løsning.</h2>
        {projects.length > 0 ? (
          <div className="row g-4 mt-4">
            {projects.map((project) => (
              <div className="col-md-6 col-lg-4" key={project.title}>
                <article className="service-card h-100">
                  <span className="example-label align-self-start mb-4">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  {project.href && (
                    <a href={project.href} aria-label={`Se prosjekt: ${project.title}`}>
                      Se prosjekt <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </article>
              </div>
            ))}
          </div>
        ) : (
          <div className="projects-empty mt-4">
            <div>
              <h3>Prosjekter kommer her</h3>
              <p className="mb-0">Her vil jeg vise løsninger jeg har utviklet, og fortelle om behovene bak dem.</p>
            </div>
            <a href="#kontakt">Har du en idé til et prosjekt? <span aria-hidden="true">↗</span></a>
          </div>
        )}
      </div>
    </section>
  );
}
