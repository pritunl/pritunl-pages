import type { FeatureBlock as FeatureBlockType } from "../types"
import Image from "next/image"
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
	KeyRound,
	Globe,
	Activity,
	BarChart3,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

const icons: Record<string, LucideIcon> = {
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
	KeyRound,
	Globe,
	Activity,
	BarChart3,
}

interface Props {
	block: FeatureBlockType
	first?: boolean
}

export default function FeatureBlock({ block, first }: Props) {
	const dataContent = (
		<div className={block.type === "left" ? "lg:pt-4 lg:pr-8" : "lg:pt-4 lg:pl-8"}>
			<div className="lg:max-w-lg">
				<p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
					{block.title}
				</p>
				<p className="mt-6 text-lg/8 text-gray-400">
					{block.description}
				</p>
				<dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-400 lg:max-w-none">
					{block.items.map((item, i) => {
						const Icon = icons[item.icon]
						return (
							<div key={i} className="relative pl-9">
								<dt className="inline font-semibold text-white">
									{Icon && <Icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-400" />}
									{item.title}
								</dt>
								<dd className="inline"> {item.description}</dd>
							</div>
						)
					})}
				</dl>
			</div>
		</div>
	)

	const imageContent = (
		<div className={block.type === "right" ? "order-last lg:order-first" : ""}>
			<div className="max-w-lg rounded-xl bg-white/2.5 p-2 ring-1 ring-inset ring-white/10 lg:max-w-xl">
				<Image
					width={2432}
					height={1442}
					src={block.image}
					alt={block.imageAlt}
					className="w-full rounded-md shadow-xl"
				/>
			</div>
		</div>
	)

	if (block.type === "center") {
		return (
			<div className={first ? "overflow-hidden pb-12" : "overflow-hidden py-12"}>
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-3xl sm:text-center">
						<p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl sm:text-balance">
							{block.title}
						</p>
						<p className="mt-6 text-lg/8 text-gray-400">
							{block.description}
						</p>
					</div>
				</div>
				<div className="relative overflow-hidden pt-12">
					<div className="mx-auto max-w-7xl px-6 lg:px-8">
						<div className="max-w-full rounded-xl bg-white/2.5 p-2 ring-1 ring-inset ring-white/10">
							<Image
								width={2432}
								height={1442}
								src={block.image}
								alt={block.imageAlt}
								className="w-full rounded-md shadow-xl"
							/>
						</div>
					</div>
				</div>
				<div className="mx-auto mt-12 max-w-7xl px-6 sm:mt-14 md:mt-18 lg:px-8">
					<dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base/7 text-gray-400 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
						{block.items.map((item, i) => {
							const Icon = icons[item.icon]
							return (
								<div key={i} className="relative pl-9">
									<dt className="inline font-semibold text-white">
										{Icon && <Icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-400" />}
										{item.title}
									</dt>{" "}
									<dd className="inline">{item.description}</dd>
								</div>
							)
						})}
					</dl>
				</div>
			</div>
		)
	}

	return (
		<div className={first ? "overflow-hidden pb-12" : "overflow-hidden py-12"}>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
					{block.type === "left" ? (
						<>
							{dataContent}
							{imageContent}
						</>
					) : (
						<>
							{imageContent}
							{dataContent}
						</>
					)}
				</div>
			</div>
		</div>
	)
}
