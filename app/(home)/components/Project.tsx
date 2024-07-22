import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import {
	SiExpress,
	SiJsonwebtokens,
	SiPostgresql,
	SiPrisma,
	SiTypescript,
	SiZod,
} from "react-icons/si";
import Title from "./Title";

export default function Project() {
	const projects = [
		{
			title: "Ecommerce Backend REST API",
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
			background: "bg-rose-500",
		},
		{
			title: "Thread Clone",
			tech: [
				SiTypescript,
				SiExpress,
				SiPostgresql,
				SiPrisma,
				SiJsonwebtokens,
				SiZod,
			],
			link: "https://github.com/theeeep/E-Commerce-App-Backend",
			cover: "/thread_3.png",
			background: "bg-green-500",
		},
		{
			title: "Echo GPT",
			tech: [
				SiTypescript,
				SiExpress,
				SiPostgresql,
				SiPrisma,
				SiJsonwebtokens,
				SiZod,
			],
			link: "https://github.com/theeeep/E-Commerce-App-Backend",
			cover: "/e_lib_1.png",
			background: "bg-green-500",
		},
		{
			title: "Echo GPT",
			tech: [
				SiTypescript,
				SiExpress,
				SiPostgresql,
				SiPrisma,
				SiJsonwebtokens,
				SiZod,
			],
			link: "https://github.com/theeeep/E-Commerce-App-Backend",
			cover: "/echo_2.png",
			background: "bg-green-500",
		},
		{
			title: "Echo GPT",
			tech: [
				SiTypescript,
				SiExpress,
				SiPostgresql,
				SiPrisma,
				SiJsonwebtokens,
				SiZod,
			],
			link: "https://github.com/theeeep/E-Commerce-App-Backend",
			cover: "/red_lim_1.png",
			background: "bg-green-500",
		},
	];
	return (
		<div className="py-10 p-5 sm:p-0">
			<Title
				text="Projects 🔪"
				className="flex flex-col items-center justify-center rotate-6"
			/>
			<div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
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
