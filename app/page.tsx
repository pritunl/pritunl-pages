import type { ProductDefinition } from './types'

import cloud from './cloud/config'

const products: Record<string, ProductDefinition> = {
  cloud,
}

const product = products[process.env.PRODUCT as string]

export default function RootPage() {
  const HomePage = product.pages.home
  return <HomePage config={product.config} />
}
