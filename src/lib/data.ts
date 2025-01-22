import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import retroLiveHouseImg from "@/assets/retroLiveHouseImg.png";
import sheffEatsImg from "@/assets/ScheffEats.png";
import pepperFlakesImg from "@/assets/pepperFlakesImg.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "English Studies",
    location: "Guangzhou, China",
    description:
      "Studied English at Guangdong University of Foreign Studies for 4 years, focusing on language and communication skills.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Marketing Planner",
    location: "Guangzhou, China",
    description:
      "Gained hands-on experience in marketing planning and team collaboration over 2 years, learning valuable communication and project skills.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2022",
  },
  {
    title: "Learning Full-Stack Development",
    location: "Tokyo, Japan",
    description:
      "I'm currently attending IT trade school while pursuing self-directed learning. I'm focusing on a modern web development stack including React, TypeScript, Next.js, Tailwind CSS, Express, and Node.js.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Scheff Eats",
    description:
      "My first React.js project. It is an UberEats clone project built with MERN stack, integrating Stripe payments and JWT authentication.",
    tags: ["React", "TypeScript", "Express", "MongoDB", "Node.js"],
    imageUrl: sheffEatsImg,
  },
  {
    title: "Retro Live House",
    description:
      "A small application I built for a school assignment allows users to join music listening parties where they can vote to skip songs.",
    tags: ["React", "Python", "Django", "Tailwind", "Django REST Framework"],
    imageUrl: retroLiveHouseImg,
  },
  {
    title: "Pepper Flakes",
    description:
      "An expense trakcer application for my own use built with Next.js 15, featuring PostgreSQL database integration via Drizzle ORM, and secure authentication through Clerk.",
    tags: ["Next.js 15", "SQL", "NeonDB", "Drizzle", "Tanstack", "Zustand"],
    imageUrl: pepperFlakesImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Motion",
  "LangChain",
] as const;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const gitHubLink = "https://github.com/Scheffdarthusian";
