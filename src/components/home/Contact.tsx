import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ArrowLink from "@/components/ui/ArrowLink";
import { contact } from "@/data/contact";
import ContactForm from "@/components/home/ContactForm";

export default function Contact() {
  return (
    <Section id="kontakt" className="contact-section section-space" headingId="contact-heading">
      <div className="row g-5 align-items-start">
        <div className="col-lg-5">
          <SectionHeading id="contact-heading" eyebrow="Kontakt">Har du noe i tankene?</SectionHeading>
          <p className="hero-intro mb-0">Fortell kort hva du trenger. Så tar vi en uforpliktende prat.</p>
          <div className="mt-4">
          <ArrowLink className="contact-email" href={`mailto:${contact.email}?subject=${encodeURIComponent("Nettløsning for min bedrift")}`}>{contact.email}</ArrowLink>
          <p className="mt-3 mb-0"><a className="contact-email" href={`tel:${contact.phone}`}>{contact.phoneLabel}</a></p>
          <p className="hero-intro small mt-3 mb-0">Får du ikke svar når du ringer? Send gjerne en <a className="contact-email" href={`sms:${contact.phone}`}>SMS med hva det gjelder</a>, så ringer jeg tilbake så snart jeg har mulighet.</p>
          </div>
        </div>
        <div className="col-lg-7">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
