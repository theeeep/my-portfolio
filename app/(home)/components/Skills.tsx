"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import React from "react";
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
	SiNginx,
	SiNodedotjs,
	SiPostgresql,
	SiPrisma,
	SiRedis,
	SiSupabase,
	SiTailwindcss,
	SiTypescript,
} from "react-icons/si";
import Title from "./Title";

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
			text: "Prisma",
			Icon: SiPrisma,
		},
		{
			text: "Redis",
			Icon: SiRedis,
		},
		// {
		// 	text: "Graphql",
		// 	Icon: SiGraphql,
		// },
		{
			text: "Docker",
			Icon: SiDocker,
		},
		{
			text: "Nginx",
			Icon: SiNginx,
		},
		// {
		// 	text: "Kubernetes",
		// 	Icon: SiKubernetes,
		// },
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
				text="Skills ⚒️"
				className="flex flex-col items-center justify-center -rotate-6"
			/>
			<HoverEffect items={skills} />
		</div>
	);
}
