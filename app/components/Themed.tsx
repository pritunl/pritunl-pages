const clipPath1 = "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
const clipPath2 = "polygon(20% 10%, 45% 0%, 70% 15%, 90% 35%, 100% 60%, 85% 80%, 60% 95%, 35% 100%, 10% 85%, 0% 55%, 5% 30%, 20% 10%)"
const clipPath3 = "polygon(50% 0%, 80% 10%, 100% 40%, 95% 70%, 75% 100%, 40% 90%, 10% 70%, 0% 40%, 15% 15%, 50% 0%)"

export function Gradient({ children }: { children: React.ReactNode }) {
	return (
		<div className="relative isolate bg-gray-950 overflow-hidden">
			<div aria-hidden="true" className="absolute inset-x-0 top-10 -z-10 transform-gpu overflow-hidden blur-3xl">
				<div
					style={{ clipPath: clipPath1 }}
					className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
				/>
			</div>
			<div aria-hidden="true" className="absolute inset-x-0 top-[20%] -z-10 transform-gpu overflow-hidden blur-3xl">
				<div
					style={{ clipPath: clipPath2 }}
					className="relative left-[calc(50%-20rem)] aspect-[1155/678] w-[40rem] -translate-x-1/2 rotate-[150deg] bg-gradient-to-tr from-[#9089fc] to-[#ff80b5] opacity-15 sm:left-[calc(50%-40rem)] sm:w-[80rem]"
				/>
			</div>
			<div aria-hidden="true" className="absolute inset-x-0 top-[40%] -z-10 transform-gpu overflow-hidden blur-3xl">
				<div
					style={{ clipPath: clipPath1 }}
					className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
				/>
			</div>
			<div aria-hidden="true" className="absolute inset-x-0 top-[60%] -z-10 transform-gpu overflow-hidden blur-3xl">
				<div
					style={{ clipPath: clipPath3 }}
					className="relative left-[calc(50%+10rem)] aspect-[1155/678] w-[44rem] -translate-x-1/2 rotate-[200deg] bg-gradient-to-tr from-[#ff80b5] to-[#7c6dfc] opacity-15 sm:left-[calc(50%+20rem)] sm:w-[76rem]"
				/>
			</div>
			<div aria-hidden="true" className="absolute inset-x-0 top-[80%] -z-10 transform-gpu overflow-hidden blur-3xl">
				<div
					style={{ clipPath: clipPath2 }}
					className="relative left-[calc(50%-15rem)] aspect-[1155/678] w-[38rem] -translate-x-1/2 rotate-[60deg] bg-gradient-to-tr from-[#9089fc] to-[#ff80b5] opacity-15 sm:left-[calc(50%-25rem)] sm:w-[74rem]"
				/>
			</div>
			<div aria-hidden="true" className="absolute inset-x-0 top-[30%] -z-10 transform-gpu overflow-hidden blur-3xl">
				<div
					style={{ clipPath: clipPath3 }}
					className="relative left-[calc(50%+15rem)] aspect-[1155/678] w-[42rem] -translate-x-1/2 rotate-[110deg] bg-gradient-to-tr from-[#7c6dfc] to-[#ff80b5] opacity-15 sm:left-[calc(50%+30rem)] sm:w-[78rem]"
				/>
			</div>
			<div aria-hidden="true" className="absolute inset-x-0 top-[50%] -z-10 transform-gpu overflow-hidden blur-3xl">
				<div
					style={{ clipPath: clipPath2 }}
					className="relative left-[calc(50%-8rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 rotate-[270deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-15 sm:left-[calc(50%-20rem)] sm:w-[70rem]"
				/>
			</div>
			<div aria-hidden="true" className="absolute inset-x-0 top-[70%] -z-10 transform-gpu overflow-hidden blur-3xl">
				<div
					style={{ clipPath: clipPath1 }}
					className="relative left-[calc(50%+5rem)] aspect-[1155/678] w-[38rem] -translate-x-1/2 rotate-[330deg] bg-gradient-to-tr from-[#9089fc] to-[#7c6dfc] opacity-15 sm:left-[calc(50%+15rem)] sm:w-[75rem]"
				/>
			</div>
			<div aria-hidden="true" className="absolute inset-x-0 bottom-30 -z-10 transform-gpu overflow-hidden blur-3xl">
				<div
					style={{ clipPath: clipPath1 }}
					className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
				/>
			</div>

			{children}
		</div>
	)
}
