"use client"

import { useState } from "react"
import { Dialog, DialogPanel } from "@headlessui/react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import pritunlLogo from "../assets/pritunl.png"
import type { NavItem } from "../types"

export default function HeaderMenu(
	{ name, navigation }: { name: string; navigation: NavItem[] }
) {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	return (
		<>
			<div className="flex lg:hidden">
				<button
					type="button"
					onClick={() => setMobileMenuOpen(true)}
					className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
				>
					<span className="sr-only">Open main menu</span>
					<Menu aria-hidden="true" className="size-6" />
				</button>
			</div>
			<Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
				<div className="fixed inset-0 z-50" />
				<DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
					<div className="flex items-center justify-between">
						<Link href="/" className="-m-1.5 p-1.5">
							<span className="sr-only">{name}</span>
							<Image src={pritunlLogo} alt="Pritunl Logo" className="h-9 w-auto" />
						</Link>
						<button
							type="button"
							onClick={() => setMobileMenuOpen(false)}
							className="-m-2.5 rounded-md p-2.5 text-gray-200"
						>
							<span className="sr-only">Close menu</span>
							<X aria-hidden="true" className="size-6" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/30">
							<div className="space-y-2 py-6">
								{navigation.map((item) =>
									item.external ? (
										<a key={item.name} href={item.href} target="_blank" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5">
											{item.name}
										</a>
									) : (
										<Link key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5">
											{item.name}
										</Link>
									)
								)}
							</div>
							<div className="py-6">
								<Link href="/log-in" onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5">
									Log in
								</Link>
								<Link href="/sign-up" onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5">
									Sign Up
								</Link>
							</div>
						</div>
					</div>
				</DialogPanel>
			</Dialog>
		</>
	)
}
