import { ArrowRight, FileText } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { LaptopScene } from "@/components/three/laptop-scene";
import { profile } from "@/content/profile";

export function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale() as "es" | "en";

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 size-[36rem] rounded-full bg-primary/15 blur-[120px]"
      />
      <div className="relative mx-auto grid max-w-5xl gap-12 px-6 py-24 sm:py-32 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div className="flex flex-col gap-6">
          <p className="text-sm font-medium text-primary">{t("greeting")}</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            {profile.name}
          </h1>
          <p className="text-lg text-muted-foreground">{profile.role}</p>
          <p className="max-w-xl text-balance text-muted-foreground">
            {profile.tagline[locale]}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button nativeButton={false} render={<a href="#projects" />}>
              {t("ctaProjects")}
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="outline"
              nativeButton={false}
              render={<a href="#contact" />}
            >
              {t("ctaContact")}
            </Button>
            <Button
              variant="ghost"
              nativeButton={false}
              render={
                <a href={profile.links.resume} target="_blank" rel="noreferrer" />
              }
            >
              <FileText className="size-4" />
              {t("ctaResume")}
            </Button>
          </div>
        </div>
        <LaptopScene />
      </div>
    </section>
  );
}
