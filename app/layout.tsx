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
				{config.googleTag && (
					<>
						<Script
							src={`https://www.googletagmanager.com/gtag/js?id=${config.googleTag}`}
							strategy="afterInteractive"
						/>
						<Script
							id="gtag-init"
							strategy="afterInteractive"
							dangerouslySetInnerHTML={{
								__html: `
									window.dataLayer = window.dataLayer || [];
									function gtag(){dataLayer.push(arguments);}
									gtag('js', new Date());
									gtag('config', '${config.googleTag}');
								`,
							}}
						/>
					</>
				)}
				{config.cloudflareTag && (
					<Script
						src="https://static.cloudflareinsights.com/beacon.min.js"
						strategy="afterInteractive"
						defer
						data-cf-beacon={`{"token": "${config.cloudflareTag}"}`}
					/>
				)}
			</body>
		</html>
	)
}
