import type { LocalizedText } from "./types";

export const degree = {
  title: {
    es: "Bachiller en Ingeniería en Computación y Sistemas",
    en: "Bachelor's Degree in Computer Science and Systems Engineering",
  } satisfies LocalizedText,
  // Agrega el nombre de tu universidad/instituto aquí si quieres mostrarlo.
  institution: "",
  startYear: 2021,
  endYear: 2025,
};

export type Certification = {
  name: string;
  issuer: string;
};

export const certifications: Certification[] = [
  { name: "CCNAv7: Introduction to Networks", issuer: "Cisco Networking Academy" },
  { name: "AWS Cloud Practitioner Essentials", issuer: "Amazon Web Services" },
];
