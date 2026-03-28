import type { Metadata, Viewport } from "next"
import Script from "next/script"

import product from "./config"

import "./globals.css"

const { config } = product

export const metadata: Metadata = {
	title: config.title,
	description: config.description,
	openGraph: {
		title: config.title,
		description: config.description,
		type: "website",
	},
	twitter: {
		title: config.title,
		description: config.description,
		card: "summary_large_image",
	},
	icons: {
		apple: "/webclip.png",
	},
	other: {
		"theme-color": "#111827",
	},
}

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	viewportFit: "cover",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className="bg-gray-950 antialiased">
				{children}
				{config.scripts?.map((script, i) => {
					const dataProps: Record<string, string> = {}
					if (script.dataAttributes) {
						for (const [key, value] of Object.entries(script.dataAttributes)) {
							dataProps[`data-${key}`] = value
						}
					}
					return (
						<Script
							key={i}
							src={script.src}
							strategy={script.defer ? "afterInteractive" : "beforeInteractive"}
							{...dataProps}
						/>
					)
				})}
			</body>
		</html>
	)
}
