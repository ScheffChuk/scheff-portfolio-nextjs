"use client";

import React from "react";
import SectionHeading from "./ui/section-heading";
import { motion } from "motion/react";
import { useSectionInView } from "@/lib/hooks";
import { useTranslations } from "next-intl";

export default function About() {
  const { ref } = useSectionInView("About");
  const t = useTranslations("about");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{t("title")}</SectionHeading>
      <p className="mx-auto mb-3 max-w-prose px-4 text-start leading-relaxed md:px-6 md:text-lg">
        {t("content1")}
      </p>
      <p className="mx-auto mb-3 max-w-prose px-4 text-start leading-relaxed md:px-6 md:text-lg">
        {t("content2")}
      </p>
    </motion.section>
  );
}
