import type { ProductDefinition } from "../types"
import {
	ShieldCheck,
	KeyRound,
	Globe,
	Lock,
	Server,
	RefreshCcw,
	Activity,
	FileText,
	BarChart3,
} from "lucide-react"

import Home from "../components/Home"
import PritunlZero from "../logos/PritunlZero"

const definition: ProductDefinition = {
	config: {
		name: "Pritunl Zero",
		title: "Pritunl Zero - Enterprise Zero Trust",
		description: "Free and open source zero trust server providing BeyondCorp security for authenticated access to web applications and SSH",
		logo: PritunlZero,
		logoAlt: "Pritunl Zero",

		navigation: [
			{ name: "Pricing", href: "#pricing" },
			{ name: "Support", href: "#support" },
			{ name: "Documentation", href: "https://docs.pritunl.com/kb/zero", external: true },
			{ name: "Community Forums", href: "https://forum.pritunl.com", external: true },
		],

		badge: "Self Hosted Zero Trust",
		heading: [
			[
				{ text: "Pritunl " },
				{ text: "Zero", highlight: true },
			],
			[
				{ text: "Enterprise Zero Trust" },
			],
		],
		subheading: "Free and open source zero trust server providing BeyondCorp security for authenticated access to web applications and SSH",

		buttons: [
			{
				label: "Live Admin Demo",
				href: "https://admin-zero-demo.pritunl.com/",
				style: "secondary",
				external: true,
			},
			{
				label: "Get Started",
				href: "https://docs.pritunl.com/kb/zero/general/pritunl-zero-service",
				style: "primary",
				external: true,
			},
			{
				label: "Live Web Service Demo",
				href: "https://service-zero-demo.pritunl.com/",
				style: "secondary",
				external: true,
			},
		],

		heroImage: {
			image: "zero_services",
			alt: "Pritunl Zero Dashboard",
			ring: true,
		},

		featureBlocks: [
			{
				type: "grid",
				title: "Provide Easy and Secure Access to Web Applications and SSH",
				description: "Pritunl Zero creates an authentication layer in front of existing web applications. No modifications to the existing web application is required. For SSH servers Pritunl Zero will maintain a certificate authority and provide controlled SSH access with additional layers of authentication.",
				gridItems: [
					{
						image: "zero_network_policy",
						title: "Network Policy Control",
						description: "Control access based on permitted and blocked networks.",
					},
					{
						image: "zero_two_factor_policy",
						title: "Multi-Factor Authentication",
						description: "Require multi-factor authentication from providers with secondary authentication support including Duo, OneLogin Protect and Okta Verify.",
					},
					{
						image: "zero_webauthn_policy",
						title: "WebAuthn Device Authentication",
						description: "Authenticate users with hardware WebAuthn tokens including the YubiKey and Google Titan Security Key.",
					},
				],
			},
			{
				type: "left",
				title: "Simple Authentication",
				description: "When users access internal web applications they will be prompted to complete authentication and fulfill any configured policy requirements.",
				image: "zero_login_full",
				imageAlt: "Login Console",
				items: [
					{
						icon: ShieldCheck,
						title: "Single sign-on.",
						description: "Seamlessly authenticate with existing identity providers including Azure, Google, Authelia, Authentik and Okta.",
					},
					{
						icon: KeyRound,
						title: "Policy enforcement.",
						description: "Enforce authentication policies including multi-factor, WebAuthn and network restrictions before granting access.",
					},
					{
						icon: Globe,
						title: "Web application access.",
						description: "Provide authenticated access to internal web applications without modifying the application.",
					},
				],
			},
			{
				type: "right",
				title: "Automatic SSL Certificates",
				description: "Automatically create SSL certificates from Lets Encrypt with support for HTTP validation on port 80 or DNS CNAME validation using AWS, Cloudflare or Oracle Cloud support DNS APIs. Wildcard certificates are supported when using DNS CNAME validation. Certificates will automatically renew allowing effortless management of certificates for the internal web applications.",
				image: "zero_certificates",
				imageAlt: "Certificates Management",
				items: [
					{
						icon: Lock,
						title: "Lets Encrypt integration.",
						description: "Automatically create and renew SSL certificates with HTTP or DNS CNAME validation.",
					},
					{
						icon: Server,
						title: "Multi-provider DNS.",
						description: "DNS CNAME validation with AWS, Cloudflare, and Oracle Cloud DNS APIs. Wildcard certificates supported.",
					},
					{
						icon: RefreshCcw,
						title: "Automatic renewal.",
						description: "Certificates automatically renew allowing effortless management of certificates for internal web applications.",
					},
				],
			},
			{
				type: "left",
				title: "Endpoint Management",
				description: "Pritunl Endpoint provides monitoring of Linux endpoints with log storage. Detailed charting for system activity and usage allows for a quick overview of infrastructure health.",
				image: "zero_endpoint",
				imageAlt: "Endpoint Charts",
				items: [
					{
						icon: Activity,
						title: "System monitoring.",
						description: "Monitor Linux endpoints with detailed charting for system activity, CPU, memory and disk usage.",
					},
					{
						icon: FileText,
						title: "Log storage.",
						description: "Centralized log storage for endpoint activity providing visibility into infrastructure operations.",
					},
					{
						icon: BarChart3,
						title: "Health overview.",
						description: "Quick overview of infrastructure health with detailed metrics and usage statistics across all endpoints.",
					},
				],
			},
		],
	},

	pages: {
		home: Home,
	},
}

export default definition
