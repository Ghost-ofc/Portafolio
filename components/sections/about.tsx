"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { Reveal } from "@/components/motion/reveal";
import { profile } from "@/content/profile";
import { stats } from "@/content/stats";

const EASE = [0.21, 0.47, 0.32, 0.98] as [number, number, number, number];

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const end = value;
    const duration = 1200;
    const step = (timestamp: number, startTime: number) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame((t) => step(t, startTime));
      else setCount(end);
    };
    requestAnimationFrame((t) => step(t, t));
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function About() {
  const t = useTranslations("about");
  const locale = useLocale() as "es" | "en";

  return (
    <section id="about" className="scroll-mt-16 border-t relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">

        {/* Section label */}
        <Reveal>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-primary">
            {t("title")}
          </p>
        </Reveal>

        {/* Bio — clean, readable paragraph */}
        <Reveal delay={0.08}>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.bio[locale]}
          </p>
        </Reveal>

        {/* ─── 4-column Stats Counter Bar ──────────────────────────────────────── */}
        <div className="mt-14 pt-10 border-t border-border/50 grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-6 text-center">
          {stats.map((stat, idx) => {
            const numericStr = stat.value.replace(/\D/g, "");
            const numeric = parseInt(numericStr, 10) || 0;
            const suffix = stat.value.replace(/\d/g, "");

            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.1 + idx * 0.08, ease: EASE }}
                className="group relative flex flex-col items-center justify-center p-3"
              >
                {/* Subtle backlight glow on hover */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-2xl bg-primary/0 transition-colors duration-300 group-hover:bg-primary/5 -z-10"
                />

                {/* Big Metric Number */}
                <p
                  className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary transition-transform duration-300 group-hover:scale-105"
                  style={{ fontFamily: "var(--font-syne), system-ui, sans-serif" }}
                >
                  <AnimatedNumber value={numeric} suffix={suffix} />
                </p>

                {/* Uppercase Subtitle */}
                <p className="mt-3 font-mono text-xs sm:text-sm font-semibold tracking-[0.18em] text-muted-foreground group-hover:text-foreground transition-colors">
                  {stat.label[locale]}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
