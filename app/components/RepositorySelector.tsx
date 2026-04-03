"use client"

import { useState, type ComponentType, type SVGProps } from "react"
import type { RepositoryDistribution } from "../types"
import ArchLinux from "../icons/ArchLinux"
import AlmaLinux from "../icons/AlmaLinux"
import RockyLinux from "../icons/RockyLinux"
import Debian from "../icons/Debian"
import OracleLinux from "../icons/OracleLinux"
import Fedora from "../icons/Fedora"
import Ubuntu from "../icons/Ubuntu"

interface RepositoryEntry {
	label: string
	distribution: RepositoryDistribution
	commands: string
	highlightedHtml: string
}

interface Props {
	entries: RepositoryEntry[]
}

const distroIcons: Record<RepositoryDistribution, ComponentType<SVGProps<SVGSVGElement>>> = {
	arch: ArchLinux,
	alma: AlmaLinux,
	rocky: RockyLinux,
	debian: Debian,
	oracle: OracleLinux,
	fedora: Fedora,
	ubuntu: Ubuntu,
}

export default function RepositorySelector({ entries }: Props) {
	const [selected, setSelected] = useState(0)
	const [copied, setCopied] = useState(false)

	return (
		<>
			<div className="mt-8 grid grid-cols-1 min-[380px]:grid-cols-2 md:grid-cols-4 gap-2">
				{entries.map((entry, i) => {
					const Icon = distroIcons[entry.distribution]
					return (
						<button
							key={i}
							onClick={() => setSelected(i)}
							className={`inline-flex items-center justify-center gap-x-2 rounded-md px-1 py-2 text-sm font-semibold transition-colors cursor-pointer ${
								selected === i
									? "bg-indigo-500 text-white shadow-xs"
									: "bg-white/5 text-gray-300 ring-1 ring-inset ring-white/10 hover:bg-white/10"
							}`}
						>
							<Icon aria-hidden="true" className="h-4 w-4" />
							{entry.label}
						</button>
					)
				})}
			</div>
			<div className="mt-6 rounded-lg bg-white/2.5 ring-1 ring-inset ring-white/10 overflow-hidden">
				<div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
					<span className="text-sm font-medium text-gray-400">
						{entries[selected].label}
					</span>
					<button
						onClick={() => {
							navigator.clipboard?.writeText(entries[selected].commands).then(() => {
								setCopied(true)
								setTimeout(() => setCopied(false), 1500)
							})
						}}
						className={`text-xs transition-colors cursor-pointer ${
							copied
								? "text-indigo-400"
								: "text-gray-500 hover:text-gray-300"
						}`}
					>
						{copied ? "Copied!" : "Copy"}
					</button>
				</div>
				<div
					className="shiki-wrapper p-4 overflow-x-auto text-sm leading-relaxed bg-black/20 [&_pre]:!bg-transparent [&_code]:!bg-transparent"
					dangerouslySetInnerHTML={{ __html: entries[selected].highlightedHtml }}
				/>
			</div>
		</>
	)
}
