import type { ReactNode } from "react";

type ContentCardProps = {
  label?: ReactNode;
  title: string;
  description: string;
  children?: ReactNode;
  action?: ReactNode;
};

export default function ContentCard({ label, title, description, children, action }: ContentCardProps) {
  return (
    <article className="service-card h-100">
      {label}
      <h3>{title}</h3>
      <p>{description}</p>
      {children}
      {action}
    </article>
  );
}
