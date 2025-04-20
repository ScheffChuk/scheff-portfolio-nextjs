import { useLocale, useTranslations } from "next-intl";
import LocaleSwitchSelect from "./locale-switcher-select";
import { routing } from "@/i18n/routing";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  return (
    <LocaleSwitchSelect defaultValues={locale} label={t("label")}>
      {routing.locales.map((cur) => (
        <option key={cur} value={cur}>
          {t("locale", { locale: cur })}
        </option>
      ))}
    </LocaleSwitchSelect>
  );
}
