"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hi! I&apos;m a &apos;90s-born expat living in Yushima, Tokyo, near Ueno Park. In
        my second year in Japan, I split my time between cooking and reading
        when I&apos;m not listening to my favorite band, RadioHead. I have a
        particular fondness for Pallas&apos;s cats (マヌルネコ), and previously
        worked as an English translator and interpreter. Nice to meet you!
      </p>
    </motion.section>
  );
}
