import type { StaticImageData } from "next/image";
import type { LocalizedText } from "./types";
import hotsalePayShot from "@/public/projects/hotsale-pay.webp";
import illariShot from "@/public/projects/illari-gourmet.webp";
import liquidaloShot from "@/public/projects/liquidalo.webp";
import meiliShot from "@/public/projects/meili.webp";
import tumacetaShot from "@/public/projects/tumaceta.webp";
import herraminShot from "@/public/projects/herramin-peru.webp";
import affinityShot from "@/public/projects/affinity-broker-peru.webp";
import tampumayuShot from "@/public/projects/hotel-tampumayu.webp";

export type Project = {
  slug: string;
  name: string;
  description: LocalizedText;
  /** Mini case study fields */
  problem?: LocalizedText;
  solution?: LocalizedText;
  impact?: LocalizedText;
  tech: string[];
  /** Captura real del sitio (1440×900). Importación estática → blur placeholder automático. */
  screenshot?: StaticImageData;
  liveUrl?: string;
  docsUrl?: string;
  repoUrl?: string;
  featured?: boolean;
};

/**
 * Para agregar un proyecto nuevo, copia una entrada y edita sus campos.
 * `liveUrl`, `docsUrl` y `repoUrl` son opcionales.
 * Los links de `liveUrl` y `docsUrl` se renderizan siempre con rel="nofollow".
 *
 * Secciones en la página:
 * - `featured: true`            → tarjeta grande con captura y case study.
 * - con `screenshot`            → "Más sitios en producción" (miniatura).
 * - sin `screenshot`            → "Código y proyectos técnicos".
 *
 * Para regenerar una captura: 1440×900 del home, guardada como public/projects/<slug>.webp
 */
export const projects: Project[] = [
  // ─── Destacados ────────────────────────────────────────────────────────
  {
    slug: "hotsale-pay",
    name: "Hotsale Pay",
    description: {
      es: "Plataforma para cobrar con Yape en tiendas Magento y WooCommerce: cada yapeo se concilia automáticamente con su pedido, sin revisar capturas por WhatsApp.",
      en: "Platform to accept Yape payments in Magento and WooCommerce stores: every payment is automatically reconciled with its order, no more checking screenshots on WhatsApp.",
    },
    problem: {
      es: "Las tiendas que cobran con Yape validaban cada pago a mano, comparando capturas enviadas por WhatsApp con los pedidos abiertos.",
      en: "Stores accepting Yape validated every payment by hand, matching screenshots sent over WhatsApp against open orders.",
    },
    solution: {
      es: "Una app Android detecta la notificación real de Yape, la plataforma la empareja con el pedido (monto exacto y plazo) y la tienda decide según su política: sombra, asistido o automático. Módulo Magento, plugin WooCommerce, panel y API firmada.",
      en: "An Android app picks up the real Yape notification, the platform matches it to the order (exact amount and time window) and the store acts on its policy: shadow, assisted or automatic. Magento module, WooCommerce plugin, dashboard and signed API.",
    },
    impact: {
      es: "Conciliación de pagos sin intervención manual y documentación pública para comercios y desarrolladores.",
      en: "Payment reconciliation without manual work, plus public docs for merchants and developers.",
    },
    tech: ["Magento 2", "WooCommerce", "PHP", "Android", "REST API", "Astro"],
    screenshot: hotsalePayShot,
    docsUrl: "https://docs.hotsale.pe/",
    featured: true,
  },
  {
    slug: "illari-gourmet",
    name: "Illari Gourmet",
    description: {
      es: "Tienda online de productos naturales y orgánicos (café, aceites, cacao, superfoods) con envíos a todo el Perú.",
      en: "Online store for natural and organic products (coffee, oils, cacao, superfoods) shipping across Peru.",
    },
    tech: ["Magento 2", "Hyvä", "Alpine.js", "Tailwind CSS", "PHP", "MySQL"],
    screenshot: illariShot,
    liveUrl: "https://illarigourmet.com/",
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
    tech: ["Mage-OS", "PHP", "MySQL", "jQuery", "RequireJS"],
    screenshot: liquidaloShot,
    liveUrl: "https://liquidalo.pe/",
    featured: true,
  },
  {
    slug: "meili",
    name: "Meili.pe",
    description: {
      es: "Tienda online de cosméticos en Perú: SPA en React que consume una API REST propia en Spring Boot para catálogo, ofertas y lista de deseos.",
      en: "Online cosmetics store in Peru: a React SPA backed by a custom Spring Boot REST API for catalog, offers and wishlist.",
    },
    tech: ["React", "Vite", "Tailwind CSS", "Zustand", "Java", "Spring Boot", "REST API"],
    screenshot: meiliShot,
    liveUrl: "https://meili.pe/",
    featured: true,
  },

  // ─── Más sitios en producción ──────────────────────────────────────────
  {
    slug: "tumaceta",
    name: "Tu Maceta",
    description: {
      es: "Tienda online de macetas decorativas y regalos personalizados para ocasiones especiales.",
      en: "Online store for decorative planters and personalized gifts for special occasions.",
    },
    tech: ["Magento 2", "PHP", "MySQL", "jQuery", "RequireJS"],
    screenshot: tumacetaShot,
    liveUrl: "https://tumaceta.pe/",
  },
  {
    slug: "herramin-peru",
    name: "Herramin Peru",
    description: {
      es: "Tienda online de herramientas industriales: fresado, torneado, roscado y ferretería general.",
      en: "Online store for industrial tools: milling, turning, threading and general hardware.",
    },
    tech: ["Mage-OS", "Hyvä", "Alpine.js", "Tailwind CSS", "PHP", "MySQL"],
    screenshot: herraminShot,
    liveUrl: "https://herraminperu.com/",
  },
  {
    slug: "affinity-broker-peru",
    name: "Affinity Broker Peru",
    description: {
      es: "Sitio web para una correduría de seguros, con cotización y comparación de coberturas entre aseguradoras.",
      en: "Website for an insurance brokerage, featuring quotes and coverage comparison across insurers.",
    },
    tech: ["WordPress", "Elementor", "Contact Form 7", "PHP"],
    screenshot: affinityShot,
    liveUrl: "https://affinitybrokerperu.com/",
  },
  {
    slug: "hotel-tampumayu",
    name: "Hotel Tampumayu",
    description: {
      es: "Sitio web para un hotel en Apurímac, con reserva de habitaciones y restaurante en línea.",
      en: "Website for a hotel in Apurímac, Peru, with online room bookings and restaurant info.",
    },
    tech: ["WordPress", "WooCommerce", "Elementor Pro", "LiteSpeed Cache"],
    screenshot: tampumayuShot,
    liveUrl: "https://hoteltampumayu.pe/",
  },

  // ─── Código y proyectos técnicos ───────────────────────────────────────
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
  },
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
