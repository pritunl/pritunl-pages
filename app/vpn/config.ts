import type { ProductDefinition } from "../types"
import {
	Mail,
} from "lucide-react"

import Discourse from "../icons/Discourse"
import GitBook from "../icons/GitBook"
import Substack from "../icons/Substack"
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


		featureBlocks: [
			{
				type: "center_open",
				title: "Simple Virtual Private Networks",
				description: "Create a cloud vpn with complex site-to-site links, gateway links and provide local network access to remote users. Protect your network traffic and remote users connecting over public connections with secure encryption. All from a simple web interface.",
				image: "vpn_datacenter",
				imageAlt: "Protected Datacenter",
			},
		],

		repositories: [
			{ distribution: "arch", version: "", package: "pritunl-client-electron" },
			{ distribution: "alma", version: "10", package: "pritunl-client-electron" },
			{ distribution: "oracle", version: "10", package: "pritunl-client-electron" },
			{ distribution: "debian", version: "13", package: "pritunl-client-electron" },
			{ distribution: "fedora", version: "42", package: "pritunl-client-electron" },
			{ distribution: "fedora", version: "43", package: "pritunl-client-electron" },
			{ distribution: "ubuntu", version: "24.04", package: "pritunl-client-electron" },
			{ distribution: "ubuntu", version: "25.10", package: "pritunl-client-electron" },
		],

		support: {
			title: "Support",
			description: "Email and community forums available for support. Subscribe to the Substack for security and update announcements.",
			buttons: [
				{ label: "Email Support", link: "https://support.pritunl.com", icon: Mail },
				{ label: "Community Forum", link: "https://forum.pritunl.com", icon: Discourse },
				{ label: "Documentation", link: "https://docs.pritunl.com/kb/vpn", icon: GitBook },
				{ label: "Substack Newsletter", link: "https://pritunl.substack.com/subscribe", icon: Substack },
			],
		},

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
