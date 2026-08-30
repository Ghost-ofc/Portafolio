import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { routing } from "@/i18n/routing";
import { profile } from "@/content/profile";
import "../globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-syne",   // keep var name to avoid CSS cascade changes
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : new URL("http://localhost:3000");

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: "es" | "en" }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const description = profile.bio[locale];
  const title = `${profile.name} — ${profile.role}`;

  return {
    title,
    description,
    metadataBase: baseUrl,
    authors: [{ name: profile.name, url: profile.links.github }],
    keywords: [
      "Full Stack Developer",
      "Java",
      "Spring Boot",
      "React",
      "Next.js",
      "Node.js",
      "PHP",
      "Magento",
      "Docker",
      "AWS",
      "Terraform",
      "DevSecOps",
      "Peru",
    ],
    alternates: {
      canonical: locale === "es" ? baseUrl.href : `${baseUrl.href}en`,
      languages: {
        es: baseUrl.href,
        en: `${baseUrl.href}en`,
      },
    },
    openGraph: {
      title,
      description,
      siteName: profile.name,
      locale,
      type: "website",
      url: locale === "es" ? baseUrl.href : `${baseUrl.href}en`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  url: baseUrl.href,
  sameAs: [profile.links.github, profile.links.linkedin],
  knowsAbout: [
    "Java",
    "Spring Boot",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PHP",
    "Magento",
    "Docker",
    "AWS",
    "Terraform",
    "GitHub Actions",
    "DevSecOps",
  ],
};

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-link">
          {locale === "es" ? "Saltar al contenido" : "Skip to content"}
        </a>
        <NextIntlClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Nav />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
