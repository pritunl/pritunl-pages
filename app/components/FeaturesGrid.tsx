import type { FeaturesGrid as FeaturesGridType } from "../types"
import Image from "./Image"

interface Props {
	featuresGrid: FeaturesGridType
}

export default function FeaturesGrid({ featuresGrid }: Props) {
	const items = featuresGrid.items
	const numRows = Math.ceil(items.length / 3)

	function getClasses(index: number) {
		const col = index % 3
		const row = Math.floor(index / 3)
		const isFirstRow = row === 0
		const isLastRow = row === numRows - 1
		const isFirst = index === 0
		const isLast = index === items.length - 1

		const isTL = isFirstRow && col === 0
		const isTR = isFirstRow && (col === 2 || (isLast && col < 2))
		const isBL = isLastRow && col === 0
		const isBR = isLast

		const outerExtra: string[] = []
		if (isTL) outerExtra.push("lg:rounded-tl-4xl")
		if (isTR) outerExtra.push("lg:rounded-tr-4xl")
		if (isBL) outerExtra.push("lg:rounded-bl-4xl")
		if (isBR) outerExtra.push("lg:rounded-br-4xl")
		if (isFirst) outerExtra.push("max-lg:rounded-t-4xl")
		if (isLast) outerExtra.push("max-lg:rounded-b-4xl")

		const innerExtra: string[] = []
		if (isTL) innerExtra.push("lg:rounded-tl-[calc(2rem+1px)]")
		if (isTR) innerExtra.push("lg:rounded-tr-[calc(2rem+1px)]")
		if (isBL) innerExtra.push("lg:rounded-bl-[calc(2rem+1px)]")
		if (isBR) innerExtra.push("lg:rounded-br-[calc(2rem+1px)]")
		if (isFirst) innerExtra.push("max-lg:rounded-t-[calc(2rem+1px)]")
		if (isLast) innerExtra.push("max-lg:rounded-b-[calc(2rem+1px)]")

		const imgExtra: string[] = []
		if (isTL) imgExtra.push("rounded-tl-3xl")
		if (isFirst) imgExtra.push("max-lg:rounded-t-3xl")
		if (isTR) imgExtra.push("lg:rounded-tr-3xl")

		return {
			outer: outerExtra.join(" "),
			inner: innerExtra.join(" "),
			img: imgExtra.join(" "),
		}
	}

	return (
		<div>
			<div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
				<h2 className="mt-2 max-w-2xl text-4xl font-medium tracking-tight text-pretty text-white sm:text-5xl">
					{featuresGrid.title}
				</h2>
				<p className="mt-6 max-w-2xl text-lg text-gray-400">
					{featuresGrid.description}
				</p>
				<div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-3">
					{items.map((item, i) => {
						const cls = getClasses(i)
						return (
							<div key={i} className="relative">
								<div className={`absolute inset-0 rounded-lg bg-white/5 ${cls.outer}`}></div>
								<div className={`relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] ${cls.inner}`}>
									<div className={`relative m-2 h-60 shrink-0 overflow-hidden rounded-sm ring-1 ring-white/10 ${cls.img}`}>
										<Image
											name={item.image}
											alt={item.title}
											fill
											className="object-cover object-left"
										/>
									</div>
									<div className="p-6 pt-4">
										<p className="text-lg font-semibold tracking-tight text-white">{item.title}</p>
										<p className="mt-2 max-w-lg text-sm/6 text-gray-400">{item.description}</p>
									</div>
								</div>
								<div className={`pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-white/15 ${cls.outer}`}></div>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}
