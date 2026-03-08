import type { ProductDefinition } from "./types"

import cloud from "./cloud/config"
import zero from "./zero/config"

const products: Record<string, ProductDefinition> = {
	cloud,
	zero,
}
