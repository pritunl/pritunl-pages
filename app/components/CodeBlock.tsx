"use client"

import { useState } from "react"

interface Props {
	code: string
	highlightedHtml: string
	codeTitle?: string
	codeHeight?: string
	className?: string
}

export default function CodeBlock({ code, highlightedHtml, codeTitle, codeHeight, className }: Props) {
	const [copied, setCopied] = useState(false)

	return (
		<div className={`max-w-full rounded-xl bg-white/2.5 ring-1 ring-inset ring-white/10 overflow-hidden${className ? " " + className : ""}`}>
			<div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
				<span className="text-sm font-medium text-gray-400">
					{codeTitle || ""}
				</span>
				<button
					onClick={() => {
						navigator.clipboard?.writeText(code).then(() => {
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
				className="shiki-wrapper p-4 overflow-x-auto overflow-y-auto text-sm leading-relaxed bg-black/20 [&_pre]:!bg-transparent [&_code]:!bg-transparent"
				style={codeHeight ? { maxHeight: codeHeight } : undefined}
				dangerouslySetInnerHTML={{ __html: highlightedHtml }}
			/>
		</div>
	)
}
