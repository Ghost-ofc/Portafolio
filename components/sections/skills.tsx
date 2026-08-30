"use client";

import { useLocale, useTranslations } from "next-intl";
import { Reveal } from "@/components/motion/reveal";
import { skillCategories } from "@/content/skills";
import { skillIcons } from "@/content/skill-icons";

// Domain accent colors for each category header
const DOMAIN_COLORS: Record<string, string> = {
  frontend: "#61DAFB",
  backend: "#6DB33F",
  databases: "#4169E1",
  devops: "#FF9900",
  "ai-ml": "#FF6F00",
};

export function Skills() {
  const t = useTranslations("skills");
  const locale = useLocale() as "es" | "en";

  return (
    <section id="skills" className="scroll-mt-16 border-t bg-muted/30">
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
            {locale === "es" ? "Dominio técnico completo" : "Full technical stack"}
          </h2>
        </Reveal>

        {/* Domain groups */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const accentColor = DOMAIN_COLORS[category.id] ?? "#F59E0B";
            return (
              <Reveal key={category.id} delay={index * 0.07}>
                <div className="group relative rounded-xl border bg-card p-5 card-glow h-full">
                  {/* Colored domain indicator bar */}
                  <div
                    className="mb-4 flex items-center gap-2.5"
                    aria-hidden
                  >
                    <div
                      className="h-4 w-1 rounded-full"
                      style={{ background: accentColor }}
                    />
                    <h3
                      className="text-sm font-semibold tracking-wide"
                      style={{ color: accentColor }}
                    >
                      {category.label[locale]}
                    </h3>
                  </div>

                  {/* Pills */}
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => {
                      const icon = skillIcons[item];
                      return (
                        <span
                          key={item}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-border/60 bg-background/60 px-3 py-1.5 text-xs font-medium text-foreground transition-transform hover:-translate-y-0.5"
                        >
                          {icon && (
                            <icon.Icon
                              className="!size-3.5 shrink-0"
                              style={{ color: icon.color }}
                              aria-hidden="true"
                            />
                          )}
                          {item}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
