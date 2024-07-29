import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import {
	SiClerk,
	SiCloudflare,
	SiCloudinary,
	SiExpress,
	SiFlutter,
	SiGooglegemini,
	SiJsonwebtokens,
	SiMongodb,
	SiNextdotjs,
	SiPostgresql,
	SiPrisma,
	SiRedis,
	SiShadcnui,
	SiSupabase,
	SiTailwindcss,
	SiTypescript,
	SiUpstash,
	SiZod,
} from "react-icons/si";
import Title from "./Title";

export default function Project() {
	const projects = [
		{
			title: "Social Scribe",
			tech: [
				SiNextdotjs,
				SiTailwindcss,
				SiShadcnui,
				SiTypescript,
				SiClerk,
				SiGooglegemini,
			],
			link: "https://socialsscribe.vercel.app",
			cover: "/social.png",
			background: "bg-black",
		},
		{
			title: "Ecommerce - Backend",
			tech: [
				SiTypescript,
				SiExpress,
				SiPostgresql,
				SiPrisma,
				SiJsonwebtokens,
				SiZod,
			],
			link: "https://github.com/theeeep/E-Commerce-App-Backend",
			cover: "/e_com_1.png",
			background: "bg-black",
		},
		{
			title: "Thread Clone",
			tech: [SiFlutter, SiSupabase, SiPostgresql],
			link: "https://github.com/theeeep/thread_clone",
			cover: "/thread_3.png",
			background: "bg-green-500",
		},
		{
			title: "E-Library Management (Backend)",
			tech: [SiTypescript, SiJsonwebtokens, SiExpress, SiMongodb, SiCloudinary],
			link: "https://github.com/theeeep/E-Library-REST-API-Typescript",
			cover: "/e_lib_1.png",
			background: "bg-green-500",
		},
		{
			title: "Echo GPT",
			tech: [SiFlutter, SiGooglegemini],
			link: "https://github.com/theeeep/echo-gpt",
			cover: "/echo_2.png",
			background: "bg-green-500",
		},
		{
			title: "Redis Limit Api (Minor Project)",
			tech: [SiRedis, SiCloudflare, SiUpstash],
			link: "https://github.com/theeeep/redis_rate_limit",
			cover: "/red_lim_1.png",
			background: "bg-green-500",
		},
	];
	return (
		<div className="py-10 p-5 sm:p-0">
			<Title
				text="Projects 🚀"
				className="flex flex-col items-center justify-center rotate-6"
			/>
			<div className="grid grid-cols-1 sm:grid-cols-3 pt-20 gap-5">
				{projects.map((project, index) => {
					return (
						<Link href={project.link} key={index}>
							<div className={cn("mr-auto rounded-xl", project.background)}>
								<DirectionAwareHover
									imageUrl={project.cover}
									className="w-full space-y-5 cursor-pointer"
								>
									<div className="space-y-5">
										<h1 className="text-2xl  ">{project.title}</h1>
										<div className="flex items-center gap-5">
											{project.tech.map((Icon, index) => {
												return (
													<Icon className="size-8 text-green-400" key={index} />
												);
											})}
										</div>
									</div>
								</DirectionAwareHover>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
}
