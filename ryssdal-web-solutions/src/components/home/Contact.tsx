import { contact } from "@/data/contact";

export default function Contact() {
  return (
    <section id="kontakt" className="contact-section section-space" aria-labelledby="contact-heading">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-7">
            <p className="eyebrow">LA OSS FINNE ET GODT UTGANGSPUNKT</p>
            <h2 id="contact-heading">Hva kan bli enklere<br />i din bedrift?</h2>
            <p className="hero-intro">Fortell kort om bedriften og hva du ønsker å få til. Så tar vi en uforpliktende prat om mulighetene.</p>
          </div>
          <div className="col-lg-5">
            <div className="contact-box">
              <h3>Start med en samtale</h3>
              <p>Send meg noen ord om behovet ditt, og gjerne en lenke til nettsiden dere har i dag.</p>
              <a className="contact-email" href={`mailto:${contact.email}?subject=${encodeURIComponent("Nettløsning for min bedrift")}`}>{contact.email} <span aria-hidden="true">↗</span>
              </a>
              <p className="mt-3 mb-0">Eller ring <a className="contact-email" href={`tel:${contact.phone}`}>{contact.phoneLabel}</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
