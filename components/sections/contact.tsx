import { Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Reveal } from "@/components/motion/reveal";
import { ContactForm } from "@/components/contact-form";
import { profile } from "@/content/profile";

const isEmailConfigured = Boolean(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
);

export function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="scroll-mt-16 border-t bg-muted/30">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <Reveal>
          <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            {t("title")}
          </h2>
          <p className="mt-4 max-w-xl text-lg text-balance">
            {t("description")}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 grid gap-10 sm:grid-cols-2">
          {isEmailConfigured ? (
            <ContactForm />
          ) : (
            <Button
              nativeButton={false}
              render={<a href={profile.links.email} />}
              className="w-fit"
            >
              <Mail className="size-4" />
              {t("emailCta")}
            </Button>
          )}

          <div className="flex flex-col gap-3">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-lg border bg-card px-4 py-3 text-sm transition-colors hover:border-primary/40"
            >
              <GithubIcon className="size-4" />
              GitHub
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-lg border bg-card px-4 py-3 text-sm transition-colors hover:border-primary/40"
            >
              <LinkedinIcon className="size-4" />
              LinkedIn
            </a>
            <a
              href={profile.links.email}
              className="flex items-center gap-3 rounded-lg border bg-card px-4 py-3 text-sm transition-colors hover:border-primary/40"
            >
              <Mail className="size-4" />
              {profile.links.email.replace("mailto:", "")}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
