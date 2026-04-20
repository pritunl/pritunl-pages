import type { ProductDefinition } from "../types"
import {
	Cpu,
	Mail,
	IdCard,
} from "lucide-react"

import Discourse from "../icons/Discourse"
import GitBook from "../icons/GitBook"
import Substack from "../icons/Substack"
import GitHubOutline from "../icons/GitHubOutline"
import Aws from "../icons/Aws"
import Auth0 from "../logos/Auth0"
import Duo from "../logos/Duo"
import GoogleWorkspace from "../logos/GoogleWorkspace"
import JumpCloud from "../logos/JumpCloud"
import MicrosoftEntra from "../logos/MicrosoftEntra"
import Okta from "../logos/Okta"
import OneLogin from "../logos/OneLogin"
import Yubico from "../logos/Yubico"
import Home from "../components/Home"
import Pritunl from "../logos/Pritunl"
import PritunlCloud from "../logos/PritunlCloud"
import AmazonAws from "../logos/AmazonAws"
import GoogleCloud from "../logos/GoogleCloud"
import MicrosoftAzure from "../logos/MicrosoftAzure"
import Hetzner from "../logos/Hetzner"
import Oracle from "../logos/Oracle"

const definition: ProductDefinition = {
	config: {
		name: "Pritunl",
		title: "Pritunl - Enterprise VPN Server",
		description: "Free and open source enterprise VPN server with distributed architecture and scalability.",
		logo: Pritunl,
		logoAlt: "Pritunl",

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
			{
				type: "logos",
				title: "Multi-Cloud VPC Peering",
				description: "Create multi-cloud site-to-site links with VPC peering. VPC peering available for AWS, Google Cloud, Azure, Oracle Cloud, Pritunl Cloud and Hetzner.",
				logoItems: [
					{
						image: AmazonAws,
						imageAlt: "Amazon AWS",
						imageColor: "text-white",
						link: "https://docs.pritunl.com/kb/vpn/link/aws",
						external: true,
					},
					{
						image: GoogleCloud,
						imageAlt: "Google Cloud",
						imageColor: "text-white",
						link: "https://docs.pritunl.com/kb/vpn/link/google-cloud",
						external: true,
					},
					{
						image: MicrosoftAzure,
						imageAlt: "Microsoft Azure",
						link: "https://docs.pritunl.com/kb/vpn/link/azure-link",
						external: true,
					},
					{
						image: Oracle,
						imageAlt: "Oracle Cloud",
						imageColor: "text-[#f80102]",
						link: "https://docs.pritunl.com/kb/vpn/link/oracle-cloud",
						external: true,
					},
					{
						image: PritunlCloud,
						imageAlt: "Pritunl Cloud",
						imageColor: "text-white",
						link: "https://cloud.pritunl.com",
						external: true,
					},
					{
						image: Hetzner,
						imageAlt: "Hetzner",
						imageColor: "text-[#d50c2d]",
						link: "https://www.hetzner.com",
						external: true,
					},
				],
			},
			{
				type: "logos",
				title: "Single Sign-On Providers",
				description: "Supported single sign-on and secondary authentication providers.",
				logoItems: [
					{
						image: GoogleWorkspace,
						imageAlt: "Google Workspace",
						imageColor: "text-white",
						link: "https://workspace.google.com",
						external: true,
					},
					{
						image: Okta,
						imageAlt: "Okta",
						imageColor: "text-white",
						link: "https://okta.com",
						external: true,
					},
					{
						image: OneLogin,
						imageAlt: "OneLogin",
						imageColor: "text-white",
						link: "https://onelogin.com",
						external: true,
					},
					{
						image: MicrosoftEntra,
						imageAlt: "Microsoft Entra",
						imageColor: "text-white",
						link: "https://www.microsoft.com/en-us/security/business/microsoft-entra",
						external: true,
					},
					{
						image: Auth0,
						imageAlt: "Auth0",
						imageColor: "text-white",
						link: "https://auth0.com",
						external: true,
					},
					{
						image: JumpCloud,
						imageAlt: "JumpCloud",
						imageColor: "text-white",
						link: "https://jumpcloud.com",
						external: true,
					},
					{
						image: Duo,
						imageAlt: "Duo",
						imageColor: "text-white",
						link: "https://duo.com",
						external: true,
					},
					{
						image: Yubico,
						imageAlt: "Yubico",
						imageColor: "text-white",
						link: "https://yubico.com",
						external: true,
					},
				],
			},
			{
				type: "two_columns",
				title: "Simple Virtual Private Networks",
				description: "Create a cloud vpn with complex site-to-site links, gateway links and provide local network access to remote users. Protect your network traffic and remote users connecting over public connections with secure encryption. All from a simple web interface.",
				cardItems: [
					{
						icon: Cpu,
						title: "The Most Secure VPN Server",
						description: "Pritunl provides innovative security features not available from any other provider. Including TPM and Apple Secure Enclave device authentication, a dynamic firewall, SELinux policies, dual web server design and self shutdown notification system.",
						link: "https://docs.pritunl.com/kb/vpn/security/features",
						linkLabel: "Explore Security Features",
						external: true,
					},
					{
						icon: Aws,
						title: "AWS VPN Server",
						description: "Interconnect AWS VPC networks across AWS regions and provide reliable remote access with automatic failover that can scale horizontally.",
						link: "/vpc",
						linkLabel: "Explore AWS Integration",
					},
					{
						icon: IdCard,
						title: "Single Sign-On",
						description: "Securely deploy remote access to thousands of users using their existing company account with support for several single sign-on providers and protocols.",
						link: "/sso",
						linkLabel: "See All Supported Providers",
					},
					{
						icon: GitHubOutline,
						title: "Open Source Alternative",
						description: "Pritunl is the best open source alternative to proprietary commercial vpn products such as Aviatrix,  Ivanti Secure Accese, Pulse Secure and AnyConnect. Create larger cloud vpn networks supporting thousands of concurrent users and get more control over your vpn server without any per-user pricing.",
						link: "https://docs.pritunl.com/kb/vpn/security/features",
						linkLabel: "Browse Source Code",
						external: true,
					},
				]
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
