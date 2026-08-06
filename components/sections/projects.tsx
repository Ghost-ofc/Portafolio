import { ExternalLink } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { GithubIcon } from "@/components/icons";
import { Reveal } from "@/components/motion/reveal";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/content/projects";

export function Projects() {
  const t = useTranslations("projects");
  const locale = useLocale() as "es" | "en";

  return (
    <section id="projects" className="scroll-mt-16 border-t">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <Reveal>
          <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            {t("title")}
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.08}>
              <Card className="flex h-full flex-col justify-between transition-colors hover:border-primary/40">
                <CardHeader>
                  <div className="flex items-center justify-between gap-2">
                    <CardTitle>{project.name}</CardTitle>
                    {project.featured && (
                      <Badge variant="outline" className="shrink-0 font-normal">
                        {t("featuredBadge")}
                      </Badge>
                    )}
                  </div>
                  <CardDescription>
                    {project.description[locale]}
                  </CardDescription>
                </CardHeader>
                {project.tech.length > 0 && (
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="font-normal">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                )}
                <CardFooter className="flex gap-4 text-sm">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer nofollow"
                      className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
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
                      className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
                    >
                      {t("viewCode")}
                      <GithubIcon className="size-3.5" />
                    </a>
                  )}
                </CardFooter>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
