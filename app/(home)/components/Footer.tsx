import { MovingBorderBtn } from "@/components/ui/moving-border";
import Link from "next/link";
import React from "react";
import { SiGmail } from "react-icons/si";
import { AnimatedModalDemo } from "./AnimatedModelBtn";
import Navbar from "./Navbar";

export default function Footer() {
	return (
		<div className="border-t mt-10">
			<nav className="py-10 flex justify-between items-center lg:gap-0 lg:flex-row">
				<h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-3">
					{"< Deepak />"} 👨🏼‍💻
				</h1>

				<MovingBorderBtn
					borderRadius="0.6rem"
					className="p-3 font-semibold text-md  hover:text-slate-400"
				>
					<Link
						href={
							"https://drive.google.com/file/d/1P6obIyNCfzAXtkjemxvmwI-GoyjmGpKL/view?usp=drive_link"
						}
					>
						<p>
							<span className="underline underline-offset-8 decoration-green-500">
								Resume 📬
							</span>
						</p>
					</Link>
				</MovingBorderBtn>
			</nav>
		</div>
	);
}
