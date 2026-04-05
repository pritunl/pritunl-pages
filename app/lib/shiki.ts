import { createHighlighterCore } from "shiki/core"
import { createJavaScriptRegexEngine } from "shiki/engine/javascript"
import githubDark from "shiki/themes/github-dark.mjs"
import langBash from "shiki/langs/bash.mjs"

let highlighter: Awaited<ReturnType<typeof createHighlighterCore>> | null = null

export async function highlight(code: string, lang: string) {
    if (!highlighter) {
        highlighter = await createHighlighterCore({
            themes: [githubDark],
            langs: [langBash],
            engine: createJavaScriptRegexEngine(),
        })
    }
    return highlighter.codeToHtml(code, { lang, theme: "github-dark" })
}
