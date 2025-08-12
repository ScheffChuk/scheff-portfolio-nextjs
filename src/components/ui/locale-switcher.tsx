"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { routing } from "@/i18n/routing";
import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function toggleLocale() {
    // Find the next locale in the routing array
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const currentIndex = routing.locales.indexOf(locale as any);
    const nextIndex = (currentIndex + 1) % routing.locales.length;
    const nextLocale = routing.locales[nextIndex];

    // Get the current path without the locale prefix
    const currentPathWithoutLocale = pathname.split("/").slice(2).join("/");

    // Construct the new path with the selected locale
    const newPath = `/${nextLocale}/${currentPathWithoutLocale}`;

    startTransition(() => {
      router.replace(newPath, {
        scroll: false,
      });
    });
  }

  // Get short locale display format
  const getLocaleShort = (localeCode: string) => {
    const shorts: Record<string, string> = {
      en: "EN",
      ja: "日",
      zh: "中",
      es: "ES",
      fr: "FR",
      de: "DE",
    };
    return shorts[localeCode] || localeCode.toUpperCase();
  };

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        onClick={toggleLocale}
        disabled={isPending}
        className={cn(
          "relative h-8 px-3 font-medium",
          "bg-white/80 backdrop-blur-sm dark:bg-gray-800/80",
          "border-gray-200/50 dark:border-gray-700/50",
          "hover:bg-white/90 dark:hover:bg-gray-800/90",
          "hover:border-[#3399ff]/50 dark:hover:border-[#3399ff]/50",
          "focus:border-[#3399ff] focus:ring-2 focus:ring-[#3399ff]/20",
          "text-gray-900 dark:text-gray-100",
          "transition-all duration-200",
          isPending && "cursor-not-allowed opacity-60",
        )}
        aria-label={t("label")}
      >
        <div className="flex items-center gap-1">
          {routing.locales.map((loc, index) => (
            <span key={loc} className="flex items-center">
              <span
                className={cn(
                  "text-sm transition-colors duration-200",
                  loc === locale
                    ? "font-semibold text-[#3399ff]"
                    : "text-gray-500 dark:text-gray-400",
                )}
              >
                {getLocaleShort(loc)}
              </span>
              {index < routing.locales.length - 1 && (
                <span className="mx-0.5 text-sm text-gray-400 dark:text-gray-500">
                  /
                </span>
              )}
            </span>
          ))}
        </div>
      </Button>

      {isPending && (
        <div className="absolute inset-0 flex items-center justify-center rounded-md bg-white/50 backdrop-blur-sm dark:bg-gray-800/50">
          <div className="h-3 w-3 animate-spin rounded-full border-2 border-[#3399ff] border-t-transparent" />
        </div>
      )}
    </div>
  );
}
