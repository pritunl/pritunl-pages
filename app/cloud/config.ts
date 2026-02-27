import type { ProductDefinition } from "../types"

import Home from "../components/Home"
import heroImage from "../assets/cloud/cloud_pods.png"

const definition: ProductDefinition = {
	config: {
		name: "Pritunl Cloud",
		title: "Pritunl Cloud - Self Hosted Declarative Virtualization Platform",
		description: "Self hosted cloud with shell and python declarative deployments. KVM based alternative to Kubernetes using live templates.",

		navigation: [
			{ name: "Pricing", href: "#pricing" },
			{ name: "Support", href: "https://support.pritunl.com", external: true },
			{ name: "Documentation", href: "https://docs.pritunl.com/kb/cloud", external: true },
			{ name: "Community Forums", href: "https://forum.pritunl.com/", external: true },
		],

		badge: "Open Source Self Hosted Cloud",
		heading: [
			[
				{ text: "Pritunl " },
				{ text: "Cloud", highlight: true },
			],
			[
				{ text: "Declarative " },
				{ text: "KVM", highlight: true },
				{ text: " Virtualization" },
			],
		],
		subheading: "KVM based alternative to Kubernetes with shell and python based live updating declarative deployments",

		buttons: [
			{
				label: "Live Demo",
				href: "https://cloud.demo.pritunl.com",
				style: "secondary",
			},
			{
				label: "Get Started",
				href: "https://docs.pritunl.com/kb/cloud/getting-started/installation",
				style: "primary",
			},
		],

		heroImage: heroImage,
		heroImageAlt: "Cloud Deployments",
	},

	pages: {
		home: Home,
	},
}

export default definition
