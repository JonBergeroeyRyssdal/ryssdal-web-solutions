import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { steps } from "@/data/process";

export default function Process() {
  return (
    <Section id="slik-jobber-jeg" className="section-space" headingId="process-heading">
      <SectionHeading id="process-heading" eyebrow="FRA IDÉ TIL LANSERING">Et oversiktlig samarbeid.</SectionHeading>
      <ol className="row g-4 process-list mt-4">{steps.map(([title, text], index) => <li className="col-md-6 col-lg-3" key={title}>
        <div className="process-step">
          <span className="step-number">0{index + 1}</span>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </li>)}</ol>
    </Section>
  );
}
