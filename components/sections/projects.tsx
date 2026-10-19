"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import { BookOpen, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { Spotlight } from "@/components/motion/spotlight";
import { projects, type Project } from "@/content/projects";

type Locale = "es" | "en";

const featured = projects.filter((p) => p.featured);
const sites = projects.filter((p) => !p.featured && p.screenshot);
const code = projects.filter((p) => !p.featured && !p.screenshot);

const EASE = [0.21, 0.47, 0.32, 0.98] as [number, number, number, number];
const DISPLAY_FONT = { fontFamily: "var(--font-syne), system-ui, sans-serif" };

const hostOf = (project: Project) => {
  const url = project.liveUrl ?? project.docsUrl;
  return url ? new URL(url).host.replace(/^www\./, "") : "";
};

const hasCaseStudy = (project: Project) =>
  Boolean(project.problem || project.solution || project.impact);

// ─── Browser window chrome around a real screenshot ───────────────────────────
function BrowserFrame({ host, children }: { host: string; children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-lg border border-border/80 bg-background shadow-2xl shadow-black/40">
      <div className="flex items-center gap-3 border-b border-border/60 bg-muted/60 px-3 py-2">
        <div className="flex gap-1.5" aria-hidden>
          <span className="size-2 rounded-full bg-foreground/15" />
          <span className="size-2 rounded-full bg-foreground/15" />
          <span className="size-2 rounded-full bg-foreground/15" />
        </div>
        <span className="mx-auto truncate rounded-md bg-background/70 px-3 py-0.5 font-mono text-[10px] text-muted-foreground">
          {host}
        </span>
        <span className="w-[30px]" aria-hidden />
      </div>
      <div className="relative aspect-[16/10] overflow-hidden">{children}</div>
    </div>
  );
}

