import Header from "./Header"
import FeaturesGrid from "./FeaturesGrid"
import FeatureBlock from "./FeatureBlock"
import Repositories from "./Repositories"
import Pricing from "./Pricing"
import Support from "./Support"
import Footer from "./Footer"
import Image from "./Image"
import { Gradient } from "./Themed"

import type { PageProps } from "../types"

export default async function Home({ config }: PageProps) {
	return (
		<Gradient codeBackground={config.codeBackground} short={(config.featureBlocks?.length ?? 0) < 3}>
			<Header config={config}/>
			<div className="pt-42">
				<div>
					<div className="mx-auto max-w-7xl px-2 lg:px-8">
						<div className="mx-auto max-w-4xl text-center">
							<div className="mb-4 flex justify-center">
								<span className="inline-flex items-center rounded-full bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-400 ring-1 ring-inset ring-indigo-500/20">
									{config.badge}
								</span>
							</div>
							<h1 className="text-4.5xl font-semibold tracking-tight text-balance text-white min-[460px]:text-5xl min-[560px]:text-6xl min-[660px]:text-7xl">
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
							<p className="mt-8 text-lg max-w-2xl mx-auto text-pretty text-gray-400 sm:text-xl/8">
								{config.subheading}
							</p>
							<div className="mt-10 flex items-center justify-center gap-x-6">
								{config.buttons.map((button) => (
									<a
										key={button.label}
										href={button.href}
										{...(button.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
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
							<div className="px-4 mt-16 sm:mt-24 mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 items-start gap-6 md:gap-0">
								<div className="order-2 md:order-1 sm:mt-0 sm:-rotate-3 sm:z-10 sm:-mr-[10%]">
									<div className="-m-1.5 rounded-xl bg-white/2.5 p-1.5 ring-1 ring-inset ring-white/10 lg:-m-3 lg:rounded-2xl lg:p-3 w-fit mx-auto sm:mx-0">
										<Image image={config.heroImages[0].image} alt={config.heroImages[0].alt} className={`bg-white/5 shadow-2xl ${config.heroImages[0].ring ? "ring-1 ring-white/10" : ""} ${config.heroImages[0].rounded ?? "rounded-md"}${config.heroImages[0].imageColor ? " " + config.heroImages[0].imageColor : ""}`} quality={config.heroImages[0].quality} unoptimized={config.heroImages[0].unoptimized}/>
									</div>
								</div>
								<div className="order-1 md:order-2 sm:mt-[40%] sm:z-20 sm:-mx-[10%]">
									<div className="-m-1.5 rounded-xl bg-white/2.5 p-1.5 ring-1 ring-inset ring-white/10 lg:-m-3 lg:rounded-xl lg:p-3 w-fit mx-auto sm:mx-0">
										<Image image={config.heroImages[1].image} alt={config.heroImages[1].alt} className={`bg-white/5 shadow-2xl ${config.heroImages[1].ring ? "ring-1 ring-white/10" : ""} ${config.heroImages[1].rounded ?? "rounded-md"}${config.heroImages[1].imageColor ? " " + config.heroImages[1].imageColor : ""}`} quality={config.heroImages[1].quality} unoptimized={config.heroImages[1].unoptimized}/>
									</div>
								</div>
								<div className="order-3 sm:mt-0 sm:rotate-3 sm:z-10 sm:-ml-[10%]">
									<div className="-m-1.5 rounded-xl bg-white/2.5 p-1.5 ring-1 ring-inset ring-white/10 lg:-m-3 lg:rounded-2xl lg:p-3 w-fit mx-auto sm:mx-0 sm:ml-auto">
										<Image image={config.heroImages[2].image} alt={config.heroImages[2].alt} className={`bg-white/5 shadow-2xl ${config.heroImages[2].ring ? "ring-1 ring-white/10" : ""} ${config.heroImages[2].rounded ?? "rounded-md"}${config.heroImages[2].imageColor ? " " + config.heroImages[2].imageColor : ""}`} quality={config.heroImages[2].quality} unoptimized={config.heroImages[2].unoptimized}/>
									</div>
								</div>
							</div>
						) : config.heroImage ? (
							<div className="px-4 mt-16 flex justify-center sm:mt-24">
								<div className="-m-2 rounded-xl bg-white/2.5 p-2 ring-1 ring-inset ring-white/10 lg:-m-4 lg:rounded-2xl lg:p-4 w-fit">
									<Image image={config.heroImage.image} alt={config.heroImage.alt} className={`bg-white/5 shadow-2xl ${config.heroImage.ring ? "ring-1 ring-white/10" : ""} ${config.heroImage.rounded ?? "rounded-md"}${config.heroImage.imageColor ? " " + config.heroImage.imageColor : ""}`} quality={config.heroImage.quality} unoptimized={config.heroImage.unoptimized}/>
								</div>
							</div>
						) : null}
					</div>
				</div>
			</div>
			<div className="h-38"></div>
			{config.featuresGrid && <>
				<FeaturesGrid featuresGrid={config.featuresGrid}/>
				<div className="h-38"></div>
			</>}
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
			{config.repositories && config.repositories.length > 0 && <>
				<Repositories repositories={config.repositories} installers={config.installers}/>
				<div className="h-38"></div>
			</>}
			{config.footer && <Footer footer={config.footer}/>}
		</Gradient>
	)
}
