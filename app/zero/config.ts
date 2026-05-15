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
	SquareTerminal,
	LogIn,
	DatabaseZap,
	Users,
	HardDrive,
	Network,
	Mail,
	UserKey,
	BadgeCheck,
	MapPin,
	CreditCard,
	Landmark,
	Code,
	Orbit,
	ShieldUser,
	Cloud,
} from "lucide-react"

import Home from "../components/Home"
import Pritunl from "../logos/Pritunl"
import PritunlZero from "../logos/PritunlZero"
import Auth0 from "../logos/Auth0"
import Duo from "../logos/Duo"
import GoogleWorkspace from "../logos/GoogleWorkspace"
import JumpCloud from "../logos/JumpCloud"
import MicrosoftEntra from "../logos/MicrosoftEntra"
import Okta from "../logos/Okta"
import OneLogin from "../logos/OneLogin"
import Yubico from "../logos/Yubico"
import GitHubOutline from "../icons/GitHubOutline"
import Discourse from "../icons/Discourse"
import GitBook from "../icons/GitBook"
import Substack from "../icons/Substack"

const definition: ProductDefinition = {
	config: {
		name: "Pritunl Zero",
		title: "Pritunl Zero - Enterprise Zero Trust",
		description: "Free and open source zero trust server providing BeyondCorp security for authenticated access to web applications and SSH",
		logo: PritunlZero,
		logoAlt: "Pritunl Zero",
		googleTag: "G-97QXRWJPJT",

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
		subheading: "Free and open source zero trust server providing BeyondCorp security for authenticated access to web applications and SSH.",

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
			{
				type: "logos",
				title: "Single Sign-On",
				description: "Securely deploy authenticated access to thousands of users using their existing company account with support for several single sign-on providers and protocols.",
				link: "https://docs.pritunl.com/kb/zero/single-sign-on",
				linkLabel: "Explore Single Sign-On Documentation",
				linkIcon: UserKey,
				external: true,
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
				type: "code",
				title: "Create an Authenticated Visual Studio Code Web Server",
				description: "Install and configure an authenticated Visual Studio Code server using the Pritunl Zero command line configuration tools.",
				image: "zero_vscode_wide",
				imageAlt: "Authenticated Visual Studio Code",
				link: "https://docs.pritunl.com/kb/zero/general/zero-vscode-web",
				linkLabel: "View Visual Studio Code Tutorial",
				linkIcon: SquareTerminal,
				codeHeight: "600px",
				codeTitle: "Create Authenticated Visual Studio Code with Pritunl Zero",
// 				code: `#!/bin/bash
// # Install and configure Visual Studio Code Web Server with Pritunl Zero on AlmaLinux
// set -ex

// # Update and register dns of with server ip to domains below
// # Open port 80 on server to automatically obtain Lets Encrypt certificate
// ROOT_DOMAIN="pritunl.demo"
// ZERO_DOMAIN="zero.pritunl.demo"
// VSCODE_DOMAIN="vscode.pritunl.demo"

// sudo systemctl disable --now firewalld.service

// sudo tee /etc/yum.repos.d/pritunl.repo << EOF
// [pritunl]
// name=Pritunl Repository
// baseurl=https://repo.pritunl.com/stable/yum/almalinux/9/
// gpgcheck=1
// enabled=1
// gpgkey=https://raw.githubusercontent.com/pritunl/pgp/master/pritunl_repo_pub.asc
// EOF
// sudo tee /etc/yum.repos.d/mongodb-org.repo << EOF
// [mongodb-org]
// name=MongoDB Repository
// baseurl=https://repo.mongodb.org/yum/redhat/9/mongodb-org/8.0/x86_64/
// gpgcheck=1
// enabled=1
// gpgkey=https://pgp.mongodb.com/server-8.0.asc
// EOF
// sudo tee /etc/yum.repos.d/code.repo << EOF
// [code]
// name=Visual Studio Code
// baseurl=https://packages.microsoft.com/yumrepos/vscode
// enabled=1
// gpgcheck=1
// gpgkey=https://packages.microsoft.com/keys/microsoft.asc
// EOF

// sudo dnf -y install pritunl-zero mongodb-org code
// sudo systemctl enable --now mongod

// sudo useradd -r -s /sbin/nologin -d /home/vscode -m vscode || true
// sudo chmod 700 /home/vscode

// sudo mkdir -p /var/lib/vscode/.vscode/data/Machine /var/lib/vscode/data
// sudo chown -R vscode:vscode /var/lib/vscode
// sudo chmod -R 700 /var/lib/vscode

// sudo ln -snf /var/lib/vscode/data /home/vscode/data
// sudo chown -h vscode:vscode /home/vscode/data

// sudo tee /var/lib/vscode/.vscode/data/Machine/settings.json << 'EOF'
// {
//     "editor.fontSize": 14,
//     "files.autoSave": "afterDelay",
//     "files.autoSaveDelay": 200,
// }
// EOF
// sudo chown vscode:vscode /var/lib/vscode/.vscode/data/Machine/settings.json
// sudo chmod 644 /var/lib/vscode/.vscode/data/Machine/settings.json

// sudo tee /etc/systemd/system/vscode.service << EOF
// [Unit]
// Description=VS Code web server

// [Service]
// Type=exec
// User=vscode
// Group=vscode
// WorkingDirectory=/home/vscode
// Restart=on-failure
// RestartSec=5s
// ExecStart=/usr/bin/code serve-web --host 0.0.0.0 --port 8000 \\
// 	--server-data-dir=/var/lib/vscode/.vscode --without-connection-token \\
// 	--accept-server-license-terms
// TimeoutStopSec=5s
// LimitNOFILE=500000
// LimitNPROC=512
// PrivateTmp=true
// ProtectSystem=full
// ProtectHostname=true
// ProtectKernelTunables=true

// [Install]
// WantedBy=multi-user.target
// EOF

// sudo systemctl daemon-reload
// sudo systemctl enable --now pritunl-zero
// sudo systemctl enable --now vscode
// sleep 5

// sudo pritunl-zero upsert service --name=vscode --type=http --role=vscode \\
//   --domain="$VSCODE_DOMAIN" --server="http://127.0.0.1:8000" --share-session=true \\
//   --websockets=true --logout-path="/logout"
// sudo pritunl-zero upsert node --name=self --management=true --proxy=true \\
//   --management-domain=$ZERO_DOMAIN --webauthn-domain=$ROOT_DOMAIN \\
//   --add-service=vscode
// if ! sudo pritunl-zero upsert certificate --name=pritunl-cert --type=lets_encrypt \\
//   --acme-domain=$ZERO_DOMAIN --acme-domain=$VSCODE_DOMAIN --acme-type=http 2>/dev/null;
//   then echo "Failed to obtain optional Lets Encrypt Certificate"
// elif ! sudo pritunl-zero upsert node --name=self --add-certificate=pritunl-cert 2>/dev/null;
//   then echo "Failed to obtain optional Lets Encrypt Certificate"
// fi
// sudo pritunl-zero upsert policy --name=pritunl-zero --role=vscode --add-service=vscode
// sudo pritunl-zero upsert user --name=pritunl --role=vscode
// sudo pritunl-zero default-password

// echo "Open: https://$VSCODE_DOMAIN"`,
			},
			{
				type: "two_columns",
				title: "Protect Internal Web Applications with Minimal User Impact",
				description: "",
				cardItems: [
					{
							icon: Globe,
							title: "Web Application Gateway",
							description: "Add a nearly seamless layer of authentication to your existing internal web applications without impact usability or device support. Pritunl Zero works with all existing web browsers without requiring any additional software on the client.",
					},
					{
						icon: KeyRound,
						title: "Multi-Factor Authentication",
						description: "Multifactor secondary authentication from Duo, OneLogin Protect, Okta Verify and any WebAuthn hardware token including YubiKeys.",
					},
					{
						icon: DatabaseZap,
						title: "High Availability",
						description: "All nodes run independently and will continue running in the event of other nodes failing. Additional nodes can be added and removed as needed.",
					},
					{
						icon: Code,
						title: "Open Source Code Base",
						description: "All source code for Pritunl Zero is available on GitHub, allowing for transparency and customization. Information for installing Pritunl Zero from source is available on the repository.",
					},
				],
			},
			{
				type: "center",
				title: "Detailed Audit Reports",
				description: "Detailed auditing of user events with location data.",
				image: "zero_audit",
				imageAlt: "",
			},
			{
				type: "center",
				title: "User Session Control",
				description: "Monitor and control user sessions with detailed device and location information.",
				image: "zero_sessions",
				imageAlt: "",
			},
			{
				type: "center",
				title: "WebAuthn Token Control",
				description: "Manage users WebAuthn tokens from the administrator console or allow the user to validate their own WebAuthn token.",
				image: "zero_devices",
				imageAlt: "",
			},
			{
				type: "grid",
				title: "Open Source Alternative",
				description: "Replace expensive commercial zero trust solutions with a free and open source alternative.",
				link: "https://github.com/pritunl/pritunl-zero",
				linkLabel: "Explore GitHub Repository",
				linkIcon: GitHubOutline,
				gridItems: [
					{
						title: "Teleport Alternative",
						description: "Free alternative to Gravitational Teleport with faster implementation.",
						icon: Orbit,
					},
					{
						title: "Okta Advanced Server Access Alternative",
						description: "Open source and free alternative to Okta Advanced Server Access.",
						icon: ShieldUser,
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
				{ label: "Documentation", link: "https://docs.pritunl.com/kb/zero", icon: GitBook },
				{ label: "Substack Newsletter", link: "https://pritunl.substack.com/subscribe", icon: Substack },
			],
		},

		pricing: {
			title: "Pricing",
			description: "Pritunl Cloud is free to use with no limits on the number of servers or users. An optional subscription provides enterprise features including multi-tenant support, single sign-on and geo-IP data. The subscription can be activated from the admin web console at anytime. The paid subscription has no additional per-user or per-host charges.",
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
					name: "Zero",
					cost: 50,
					description: "Free 7 day trial included.",
					featured: true,
					href: "https://app.pritunl.com/checkout/zero",
					buttonLabel: "Get started today",
					features: [
						{ label: "Unlimited Users", icon: Users },
						{ label: "Unlimited Servers", icon: HardDrive },
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
			icon: Pritunl,
			address1: "1700 7th Ave Ste 116-211",
			address2: "Seattle, WA 98101",
			phone: "(206) 202-2276",
			copyright: `Pritunl, Inc © ${new Date().getFullYear()}`,
			privacy: "https://pritunl.com/privacy",
			terms: "https://pritunl.com/terms",
			twitter: "https://x.com/pritunl",
			bluesky: "https://bsky.app/profile/pritunl.bsky.social",
			github: "https://github.com/pritunl/pritunl-zero",
			linkedin: "https://linkedin.com/company/pritunl",
			substack: "https://pritunl.substack.com",
		},
	},

	pages: {
		home: Home,
	},
}

export default definition
