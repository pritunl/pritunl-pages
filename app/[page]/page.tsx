import { notFound } from "next/navigation"
import type { Metadata } from "next"

import product from "../config"
import type { PageConfig, PageProps } from "../types"
import Page from "../components/Page"

function getPageEntry(slug: string): PageConfig | React.ComponentType<PageProps> | null {
	const entry = product.pages[slug]
	if (!entry || slug === "home") {
		return null
	}
	return entry
}

function isPageConfig(entry: PageConfig | React.ComponentType<PageProps>): entry is PageConfig {
	return typeof entry === "object" && "title" in entry
}

export async function generateStaticParams() {
	return Object.keys(product.pages)
		.filter((key) => key !== "home")
		.map((key) => ({ page: key }))
}

export async function generateMetadata(
	{ params }: { params: Promise<{ page: string }> },
): Promise<Metadata> {
	const { page } = await params
	const entry = getPageEntry(page)

	if (!entry || !isPageConfig(entry)) {
		return {}
	}

	return {
		title: entry.title,
		description: entry.description,
		openGraph: {
			title: entry.title,
			description: entry.description,
			type: "website",
		},
		twitter: {
			title: entry.title,
			description: entry.description,
			card: "summary_large_image",
		},
	}
}

export default async function DynamicPage(
	{ params }: { params: Promise<{ page: string }> },
) {
	const { page } = await params
	const entry = getPageEntry(page)

	if (!entry) {
		return notFound()
	}

	if (isPageConfig(entry)) {
		return <Page config={product.config} pageConfig={entry} />
	}

	const CustomPage = entry
	return <CustomPage config={product.config} />
}
