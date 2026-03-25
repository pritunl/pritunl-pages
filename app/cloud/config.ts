import type { ProductDefinition } from "../types"
import {
	FileText,
	Code,
	Monitor,
	Scale,
	AppWindow,
	RefreshCcw,
	CloudUpload,
	CirclePlus,
	Lock,
	Server,
	ShieldCheck,
	Activity,
	Users,
	HardDrive,
	Network,
	KeyRound,
	BadgeCheck,
	Globe,
	Building2,
	LogIn,
	MapPin,
	Mail,
	CreditCard,
	Landmark,
} from "lucide-react"

import Discourse from "../icons/Discourse"
import GitBook from "../icons/GitBook"
import Substack from "../icons/Substack"
import Home from "../components/Home"
import pritunlImage from "../assets/pritunl.png"
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
import cloudSpec from "../assets/cloud/cloud_spec.png"
import cloudDeploymentLogs from "../assets/cloud/cloud_deployment_logs.png"
import cloudDeploymentMigrate from "../assets/cloud/cloud_deployment_migrate.png"
import cloudCertificates from "../assets/cloud/cloud_certificates.png"
import cloudDeployments from "../assets/cloud/cloud_deployments.png"
import cloudSpecEditor from "../assets/cloud/cloud_spec_editor.png"
import cloudSpecDiff from "../assets/cloud/cloud_spec_diff.png"

