"use client";

import React from "react";
import SectionHeading from "./ui/section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesDataEng, experiencesDataJap } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { useTranslations, useLocale } from "next-intl";
import { ExperienceItem } from "@/lib/types";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.3);
  const { theme } = useTheme();
  const t = useTranslations("experience");
  const locale = useLocale();

  const currentExperiences: readonly ExperienceItem[] =
    locale === "ja" ? experiencesDataJap : experiencesDataEng;

  return (
    <section
      id="experience"
      ref={ref}
      className="mb-28 scroll-mt-28 text-pretty sm:mb-40"
    >
      <SectionHeading>{t("title")}</SectionHeading>
      <VerticalTimeline lineColor="">
        {currentExperiences.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="!mt-2 font-normal">{item.location}</p>
              <p className="!mt-2 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
