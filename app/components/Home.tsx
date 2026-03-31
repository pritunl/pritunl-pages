import Header from "./Header"
import FeaturesGrid from "./FeaturesGrid"
import FeatureBlock from "./FeatureBlock"
import Pricing from "./Pricing"
import Support from "./Support"
import Footer from "./Footer"
import { Gradient } from "./Themed"

import type { PageProps } from "../types"
import Image from "next/image"

export default function Home({ config }: PageProps) {
	return (
		<Gradient>
			<Header config={config}/>
			<div className="pt-42">
				<div>
					<div className="mx-auto max-w-7xl px-6 lg:px-8">
						<div className="mx-auto max-w-2xl text-center">
							<div className="mb-4 flex justify-center">
								<span className="inline-flex items-center rounded-full bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-400 ring-1 ring-inset ring-indigo-500/20">
									{config.badge}
								</span>
							</div>
							<h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
								{config.heading.map((line, i) => (
									<span key={i}>
										{i > 0 && <br />}
										{line.map((segment, j) =>
											segment.highlight ? (
												<span key={j} className="text-indigo-400">{segment.text}</span>
											) : (
												<span key={j}>{segment.text}</span>
											)
										)}
									</span>
								))}
							</h1>
							<p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
								{config.subheading}
							</p>
							<div className="mt-10 flex items-center justify-center gap-x-6">
								{config.buttons.map((button) => (
									<a
										key={button.label}
										href={button.href}
										target="_blank"
										rel="noopener noreferrer"
										className={button.style === "primary"
											? "rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
											: "rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
										}
									>
										{button.label}
									</a>
								))}
							</div>
						</div>
						{config.heroImages ? (
							<div className="mt-16 sm:mt-24 mx-auto max-w-7xl grid grid-cols-3 items-start">
								<div className="mt-0 -rotate-3 z-10 -mr-[10%]">
									<div className="-m-1.5 rounded-xl bg-white/2.5 p-1.5 ring-1 ring-inset ring-white/10 lg:-m-3 lg:rounded-2xl lg:p-3 w-fit">
										<Image src={config.heroImages[0].image} alt={config.heroImages[0].alt} className="rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10" quality={config.heroImages[0].quality} unoptimized={config.heroImages[0].unoptimized}/>
									</div>
								</div>
								<div className="mt-[40%] z-20 -mx-[10%]">
									<div className="-m-1.5 rounded-xl bg-white/2.5 p-1.5 ring-1 ring-inset ring-white/10 lg:-m-3 lg:rounded-xl lg:p-3 w-fit">
										<Image src={config.heroImages[1].image} alt={config.heroImages[1].alt} className="rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10" quality={config.heroImages[1].quality} unoptimized={config.heroImages[1].unoptimized}/>
									</div>
								</div>
								<div className="mt-0 rotate-3 z-10 -ml-[10%]">
									<div className="-m-1.5 rounded-xl bg-white/2.5 p-1.5 ring-1 ring-inset ring-white/10 lg:-m-3 lg:rounded-2xl lg:p-3 w-fit ml-auto">
										<Image src={config.heroImages[2].image} alt={config.heroImages[2].alt} className="rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10" quality={config.heroImages[2].quality} unoptimized={config.heroImages[2].unoptimized}/>
									</div>
								</div>
							</div>
						) : (
							<div className="mt-16 flex justify-center sm:mt-24">
								<div className="-m-2 rounded-xl bg-white/2.5 p-2 ring-1 ring-inset ring-white/10 lg:-m-4 lg:rounded-2xl lg:p-4 w-fit">
									<Image src={config.heroImage.image} alt={config.heroImage.alt} className="rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10" quality={config.heroImage.quality} unoptimized={config.heroImage.unoptimized}/>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
			<div className="h-38"></div>
			{config.featuresGrid && <FeaturesGrid featuresGrid={config.featuresGrid}/>}
			<div className="h-38"></div>
			{config.featureBlocks?.map((block, i) => (
				<FeatureBlock key={i} block={block} first={i === 0} last={i === config.featureBlocks!.length - 1}/>
			))}
			{(config.featureBlocks?.length ?? 0) > 0 && (
					<div className="h-38"></div>
			)}
			{config.pricing && <>
				<Pricing pricing={config.pricing}/>
				<div className="h-38"></div>
			</>}
			{config.support && <>
				<Support support={config.support}/>
				<div className="h-38"></div>
			</>}
			{config.footer && <Footer footer={config.footer}/>}
		</Gradient>
	)
}
