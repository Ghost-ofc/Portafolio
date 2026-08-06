import type { IconType } from "react-icons";
import {
  SiCloudflare,
  SiDocker,
  SiFirebase,
  SiFlutter,
  SiGithubactions,
  SiJavascript,
  SiKotlin,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiScikitlearn,
  SiSpring,
  SiSqlite,
  SiTailwindcss,
  SiTensorflow,
  SiTerraform,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa6";

type SkillIcon = {
  Icon: IconType;
  color: string;
};

export const skillIcons: Record<string, SkillIcon> = {
  React: { Icon: SiReact, color: "#61DAFB" },
  "Next.js": { Icon: SiNextdotjs, color: "#a3a3a3" },
  TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#06B6D4" },
  Flutter: { Icon: SiFlutter, color: "#02569B" },
  Java: { Icon: FaJava, color: "#007396" },
  Spring: { Icon: SiSpring, color: "#6DB33F" },
  "Node.js": { Icon: SiNodedotjs, color: "#5FA04E" },
  PHP: { Icon: SiPhp, color: "#777BB4" },
  Python: { Icon: SiPython, color: "#3776AB" },
  Kotlin: { Icon: SiKotlin, color: "#7F52FF" },
  PostgreSQL: { Icon: SiPostgresql, color: "#4169E1" },
  MySQL: { Icon: SiMysql, color: "#4479A1" },
  SQLite: { Icon: SiSqlite, color: "#003B57" },
  Firebase: { Icon: SiFirebase, color: "#DD2C00" },
  Docker: { Icon: SiDocker, color: "#2496ED" },
  AWS: { Icon: FaAws, color: "#FF9900" },
  Terraform: { Icon: SiTerraform, color: "#844FBA" },
  "GitHub Actions": { Icon: SiGithubactions, color: "#2088FF" },
  Vercel: { Icon: SiVercel, color: "#a3a3a3" },
  Cloudflare: { Icon: SiCloudflare, color: "#F38020" },
  TensorFlow: { Icon: SiTensorflow, color: "#FF6F00" },
  "scikit-learn": { Icon: SiScikitlearn, color: "#F7931E" },
};
