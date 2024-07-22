"use client";
import { cn } from "@/lib/utils";
import { CardStack } from "../../../components/ui/card-stack";
export function CardStackDemo() {
	return (
		<div className="h-[25rem] flex items-center justify-center w-full">
			<CardStack items={CARDS} />
		</div>
	);
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<span
			className={cn(
				"font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
				className,
			)}
		>
			{children}
		</span>
	);
};
const CARDS = [
	{
		id: 0,
		name: "devdeeepak",
		designation: "Linkedin",
		content: (
			<p>
				🇮🇳 Hey there, stranger! Ever met a
				<Highlight> code-slinging, server-whispering wizard </Highlight> from
				the land of spices?. <Highlight>Well, you`re in luck!</Highlight> 🧙‍♂️✨
			</p>
		),
	},
	{
		id: 1,
		name: "@theeeep",
		designation: "Github",
		content: (
			<p>
				I&apos;m that backend guru who turns caffeine into digital magic! ☕️💻{" "}
				<Highlight>My superpower?</Highlight> I make do the
				<Highlight>cha-cha while juggling terabytes of data! 💃🤹‍♂️</Highlight>
			</p>
		),
	},
	{
		id: 2,
		name: "@dev_deee",
		designation: "X",
		content: (
			<p>
				My passion<Highlight>?</Highlight> I&apos;m like a digital
				<Highlight>architect on steroids</Highlight>, designing the skyscrapers
				of <Highlight>tomorrow&apos;s web</Highlight>. Just call me the
				<Highlight>Bob the Builder</Highlight> of
				<Highlight>bytes!</Highlight> 👷‍♂️🏗️
			</p>
		),
	},
	{
		id: 3,
		name: "Deepak Behera",
		designation: "itz.deeepak@gmail.com",
		content: (
			<p>
				So, if you ever need someone to turn your
				<Highlight>digital dreams</Highlight> into
				<Highlight>reality</Highlight>(or just want to debate the best curry
				recipe), I&apos;m your<Highlight>go-to backend buddy</Highlight>🚀🌶️
			</p>
		),
	},
];
