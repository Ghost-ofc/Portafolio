import type { LocalizedText } from "./types";

export type Project = {
  slug: string;
  name: string;
  description: LocalizedText;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
};

/**
 * Para agregar un proyecto nuevo, copia una entrada y edita sus campos.
 * `liveUrl` y `repoUrl` son opcionales si el proyecto no tiene uno de los dos.
 * Los links de `liveUrl` se renderizan siempre con rel="nofollow".
 */
export const projects: Project[] = [
  {
    slug: "tempmail-api",
    name: "TempMail API",
    description: {
      es: "API de correos temporales con documentación interactiva, pensada para pruebas y automatización.",
      en: "Temporary email API with interactive docs, built for testing and automation workflows.",
    },
    tech: ["TypeScript", "Node.js", "REST API"],
    repoUrl: "https://github.com/Ghost-ofc/TempMail-API",
    featured: true,
  },
  {
    slug: "liquidalo",
    name: "Liquidalo.pe",
    description: {
      es: "Tienda online de liquidaciones con descuentos en electrodomésticos y tecnología, con envío a todo el Perú.",
      en: "E-commerce store for discounted appliances and tech products, with delivery across Peru.",
    },
    tech: [],
    liveUrl: "https://liquidalo.pe/",
    featured: true,
  },
  {
    slug: "kanna",
    name: "Kanna",
    description: {
      es: "Tienda online de cosmética y cuidado de la piel, con envío rápido a todo el Perú.",
      en: "Online store for skincare and cosmetics, with fast delivery across Peru.",
    },
    tech: ["Magento"],
    liveUrl: "https://kanna.pe/",
    featured: true,
  },
  {
    slug: "affinity-broker-peru",
    name: "Affinity Broker Peru",
    description: {
      es: "Sitio web para una correduría de seguros, con cotización y comparación de coberturas entre aseguradoras.",
      en: "Website for an insurance brokerage, featuring quotes and coverage comparison across insurers.",
    },
    tech: [],
    liveUrl: "https://affinitybrokerperu.com/",
  },
  {
    slug: "meili",
    name: "Meili.pe",
    description: {
      es: "Tienda online en Perú.",
      en: "Online store in Peru.",
    },
    tech: [],
    liveUrl: "https://meili.pe/",
  },
  {
    slug: "tumaceta",
    name: "Tu Maceta",
    description: {
      es: "Tienda online de macetas decorativas y regalos personalizados para ocasiones especiales.",
      en: "Online store for decorative planters and personalized gifts for special occasions.",
    },
    tech: ["Magento"],
    liveUrl: "https://tumaceta.pe/",
  },
  {
    slug: "herramin-peru",
    name: "Herramin Peru",
    description: {
      es: "Tienda online de herramientas industriales: fresado, torneado, roscado y ferretería general.",
      en: "Online store for industrial tools: milling, turning, threading and general hardware.",
    },
    tech: [],
    liveUrl: "https://herraminperu.com/",
  },
  {
    slug: "hotel-tampumayu",
    name: "Hotel Tampumayu",
    description: {
      es: "Sitio web para un hotel en Apurímac, con reserva de habitaciones y restaurante en línea.",
      en: "Website for a hotel in Apurímac, Peru, with online room bookings and restaurant info.",
    },
    tech: [],
    liveUrl: "https://hoteltampumayu.pe/",
  },
  {
    slug: "ecobike",
    name: "Ecobike",
    description: {
      es: "Sitio web desarrollado como proyecto universitario para promover la movilidad sostenible en bicicleta.",
      en: "Website built as a university project to promote sustainable bike mobility.",
    },
    tech: ["PHP", "CSS"],
    repoUrl: "https://github.com/Ghost-ofc/Ecobike",
  },
  {
    slug: "inso-practica",
    name: "InsoPractica",
    description: {
      es: "Práctica web institucional construida para un colegio, enfocada en presentar información de forma clara.",
      en: "Institutional practice website built for a school, focused on presenting information clearly.",
    },
    tech: ["CSS", "HTML"],
    repoUrl: "https://github.com/Ghost-ofc/InsoPractica",
  },
];
