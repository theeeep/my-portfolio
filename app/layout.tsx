import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const space_Grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://next-supabase-vote.vercel.app/"),

	title: "Deepak",
	authors: {
		name: "Deepak",
	},

	description:
		"Cast your vote now and see live updates on the poll results, powered by the real-time capabilities of Supabase database integration in our web app",
	openGraph: {
		title: "Deepak",
		description:
			"Cast your vote now and see live updates on the poll results, powered by the real-time capabilities of Supabase database integration in our web app.",
		url: "https://next-supabase-vote.vercel.app/",
		siteName: "Deepak",
		images: "/og.png",
		type: "website",
	},
	keywords: ["daily web coding", "chensokheng", "dailywebcoding"],
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