const definition: ProductDefinition = {
	config: {
		name: "Pritunl Cloud",
		title: "Pritunl Cloud - Self Hosted Declarative Virtualization Platform",
		description: "Self hosted cloud with shell and python declarative deployments. KVM based alternative to Kubernetes using live templates.",

		navigation: [
			{ name: "Pricing", href: "#pricing" },
			{ name: "Support", href: "#support" },
			{ name: "Documentation", href: "https://docs.pritunl.com/kb/cloud", external: true },
			{ name: "Community Forums", href: "https://forum.pritunl.com", external: true },
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

		featureBlocks: [
			{
				type: "left",
				title: "A New Template Format",
				description: "A new Markdown and YAML based template format that allows adding notes and documentation right into the deployment spec. Python and Shell support allows creating dynamic deployments that can handle complex configurations all in one template.",
				image: cloudSpec,
				imageAlt: "Template Editor",
				items: [
					{
						icon: FileText,
						title: "Markdown & YAML based.",
						description: "Add notes and documentation directly into deployment specs with a familiar and readable format.",
					},
					{
						icon: Code,
						title: "Python & Shell support.",
						description: "Create dynamic deployments that can handle complex configurations with Python and Shell scripting.",
					},
					{
						icon: Monitor,
						title: "All-in-one template.",
						description: "Handle everything in a single unified template, simplifying deployment management and reducing complexity.",
					},
				],
			},
			{
				type: "right",
				title: "Live Deployment Logs",
				description: "Live view of deployment status with logging and resource metrics. All deployment management and monitoring can be done from the web console.",
				image: cloudDeploymentLogs,
				imageAlt: "Deployments Log Output",
				items: [
					{
						icon: Scale,
						title: "Real-time monitoring.",
						description: "View live deployment status, logging output, and resource metrics directly from the web console.",
					},
					{
						icon: AppWindow,
						title: "Web console management.",
						description: "All deployment management and monitoring can be done entirely from the web console interface.",
					},
					{
						icon: RefreshCcw,
						title: "Statement based plans.",
						description: "Take actions such as scaling or restarting deployments based on the state of existing deployments.",
					},
				],
			},
			{
				type: "left",
				title: "Deployment Migration",
				description: "Live migrate deployment templates with a diff view of changes that will be applied. Deployments can be migrated from older or newer template commits.",
				image: cloudDeploymentMigrate,
				imageAlt: "Deployment Migration",
				items: [
					{
						icon: RefreshCcw,
						title: "Live migration.",
						description: "Migrate deployment templates between commits without downtime or service interruption.",
					},
					{
						icon: CloudUpload,
						title: "Diff view.",
						description: "Visual diff view of all changes that will be applied before committing the migration.",
					},
					{
						icon: CirclePlus,
						title: "Version flexibility.",
						description: "Migrate from older or newer template commits, allowing both upgrades and rollbacks.",
					},
				],
			},
			{
				type: "right",
				title: "Automatic SSL Certificates",
				description: "Automatically create SSL certificates from Lets Encrypt with support for HTTP validation or DNS CNAME validation. Certificates are dynamically updated in deployment templates with the IMDS service.",
				image: cloudCertificates,
				imageAlt: "Certificates Management",
				items: [
					{
						icon: Lock,
						title: "Lets Encrypt integration.",
						description: "Automatically create and renew SSL certificates with HTTP validation on port 80 or DNS CNAME validation.",
					},
					{
						icon: Server,
						title: "Multi-provider DNS.",
						description: "DNS CNAME validation with AWS, Cloudflare, and Oracle Cloud DNS APIs. Wildcard certificates supported.",
					},
					{
						icon: Scale,
						title: "Automatic renewal.",
						description: "Certificates automatically renew and are dynamically updated in deployment templates via the IMDS service.",
					},
				],
			},
			{
				type: "center",
				title: "Visual Deployment Management with an Integrated Editor",
				description: "Visually manage large pod deployments with an integrated editor and comprehensive web console.",
				image: cloudDeployments,
				imageAlt: "Deployments View",
			},
			{
				type: "center",
				title: "Integrated Template Editor",
				description: "Integrated Monaco editor for editing templates. Includes syntax highlighting and autocomplete support for all resources in Pritunl Cloud.",
				image: cloudSpecEditor,
				imageAlt: "Template Editor",
			},
			{
				type: "center",
				title: "Template Diff View",
				description: "Compare changes between different template commits and quickly diagnose issues from changes. All from the web console editor.",
				image: cloudSpecDiff,
				imageAlt: "Template Diff Editor",
			},
			{
				type: "columns",
				title: "Open Source Virtualization",
				description: "Scalable self hosted bare metal virtualization with no vendor lock-in.",
				items: [
					{
						icon: ShieldCheck,
						title: "Multi-Factor Authentication",
						description: "Multifactor secondary authentication from Duo, OneLogin Protect, Okta Verify and any WebAuthn hardware token including YubiKeys and Google Titan Tokens.",
					},
					{
						icon: Activity,
						title: "High Availability",
						description: "All nodes run independently and will continue running in the event of other nodes failing. Additional nodes can be added and removed as needed for fast scaling without downtime.",
					},
					{
						icon: Server,
						title: "Instance IMDS Service",
						description: "IMDS agent delivers deployment information, platform resource access, and real-time CPU, memory, and disk metrics. Security CVE alerts notify when DNF updates are pending.",
					},
				],
			},
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

		pricing: {
			title: "Pricing",
			description: "Pritunl Cloud is free to use with no limits on the number of servers or users. An optional subscription provides enterprise features including multi-tenant support, single sign-on and geo-IP data. The subscription can be activated from the admin web console at anytime.",
			plans: [
				{
					name: "Community",
					cost: 0,
					description: "Free to use with no limits on servers or users.",
					features: [
						{ label: "Unlimited Users", icon: Users },
						{ label: "Unlimited Servers", icon: HardDrive },
						{ label: "Distributed Architecture", icon: Network },
						{ label: "WebAuthn Authentication", icon: KeyRound },
						{ label: "Lets Encrypt Certificates", icon: BadgeCheck },
						{ label: "DNS Management", icon: Globe },
					],
				},
				{
					name: "Enterprise",
					cost: 50,
					description: "Free 7 day trial included.",
					featured: true,
					href: "https://app.pritunl.com/checkout/cloud",
					buttonLabel: "Get started today",
					features: [
						{ label: "Multi-Tenant Support", icon: Building2 },
						{ label: "Single Sign-On", icon: LogIn },
						{ label: "Geo-IP Data", icon: MapPin },
						{ label: "Email Support", icon: Mail },
						{ label: "Credit Card Payments", icon: CreditCard },
						{ label: "Bank ACH Payments", icon: Landmark },
					],
				},
			],
		},

		footer: {
			icon: pritunlImage,
			address1: "1700 7th Ave Ste 116-211",
			address2: "Seattle, WA 98101",
			phone: "(206) 202-2276",
			copyright: `Pritunl, Inc © ${new Date().getFullYear()}`,
			privacy: "https://pritunl.com/privacy",
			terms: "https://pritunl.com/terms",
			twitter: "https://x.com/pritunl",
			bluesky: "https://bsky.app/profile/pritunl.bsky.social",
			github: "https://github.com/pritunl/pritunl-cloud",
			linkedin: "https://linkedin.com/company/pritunl",
			substack: "https://pritunl.substack.com",
		}
	},

	pages: {
		home: Home,
	},
}

export default definition
