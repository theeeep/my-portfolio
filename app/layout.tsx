import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const space_Grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://devdee.vercel.app/"),

	title: "Deepak Portfolio",
	authors: {
		name: "Deepak",
	},

	description:
		"I'm that backend guru who turns caffeine into digital magic! ☕️💻 My superpower? I make computers do the cha-cha while juggling terabytes of data! 💃🤹‍♂️",
	openGraph: {
		title: "Deepak",
		description:
			"My passion? I'm like a digital architect on steroids, designing the skyscrapers of tomorrow's web. Just call me the Bob the Builder of bytes! 👷‍♂️🏗️",
		url: "https://devdee.vercel.app/",
		siteName: "Deepak",
		images: "/og.png",
		type: "website",
	},
	keywords: ["deepak", "portfolio", "devdee", "backenddeveloper"],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressContentEditableWarning>
			<body className={space_Grotesk.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
