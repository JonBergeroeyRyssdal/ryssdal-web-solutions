import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  headingId: string;
  className?: string;
  children: ReactNode;
};

export default function Section({ id, headingId, className = "section-space", children }: SectionProps) {
  return (
    <section id={id} className={className} aria-labelledby={headingId}>
      <div className="container">{children}</div>
    </section>
  );
}
