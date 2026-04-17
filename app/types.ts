import type { ComponentType, SVGProps } from "react"
import type { LucideIcon } from "lucide-react"

export type SvgData = ComponentType<SVGProps<SVGSVGElement>>

export interface NavItem {
	name: string
	href: string
	external?: boolean
}

export interface HeadingSegment {
	text: string
	highlight?: boolean
}

export interface HeroButton {
	label: string
	href: string
	style: "primary" | "secondary"
	external?: boolean
}

export interface HeroImage {
	image: string | SvgData
	alt: string
	imageColor?: string
	rounded?: string
	ring?: boolean
	quality?: number
	unoptimized?: boolean
}

export interface FeaturesGridItem {
	image: string | SvgData
	imageColor?: string
	title: string
	description: string
}

export interface FeaturesGrid {
	title: string
	description: string
	items: FeaturesGridItem[]
}

export interface FeatureBlockItem {
	icon: LucideIcon
	title: string
	description: string
	link?: string
	linkLabel?: string
}

export interface FeatureBlockLogoItem {
	image: string | SvgData
	imageAlt: string
	imageColor?: string
	link: string
}

export interface PricingPlanFeature {
	label: string
	icon?: LucideIcon
}

export interface PricingPlan {
	name: string
	cost: number
	description: string
	featured?: boolean
	href?: string
	buttonLabel?: string
	features: PricingPlanFeature[]
}

export interface Pricing {
	title: string
	description: string
	plans: PricingPlan[]
}

export interface SupportButton {
	label: string
	link: string
	icon: LucideIcon | SvgData
}

export interface Support {
	title: string
	description: string
	buttons: SupportButton[]
}

export interface Footer {
	icon: string | SvgData
	address1: string
	address2: string
	phone: string
	copyright: string
	privacy: string
	terms: string
	twitter: string
	bluesky: string
	github: string
	linkedin: string
	substack: string
}

export interface FeatureBlock {
	type: "left" | "right" | "center" | "center_open" | "columns" | "logos"
	title: string
	description: string
	image?: string | SvgData
	imageAlt?: string
	imageColor?: string
	items?: FeatureBlockItem[]
	logoItems?: FeatureBlockLogoItem[]
}

export type RepositoryDistribution = "arch" | "alma" | "rocky" | "debian" | "oracle" | "fedora" | "ubuntu"

export interface Repository {
	distribution: RepositoryDistribution
	version: string
	package: string
}

export interface Installer {
	label: string
	version: string
	url: string
	hashUrl: string
}

export interface ProductConfig {
	name: string
	title: string
	description: string
	codeBackground?: boolean
	googleTag?: string
	cloudflareTag?: string

	navigation: NavItem[]

	badge: string
	heading: HeadingSegment[][]
	subheading: string
	buttons: HeroButton[]

	heroImage?: HeroImage
	heroImages?: HeroImage[]

	featuresGrid?: FeaturesGrid
	featureBlocks?: FeatureBlock[]
	pricing?: Pricing
	repositories?: Repository[]
	installers?: {
		macos?: Installer;
		windows?: Installer
	}
	support?: Support
	footer?: Footer
}

export interface PageProps {
	config: ProductConfig
}

export interface ProductDefinition {
	config: ProductConfig
	pages: {
		home: ComponentType<PageProps>
	}
}
