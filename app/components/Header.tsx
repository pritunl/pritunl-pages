import Link from "next/link"
import Image from "next/image"
import HeaderMenu from "./HeaderMenu"
import pritunlLogo from "../assets/pritunl.png"
import type { ProductConfig } from "../types"

export default function Header({ config }: { config: ProductConfig }) {
	return (
		<header className="absolute inset-x-0 top-0 z-50">
			<nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
				<div className="flex lg:flex-1">
					<Link href="/" className="-m-1.5 p-1.5">
						<span className="sr-only">{config.name}</span>
						<Image src={pritunlLogo} alt="Pritunl Logo" className="h-10 w-auto" />
					</Link>
				</div>
				<HeaderMenu name={config.name} navigation={config.navigation} />
				<div className="hidden lg:flex lg:gap-x-12">
					{config.navigation.map((item) =>
						item.external ? (
							<a key={item.name} href={item.href} target="_blank" className="text-sm/6 font-semibold text-white">
								{item.name}
							</a>
						) : (
							<Link key={item.name} href={item.href} className="text-sm/6 font-semibold text-white">
								{item.name}
							</Link>
						)
					)}
				</div>
				<div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4 lg:items-center">
					<Link href="/log-in" className="text-sm/6 font-semibold text-white">Log in</Link>
					<Link href="/sign-up" className="rounded-md bg-indigo-500 px-3.5 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
						Sign Up
					</Link>
				</div>
			</nav>
		</header>
	)
}