function TechList({ tech, compact = false }: { tech: string[]; compact?: boolean }) {
  if (tech.length === 0) return null;
  return (
    <div className={`flex flex-wrap ${compact ? "mt-3 gap-1.5" : "mt-4 gap-2"}`}>
      {tech.map((item) => (
        <span
          key={item}
          className={`border border-border/50 bg-background/50 font-mono text-muted-foreground ${
            compact ? "rounded px-2 py-0.5 text-[10px]" : "rounded-md px-2.5 py-1 text-xs"
          }`}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  const t = useTranslations("projects");
  const locale = useLocale() as Locale;
  const linkClass =
    "inline-flex min-h-[36px] items-center gap-1.5 rounded-md border border-border/60 px-3 py-1.5 text-xs font-medium transition-colors hover:border-primary/40 hover:text-primary";

  return (
    <div className="flex flex-wrap items-center gap-2">
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer nofollow"
          aria-label={`${project.name} — ${t("viewLive")} (abre en nueva pestaña)`}
          className={linkClass}
        >
          {t("viewLive")}
          <ExternalLink className="size-3.5" />
        </a>
      )}
      {project.docsUrl && (
        <a
          href={project.docsUrl}
          target="_blank"
          rel="noreferrer nofollow"
          aria-label={`${project.name} — ${locale === "es" ? "Documentación" : "Docs"} (abre en nueva pestaña)`}
          className={linkClass}
        >
          {locale === "es" ? "Documentación" : "Docs"}
          <BookOpen className="size-3.5" />
        </a>
      )}
      {project.repoUrl && (
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.name} — ${t("viewCode")} (abre en nueva pestaña)`}
          className={`${linkClass} text-muted-foreground`}
        >
          {t("viewCode")}
          <GithubIcon className="size-3.5" />
        </a>
      )}
    </div>
  );
}

function CaseStudyToggle({
  expanded,
  onToggle,
}: {
  expanded: boolean;
  onToggle: () => void;
}) {
  const locale = useLocale() as Locale;
  return (
    <button
      type="button"
      onClick={onToggle}
      className="mt-5 inline-flex items-center gap-1.5 rounded font-mono text-xs text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
      aria-expanded={expanded}
    >
      {expanded
        ? (locale === "es" ? "↑ Cerrar detalles" : "↑ Hide details")
        : (locale === "es" ? "↓ Ver case study" : "↓ View case study")}
    </button>
  );
}

function CaseStudyPanel({
  project,
  expanded,
  className = "",
  gridClassName = "",
}: {
  project: Project;
  expanded: boolean;
  className?: string;
  gridClassName?: string;
}) {
  const locale = useLocale() as Locale;
  const blocks = [
    { label: locale === "es" ? "Problema" : "Problem", text: project.problem },
    { label: locale === "es" ? "Solución" : "Solution", text: project.solution },
    { label: locale === "es" ? "Impacto" : "Impact", text: project.impact },
  ].filter((b) => b.text);

  return (
    <AnimatePresence>
      {expanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.35, ease: EASE }}
          className={`overflow-hidden ${className}`}
        >
          <div className={`grid gap-4 border-t border-border/40 pt-6 ${gridClassName}`}>
            {blocks.map(({ label, text }) => (
              <div key={label}>
                <p className="mb-1.5 font-mono text-[10px] uppercase tracking-widest text-primary/60">
                  {label}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">{text![locale]}</p>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function SubsectionLabel({ children }: { children: ReactNode }) {
  return (
    <Reveal delay={0.1}>
      <p className="mt-16 font-mono text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
        {children}
      </p>
    </Reveal>
  );
}

export function Projects() {
  const t = useTranslations("projects");
  const locale = useLocale() as Locale;
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);
  const toggle = (slug: string) => setExpandedSlug((s) => (s === slug ? null : slug));

  return (
    <section id="projects" className="scroll-mt-16 border-t">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">

        {/* Section label */}
        <Reveal>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-primary">
            {t("title")}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl" style={DISPLAY_FONT}>
            {locale === "es" ? "Proyectos destacados" : "Featured work"}
          </h2>
        </Reveal>

        {/* ─── Featured: real screenshot + case study ──────────────── */}
        <div className="mt-12 flex flex-col gap-6">
          {featured.map((project, index) => {
            const isExpanded = expandedSlug === project.slug;
            const flip = index % 2 === 1;

            return (
              <Reveal key={project.slug} delay={index * 0.09}>
                <Spotlight className="group overflow-hidden rounded-xl border bg-card card-glow">
                  <article
                    className="md:grid md:grid-cols-[1.1fr_1fr] md:items-center"
                    aria-label={project.name}
                  >
                    {project.screenshot && (
                      <div
                        className={`relative overflow-hidden bg-gradient-to-br from-primary/10 via-muted/40 to-transparent p-4 sm:p-6 ${
                          flip ? "md:order-2" : ""
                        }`}
                      >
                        {/* Window lifts slightly on hover */}
                        <div className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 group-hover:scale-[1.015]">
                          <BrowserFrame host={hostOf(project)}>
                            <Image
                              src={project.screenshot}
                              alt={locale === "es" ? `Captura de ${project.name}` : `${project.name} screenshot`}
                              fill
                              placeholder="blur"
                              sizes="(min-width: 1024px) 520px, (min-width: 768px) 55vw, 100vw"
                              className="object-cover object-top"
                            />
                          </BrowserFrame>
                        </div>
                      </div>
                    )}

                    <div className="relative p-6 sm:p-8">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-primary/60">0{index + 1}.</span>
                        <h3 className="text-lg font-semibold sm:text-xl" style={DISPLAY_FONT}>
                          {project.name}
                        </h3>
                        <Badge
                          variant="outline"
                          className="hidden shrink-0 border-primary/30 text-primary sm:inline-flex"
                        >
                          {t("featuredBadge")}
                        </Badge>
                      </div>

                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {project.description[locale]}
                      </p>

                      <TechList tech={project.tech} />

                      <div className="mt-5">
                        <ProjectLinks project={project} />
                      </div>

                      {hasCaseStudy(project) && (
                        <CaseStudyToggle
                          expanded={isExpanded}
                          onToggle={() => toggle(project.slug)}
                        />
                      )}
                    </div>

                    {/* Full width under screenshot + copy */}
                    <CaseStudyPanel
                      project={project}
                      expanded={isExpanded}
                      className="md:order-3 md:col-span-2"
                      gridClassName="mx-6 mb-6 sm:mx-8 sm:mb-8 sm:grid-cols-3"
                    />
                  </article>
                </Spotlight>
              </Reveal>
            );
          })}
        </div>

        {/* ─── More live sites: thumbnail cards ────────────────────── */}
        {sites.length > 0 && (
          <>
            <SubsectionLabel>
              {locale === "es" ? "Más sitios en producción" : "More live sites"}
            </SubsectionLabel>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {sites.map((project, index) => (
                <Reveal key={project.slug} delay={index * 0.06}>
                  <Spotlight className="group h-full rounded-xl">
                    <article
                      className="flex h-full flex-col overflow-hidden rounded-xl border bg-card/80 card-glow"
                      aria-label={project.name}
                    >
                      <div className="bg-gradient-to-br from-primary/8 via-muted/30 to-transparent p-4">
                        <div className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1">
                          <BrowserFrame host={hostOf(project)}>
                            <Image
                              src={project.screenshot!}
                              alt={locale === "es" ? `Captura de ${project.name}` : `${project.name} screenshot`}
                              fill
                              placeholder="blur"
                              sizes="(min-width: 640px) 470px, 100vw"
                              className="object-cover object-top"
                            />
                          </BrowserFrame>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col justify-between p-5 pt-3">
                        <div>
                          <h3 className="font-semibold" style={DISPLAY_FONT}>
                            {project.name}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                            {project.description[locale]}
                          </p>
                          <TechList tech={project.tech} compact />
                        </div>
                        <div className="mt-4">
                          <ProjectLinks project={project} />
                        </div>
                      </div>
                    </article>
                  </Spotlight>
                </Reveal>
              ))}
            </div>
          </>
        )}

        {/* ─── Code & technical projects ───────────────────────────── */}
        {code.length > 0 && (
          <>
            <SubsectionLabel>
              {locale === "es" ? "Código y proyectos técnicos" : "Code & technical projects"}
            </SubsectionLabel>
            <div className="mt-5 grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {code.map((project, index) => (
                <Reveal key={project.slug} delay={index * 0.06}>
                  <Spotlight className="rounded-xl">
                    <article
                      className="flex flex-col rounded-xl border bg-card/80 p-5 card-glow"
                      aria-label={project.name}
                    >
                      <div className="flex items-center gap-2">
                        <GithubIcon className="size-4 text-muted-foreground" />
                        <h3 className="font-semibold" style={DISPLAY_FONT}>
                          {project.name}
                        </h3>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {project.description[locale]}
                      </p>
                      <TechList tech={project.tech} compact />
                      <div className="mt-4">
                        <ProjectLinks project={project} />
                      </div>
                      {hasCaseStudy(project) && (
                        <>
                          <CaseStudyToggle
                            expanded={expandedSlug === project.slug}
                            onToggle={() => toggle(project.slug)}
                          />
                          <CaseStudyPanel
                            project={project}
                            expanded={expandedSlug === project.slug}
                            gridClassName="mt-4"
                          />
                        </>
                      )}
                    </article>
                  </Spotlight>
                </Reveal>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
