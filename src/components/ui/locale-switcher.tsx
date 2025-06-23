import { useLocale, useTranslations } from "next-intl";
import LocaleSwitchSelect from "./locale-switcher-select";
import { routing } from "@/i18n/routing";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  return (
    <LocaleSwitchSelect defaultValues={locale} label={t("label")}>
      {routing.locales.map((cur) => (
        <option
          key={cur}
          value={cur}
          className="bg-white/0 text-gray-900 transition-colors dark:bg-gray-800 dark:text-gray-50"
        >
          {t("locale", { locale: cur })}
        </option>
      ))}
    </LocaleSwitchSelect>
  );
}
