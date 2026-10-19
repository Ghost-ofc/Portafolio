"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { ArrowRight, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/content/profile";

// Lazy-load Three.js — keeps initial bundle lean
const LaptopScene = dynamic(
  () => import("@/components/three/laptop-scene").then((m) => m.LaptopScene),
  { ssr: false, loading: () => <div className="aspect-square w-full max-w-lg" /> }
);

const ROLES = {
  es: ["Full Stack Developer", "Backend Engineer", "DevSecOps Learner"],
  en: ["Full Stack Developer", "Backend Engineer", "DevSecOps Learner"],
};

function TypingRole({ locale }: { locale: "es" | "en" }) {
  const roles = ROLES[locale];
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const target = roles[roleIdx];
    if (paused) {
      const t = setTimeout(() => { setDeleting(true); setPaused(false); }, 2200);
      return () => clearTimeout(t);
    }
    if (!deleting) {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 55);
        return () => clearTimeout(t);
      } else {
        setPaused(true);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
        return () => clearTimeout(t);
      } else {
        setDeleting(false);
        setRoleIdx((i) => (i + 1) % roles.length);
      }
    }
  }, [displayed, deleting, paused, roleIdx, roles]);

  return (
    <span className="text-primary font-mono">
      {displayed}
      <span className="cursor-blink text-primary" aria-hidden="true" />
    </span>
  );
}

const EASE = [0.21, 0.47, 0.32, 0.98] as [number, number, number, number];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};
const headline = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const word = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const HEADLINE = {
  es: [{ text: "Hola," }, { text: "soy", gradient: true }, { text: "Juan.", gradient: true }],
  en: [{ text: "Hi," }, { text: "I'm", gradient: true }, { text: "Juan.", gradient: true }],
} satisfies Record<"es" | "en", { text: string; gradient?: boolean }[]>;

export function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale() as "es" | "en";

  return (
    <section className="relative overflow-hidden">
      {/* Ambient backdrop — masked grid + drifting amber glow */}
      <div aria-hidden className="hero-grid pointer-events-none absolute inset-0 opacity-60" />
      <div
        aria-hidden
        className="hero-glow pointer-events-none absolute -top-24 -right-8 size-72 rounded-full bg-primary/12 blur-[100px] sm:size-[36rem]"
      />

      <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-16 lg:py-32">

        {/* ─── Copy column ──────────────────────────────────────────── */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-5"
        >
          {/* Code kicker pill */}
          <motion.div variants={item}>
            <div className="inline-flex items-center gap-1.5 rounded-md border border-primary/20 bg-primary/8 px-3 py-1.5 font-mono text-xs text-primary">
              <span className="text-muted-foreground">const</span>
              <span className="text-foreground font-medium">dev</span>
              <span className="text-muted-foreground">=</span>
              <span className="text-primary">&quot;Juan Gutierrez&quot;</span>
            </div>
          </motion.div>

          {/* Name — words rise from behind a mask */}
          <motion.h1
            variants={headline}
            className="text-[2.4rem] font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            {HEADLINE[locale].map(({ text, gradient }, i) => (
              <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
                <motion.span
                  variants={word}
                  className={`inline-block ${gradient ? "text-gradient" : ""}`}
                >
                  {text}
                </motion.span>
                {" "}
              </span>
            ))}
          </motion.h1>

          {/* Typing role */}
          <motion.p variants={item} className="text-lg font-medium sm:text-xl">
            <TypingRole locale={locale} />
          </motion.p>

          {/* Tagline — contained width with word-break */}
          <motion.p
            variants={item}
            className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base"
          >
            {profile.tagline[locale]}
          </motion.p>

          {/* CTAs — wrap naturally on mobile */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-2 pt-1 sm:gap-3">
            <Button
              nativeButton={false}
              render={<a href="#projects" />}
              className="h-10 px-4 text-sm"
            >
              {t("ctaProjects")}
              <ArrowRight className="size-3.5" />
            </Button>
            <Button
              variant="outline"
              nativeButton={false}
              render={<a href="#contact" />}
              className="h-10 px-4 text-sm"
            >
              {t("ctaContact")}
            </Button>
            <Button
              variant="ghost"
              nativeButton={false}
              render={
                <a href={profile.links.resume} target="_blank" rel="noreferrer" />
              }
              className="h-10 px-4 text-sm"
            >
              <FileText className="size-3.5" />
              {t("ctaResume")}
            </Button>
          </motion.div>

          {/* Social links */}
          <motion.div variants={item} className="flex items-center gap-1 pt-0.5">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub (abre en nueva pestaña)"
              className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
            >
              <GithubIcon className="size-5" />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn (abre en nueva pestaña)"
              className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
            >
              <LinkedinIcon className="size-5" />
            </a>
          </motion.div>
        </motion.div>

        {/* ─── 3D Scene — hidden on small mobile, shown md+ ─────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          className="mt-10 flex justify-center lg:mt-0 lg:justify-end hidden sm:flex"
        >
          <LaptopScene />
        </motion.div>
      </div>
    </section>
  );
}
