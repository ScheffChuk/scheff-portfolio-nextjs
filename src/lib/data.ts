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
      "I'm currently attending IT trade school while pursuing self-directed learning. I'm focusing on a modern web development stack including React, TypeScript, Next.js, Tailwind CSS, and Node.js.",
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
    websiteUrl: "https://shceff-mern-food-ordering-app-frontend.onrender.com",
  },
  {
    title: "Retro Live House",
    description:
      "A small application I built for a school assignment allows users to join music listening parties where they can vote to skip songs.",
    tags: ["React", "Python", "Django", "Tailwind", "Django REST Framework"],
    imageUrl: retroLiveHouseImg,
    websiteUrl: "https://scheff-retro-live-house-app.onrender.com",
  },
  {
    title: "Pepper Flakes",
    description:
      "An expense tracker application for my own use, built with Next.js 15, featuring PostgreSQL database integration via Drizzle ORM, and secure authentication through Clerk.",
    tags: ["Next.js 15", "Hono.js", "NeonDB", "Drizzle", "Tanstack", "Zustand"],
    imageUrl: pepperFlakesImg,
    websiteUrl: "https://pepperflakes.vercel.app",
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Motion",
  "Node.js",
  "Express",
  "Tanstack",
  "Zustand",
  "Prisma",
  "Redux",
  "NeonDB",
  "MongoDB",
  "AWS",
  "Git",
  "Python",
  "Django",
  "LangChain",
] as const;
