import { GraduationCap, ShieldCheck } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Reveal } from "@/components/motion/reveal";
import { certifications, degree } from "@/content/education";

export function Education() {
  const t = useTranslations("education");
  const locale = useLocale() as "es" | "en";

  return (
    <section id="education" className="scroll-mt-16 border-t bg-muted/30">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <Reveal>
          <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            {t("title")}
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-8 grid gap-8 sm:grid-cols-2">
          <div className="flex gap-4">
            <GraduationCap className="mt-1 size-5 shrink-0 text-primary" />
            <div>
              <p className="font-medium">{degree.title[locale]}</p>
              {degree.institution && (
                <p className="text-sm text-muted-foreground">
                  {degree.institution}
                </p>
              )}
              <p className="mt-1 text-sm text-muted-foreground">
                {degree.startYear} – {degree.endYear}
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium">
              {t("certifications")}
            </h3>
            <ul className="flex flex-col gap-3">
              {certifications.map((cert) => (
                <li key={cert.name} className="flex gap-3">
                  <ShieldCheck className="mt-1 size-4 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-medium">{cert.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {cert.issuer}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
