import type { ProductDefinition } from "../types"
import {
	Mail,
} from "lucide-react"

import Discourse from "../icons/Discourse"
import GitBook from "../icons/GitBook"
import Substack from "../icons/Substack"
import Home from "../components/Home"
import Pritunl from "../logos/Pritunl"
import heroWinImage from "../assets/client/client_windows.png"
import heroAppleImage from "../assets/client/client_macos.png"
import heroLinuxImage from "../assets/client/client_linux.png"
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

		heroImages: [
			{
				image: heroWinImage,
				alt: "Pritunl Client Windows",
				quality: 100,
			},
			{
				image: heroAppleImage,
				alt: "Pritunl Client macOS",
				quality: 100,
				unoptimized: true,
			},
			{
				image: heroLinuxImage,
				alt: "Pritunl Client Linux",
				quality: 100,
			},
		],

		featuresGrid: {
			title: "Provide Easy and Secure Access to Web Applications and SSH",
			description: "Pritunl Client provides a simple GUI and CLI interface for managing OpenVPN and WireGuard connections across all major platforms. Import OpenVPN and WireGuard profiles directly from Pritunl servers or standard OpenVPN configuration files.",
			items: [
				{
					image: networkPolicy,
					title: "Open Source",
					description: "All source code for Pritunl is publicly available on GitHub. To allow anyone to evaluate Pritunl to ensure that it is secure.",
				},
				{
					image: twoFactor,
					title: "Viscosity Alternative",
					description: "Free and open source alternative to Viscosity. No registration or credit card necessary.",
				},
				{
					image: webauthnPolicy,
					title: "Easy Configuration",
					description: "Easily add OpenVPN profiles by importing the configuration or by using the URI available with Pritunl servers.",
				},
			],
		},

		support: {
			title: "Support",
			description: "Email and community forums available for support. Subscribe to the Substack for security and update announcements.",
			buttons: [
				{ label: "Email Support", link: "https://support.pritunl.com", icon: Mail },
				{ label: "Community Forum", link: "https://forum.pritunl.com", icon: Discourse },
				{ label: "Documentation", link: "https://docs.pritunl.com/kb/cloud", icon: GitBook },
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
