import type { ProductDefinition } from "../types"
import {
	Mail,
} from "lucide-react"

import Discourse from "../icons/Discourse"
import GitBook from "../icons/GitBook"
import Substack from "../icons/Substack"
import Home from "../components/Home"
import Pritunl from "../logos/Pritunl"
import heroImage from "../assets/client/client_hero.png"
import networkPolicy from "../assets/zero/zero_network_policy.png"
import twoFactor from "../assets/zero/zero_two_factor_policy.png"
import webauthnPolicy from "../assets/zero/zero_webauthn_policy.png"

const definition: ProductDefinition = {
	config: {
		name: "Pritunl Client",
		title: "Pritunl Client - Open Source OpenVPN and WireGuard Client",
		description: "Free and open source cross platform OpenVPN and WireGuard client.",

		navigation: [
			{ name: "Install", href: "#install" },
			{ name: "Documentation", href: "https://docs.pritunl.com/kb/zero", external: true },
			{ name: "Community Forums", href: "https://forum.pritunl.com", external: true },
		],

		badge: "Enterprise VPN Client",
		heading: [
			[
				{ text: "Pritunl " },
				{ text: "Client", highlight: true },
			],
			[
				{ text: "Open Source OpenVPN and WireGuard Client" },
				// { text: "Open Source " },
				// { text: "OpenVPN ", highlight: true },
				// { text: "and " },
				// { text: "WireGuard ", highlight: true },
				// { text: "Client" },
			],
		],
		subheading: "Free and open source cross platform OpenVPN and WireGuard client",

		buttons: [
			{
				label: "GitHub Repo",
				href: "https://github.com/pritunl/pritunl-client",
				style: "secondary",
			},
			{
				label: "Install",
				href: "https://docs.pritunl.com/kb/zero/general/pritunl-zero-service",
				style: "primary",
			},
		],

		heroImage: heroImage,
		heroImageAlt: "Pritunl Client Interface",
	},

	pages: {
		home: Home,
	},
}

export default definition
