"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
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
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  // Scroll detection for nav appearance
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Scroll spy for active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b bg-background/85 backdrop-blur-md shadow-sm shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        {/* Brand mark */}
        <Link
          href="/"
          className="group flex items-center gap-2 font-semibold tracking-tight transition-colors hover:text-primary"
          style={{ fontFamily: "var(--font-syne), system-ui, sans-serif" }}
        >
          {/* Amber dot signature */}
          <span
            className="size-2 rounded-full bg-primary transition-transform group-hover:scale-110"
            aria-hidden
          />
          <span>{profile.name}</span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-6 text-sm text-muted-foreground md:flex"
          aria-label="Navegación principal"
        >
          {sections.map((section) => {
            const isActive = activeSection === section;
            return (
              <a
                key={section}
                href={`#${section}`}
                aria-current={isActive ? "location" : undefined}
                className={`group relative py-1 transition-colors hover:text-foreground ${
                  isActive ? "text-foreground" : ""
                }`}
              >
                {t(section)}
                {/* Animated underline */}
                <motion.span
                  className="absolute inset-x-0 -bottom-0.5 h-px origin-left bg-primary"
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                />
              </a>
            );
          })}
        </nav>

        {/* Desktop controls */}
        <div className="hidden items-center gap-2 md:flex">
          <LocaleSwitcher />
          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Abrir menú"
                  className="min-w-[44px] min-h-[44px]"
                />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle
                  style={{ fontFamily: "var(--font-syne), system-ui, sans-serif" }}
                >
                  {profile.name}
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-2 px-6 pt-4" aria-label="Menú móvil">
                {sections.map((section) => {
                  const isActive = activeSection === section;
                  return (
                    <a
                      key={section}
                      href={`#${section}`}
                      onClick={() => setOpen(false)}
                      aria-current={isActive ? "location" : undefined}
                      className={`rounded-lg px-3 py-3 text-lg font-medium transition-colors hover:bg-accent min-h-[48px] flex items-center ${
                        isActive ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {t(section)}
                    </a>
                  );
                })}
                <div className="pt-4">
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
