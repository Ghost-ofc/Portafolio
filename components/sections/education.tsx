"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { GraduationCap, CheckCircle2 } from "lucide-react";
import { SiCisco } from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import type { IconType } from "react-icons";
import { Reveal } from "@/components/motion/reveal";
import { certifications, degree } from "@/content/education";

const EASE = [0.21, 0.47, 0.32, 0.98] as [number, number, number, number];

// Issuer brand colors & actual official logo components
const ISSUER_META: Record<
  string,
  { color: string; bg: string; border: string; Icon: IconType }
> = {
  "Cisco Networking Academy": {
    color: "#1BA0D8",
    bg: "rgba(27, 160, 216, 0.12)",
    border: "rgba(27, 160, 216, 0.25)",
    Icon: SiCisco,
  },
  "Amazon Web Services": {
    color: "#FF9900",
    bg: "rgba(255, 153, 0, 0.12)",
    border: "rgba(255, 153, 0, 0.25)",
    Icon: FaAws,
  },
};

// ─── Animated progress bar for degree timeline ───────────────────────────────
function DegreeTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const start = degree.startYear;
  const end = degree.endYear;
  const now = new Date().getFullYear();
  const pct = Math.min(((now - start) / (end - start)) * 100, 100);

  return (
    <div ref={ref} className="mt-6 space-y-2">
      {/* Year labels */}
      <div className="flex justify-between font-mono text-xs text-muted-foreground">
        <span>{start}</span>
        <span className="text-primary font-medium">{now >= end ? "✓ " : ""}{end}</span>
      </div>

      {/* Track — bar and tip slide in with transform only (no width/left) */}
      <div className="relative h-2 w-full">
        <div className="absolute inset-0 overflow-hidden rounded-full bg-secondary/80">
          <motion.div
            className="h-full w-full rounded-full bg-gradient-to-r from-primary/60 to-primary"
            initial={{ x: "-100%" }}
            animate={{ x: inView ? `${pct - 100}%` : "-100%" }}
            transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
          />
        </div>
        {/* Glowing tip rides on the right edge of a full-width layer */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          initial={{ x: "-100%" }}
          animate={{ x: inView ? `${pct - 100}%` : "-100%" }}
          transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
        >
          <span className="absolute -right-[7px] top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_10px_2px] shadow-primary/70" />
        </motion.div>
      </div>

      {/* Status badge */}
      <div className="flex items-center gap-2 pt-1">
        <motion.span
          className="inline-block h-2 w-2 rounded-full bg-primary"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="font-mono text-xs text-primary">
          {now >= end ? "Completado" : "En curso (2021 – 2025)"}
        </span>
      </div>
    </div>
  );
}

// ─── Single certification card ────────────────────────────────────────────────
function CertCard({
  cert,
  index,
}: {
  cert: { name: string; issuer: string };
  index: number;
}) {
  const meta = ISSUER_META[cert.issuer];
  const IconComponent = meta?.Icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: 16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: 0.1 + index * 0.1, ease: EASE }}
      whileHover={{ y: -2 }}
      className="group flex items-center gap-4 rounded-xl border border-border/60 bg-card p-4 transition-all duration-200 hover:border-primary/40 hover:shadow-md hover:shadow-primary/5"
    >
      {/* Official Issuer Logo */}
      <div
        className="flex size-11 shrink-0 items-center justify-center rounded-lg transition-transform duration-200 group-hover:scale-105"
        style={{
          background: meta?.bg ?? "rgba(255,255,255,0.06)",
          border: `1px solid ${meta?.border ?? "transparent"}`,
        }}
      >
        {IconComponent ? (
          <IconComponent
            className="size-6"
            style={{ color: meta.color }}
            aria-hidden="true"
          />
        ) : (
          <span className="text-xs font-bold font-mono">
            {cert.issuer.slice(0, 2).toUpperCase()}
          </span>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium leading-snug text-foreground group-hover:text-primary transition-colors">
          {cert.name}
        </p>
        <p
          className="mt-1 font-mono text-xs"
          style={{ color: meta?.color ?? "oklch(0.62 0.012 90)" }}
        >
          {cert.issuer}
        </p>
      </div>

      {/* Verified checkmark badge */}
      <div
        className="flex size-6 shrink-0 items-center justify-center rounded-full transition-transform group-hover:scale-110"
        style={{
          background: meta?.bg ?? "rgba(255,255,255,0.06)",
          color: meta?.color ?? "currentColor",
        }}
        title="Certificado verificado"
      >
        <CheckCircle2 className="size-4" />
      </div>
    </motion.div>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────
export function Education() {
  const t = useTranslations("education");
  const locale = useLocale() as "es" | "en";

  return (
    <section id="education" className="scroll-mt-16 border-t bg-muted/30">
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
            {locale === "es" ? "Formación y certificaciones" : "Education & certifications"}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 items-start">

          {/* ── Degree card ──────────────────────────────────────────────── */}
          <Reveal delay={0.1}>
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.25 }}
              className="relative overflow-hidden rounded-xl border bg-card p-6 card-glow h-full flex flex-col justify-between"
            >
              {/* Amber corner glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute -top-6 -right-6 size-28 rounded-full bg-primary/10 blur-[30px]"
              />

              {/* Icon + title */}
              <div>
                <div className="flex items-start gap-3.5">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                    <GraduationCap className="size-6 text-primary" />
                  </div>
                  <div>
                    <h3
                      className="font-semibold leading-snug text-base sm:text-lg"
                      style={{ fontFamily: "var(--font-syne), system-ui, sans-serif" }}
                    >
                      {degree.title[locale]}
                    </h3>
                    {degree.institution && (
                      <p className="mt-1 text-sm text-muted-foreground">
                        {degree.institution}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Animated timeline */}
              <DegreeTimeline />
            </motion.div>
          </Reveal>

          {/* ── Certifications ───────────────────────────────────────────── */}
          <Reveal delay={0.18}>
            <div className="flex flex-col gap-3.5">
              <p
                className="text-sm font-semibold tracking-wide text-muted-foreground"
                style={{ fontFamily: "var(--font-syne), system-ui, sans-serif" }}
              >
                {t("certifications")}
              </p>
              <div className="flex flex-col gap-3">
                {certifications.map((cert, i) => (
                  <CertCard key={cert.name} cert={cert} index={i} />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
