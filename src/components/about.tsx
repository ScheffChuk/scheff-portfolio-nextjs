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
        I'm a guy from the early '90s, living in Yushima, Tokyo, just a stone's
        throw from Ueno Park. This is my second year living in Japan. Pink
        Floyd's my favorite band, and I've got a soft spot for cat, especially
        Pallas's cats（マヌルネコ）. Cooking and reading keep me busy, and in
        the past, I worked as an English translator and interpreter. Nice to
        meet you!
      </p>
    </motion.section>
  );
}
