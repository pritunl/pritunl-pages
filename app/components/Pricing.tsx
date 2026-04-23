import type { Pricing as PricingType } from "../types"
import { Check } from "lucide-react"
import FeatureDetails from "./FeatureDetails"

interface Props {
	pricing: PricingType
}

export default function Pricing({ pricing }: Props) {
	const isThreeCol = pricing.plans.length === 3

	// For 3-col layout, reorder so featured plan is in the middle
	const orderedPlans = isThreeCol
		? (() => {
				const featured = pricing.plans.find((p) => p.featured)
				const others = pricing.plans.filter((p) => !p.featured)
				if (featured && others.length === 2) {
					return [others[0], featured, others[1]]
				}
				return pricing.plans
			})()
		: pricing.plans

	return (
		<div id="pricing" className="relative isolate px-6 lg:px-8">
			<div className="mx-auto max-w-4xl text-center">
				<h2 className="mt-2 text-5xl font-medium tracking-tight text-balance text-white sm:text-6xl">
					{pricing.title}
				</h2>
			</div>
			<p className="mx-auto mt-6 max-w-2xl text-center text-lg text-pretty text-gray-400 sm:text-xl/8">
				{pricing.description}
			</p>
			<div
				className={
					isThreeCol
						? "mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-6xl lg:grid-cols-3 lg:items-start"
						: "mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2"
				}
			>
				{orderedPlans.map((plan, planIdx) => (
					<div
						key={plan.name}
						className={[
							plan.featured ? "relative bg-gray-900" : "bg-white/2.5 sm:mx-8 lg:mx-0",
							isThreeCol
								? planIdx === 0
									? "lg:rounded-tr-none lg:rounded-br-none mt-8"
									: planIdx === 2
										? "lg:rounded-tl-none lg:rounded-bl-none mt-8"
										: ""
								: plan.featured
									? ""
									: planIdx === 0
										? "rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl"
										: "sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none",
							"flex flex-col justify-between rounded-3xl p-8 ring-1 ring-white/10 sm:p-10",
						].filter(Boolean).join(" ")}
					>
						<div>
							<h3 className="text-base/7 font-semibold text-indigo-400">
								{plan.name}
							</h3>
							<p className="mt-4 flex items-baseline gap-x-2">
								{plan.cost === 0 ? (
									<span className="text-5xl font-semibold tracking-tight text-white">
										Free
									</span>
								) : (
									<>
										<span className="text-5xl font-semibold tracking-tight text-white">
											${plan.cost}
										</span>
										<span className="text-base text-gray-400">/month</span>
									</>
								)}
							</p>
							<p className="mt-6 text-base/7 text-gray-300">
								{plan.description}
							</p>
							<ul
								role="list"
								className="mt-8 space-y-3 text-base text-gray-300 sm:mt-10"
							>
								{plan.features.map((feature) => {
									const Icon = feature.icon || Check
									return (
										<li key={feature.label}>
											{feature.details ? (
												<FeatureDetails
													label={
														<>
															<Icon
																aria-hidden="true"
																className="h-6 w-5 flex-none text-indigo-400"
															/>
															<span className="flex-1">{feature.label}</span>
														</>
													}
													details={feature.details}
												/>
											) : (
												<span className="flex gap-x-3">
													<Icon
														aria-hidden="true"
														className="h-6 w-5 flex-none text-indigo-400"
													/>
													{feature.label}
												</span>
											)}
										</li>
									)
								})}
							</ul>
						</div>
						{plan.href && (
							<a
								href={plan.href}
								{...(plan.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
								className={[
									plan.featured
										? "bg-indigo-500 text-white hover:bg-indigo-400 focus-visible:outline-indigo-500"
										: "bg-white/10 text-white inset-ring inset-ring-white/5 hover:bg-white/20 focus-visible:outline-white/75",
									"mt-8 block rounded-md px-3.5 py-2.5 text-center text-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10",
								].join(" ")}
							>
								{plan.buttonLabel || "Get started today"}
							</a>
						)}
					</div>
				))}
			</div>
		</div>
	)
}
