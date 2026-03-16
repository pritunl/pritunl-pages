import type { ComponentType } from "react"
import type { StaticImageData } from "next/image"

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
}

export interface FeaturesGridItem {
	image: StaticImageData
	title: string
	description: string
}

export interface FeaturesGrid {
	title: string
	description: string
	items: FeaturesGridItem[]
}

export interface FeatureBlockItem {
	icon: string
	title: string
	description: string
}

export interface FeatureBlock {
	type: "left" | "right" | "center"
	title: string
	description: string
	image: StaticImageData
	imageAlt: string
	items?: FeatureBlockItem[]
}

export interface ProductConfig {
	name: string
	title: string
	description: string

	navigation: NavItem[]

	badge: string
	heading: HeadingSegment[][]
	subheading: string
	buttons: HeroButton[]

	heroImage: StaticImageData
	heroImageAlt: string

	featuresGrid?: FeaturesGrid
	featureBlocks?: FeatureBlock[]
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
