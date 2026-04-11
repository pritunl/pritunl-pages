import type { ProductDefinition } from "../types"

import Home from "../components/Home"

const definition: ProductDefinition = {
	config: {
		name: "Pritunl",
		title: "Pritunl - Enterprise VPN Server",
		description: "Free and open source enterprise VPN server with distributed architecture and scalability.",

		navigation: [
			{ name: "Pricing", href: "#pricing" },
			{ name: "Support", href: "#support" },
			{ name: "Documentation", href: "https://docs.pritunl.com/kb/vpn", external: true },
			{ name: "Community Forums", href: "https://forum.pritunl.com", external: true },
		],

		badge: "Open Source Enterprise VPN Server",
		heading: [
			[
				{ text: "Enterprise", highlight: true },
				{ text: " Distributed OpenVPN, WireGuard and IPsec " },
				{ text: "Server", highlight: true },
			],
		],
		subheading: "Virtualize your private networks across datacenters and provide simple remote access in minutes.",

		buttons: [
			{
				label: "Live Demo",
				href: "https://demo.pritunl.com",
				style: "secondary",
				external: true,
			},
			{
				label: "Get Started",
				href: "https://docs.pritunl.com/kb/vpn/getting-started/installation",
				style: "primary",
				external: true,
			},
		],
	},

	pages: {
		home: Home,
	},
}

export default definition
