import Header from "./Header"
import { Gradient } from "./Themed"

import Image from "next/image"

import type { PageProps } from "../types"

export default function Home({ config }: PageProps) {
	return (
		<Gradient>
			<Header config={config}/>
			<div className="pt-14">
				<div className="py-24 sm:py-32 lg:pb-24">
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
						<div className="mt-16 flow-root sm:mt-24">
							<div className="-m-2 rounded-xl bg-white/2.5 p-2 ring-1 ring-inset ring-white/10 lg:-m-4 lg:rounded-2xl lg:p-4">
								<Image src={config.heroImage} alt={config.heroImageAlt} className="rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Gradient>
	)
}
