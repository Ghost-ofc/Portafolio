import { useLocale, useTranslations } from "next-intl";
import { Reveal } from "@/components/motion/reveal";
import { profile } from "@/content/profile";
import { stats } from "@/content/stats";

export function About() {
  const t = useTranslations("about");
  const locale = useLocale() as "es" | "en";

  return (
    <section id="about" className="scroll-mt-16 border-t">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <Reveal>
          <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            {t("title")}
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-balance">
            {profile.bio[locale]}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="rounded-lg border bg-card px-4 py-5 text-center"
            >
              <p className="text-3xl font-semibold text-primary">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {stat.label[locale]}
              </p>
              {stat.caption && (
                <p className="mt-0.5 text-[11px] text-muted-foreground/70">
                  {stat.caption[locale]}
                </p>
              )}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
