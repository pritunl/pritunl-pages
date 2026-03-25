import type { Support as SupportType } from "../types"

interface Props {
	support: SupportType
}

export default function Support({ support }: Props) {
	return (
		<div id="support" className="relative isolate px-6 lg:px-8">
			<div className="mx-auto max-w-4xl text-center">
				<p className="mt-2 text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
					{support.title}
				</p>
				<p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-400">
					{support.description}
				</p>
				<div className="mt-8 flex flex-wrap justify-center gap-4">
					{support.buttons.map((button) => {
						const Icon = button.icon
						return (
							<a
								key={button.label}
								href={button.link}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-x-2 rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
							>
								<Icon aria-hidden="true" className="h-5 w-5" />
								{button.label}
							</a>
						)
					})}
				</div>
			</div>
		</div>
	)
}
