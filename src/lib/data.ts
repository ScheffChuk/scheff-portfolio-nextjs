import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import pepperFlakesImg from "@/assets/pepperFlakesImg.png";
import scheffDevImgJa from "@/assets/ScheffDevImgJa.png";
import scheffDevImgEn from "@/assets/ScheffDevImgEn.png";

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

export const experiencesDataEng = [
  {
    title: "English Major & Family Business",
    location: "Guangzhou, China",
    description:
      "Helping with the family restaurant business while majoring in English at university. Develop English skills, gain an international perspective, and appreciate diverse values.",
    icon: React.createElement(LuGraduationCap),
    date: "2015 - 2019",
  },
  {
    title: "Marketing, Translator and English Teacher",
    location: "Guangzhou, China",
    description:
      "Primarily handled SNS marketing, including event planning and collaboration with designers, covering a wide range of responsibilities. Also worked as a freelance translator and English teacher.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2022",
  },
  {
    title: "Move to Japan, Language School, IT Trade School",
    location: "Tokyo, Japan",
    description:
      "Move to Japan and enrolled in language school. Passed JLPT N1 test after one year of study. Then enrolled in an IT trade school for systematic learning, while self-learning web development.",
    icon: React.createElement(FaReact),
    date: "2023 - Present",
  },
] as const;

export const experiencesDataJap = [
  {
    title: "家業の手伝い、英語専攻",
    location: "中国広州",
    description:
      "家族経営の飲食店を手伝いながら、大学で英語を専攻しておりました。この経験を通じて、英語力、国際的な視野や多様な価値観を身につけることができました。",
    icon: React.createElement(LuGraduationCap),
    date: "2015 - 2019",
  },
  {
    title: "マーケティング、通訳者、英語教師",
    location: "中国広州",
    description:
      "主にSNSのマーケティング業務を担当し、イベントの企画、デザイナーとの連携など幅広い業務を担当しました。フリーランスで翻訳と英語教師の仕事をしていました。",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2022",
  },
  {
    title: "日本への移住、日本語学校、IT専門学校",
    location: "東京都",
    description:
      "日本語学校に入学、日本で生活を体験しつつ、1年間学習でJLPT N1に合格しました。その後、IT専門学校に進学し、体系的に勉強しながら、独学でWeb開発のスキルを身につけています。",
    icon: React.createElement(FaReact),
    date: "2023 - 現在",
  },
] as const;

export const projectsData = [
  {
    title: "Pepper Flakes",
    description:
      "An expense tracker application for my own use, built with Next.js 15, featuring PostgreSQL database integration via Drizzle ORM, and secure authentication through Clerk.",
    tags: ["Next.js 15", "Hono.js", "NeonDB", "Drizzle", "Tanstack", "Zustand"],
    imageUrl: pepperFlakesImg,
    websiteUrl: "https://pepperflakes.vercel.app",
  },
  {
    title: "My site",
    description:
      "My portfolio website. It serves as a playground for me to try out various techs, including multilingual support, dark mode, animations, and an AI chatbot.",
    tags: ["Next.js 15", "Tailwind CSS", "TypeScript", "Motion", "Resend"],
    imageUrl: scheffDevImgEn,
    websiteUrl: "https://github.com/scheffchuk/scheff-portfolio-nextjs",
  },
] as const;

export const projectsDataJap = [
  {
    title: "Pepper Flakes",
    description:
      "Next.js 15で構築した、個人用の家計簿アプリです。Drizzle ORMを通じてPostgreSQLデータベース統合と、Clerkによる認証機能を用意しています。",
    tags: ["Next.js 15", "Hono.js", "NeonDB", "Drizzle", "Tanstack", "Zustand"],
    imageUrl: pepperFlakesImg,
    websiteUrl: "https://pepperflakes.vercel.app",
  },
  {
    title: "私のホームページ",
    description:
      "Next.js 15で構築した、私のポートフォリオサイトです。プレイグラウンドとして、多言語対応、ダークモード、アニメーション、AIチャットボットなど、色々技術を試しています。",
    tags: ["Next.js 15", "Tailwind CSS", "TypeScript", "Motion", "Resend"],
    imageUrl: scheffDevImgJa,
    websiteUrl: "https://github.com/scheffchuk/scheff-portfolio-nextjs",
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
  "Drizzle",
  "PostgreSQL",
  "Prisma",
  "Redux",
  "AWS",
  "Git",
  "LangChain",
] as const;
