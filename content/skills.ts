import type { LocalizedText } from "./types";

export type SkillCategory = {
  id: string;
  label: LocalizedText;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: { es: "Frontend", en: "Frontend" },
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Flutter"],
  },
  {
    id: "backend",
    label: { es: "Backend", en: "Backend" },
    items: ["Java", "Spring", "Node.js", "PHP", "Python", "Kotlin"],
  },
  {
    id: "databases",
    label: { es: "Bases de datos", en: "Databases" },
    items: ["PostgreSQL", "MySQL", "SQLite", "Firebase"],
  },
  {
    id: "devops",
    label: { es: "DevOps · Cloud · Seguridad", en: "DevOps · Cloud · Security" },
    items: ["Docker", "AWS", "Terraform", "GitHub Actions", "Vercel", "Cloudflare"],
  },
  {
    id: "ai-ml",
    label: { es: "IA · Machine Learning", en: "AI · Machine Learning" },
    items: ["Python", "TensorFlow", "scikit-learn"],
  },
];
