import type { ProductDefinition } from "../types"

import Home from "../components/Home"
import heroImage from "../assets/zero/zero_services.png"
import networkPolicy from "../assets/zero/zero_network_policy.png"
import twoFactor from "../assets/zero/zero_two_factor_policy.png"
import webauthnPolicy from "../assets/zero/zero_webauthn_policy.png"

const definition: ProductDefinition = {
	config: {
		name: "Pritunl Zero",
		title: "Pritunl Zero - Enterprise Zero Trust",
		description: "Free and open source zero trust server providing BeyondCorp security for authenticated access to web applications and SSH",

		navigation: [
			{ name: "Pricing", href: "#pricing" },
			{ name: "Support", href: "#support" },
			{ name: "Documentation", href: "https://docs.pritunl.com/kb/zero", external: true },
			{ name: "Community Forums", href: "https://forum.pritunl.com/", external: true },
		],

		badge: "Enterprise-Grade Zero Trust",
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
			},
			{
				label: "Get Started",
				href: "https://docs.pritunl.com/kb/zero/general/pritunl-zero-service",
				style: "primary",
			},
			{
				label: "Live Web Service Demo",
				href: "https://service-zero-demo.pritunl.com/",
				style: "secondary",
			},
		],

		heroImage: heroImage,
		heroImageAlt: "Pritunl Zero Dashboard",

		featuresGrid: {
			title: "Provide Easy and Secure Access to Web Applications and SSH",
			description: "Pritunl Zero creates an authentication layer in front of existing web applications. No modifications to the existing web application is required. For SSH servers Pritunl Zero will maintain a certificate authority and provide controlled SSH access with additional layers of authentication.",
			items: [
				{
					image: networkPolicy,
					title: "Network Policy Control",
					description: "Control access based on permitted and blocked networks.",
				},
				{
					image: twoFactor,
					title: "Multi-Factor Authentication",
					description: "Require multi-factor authentication from providers with secondary authentication support including Duo, OneLogin Protect and Okta Verify.",
				},
				{
					image: webauthnPolicy,
					title: "WebAuthn Device Authentication",
					description: "Authenticate users with hardware WebAuthn tokens including the YubiKey and Google Titan Security Key.",
				},
			],
		},
	},

	pages: {
		home: Home,
	},
}

export default definition
