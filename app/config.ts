import type { ProductDefinition } from "./types"

import cloud from "./cloud/config"
import zero from "./zero/config"
import client from "./client/config"
import vpn from "./vpn/config"

const products: Record<string, ProductDefinition> = {
	cloud,
	zero,
	client,
	vpn,
}

const product = products[process.env.NEXT_PUBLIC_PRODUCT as string]
export default product
