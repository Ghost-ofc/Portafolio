"use client";

import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { useTranslations, useLocale } from "next-intl";
import { Reveal } from "@/components/motion/reveal";
import { ContactForm } from "@/components/contact-form";
import { profile } from "@/content/profile";

const isEmailConfigured = Boolean(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
);

const SOCIAL_LINKS = [
  {
    href: "github",
    Icon: GithubIcon,
    label: "GitHub",
    sublabel: "@Ghost-ofc",
    ariaLabel: "GitHub — abre en nueva pestaña",
    external: true,
  },
  {
    href: "linkedin",
    Icon: LinkedinIcon,
    label: "LinkedIn",
    sublabel: "in/juan-gutierrez-322403258",
    ariaLabel: "LinkedIn — abre en nueva pestaña",
    external: true,
  },
  {
    href: "email",
    Icon: Mail,
    label: "Email",
    sublabel: "juan089207@gmail.com",
    ariaLabel: "Enviar email",
    external: false,
  },
] as const;

export function Contact() {
  const t = useTranslations("contact");
  const locale = useLocale() as "es" | "en";

  const getLinkHref = (key: "github" | "linkedin" | "email") =>
    profile.links[key];

  return (
    <section id="contact" className="scroll-mt-16 border-t">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">

        {/* Section label */}
        <Reveal>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-primary">
            {t("title")}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2
            className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl"
            style={{ fontFamily: "var(--font-syne), system-ui, sans-serif" }}
          >
            {locale === "es"
              ? "¿Tienes un proyecto en mente?"
              : "Have a project in mind?"}
          </h2>
          <p className="mt-3 max-w-xl text-base text-muted-foreground">
            {t("description")}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 sm:grid-cols-2">

          {/* Contact form or mailto button */}
          <Reveal delay={0.1}>
            {isEmailConfigured ? (
              <ContactForm />
            ) : (
              <div className="flex flex-col gap-4">
                <a
                  href={profile.links.email}
                  className="inline-flex items-center gap-2 rounded-xl border bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 w-fit"
                >
                  <Mail className="size-4" />
                  {t("emailCta")}
                </a>
                <p className="text-xs text-muted-foreground">
                  {locale === "es"
                    ? "O escríbeme directamente a "
                    : "Or write me directly at "}
                  <span className="font-mono text-foreground">
                    juan089207@gmail.com
                  </span>
                </p>
              </div>
            )}
          </Reveal>

          {/* Social links */}
          <Reveal delay={0.18}>
            <div className="flex flex-col gap-3">
              {SOCIAL_LINKS.map(({ href, Icon, label, sublabel, ariaLabel, external }) => (
                <a
                  key={href}
                  href={getLinkHref(href)}
                  {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                  aria-label={ariaLabel}
                  className="group flex items-center gap-4 rounded-xl border bg-card px-5 py-4 transition-colors card-glow min-h-[60px]"
                >
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border bg-muted/50 transition-colors group-hover:border-primary/40 group-hover:bg-primary/10">
                    <Icon className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium leading-none">{label}</p>
                    <p className="mt-1 truncate font-mono text-xs text-muted-foreground">
                      {sublabel}
                    </p>
                  </div>
                  {external && (
                    <ArrowUpRight className="size-4 shrink-0 text-muted-foreground/40 transition-colors group-hover:text-primary" />
                  )}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
