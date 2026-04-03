import { createHighlighter } from "shiki"

let highlighter: Awaited<ReturnType<typeof createHighlighter>> | null = null

export async function highlight(code: string, lang: string) {
	if (!highlighter) {
		highlighter = await createHighlighter({
			themes: ["github-dark"],
			langs: ["bash"],
		})
	}
	return highlighter.codeToHtml(code, { lang, theme: "github-dark" })
}
