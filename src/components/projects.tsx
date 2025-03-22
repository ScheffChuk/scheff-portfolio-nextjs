"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { useTranslations } from "next-intl";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const t = useTranslations("projects");

  return (
    <section ref={ref} id="projects" className="mb-28 scroll-mt-28">
      <SectionHeading>{t("title")}</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
