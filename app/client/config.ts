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
import clientOpen from "../assets/client/client_open.png"
import clientImport from "../assets/client/client_import.png"
import clientSettings from "../assets/client/client_settings.png"

const definition: ProductDefinition = {
	config: {
		name: "Pritunl Client",
		title: "Pritunl Client - Open Source OpenVPN and WireGuard Client",
		description: "Free and open source cross platform OpenVPN and WireGuard client.",
		codeBackground: true,
		googleTag: "G-MDB6RT6KPS",

		navigation: [
			{ name: "Install", href: "#install" },
			{ name: "Support", href: "#support" },
			{ name: "Documentation", href: "https://docs.pritunl.com/kb/zero", external: true },
			{ name: "Community Forums", href: "https://forum.pritunl.com", external: true },
		],

		badge: "Free and Open Source VPN Client",
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
				external: true,
			},
			{
				label: "Install Now",
				href: "#install",
				style: "primary",
			},
		],

		heroImages: [
			{
				image: heroWinImage,
				alt: "Pritunl Client Windows",
				rounded: "rounded-lg",
				quality: 100,
			},
			{
				image: heroAppleImage,
				alt: "Pritunl Client macOS",
				rounded: "rounded-2xl",
				quality: 100,
				unoptimized: true,
			},
			{
				image: heroLinuxImage,
				alt: "Pritunl Client Linux",
				rounded: "rounded-sm",
				quality: 100,
			},
		],

		featuresGrid: {
			title: "GUI and CLI OpenVPN and WireGuard client for macOS Linux and Windows",
			description: "Pritunl Client provides a simple GUI and CLI interface for managing OpenVPN and WireGuard connections on macOS, Linux and Windows. Import OpenVPN and WireGuard profiles directly from Pritunl servers or standard OpenVPN configuration files.",
			items: [
				{
					image: clientOpen,
					title: "Open Source",
					description: "All source code for Pritunl is publicly available on GitHub. To allow anyone to evaluate Pritunl to ensure that it is secure.",
				},
				{
					image: clientImport,
					title: "Viscosity Alternative",
					description: "Free and open source alternative to Viscosity. No registration or credit card necessary.",
				},
				{
					image: clientSettings,
					title: "Easy Configuration",
					description: "Easily add OpenVPN profiles by importing the configuration or by using the URI available with Pritunl servers.",
				},
			],
		},

		installers: {
			macos: {
				label: "macOS",
				version: "1.3.4559.86",
				url: "https://github.com/pritunl/pritunl-client-electron/releases/download/$version/Pritunl.pkg.zip",
				hashUrl: "https://raw.githubusercontent.com/pritunl/pritunl-client-electron/master/SHA256",
			},
			windows: {
				label: "Windows",
				version: "1.3.4559.86",
				url: "https://github.com/pritunl/pritunl-client-electron/releases/download/$version/Pritunl.exe",
				hashUrl: "https://raw.githubusercontent.com/pritunl/pritunl-client-electron/master/SHA256",
			},
		},

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
