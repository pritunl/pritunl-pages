import sharp from "sharp"
import { readdir, stat } from "fs/promises"
import path from "path"

const ASSETS_DIR = "./app/assets"

async function findImages(dir: string): Promise<string[]> {
	const entries = await readdir(dir, { withFileTypes: true })
	const files: string[] = []

	for (const entry of entries) {
		const fullPath = path.join(dir, entry.name)
		if (entry.isDirectory()) {
			files.push(...(await findImages(fullPath)))
		} else if (entry.isFile() && entry.name.toLowerCase().endsWith(".png")) {
			files.push(fullPath)
		}
	}

	return files
}

async function main() {
	const files = await findImages(ASSETS_DIR)

	if (files.length === 0) {
		console.log("No PNG files found in " + ASSETS_DIR)
		process.exit(0)
	}

	console.log(`Found ${files.length} PNG files\n`)

	for (const file of files) {
		const dir = path.dirname(file)
		const name = path.basename(file, ".png")
		const output = path.join(dir, `${name}.avif`)

		const info = await sharp(file)
			.avif({ quality: 50, effort: 9 })
			.toFile(output)

		const original = await stat(file)
		const reduction = (
			((original.size - info.size) / original.size) *
			100
		).toFixed(1)

		console.log(
			`${file} -> ${output}  (${(original.size / 1024).toFixed(0)}KB -> ${(info.size / 1024).toFixed(0)}KB, -${reduction}%)`
		)
	}

	console.log("\nImage Optimize Complete")
}

main()
