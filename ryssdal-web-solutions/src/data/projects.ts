export type Project = {
  translations?: Partial<Record<"en" | "es" | "nb", { title: string; description: string }>>;
  title: string;
  category: "Kundeprosjekt" | "Demoprosjekt" | "Studieprosjekt";
  description: string;
  href?: string;
};

// Legg inn prosjekter her. Utelat href hvis prosjektet ikke har en offentlig lenke.
// Eksempel på format (ikke publisert):
// {
//   title: "Prosjektnavn",
//   category: "Demoprosjekt",
//   description: "Hvem løsningen er laget for, og hva den gjør enklere.",
//   href: "https://...",
// },
export const projects: Project[] = [];
