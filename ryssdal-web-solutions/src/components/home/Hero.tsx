import Section from "@/components/ui/Section";
import ArrowLink from "@/components/ui/ArrowLink";
export default function Hero() {
  return (
    <Section id="hjem" className="hero" headingId="hero-heading">
      <div className="row align-items-center g-5">
        <div className="col-lg-8">
          <p className="eyebrow">
            <span className="status-dot" /> NETTLØSNINGER FOR SMÅ BEDRIFTER</p>
          <h1 id="hero-heading">En bedre nettside.<br />
            <span>En enklere hverdag.</span>
          </h1>
          <p className="hero-intro">Jeg utvikler moderne nettsider og enkle digitale systemer for små bedrifter. Start med det du trenger i dag, og utvid med booking, kundeportal eller integrasjoner når behovet vokser.</p>
          <div className="d-flex flex-wrap gap-3 mt-4">
            <ArrowLink className="btn btn-accent" href="#kontakt">La oss snakke om din bedrift</ArrowLink>
            <a className="btn btn-outline-light" href="#tjenester">Se hva jeg kan hjelpe med</a>
          </div>
        </div>
        <div className="col-lg-4">
          <aside className="hero-note" aria-label="Samarbeid med Ryssdal Web Solutions">
            <span className="note-mark" aria-hidden="true">R /</span>
            <p className="h4 mt-4">Fra et konkret behov<br />til en nyttig løsning.</p>
            <p>Én utvikler å forholde deg til. Et tydelig omfang. En løsning tilpasset bedriften din.</p>
            <ArrowLink href="#slik-jobber-jeg">Slik jobber jeg</ArrowLink>
          </aside>
        </div>
      </div>
      <div className="hero-bottom">
        <span>Nettsider</span>
        <span>Nettapplikasjoner</span>
        <span>Integrasjoner</span>
      </div>
    </Section>
  );
}
