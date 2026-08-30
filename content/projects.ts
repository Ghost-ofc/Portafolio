import type { LocalizedText } from "./types";

export type Project = {
  slug: string;
  name: string;
  description: LocalizedText;
  /** Mini case study fields */
  problem?: LocalizedText;
  solution?: LocalizedText;
  impact?: LocalizedText;
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
      es: "API REST de correos temporales con documentación interactiva, pensada para pruebas y automatización.",
      en: "REST API for temporary emails with interactive docs, built for testing and automation workflows.",
    },
    problem: {
      es: "Los flujos de QA y automatización necesitaban correos desechables sin depender de servicios externos de pago.",
      en: "QA and automation flows needed disposable emails without relying on paid external services.",
    },
    solution: {
      es: "API REST propia en TypeScript + Node.js con documentación OpenAPI generada automáticamente.",
      en: "Custom REST API in TypeScript + Node.js with auto-generated OpenAPI documentation.",
    },
    impact: {
      es: "Repositorio público con documentación completa, disponible como referencia técnica.",
      en: "Public repository with full documentation, available as a technical reference.",
    },
    tech: ["TypeScript", "Node.js", "REST API", "OpenAPI"],
    repoUrl: "https://github.com/Ghost-ofc/TempMail-API",
    featured: true,
  },
  {
    slug: "sysadmin-observability",
    name: "Sysadmin Observability",
    description: {
      es: "Stack completo de observabilidad para Kubernetes con Prometheus, Grafana y los 4 Golden Signals de SRE.",
      en: "Full observability stack for Kubernetes using Prometheus, Grafana and the 4 SRE Golden Signals.",
    },
    problem: {
      es: "Los sistemas en Kubernetes carecían de visibilidad sobre latencia, tráfico, errores y saturación en tiempo real.",
      en: "Kubernetes workloads lacked real-time visibility into latency, traffic, errors and saturation.",
    },
    solution: {
      es: "Pipeline de observabilidad con Prometheus para métricas, Grafana para dashboards y PromQL para alertas basadas en Golden Signals SRE.",
      en: "Observability pipeline with Prometheus for metrics, Grafana for dashboards and PromQL queries based on SRE Golden Signals.",
    },
    impact: {
      es: "Reducción del MTTR con alertas automáticas y visualización de métricas de sistema en tiempo real.",
      en: "Reduced MTTR with automated alerts and real-time system metrics visualization.",
    },
    tech: ["Kubernetes", "Prometheus", "Grafana", "PromQL", "Docker", "SRE"],
    repoUrl: "https://github.com/Ghost-ofc/Sysadmin-Observability",
    featured: true,
  },
  {
    slug: "liquidalo",
    name: "Liquidalo.pe",
    description: {
      es: "Tienda online de liquidaciones con descuentos en electrodomésticos y tecnología, con envío a todo el Perú.",
      en: "E-commerce store for discounted appliances and tech products, with delivery across Peru.",
    },
    problem: {
      es: "El cliente necesitaba un canal digital para liquidar stock con alta rotación y conversión rápida.",
      en: "The client needed a digital channel to liquidate high-turnover stock with fast conversion.",
    },
    solution: {
      es: "E-commerce completo en Mage-OS con catálogo optimizado, filtros y proceso de checkout simplificado.",
      en: "Full e-commerce on Mage-OS with optimized catalog, filters and streamlined checkout flow.",
    },
    impact: {
      es: "Tienda activa con entregas a nivel nacional en Perú.",
      en: "Active store with nationwide delivery across Peru.",
    },
    tech: ["Mage-OS", "PHP", "MySQL", "Hyvä"],
    liveUrl: "https://liquidalo.pe/",
    featured: true,
  },
  {
    slug: "minascan",
    name: "MinaScan",
    description: {
      es: "App Android y API de deep learning para detectar la plaga Liriomyza huidobrensis (Mosca Minadora) en cultivos mediante análisis de imágenes con ResNet50.",
      en: "Android app and deep learning API to detect Liriomyza huidobrensis (Leafminer fly) in crops through image analysis with ResNet50.",
    },
    problem: {
      es: "Los agricultores no podían identificar a tiempo la Mosca Minadora, una plaga que destruye cultivos enteros antes de ser visible a simple vista.",
      en: "Farmers couldn't identify the Leafminer fly in time — a pest that destroys entire crops before being visible to the naked eye.",
    },
    solution: {
      es: "App en Kotlin que captura fotos y las envía a una API en FastAPI con ResNet50 entrenado via transfer learning para clasificación multiclase: plaga / hoja sana / sin relación.",
      en: "Kotlin app that captures photos and sends them to a FastAPI backend with ResNet50 trained via transfer learning for multiclass classification: pest / healthy leaf / unrelated.",
    },
    impact: {
      es: "Sistema de detección temprana de plagas agrícolas desarrollado como proyecto de tesis universitaria de ingeniería.",
      en: "Early-stage agricultural pest detection system developed as a university engineering thesis project.",
    },
    tech: ["Kotlin", "Android", "Python", "FastAPI", "ResNet50", "Docker", "Deep Learning"],
    repoUrl: "https://github.com/Tesis-Grupo-1/frontend",
    featured: true,
  },

  {
    slug: "affinity-broker-peru",
    name: "Affinity Broker Peru",
    description: {
      es: "Sitio web para una correduría de seguros, con cotización y comparación de coberturas entre aseguradoras.",
      en: "Website for an insurance brokerage, featuring quotes and coverage comparison across insurers.",
    },
    tech: ["PHP", "MySQL", "CSS"],
    liveUrl: "https://affinitybrokerperu.com/",
  },
  {
    slug: "meili",
    name: "Meili.pe",
    description: {
      es: "Tienda online de cosméticos en Perú con catálogo optimizado y experiencia de compra premium.",
      en: "Online cosmetics store in Peru with optimized catalog and premium shopping experience.",
    },
    tech: ["Magento", "PHP", "MySQL"],
    liveUrl: "https://meili.pe/",
  },
  {
    slug: "tumaceta",
    name: "Tu Maceta",
    description: {
      es: "Tienda online de macetas decorativas y regalos personalizados para ocasiones especiales.",
      en: "Online store for decorative planters and personalized gifts for special occasions.",
    },
    tech: ["Magento", "PHP", "MySQL"],
    liveUrl: "https://tumaceta.pe/",
  },
  {
    slug: "herramin-peru",
    name: "Herramin Peru",
    description: {
      es: "Tienda online de herramientas industriales: fresado, torneado, roscado y ferretería general.",
      en: "Online store for industrial tools: milling, turning, threading and general hardware.",
    },
    tech: ["Mage-OS", "PHP", "MySQL"],
    liveUrl: "https://herraminperu.com/",
  },
  {
    slug: "hotel-tampumayu",
    name: "Hotel Tampumayu",
    description: {
      es: "Sitio web para un hotel en Apurímac, con reserva de habitaciones y restaurante en línea.",
      en: "Website for a hotel in Apurímac, Peru, with online room bookings and restaurant info.",
    },
    tech: ["PHP", "CSS", "MySQL"],
    liveUrl: "https://hoteltampumayu.pe/",
  },
  {
    slug: "felifondos",
    name: "Felifondos",
    description: {
      es: "Plataforma web para explorar, guardar y descargar fondos de pantalla con recomendaciones personalizadas basadas en historial.",
      en: "Web platform to browse, save and download wallpapers with personalized recommendations based on download history.",
    },
    tech: ["PHP", "JavaScript", "CSS3", "Python"],
    repoUrl: "https://github.com/Ghost-ofc/Felifondos",
  },
  {
    slug: "ecobike",
    name: "Ecobike",
    description: {
      es: "Sitio web universitario para promover la movilidad sostenible en bicicleta.",
      en: "University website to promote sustainable bike mobility.",
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
    tech: ["HTML", "CSS"],
    repoUrl: "https://github.com/Ghost-ofc/InsoPractica",
  },
];
