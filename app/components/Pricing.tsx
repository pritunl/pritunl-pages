import type { Pricing as PricingType } from "../types"
import { Check } from "lucide-react"

interface Props {
	pricing: PricingType
}

export default function Pricing({ pricing }: Props) {
	return (
		<div id="pricing" className="relative isolate px-6 lg:px-8">
			<div className="mx-auto max-w-4xl text-center">
				<p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-white sm:text-6xl">
					{pricing.title}
				</p>
			</div>
			<p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
				{pricing.description}
			</p>
			<div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
				{pricing.plans.map((plan, planIdx) => (
					<div
						key={plan.name}
						className={[
							plan.featured ? "relative bg-gray-800" : "bg-white/2.5 sm:mx-8 lg:mx-0",
							plan.featured
								? ""
								: planIdx === 0
									? "rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl"
									: "sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none",
							"rounded-3xl p-8 ring-1 ring-white/10 sm:p-10",
						].filter(Boolean).join(" ")}
					>
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
							className="mt-8 space-y-3 text-sm/6 text-gray-300 sm:mt-10"
						>
							{plan.features.map((feature) => {
								const Icon = feature.icon || Check
								return (
									<li key={feature.label} className="flex gap-x-3">
										<Icon
											aria-hidden="true"
											className="h-6 w-5 flex-none text-indigo-400"
										/>
										{feature.label}
									</li>
								)
							})}
						</ul>
						{plan.href && (
							<a
								href={plan.href}
								target="_blank"
								rel="noopener noreferrer"
								className={[
									plan.featured
										? "bg-indigo-500 text-white hover:bg-indigo-400 focus-visible:outline-indigo-500"
										: "bg-white/10 text-white inset-ring inset-ring-white/5 hover:bg-white/20 focus-visible:outline-white/75",
									"mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10",
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
