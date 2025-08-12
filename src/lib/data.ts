import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import scheffDevImgJa from "@/assets/ScheffDevImgJa.png";
import scheffDevImgEn from "@/assets/ScheffDevImgEn.png";
import japanDemographicChartImg from "@/assets/Japan-demographic-app.png";
import amnesiacNoteImg from "@/assets/amesiac-note.png";
import HeadSalonImg from "@/assets/headsalon.png";

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
    title: "My site",
    description:
      "My portfolio website. It serves as a playground for me to try out various techs, including multilingual support, dark mode, animations, and an AI chatbot.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Motion", "Resend"],
    imageUrl: scheffDevImgEn,
    websiteUrl: "https://github.com/scheffchuk/scheff-portfolio-nextjs",
  },
  {
    title: "Japan Demographic Chart App",
    description:
      "This app was developed as a coding test submission, and regardless of the interview outcome, I learned a great deal and received valuable feedback.",
    tags: ["Next", "React", "Tailwind CSS", "Tanstack Query", "Zustand"],
    imageUrl: japanDemographicChartImg,
    websiteUrl: "https://population-trends-japan-nextjs.vercel.app",
  },
  {
    title: "HeadSalon",
    description:
      "I built a blog web app for my favorite writer, WhigZhou, with a focus on a clean, beautiful design, exceptional speed, and a smooth user experience. It also includes a variety of  “nice-to-have” features.",
    tags: ["Next 15", "React 19", "Tailwind CSS", "Convex"],
    imageUrl: HeadSalonImg,
    websiteUrl: "https://headsalon.vercel.app/",
  },
  {
    title: "Amnesiac",
    description:
      "An AI-powered note-taking app using Next.js, Convex, and Vercel AI SDK.",
    tags: ["Next", "React", "Tailwind CSS", "Convex", "AI SDK"],
    imageUrl: amnesiacNoteImg,
    websiteUrl: "https://ainote-next-convex.vercel.app/",
  },
] as const;

export const projectsDataJap = [
  {
    title: "私のホームページ",
    description:
      "私のポートフォリオサイトです。プレイグラウンドとして、多言語対応、ダークモード、アニメーション、AIチャットボットなど、色々技術を試しています。",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Motion", "Resend"],
    imageUrl: scheffDevImgJa,
    websiteUrl: "https://github.com/scheffchuk/scheff-portfolio-nextjs",
  },
  {
    title: "日本人口推移チャートアプリ",
    description:
      "このアプリはコーディングテストの提出物として開発しましたが、面接の結果にかかわらず、多くのことを学び、貴重なフィードバックをいただきました。",
    tags: ["Next", "React", "Tailwind CSS", "Tanstack Query", "Zustand"],
    imageUrl: japanDemographicChartImg,
    websiteUrl: "https://population-trends-japan-nextjs.vercel.app",
  },
  {
    title: "HeadSalon",
    description:
      "私のお気に入りの作家、WhigZhouのために制作したブログWebアプリです。クリーンで美しいデザイン、優れた高速性、そして滑らかな操作感にこだわっています。さまざまな便利で嬉しい機能も盛り込みました。",
    tags: ["Next", "React", "Tailwind CSS", "Convex"],
    imageUrl: HeadSalonImg,
    websiteUrl: "https://headsalon.vercel.app/",
  },
  {
    title: "Amnesiac",
    description:
      "Next.js、Convex、Vercel AI SDKを使用したAI駆動のノート作成アプリです。",
    tags: ["Next", "React", "Tailwind CSS", "Convex", "AI SDK"],
    imageUrl: amnesiacNoteImg,
    websiteUrl: "https://ainote-next-convex.vercel.app/",
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
