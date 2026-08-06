import { useLocale, useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { skillCategories } from "@/content/skills";
import { skillIcons } from "@/content/skill-icons";

export function Skills() {
  const t = useTranslations("skills");
  const locale = useLocale() as "es" | "en";

  return (
    <section id="skills" className="scroll-mt-16 border-t bg-muted/30">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <Reveal>
          <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            {t("title")}
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {skillCategories.map((category, index) => (
            <Reveal key={category.id} delay={index * 0.08}>
              <h3 className="text-sm font-medium">{category.label[locale]}</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {category.items.map((item) => {
                  const icon = skillIcons[item];
                  return (
                    <Badge
                      key={item}
                      variant="secondary"
                      className="h-10 gap-2 rounded-xl px-4 text-sm font-normal transition-transform hover:-translate-y-0.5"
                    >
                      {icon && (
                        <icon.Icon
                          className="!size-5"
                          style={{ color: icon.color }}
                        />
                      )}
                      {item}
                    </Badge>
                  );
                })}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
