"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { projects } from "@/content/projects";

const featured = projects.filter((p) => p.featured);
const rest = projects.filter((p) => !p.featured);

export function Projects() {
  const t = useTranslations("projects");
  const locale = useLocale() as "es" | "en";
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

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
          <h2
            className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl"
            style={{ fontFamily: "var(--font-syne), system-ui, sans-serif" }}
          >
            {locale === "es" ? "Proyectos destacados" : "Featured work"}
          </h2>
        </Reveal>

        {/* ─── Featured: case study cards (full-width) ─────────────── */}
        <div className="mt-12 flex flex-col gap-6">
          {featured.map((project, index) => {
            const isExpanded = expandedSlug === project.slug;
            const hasCaseStudy = Boolean(project.problem || project.solution || project.impact);

            return (
              <Reveal key={project.slug} delay={index * 0.09}>
                <article
                  className="group relative overflow-hidden rounded-xl border bg-card card-glow"
                  aria-label={project.name}
                >
                  {/* Amber gradient top-right accent */}
                  <div
                    aria-hidden
                    className="absolute -top-8 -right-8 size-40 rounded-full bg-primary/8 blur-[50px] pointer-events-none"
                  />

                  <div className="p-6 sm:p-8">
                    {/* Header row */}
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-primary/60">
                          0{index + 1}.
                        </span>
                        <h3
                          className="text-lg font-semibold sm:text-xl"
                          style={{ fontFamily: "var(--font-syne), system-ui, sans-serif" }}
                        >
                          {project.name}
                        </h3>
                        <Badge
                          variant="outline"
                          className="hidden shrink-0 border-primary/30 text-primary sm:inline-flex"
                        >
                          {t("featuredBadge")}
                        </Badge>
                      </div>

                      {/* Action links */}
                      <div className="flex items-center gap-3">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer nofollow"
                            aria-label={`${project.name} — ${t("viewLive")} (abre en nueva pestaña)`}
                            className="inline-flex items-center gap-1.5 rounded-md border border-border/60 px-3 py-1.5 text-xs font-medium transition-colors hover:border-primary/40 hover:text-primary min-h-[36px]"
                          >
                            {t("viewLive")}
                            <ExternalLink className="size-3.5" />
                          </a>
                        )}
                        {project.repoUrl && (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${project.name} — ${t("viewCode")} (abre en nueva pestaña)`}
                            className="inline-flex items-center gap-1.5 rounded-md border border-border/60 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground min-h-[36px]"
                          >
                            {t("viewCode")}
                            <GithubIcon className="size-3.5" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {project.description[locale]}
                    </p>

                    {/* Tech stack */}
                    {project.tech.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-border/50 bg-background/50 px-2.5 py-1 font-mono text-xs text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Case study toggle */}
                    {hasCaseStudy && (
                      <button
                        type="button"
                        onClick={() => setExpandedSlug(isExpanded ? null : project.slug)}
                        className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded"
                        aria-expanded={isExpanded}
                      >
                        {isExpanded
                          ? (locale === "es" ? "↑ Cerrar detalles" : "↑ Hide details")
                          : (locale === "es" ? "↓ Ver case study" : "↓ View case study")}
                      </button>
                    )}

                    {/* Case study expandable panel */}
                    <AnimatePresence>
                      {isExpanded && hasCaseStudy && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
                          className="overflow-hidden"
                        >
                          <div className="mt-6 grid gap-4 border-t border-border/40 pt-6 sm:grid-cols-3">
                            {project.problem && (
                              <div>
                                <p className="mb-1.5 font-mono text-[10px] uppercase tracking-widest text-primary/60">
                                  {locale === "es" ? "Problema" : "Problem"}
                                </p>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                  {project.problem[locale]}
                                </p>
                              </div>
                            )}
                            {project.solution && (
                              <div>
                                <p className="mb-1.5 font-mono text-[10px] uppercase tracking-widest text-primary/60">
                                  {locale === "es" ? "Solución" : "Solution"}
                                </p>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                  {project.solution[locale]}
                                </p>
                              </div>
                            )}
                            {project.impact && (
                              <div>
                                <p className="mb-1.5 font-mono text-[10px] uppercase tracking-widest text-primary/60">
                                  {locale === "es" ? "Impacto" : "Impact"}
                                </p>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                  {project.impact[locale]}
                                </p>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* ─── Other projects: compact 2-col grid ──────────────────── */}
        {rest.length > 0 && (
          <>
            <Reveal delay={0.1}>
              <p className="mt-14 font-mono text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                {locale === "es" ? "Otros proyectos" : "Other projects"}
              </p>
            </Reveal>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {rest.map((project, index) => (
                <Reveal key={project.slug} delay={index * 0.06}>
                  <article
                    className="group flex h-full flex-col justify-between rounded-xl border bg-card p-5 card-glow"
                    aria-label={project.name}
                  >
                    <div>
                      <h3
                        className="font-semibold"
                        style={{ fontFamily: "var(--font-syne), system-ui, sans-serif" }}
                      >
                        {project.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {project.description[locale]}
                      </p>
                      {project.tech.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="rounded border border-border/50 bg-background/50 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="mt-4 flex gap-3 text-xs">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer nofollow"
                          aria-label={`${project.name} — ${t("viewLive")} (abre en nueva pestaña)`}
                          className="inline-flex items-center gap-1 font-medium text-primary hover:underline min-h-[32px]"
                        >
                          {t("viewLive")}
                          <ExternalLink className="size-3" />
                        </a>
                      )}
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${project.name} — ${t("viewCode")} (abre en nueva pestaña)`}
                          className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground min-h-[32px]"
                        >
                          {t("viewCode")}
                          <GithubIcon className="size-3" />
                        </a>
                      )}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
