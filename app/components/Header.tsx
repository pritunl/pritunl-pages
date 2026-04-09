import Link from "next/link"
import HeaderMenu from "./HeaderMenu"
import Pritunl from "../logos/Pritunl"
import type { ProductConfig } from "../types"

export default function Header({ config }: { config: ProductConfig }) {
	return (
		<header className="absolute inset-x-0 top-0 z-50">
			<nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
				<div className="flex lg:flex-1">
					<Link href="/" className="-m-1.5 p-1.5">
						<span className="sr-only">{config.name}</span>
						<Pritunl aria-label="Pritunl Logo" className="h-10 w-auto text-white" />
					</Link>
				</div>
				<HeaderMenu name={config.name} navigation={config.navigation} />
				<div className="hidden lg:flex lg:gap-x-12">
					{config.navigation.map((item) =>
						item.external ? (
							<a key={item.name} href={item.href} target="_blank" className="text-sm/6 font-medium text-white">
								{item.name}
							</a>
						) : (
							<Link key={item.name} href={item.href} className="text-sm/6 font-medium text-white">
								{item.name}
							</Link>
						)
					)}
				</div>
				<div className="hidden lg:flex lg:flex-1"></div>
			</nav>
		</header>
	)
}
