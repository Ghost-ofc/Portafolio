"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { profile } from "@/content/profile";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const sections = ["about", "skills", "projects", "education", "contact"] as const;

export function Nav() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-medium tracking-tight transition-colors hover:text-primary"
        >
          {profile.name}
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="group relative py-1 transition-colors hover:text-foreground"
            >
              {t(section)}
              <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <LocaleSwitcher />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" aria-label="Menu" />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>{profile.name}</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 px-6">
                {sections.map((section) => (
                  <a
                    key={section}
                    href={`#${section}`}
                    onClick={() => setOpen(false)}
                    className="text-lg transition-colors hover:text-primary"
                  >
                    {t(section)}
                  </a>
                ))}
                <div className="pt-2">
                  <LocaleSwitcher />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
