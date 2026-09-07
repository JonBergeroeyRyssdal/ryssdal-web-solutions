import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ArrowLink from "@/components/ui/ArrowLink";
import { contact } from "@/data/contact";

export default function Contact() {
  return (
    <Section id="kontakt" className="contact-section section-space" headingId="contact-heading">
      <div className="row g-5 align-items-center">
        <div className="col-lg-7">
          <SectionHeading id="contact-heading" eyebrow="LA OSS FINNE ET GODT UTGANGSPUNKT">Hva kan bli enklere<br />i din bedrift?</SectionHeading>
          <p className="hero-intro">Fortell kort om bedriften og hva du ønsker å få til. Så tar vi en uforpliktende prat om mulighetene.</p>
        </div>
        <div className="col-lg-5">
          <div className="contact-box">
            <h3>Start med en samtale</h3>
            <p>Send meg noen ord om behovet ditt, og gjerne en lenke til nettsiden dere har i dag.</p>
            <ArrowLink className="contact-email" href={`mailto:${contact.email}?subject=${encodeURIComponent("Nettløsning for min bedrift")}`}>{contact.email}</ArrowLink>
            <p className="mt-3 mb-0">Eller ring <a className="contact-email" href={`tel:${contact.phone}`}>{contact.phoneLabel}</a>.</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
