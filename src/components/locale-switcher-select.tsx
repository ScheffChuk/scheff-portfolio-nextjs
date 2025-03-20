"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { ChangeEvent, ReactNode, useTransition } from "react";

type Props = {
  children: ReactNode;
  defaultValues: string;
  label: string;
};

export default function LocaleSwitchSelect({
  children,
  defaultValues,
  label,
}: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;

    // Get the current path without the locale prefix
    const currentPathWithoutLocale = pathname.split("/").slice(2).join("/");

    // Construct the new path with the selected locale
    const newPath = `/${nextLocale}/${currentPathWithoutLocale}`;

    startTransition(() => {
      router.replace(newPath);
    });
  }

  return (
    <label
      className={clsx(
        "relative text-gray-500 dark:text-gray-400",
        isPending && "[&:disabled] opacity-40 transition-opacity",
      )}
    >
      <p className="sr-only">{label}</p>
      <select
        className="flex h-[3rem] w-[6rem] items-center justify-center bg-transparent text-center transition-all"
        disabled={isPending}
        defaultValue={defaultValues}
        onChange={onSelectChange}
      >
        {children}
      </select>
    </label>
  );
}
