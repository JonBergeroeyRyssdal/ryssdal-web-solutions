import type { ReactNode } from "react";

type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  children: ReactNode;
};

export default function SectionHeading({ id, eyebrow, children }: SectionHeadingProps) {
  return (
    <>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{children}</h2>
    </>
  );
}
