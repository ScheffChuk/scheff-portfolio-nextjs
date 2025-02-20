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
      <p className="mb-3 px-4 md:px-6 text-base md:text-lg max-w-prose mx-auto leading-relaxed">
        I&apos;m a tech enthusiast currently diving into the world of web
        development. I&apos;m learning AI system development through IT trade
        school and self-studying web development, focusing on modern tools like
        React, Next.js, TypeScript, Node.js. While I&apos;m still early in my
        journey, I&apos;m excited about building useful applications and growing
        as a developer.
      </p>
      <p className="mb-3 px-4 md:px-6 text-base md:text-lg max-w-prose mx-auto leading-relaxed">
        Outside of coding, I love listening to music and watching movies.
        Radiohead is my favorite band and David Fincher is my favorite director.
        But my real passion is cooking, especially cooking for my wife. I find
        joy in creating something special in the kitchen for someone I care
        about. It&apos;s my way of showing care and creativity, just like I hope
        to do through programming.
      </p>
    </motion.section>
  );
}
