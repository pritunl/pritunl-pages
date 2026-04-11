import type { ProductDefinition } from "../types"

import Home from "../components/Home"
import Pritunl from "../logos/Pritunl"

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

		footer: {
			icon: Pritunl,
			address1: "1700 7th Ave Ste 116-211",
			address2: "Seattle, WA 98101",
			phone: "(206) 202-2276",
			copyright: `Pritunl, Inc © ${new Date().getFullYear()}`,
			privacy: "https://pritunl.com/privacy",
			terms: "https://pritunl.com/terms",
			twitter: "https://x.com/pritunl",
			bluesky: "https://bsky.app/profile/pritunl.bsky.social",
			github: "https://github.com/pritunl/pritunl-client",
			linkedin: "https://linkedin.com/company/pritunl",
			substack: "https://pritunl.substack.com",
		},
	},

	pages: {
		home: Home,
	},
}

export default definition
