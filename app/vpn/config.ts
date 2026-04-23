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
				description: "Create multi-cloud WireGuard or IPsec site-to-site links with Pritunl Link. Available for AWS, Google Cloud, Azure, Oracle Cloud, Pritunl Cloud and Hetzner.",
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
				type: "two_columns",
				title: "The Most Secure VPN Server",
				description: "Pritunl provides innovative security features not available from any other provider. Including TPM and Apple Secure Enclave device authentication, a dynamic firewall, SELinux policies, dual web server design and self shutdown notification system.",
				link: "https://docs.pritunl.com/kb/vpn/security/features",
				linkLabel: "Explore Security Features",
				linkIcon: Cpu,
				cardItems: [
					{
						icon: Cpu,
						title: "Platform and Device Support",
						description: "Pritunl supports all OpenVPN clients. Use the Pritunl Client on macOS, Windows and Linux for full functionality with support for both OpenVPN and WireGuard. Support for Chrome OS OpenVPN profiles also available.",
						link: "https://client.pritunl.com",
						linkLabel: "Pritunl Client Overview",
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
						icon: CircuitBoard,
						title: "Plugin System",
						description: "Highly customizable Python plugin system to allow expanding and modifying Pritunl. Plugins can be created to support custom authentication systems and custom access control systems.",
						link: "https://docs.pritunl.com/kb/vpn/system/plugins",
						linkLabel: "Learn More About Plugins",
						external: true,
					},
				],
			},
			{
				type: "left",
				title: "Distributed and Scalable",
				image: "vpn_servers",
				imageAlt: "Pritunl Distributed Cluster",
				imageNoRing: true,
				items: [
					{
						icon: TrendingUp,
						title: "Scale Easily",
						description: "Pritunl servers can be easily distributed across multiple servers and different datacenters for improved performance, high availability and automatic failover when an instance fails.",
					},
					{
						icon: DatabaseZap,
						title: "Simple Distribution",
						description: "All server communication and interconnecting is done with MongoDB allowing servers to be quickly connected without having to modify firewalls for inter-server communication.",
					},
					{
						icon: HeartPlus,
						title: "High Availability",
						description: "All Pritunl servers are equal in the cluster and can run independently in the event of other instances failing.",
					},
				],
			},
			{
				type: "grid",
				title: "Self Hosted and Reliable",
				description: "A self hosted VPN platform with over 10 years of proven reliability and security, trusted by thousands of organizations worldwide.",
				gridItems: [
					{
						title: "Open Source",
						description: "All source code for Pritunl is publicly available on GitHub, allowing for complete transparency, community contributions and full customization to fit your environment.",
						icon: GitFork,
					},
					{
						title: "Free to Use",
						description: "Free and open source alternative to commercial VPN products such as Aviatrix, Pulse Secure and AnyConnect. Get started immediately with no registration or credit card required.",
						icon: CircleDollarSign,
					},
					{
						title: "Easy Configuration",
						description: "Manage users, servers and organizations from an intuitive web interface. Quickly handle complex multi-server configurations and large deployments without touching config files.",
						icon: Settings,
					},
					{
						title: "Security",
						description: "All traffic between clients and servers is encrypted. Support for two-step authentication with TOTP, push notifications and device authentication using TPM and Secure Enclave.",
						icon: BrickWallShield,
					},
					{
						title: "Multiple Protocols",
						description: "Support for both OpenVPN and WireGuard client connections. WireGuard and IPsec are used for high performance site-to-site links and VPC peering between datacenters.",
						icon: Shuffle,
					},
					{
						title: "REST API",
						description: "Fully integrate Pritunl into your existing infrastructure and CI/CD pipelines using the REST API. Automate user provisioning, server management and configuration changes.",
						icon: SquareTerminal,
					},
				],
			},
			{
				type: "right",
				title: "Connect Infrastructure",
				description: "Provide secure remote access to your corporate infrastructure for users across your organization and interconnect sites.",
				image: "vpn_infrastructure",
				imageAlt: "High Availability Infrastructure",
				imageNoRing: true,
				items: [
					{
						icon: Network,
						title: "WireGuard and IPsec Links",
						description: "Create high performance site-to-site links between datacenters and on-premise networks using WireGuard and IPsec with support for both hub-and-spoke and mesh topologies.",
					},
					{
						icon: RefreshCw,
						title: "Replication and Automated Failover",
						description: "All servers in the cluster operate as equal peers with no single point of failure. When an instance fails, connected clients are automatically routed to a healthy node with no manual intervention.",
					},
					{
						icon: ScrollText,
						title: "Advanced Auditing",
						description: "Capture detailed audit events in structured JSON format for integration with SIEM systems. Track user connections, authentication events and configuration changes across the entire cluster.",
					},
				],
			},
			{
				type: "logos",
				title: "Single Sign-On",
				description: "Securely deploy remote access to thousands of users using their existing company account with support for several single sign-on providers and protocols.",
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
