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

/*
    Sure! I can help you make that description more humorous and conversational, as if someone is introducing themselves to a stranger in a lighthearted way. Here's a funnier version:

🇮🇳 "Hey there, stranger! Ever met a code-slinging, server-whispering wizard from the land of spices? Well, you're in luck! 🧙‍♂️✨

I'm that backend guru who turns caffeine into digital magic! ☕️💻 My superpower? I make computers do the cha-cha while juggling terabytes of data! 💃🤹‍♂️

When I'm not sweet-talking servers into peak performance, I'm building the secret underground tunnels of the internet. You know, the ones that make your cat videos load at the speed of light! 🐱⚡️

My passion? I'm like a digital architect on steroids, designing the skyscrapers of tomorrow's web. Just call me the Bob the Builder of bytes! 👷‍♂️🏗️

So, if you ever need someone to turn your digital dreams into reality (or just want to debate the best curry recipe), I'm your go-to backend buddy from Bangalore! 🚀🌶️"

This version maintains the core information about being an experienced backend developer from India who specializes in robust and scalable infrastructure, while adding humor and a conversational tone as if speaking to an unknown person.  add to paragrapgh in html
*/

const CARDS = [
	{
		id: 0,
		name: "devdeee",
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
				I'm that backend guru who turns caffeine into digital magic! ☕️💻{" "}
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
				My passion<Highlight>?</Highlight> I'm like a digital
				<Highlight>architect on steroids</Highlight>, designing the skyscrapers
				of <Highlight>tomorrow's web</Highlight>. Just call me the
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
				recipe), I'm your<Highlight>go-to backend buddy</Highlight> from
				<Highlight>Hyderabad!</Highlight>🚀🌶️
			</p>
		),
	},
];
