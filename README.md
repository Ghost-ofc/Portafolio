<div align="center">

# Juan Gutierrez — Portafolio

Portafolio personal, bilingüe (ES/EN), con una escena 3D interactiva en el hero.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![React Three Fiber](https://img.shields.io/badge/React_Three_Fiber-3D-000000?logo=threedotjs&logoColor=white)](https://docs.pmnd.rs/react-three-fiber)
[![Deploy](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel&logoColor=white)](https://vercel.com)

</div>

## Sobre el proyecto

Portafolio personal de **Juan Gutierrez**, Full Stack Developer en formación en DevSecOps. Presenta mis proyectos, habilidades, educación y una vía de contacto directa, con un modelo 3D interactivo en el hero.

## Características

- **Bilingüe** (Español / Inglés) con `next-intl`: detección automática por navegador y selector manual.
- **Modo claro / oscuro** con acento verde consistente en ambos temas.
- **Escena 3D** en el hero con React Three Fiber + drei: modelo flotante, auto-rotación y glow ambiental.
- **Animaciones de scroll** con Framer Motion en cada sección.
- **Formulario de contacto funcional** vía EmailJS, sin backend propio (con fallback a un link de email directo si no está configurado).
- **100% responsive**, con menú móvil dedicado.
- **SEO**: metadata, Open Graph, `sitemap.xml` y `robots.txt` generados automáticamente.

## Stack técnico

| Categoría   | Tecnología                          |
| ----------- | ------------------------------------ |
| Framework   | Next.js 16 (App Router)              |
| Lenguaje    | TypeScript                           |
| Estilos     | Tailwind CSS 4 + shadcn/ui           |
| 3D          | Three.js + React Three Fiber + drei  |
| Animaciones | Framer Motion                        |
| i18n        | next-intl                            |
| Contacto    | EmailJS                              |
| Deploy      | Vercel                               |

## Cómo correr en local

```bash
git clone <url-del-repo>
cd portafolio-web
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Variables de entorno

Copia `.env.example` a `.env.local` y completa lo que necesites:

```bash
NEXT_PUBLIC_SITE_URL=              # dominio final del sitio (para SEO/sitemap)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=    # desde emailjs.com
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

Sin las variables de EmailJS, la sección de contacto muestra un botón de email directo en vez del formulario.

## Estructura del proyecto

```
app/[locale]/     Rutas y layout por idioma
components/       Componentes de UI y secciones de la página
content/          Datos del sitio (perfil, proyectos, skills, educación)
messages/         Diccionarios de traducción (es/en)
i18n/             Configuración de next-intl
public/models/    Modelo 3D del hero
```


## Contacto

- LinkedIn: [juan-gutierrez-322403258](https://www.linkedin.com/in/juan-gutierrez-322403258/)
- GitHub: [@Ghost-ofc](https://github.com/Ghost-ofc)
