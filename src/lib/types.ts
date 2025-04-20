import { StaticImageData } from "next/image";
import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type Project = {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl: StaticImageData;
  websiteUrl: string;
};

export type ExperienceItem = {
  title: string;
  location: string;
  description: string;
  icon: React.ReactElement;
  date: string;
};
