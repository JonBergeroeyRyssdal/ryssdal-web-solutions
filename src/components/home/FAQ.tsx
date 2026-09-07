import { questions } from "@/data/faq";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
export default function FAQ() {
  return (
    <Section id="sporsmal" className="section-space" headingId="questions-heading">
      <div className="row g-5">
        <div className="col-lg-5">
          <SectionHeading id="questions-heading" eyebrow="FØR VI STARTER">Lurer du på noe?</SectionHeading>
        </div>
        <div className="col-lg-7 faq">
          {questions.map(({ question, answer }) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
