import { steps } from "@/data/process";

export default function Process() {
  return (
    <section id="slik-jobber-jeg" className="section-space" aria-labelledby="process-heading">
      <div className="container">
        <p className="eyebrow">FRA IDÉ TIL LANSERING</p>
        <h2 id="process-heading">Et oversiktlig samarbeid.</h2>
        <ol className="row g-4 process-list mt-4">{steps.map(([title,text],index) => <li className="col-md-6 col-lg-3" key={title}>
          <div className="process-step">
            <span className="step-number">0{index+1}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        </li>)}</ol>
      </div>
    </section>
  );
}
