import product from "./config"

export default function RootPage() {
	const HomePage = product.pages.home
	return <HomePage config={product.config} />
}
