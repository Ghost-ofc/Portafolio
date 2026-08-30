import { useTranslations } from "next-intl";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/content/profile";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  const links = [
    {
      href: profile.links.github,
      Icon: GithubIcon,
      label: "GitHub (abre en nueva pestaña)",
      external: true,
    },
    {
      href: profile.links.linkedin,
      Icon: LinkedinIcon,
      label: "LinkedIn (abre en nueva pestaña)",
      external: true,
    },
    {
      href: profile.links.email,
      Icon: Mail,
      label: "Enviar email",
      external: false,
    },
  ];

  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2">
          {/* Amber dot — mirrors nav brand mark */}
          <span className="size-1.5 rounded-full bg-primary" aria-hidden />
          <p>
            © {year}{" "}
            <span
              className="font-medium text-foreground"
              style={{ fontFamily: "var(--font-syne), system-ui, sans-serif" }}
            >
              {profile.name}
            </span>
            . {t("rights")}
          </p>
        </div>

        <div className="flex items-center gap-1">
          {links.map(({ href, Icon, label, external }) => (
            <a
              key={href}
              href={href}
              aria-label={label}
              {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
              className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg transition-colors hover:bg-accent hover:text-foreground"
            >
              <Icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
