"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { Button } from "@/components/ui/button";

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("locale");

  return (
    <div className="flex items-center gap-1" aria-label={t("label")}>
      {routing.locales.map((l) => (
        <Button
          key={l}
          variant={l === locale ? "secondary" : "ghost"}
          size="sm"
          className="h-8 px-2 text-xs uppercase"
          onClick={() => router.replace(pathname, { locale: l })}
        >
          {l}
        </Button>
      ))}
    </div>
  );
}
