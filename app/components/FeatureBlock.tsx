import type { FeatureBlock as FeatureBlockType } from "../types"
import Image from "./Image"
import Link from "next/link"

interface Props {
	block: FeatureBlockType
	first?: boolean
	last?: boolean
}

export default function FeatureBlock({ block, first, last }: Props) {
	const dataContent = (
		<div className={block.type === "left" ? "lg:pt-4 lg:pr-8" : "lg:pt-4 lg:pl-8"}>
			<div className="lg:max-w-lg">
				<h2 className="mt-2 text-4xl font-medium tracking-tight text-pretty text-white sm:text-5xl">
					{block.title}
				</h2>
				<p className="mt-6 text-lg/8 text-gray-400">
					{block.description}
				</p>
				{block.items && block.items.length > 0 && (
					<dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-400 lg:max-w-none">
						{block.items.map((item, i) => {
							const Icon = item.icon
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
				)}
			</div>
		</div>
	)

	const imageContent = (
		<div className={block.type === "right" ? "order-last lg:order-first" : ""}>
			<div className="max-w-lg rounded-xl bg-white/2.5 p-2 ring-1 ring-inset ring-white/10 lg:max-w-xl">
				<Image
					width={2432}
					height={1442}
					image={block.image!}
					alt={block.imageAlt || ""}
					className={`w-full rounded-md shadow-xl${block.imageColor ? " " + block.imageColor : ""}`}
				/>
			</div>
		</div>
	)

	if (block.type === "columns") {
		return (
			<div className={`overflow-hidden${first && last ? "" : first ? " pb-12" : last ? " pt-12" : " py-12"}`}>
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center">
						<h2 className="mt-2 text-4xl font-medium tracking-tight text-pretty text-white sm:text-5xl lg:text-balance">
							{block.title}
						</h2>
						<p className="mt-6 text-lg/8 text-gray-400">
							{block.description}
						</p>
					</div>
					{block.items && block.items.length > 0 && (
						<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
							<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
								{block.items.map((item, i) => {
									const Icon = item.icon
									return (
										<div key={i} className="flex flex-col">
											<dt className="flex items-center gap-x-3 text-base/7 font-semibold text-white">
												{Icon && <Icon aria-hidden="true" className="size-5 flex-none text-indigo-400" />}
												{item.title}
											</dt>
											<dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-400">
												<p className="flex-auto">{item.description}</p>
												{item.link && (
													<p className="mt-6">
														{item.external ? (
															<a href={item.link} target="_blank" rel="noopener noreferrer" className="text-base font-semibold text-indigo-400 hover:text-indigo-300">
																{item.linkLabel || "Learn more"} <span aria-hidden="true">→</span>
															</a>
														) : (
															<Link href={item.link} className="text-base font-semibold text-indigo-400 hover:text-indigo-300">
																{item.linkLabel || "Learn more"} <span aria-hidden="true">→</span>
															</Link>
														)}
													</p>
												)}
											</dd>
										</div>
									)
								})}
							</dl>
						</div>
					)}
				</div>
			</div>
		)
	}

	if (block.type === "logos") {
		return (
			<div className={`overflow-hidden${first && last ? "" : first ? " pb-12" : last ? " pt-12" : " py-12"}`}>
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center">
						<h2 className="mt-2 text-4xl font-medium tracking-tight text-pretty text-white sm:text-5xl lg:text-balance">
							{block.title}
						</h2>
						<p className="mt-6 text-lg/8 text-gray-400">
							{block.description}
						</p>
					</div>
					{block.logoItems && block.logoItems.length > 0 && (
						<div className={`mt-16 -mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl ${block.logoItems.length === 6 ? "md:grid-cols-3" : "md:grid-cols-4"}`}>
							{block.logoItems.map((item, i) => {
								const content = (
									<div className="flex h-12 w-full items-center justify-center">
										<Image
											width={500}
											height={48}
											image={item.image}
											alt={item.imageAlt}
											className={`max-h-12 max-w-full object-contain${item.imageColor ? " " + item.imageColor : ""}`}
										/>
									</div>
								)
								return item.external ? (
									<a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className="bg-white/5 p-8 sm:p-10">
										{content}
									</a>
								) : (
									<Link key={i} href={item.link} className="bg-white/5 p-8 sm:p-10">
										{content}
									</Link>
								)
							})}
						</div>
					)}
				</div>
			</div>
		)
	}

	if (block.type === "two_columns") {
		const roundedClasses = [
			"max-lg:rounded-t-4xl lg:rounded-tl-4xl",
			"lg:rounded-tr-4xl",
			"lg:rounded-bl-4xl",
			"max-lg:rounded-b-4xl lg:rounded-br-4xl",
		]
		const colClasses = [
			"lg:col-span-4",
			"lg:col-span-2",
			"lg:col-span-2",
			"lg:col-span-4",
		]
		return (
			<div className={`overflow-hidden${first && last ? "" : first ? " pb-12" : last ? " pt-12" : " py-12"}`}>
				<div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
					<h2 className="mt-2 text-4xl font-medium tracking-tight text-pretty text-white sm:text-5xl">
						{block.title}
					</h2>
					<p className="mt-6 max-w-lg text-lg/8 text-gray-400">
						{block.description}
					</p>
					{block.cardItems && block.cardItems.length > 0 && (
						<div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
							{block.cardItems.map((item, i) => (
								<div key={i} className={`flex p-px ${colClasses[i % 4]}`}>
									<div className={`w-full overflow-hidden rounded-lg bg-gray-950/30 outline outline-white/15 ${roundedClasses[i % 4]}`}>
										{item.image && (
											<Image
												width={2432}
												height={1442}
												image={item.image}
												alt={item.imageAlt || ""}
												className={`h-80 object-cover object-left${item.imageColor ? " " + item.imageColor : ""}`}
											/>
										)}
										<div className="p-10">
											{item.subtitle && <h3 className="text-base font-semibold text-gray-400">{item.subtitle}</h3>}
											<p className={`${item.subtitle ? "mt-2 " : ""}text-2xl font-medium tracking-tight text-white`}>{item.title}</p>
											<p className="mt-2 max-w-lg text-lg/8 text-gray-400">{item.description}</p>
										</div>
									</div>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		)
	}

	if (block.type === "center") {
		return (
			<div className={`overflow-hidden${first && last ? "" : first ? " pb-12" : last ? " pt-12" : " py-12"}`}>
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-3xl sm:text-center">
						<h2 className="mt-2 text-4xl font-medium tracking-tight text-pretty text-white sm:text-5xl sm:text-balance">
							{block.title}
						</h2>
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
								image={block.image!}
								alt={block.imageAlt || ""}
								className={`w-full rounded-md shadow-xl${block.imageColor ? " " + block.imageColor : ""}`}
							/>
						</div>
					</div>
				</div>
				{block.items && block.items.length > 0 && (
					<div className="mx-auto mt-12 max-w-7xl px-6 sm:mt-14 md:mt-18 lg:px-8">
						<dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base/7 text-gray-400 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
							{block.items.map((item, i) => {
								const Icon = item.icon
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
				)}
			</div>
		)
	}

	if (block.type === "center_open") {
		return (
			<div className={`overflow-hidden${first && last ? "" : first ? " pb-12" : last ? " pt-12" : " py-12"}`}>
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-3xl sm:text-center">
						<h2 className="mt-2 text-4xl font-medium tracking-tight text-pretty text-white sm:text-5xl sm:text-balance">
							{block.title}
						</h2>
						<p className="mt-6 text-lg/8 text-gray-400">
							{block.description}
						</p>
					</div>
				</div>
				<div className="relative overflow-hidden pt-12">
					<div className="mx-auto max-w-7xl px-6 lg:px-8">
						<div className="max-w-3xl mx-auto">
							<Image
								width={2432}
								height={1442}
								image={block.image!}
								alt={block.imageAlt || ""}
								className={`w-full rounded-md ${block.imageColor ? " " + block.imageColor : ""}`}
							/>
						</div>
					</div>
				</div>
				{block.items && block.items.length > 0 && (
					<div className="mx-auto mt-12 max-w-7xl px-6 sm:mt-14 md:mt-18 lg:px-8">
						<dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base/7 text-gray-400 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
							{block.items.map((item, i) => {
								const Icon = item.icon
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
				)}
			</div>
		)
	}

	return (
		<div className={`overflow-hidden${first && last ? "" : first ? " pb-12" : last ? " pt-12" : " py-12"}`}>
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
