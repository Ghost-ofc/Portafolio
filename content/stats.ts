import type { LocalizedText } from "./types";

export type Stat = {
  id: string;
  value: string;
  label: LocalizedText;
  caption?: LocalizedText;
};

export const stats: Stat[] = [
  {
    id: "experience",
    value: "2+",
    label: { es: "Años de experiencia", en: "Years of experience" },
  },
  {
    id: "projects",
    value: "8",
    label: { es: "Proyectos entregados", en: "Projects delivered" },
    caption: {
      es: "3 personales · 4 en empresa",
      en: "3 personal · 4 at work",
    },
  },
];
