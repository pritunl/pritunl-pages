import type { Footer as FooterType } from "../types"
import Image from "next/image"
import X from "../icons/X"
import Bluesky from "../icons/Bluesky"
import GitHub from "../icons/GitHub"
import LinkedIn from "../icons/LinkedIn"
import Substack from "../icons/Substack"

interface Props {
	footer: FooterType
}

const socialLinks = [
	{ key: "twitter", label: "X", icon: X },
	{ key: "bluesky", label: "Bluesky", icon: Bluesky },
	{ key: "github", label: "GitHub", icon: GitHub },
	{ key: "linkedin", label: "LinkedIn", icon: LinkedIn },
	{ key: "substack", label: "Substack", icon: Substack },
] as const

export default function Footer({ footer }: Props) {
	return (
		<footer className="bg-gray-900">
			<div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
				<div>
					<Image src={footer.icon} alt={footer.address1} className="h-9 w-auto" />
					<div className="mt-4">
						<p className="text-sm/6 text-gray-400">{footer.address1}</p>
						<p className="text-sm/6 text-gray-400">{footer.address2}</p>
						<p className="text-sm/6 text-gray-400">{footer.phone}</p>
					</div>
				</div>
				<div className="mt-8 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
					<p className="flex flex-wrap items-center justify-center gap-x-6 text-center text-sm/6 text-gray-400 md:order-1 md:justify-start">
						<span>{footer.copyright}</span>
						{footer.privacy && (
							<a
								href={footer.privacy}
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-white"
							>
								Privacy Policy
							</a>
						)}
						{footer.terms && (
							<a
								href={footer.terms}
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-white"
							>
								Terms of Service
							</a>
						)}
					</p>
					<div className="mt-8 flex justify-center gap-x-6 md:order-2 md:mt-0">
						{socialLinks.map(({ key, label, icon: Icon }) => {
							const href = footer[key]
							if (!href) return null
							return (
								<a
									key={key}
									href={href}
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-400 hover:text-white"
								>
									<span className="sr-only">{label}</span>
									<Icon aria-hidden="true" className="size-6" />
								</a>
							)
						})}
					</div>
				</div>
			</div>
		</footer>
	)
}
