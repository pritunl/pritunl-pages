import type { ProductDefinition } from "../types"

import Home from "../components/Home"
import heroImage from "../assets/zero/zero_services.png"

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
	},

	pages: {
		home: Home,
	},
}

export default definition
