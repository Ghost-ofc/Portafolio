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
    label: { es: "AÑOS DE EXP.", en: "YEARS OF EXP." },
  },
  {
    id: "projects",
    value: "10+",
    label: { es: "PROYECTOS", en: "PROJECTS" },
  },
  {
    id: "technologies",
    value: "15+",
    label: { es: "TECNOLOGÍAS", en: "TECHNOLOGIES" },
  },
  {
    id: "courses",
    value: "6+",
    label: { es: "CURSOS", en: "COURSES" },
  },
];
