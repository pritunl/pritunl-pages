import type { ProductDefinition } from "../types"

import Home from "../components/Home"
import heroImage from "../assets/cloud/cloud_pods.png"
import pythonShellSpec from "../assets/cloud/cloud_python_shell_spec.png"
import images from "../assets/cloud/cloud_images.png"
import multiTenant from "../assets/cloud/cloud_multi_tenant_selection.png"
import vpc from "../assets/cloud/cloud_vpc.png"
import policies from "../assets/cloud/cloud_policies.png"
import domains from "../assets/cloud/cloud_domains.png"
import firewall from "../assets/cloud/cloud_firewall.png"
import ipBlocks from "../assets/cloud/cloud_ip_blocks.png"
import storage from "../assets/cloud/cloud_storage.png"
import authority from "../assets/cloud/cloud_authority.png"
import secret from "../assets/cloud/cloud_secret.png"
import loadBalancer from "../assets/cloud/cloud_load_balancer.png"

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

		featuresGrid: {
			title: "Declarative Virtualization with Dynamic Shell and Python Specs",
			description: "Define resources with dynamic templates that adjust to configuration changes in the cluster. Provides the benefits of Kubernetes with a less complex architecture and fewer interdependent components.",
			items: [
				{
					image: pythonShellSpec,
					title: "Transparent Python Integration",
					description: "Utilize both shell and Python in pod templates with a transparent shared environment.",
				},
				{
					image: images,
					title: "Instance Base Images",
					description: "Includes base images for common Linux distributions and FreeBSD.",
				},
				{
					image: multiTenant,
					title: "Multi-Tenant Support",
					description: "Isolate resources into organizations and control user access to each organization.",
				},
				{
					image: vpc,
					title: "VPC Networking",
					description: "Advanced VPC networking with routing table support. Source and destination checking option for instances allows site-to-site VPN configurations.",
				},
				{
					image: policies,
					title: "Access Policies",
					description: "Policy controls with WebAuthn, location, source network and browser options.",
				},
				{
					image: domains,
					title: "Domain Management",
					description: "Integrated domain management with API support for AWS, Cloudflare and Oracle Cloud. Configure A, AAAA and CNAME records manually or automated with pods.",
				},
				{
					image: firewall,
					title: "Advanced Firewall",
					description: "Detailed network ingress control with firewall rules that can be defined through role matched rules or in pod templates.",
				},
				{
					image: ipBlocks,
					title: "Static IP Management",
					description: "Static IP management that can manage pools of public IPv4 and IPv6 addresses that are either host specific or shared between multiple hosts. Support for DHCPv4, DHCPv6 and SLAAC is also available.",
				},
				{
					image: storage,
					title: "S3 Storage Integration",
					description: "Integrated support for S3 API based storage providers. Pod template images, disk snapshots and backups are stored on the S3 storage.",
				},
				{
					image: authority,
					title: "SSH Key Management",
					description: "Easily manage multiple SSH keys or SSH certificates to control access to instances.",
				},
				{
					image: secret,
					title: "Secrets Storage",
					description: "Store secrets in JSON format and provide access through the IMDS service and pod templates.",
				},
				{
					image: loadBalancer,
					title: "Load Balancer",
					description: "Built in load balancer to provide access from the host to web servers running on instances.",
				},
			],
		},
	},

	pages: {
		home: Home,
	},
}

export default definition
