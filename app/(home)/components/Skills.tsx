"use client";

import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  SiCplusplus,
  SiDart,
  SiDocker,
  SiExpress,
  SiFlutter,
  SiGit,
  SiGraphql,
  SiJavascript,
  SiJest,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRedis,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      text: "Javascript",
      Icon: SiJavascript,
    },
    {
      text: "Typescript",
      Icon: SiTypescript,
    },

    {
      text: "NodeJs",
      Icon: SiNodedotjs,
    },
    {
      text: "Express",
      Icon: SiExpress,
    },
    {
      text: "Prisma",
      Icon: SiPrisma,
    },
    {
      text: "PostgreSql",
      Icon: SiPostgresql,
    },

    {
      text: "MySql",
      Icon: SiMysql,
    },
    {
      text: "MongoDB",
      Icon: SiMongodb,
    },
    {
      text: "Redis",
      Icon: SiRedis,
    },
    {
      text: "Graphql",
      Icon: SiGraphql,
    },
    {
      text: "Docker",
      Icon: SiDocker,
    },
    {
      text: "Kubernetes",
      Icon: SiKubernetes,
    },
    {
      text: "Git",
      Icon: SiGit,
    },
    {
      text: "Jest",
      Icon: SiJest,
    },
    {
      text: "NextJs",
      Icon: SiNextdotjs,
    },
    {
      text: "Tailwind",
      Icon: SiTailwindcss,
    },
    {
      text: "Dart",
      Icon: SiDart,
    },
    {
      text: "Flutter",
      Icon: SiFlutter,
    },
    {
      text: "Supabase",
      Icon: SiSupabase,
    },
    {
      text: "C++",
      Icon: SiCplusplus,
    },
  ];
  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title
        text="Skills 🔪"
        className="flex flex-col items-center justify-center -rotate-6"
      />
      <HoverEffect items={skills} />
    </div>
  );
}
