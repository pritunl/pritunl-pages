import type { Client } from "../types"
import Image from "./Image"
import Repositories from "./Repositories"

interface Props {
	client: Client
}

export default async function Client({ client }: Props) {
	return (
		<div className="relative isolate px-6 lg:px-8">
			<div className="mx-auto max-w-4xl">
				{client.logo && (
					<div className="flex justify-center">
						<Image
							image={client.logo}
							alt={client.logoAlt || ""}
							className="h-16 w-auto text-white"
						/>
					</div>
				)}
				<h2 className="mt-6 text-center text-4xl font-medium tracking-tight text-balance text-white sm:text-5xl">
					{client.title}
				</h2>
				<p className="mx-auto mt-6 max-w-xl text-center text-lg/8 text-pretty text-gray-400">
					{client.description}
				</p>
				{client.image && (
					<div className="mt-10 flex justify-center max-w-lg mx-auto">
						<div className="-m-2 rounded-xl bg-white/2.5 p-2 ring-1 ring-inset ring-white/10 lg:-m-4 lg:rounded-2xl lg:p-4 w-fit">
							<Image
								image={client.image}
								alt={client.imageAlt!}
								className={`bg-white/5 shadow-2xl ${client.imageRing ? "ring-1 ring-white/10" : ""} ${client.imageRounded ?? "rounded-md"}`}
							/>
						</div>
					</div>
				)}
				{client.link && (
					<div className="mt-10 flex justify-center">
						<a
							href={client.link}
							{...(client.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
							className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-base font-semibold text-white shadow-xs hover:bg-indigo-400 transition-colors"
						>
							{client.linkLabel}
						</a>
					</div>
				)}
				{client.repositories && client.repositories.length > 0 && <>
					<div className="h-12"></div>
					<Repositories
						installTitle={client.installTitle!}
						installDescription={client.installDescription!}
						repositories={client.repositories!}
						installers={client.installers!}
					/>
				</>}
			</div>
		</div>
	)
}
