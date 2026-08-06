import type { LocalizedText } from "./types";

export const profile = {
  name: "Juan Gutierrez",
  githubHandle: "Ghost-ofc",
  role: "Full Stack Developer",
  tagline: {
    es: "Desarrollo aplicaciones web completas y me estoy formando en DevSecOps para integrar seguridad en cada etapa del desarrollo.",
    en: "I build full-stack web applications and I'm training in DevSecOps to bring security into every stage of development.",
  } satisfies LocalizedText,
  bio: {
    es: "Desarrollador Full Stack con experiencia en frontend (React, Next.js) y backend (Java, Node.js, PHP, Python). Actualmente me estoy formando en DevSecOps, aprendiendo a integrar buenas prácticas de seguridad en el ciclo de desarrollo mientras despliego en la nube y automatizo infraestructura.",
    en: "Full Stack Developer with experience across frontend (React, Next.js) and backend (Java, Node.js, PHP, Python). I'm currently training in DevSecOps, learning to bring security practices into the development lifecycle while deploying to the cloud and automating infrastructure.",
  } satisfies LocalizedText,
  links: {
    github: "https://github.com/Ghost-ofc",
    email: "mailto:juan089207@gmail.com",
    linkedin: "https://www.linkedin.com/in/juan-gutierrez-322403258/",
    // Sube tu CV como public/cv.pdf para que este link funcione.
    resume: "/cv.pdf",
  },
};
