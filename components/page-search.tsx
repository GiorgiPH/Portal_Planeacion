"use client"

import { useEffect, useMemo, useState } from "react"
import { Search, X } from "lucide-react"

export interface SearchEntry {
  id: string
  title: string
  description: string
  keywords: string
  href?: string
  fetchContent?: boolean
  content?: string
}

interface PageSearchProps {
  entries: SearchEntry[]
}

function normalizeText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("es")
}

function extractPageContent(html: string) {
  const document = new DOMParser().parseFromString(html, "text/html")
  const main = document.querySelector("main")
  if (!main) {
    throw new Error("La página no contiene una sección principal para buscar.")
  }

  const blockElements = main.querySelectorAll(
    "address, article, blockquote, div, h1, h2, h3, h4, h5, h6, li, p, section",
  )
  blockElements.forEach((element) => {
    element.before(document.createTextNode(" "))
    element.after(document.createTextNode(" "))
  })

  return {
    content: main.textContent?.replace(/\s+/g, " ").trim() ?? "",
  }
}

function getMatchingSnippet(entry: SearchEntry, searchTerms: string[]) {
  if (!entry.content) return entry.description

  const normalizedContent = normalizeText(entry.content)
  const matchingTerm = [...searchTerms]
    .sort((first, second) => second.length - first.length)
    .find((term) => normalizedContent.includes(term))
  if (!matchingTerm) return entry.description

  const matchIndex = normalizedContent.indexOf(matchingTerm)
  let start = Math.max(0, matchIndex - 70)
  if (start > 0) {
    const previousSpace = entry.content.lastIndexOf(" ", start)
    if (previousSpace >= start - 25) start = previousSpace + 1
  }
  let end = Math.min(entry.content.length, matchIndex + matchingTerm.length + 110)
  const nextSpace = entry.content.indexOf(" ", end)
  if (nextSpace >= 0) end = nextSpace
  const snippet = entry.content.slice(start, end)

  return `${start > 0 ? "..." : ""}${snippet}${end < entry.content.length ? "..." : ""}`
}

export function PageSearch({ entries }: PageSearchProps) {
  const [query, setQuery] = useState("")
  const [loadedPages, setLoadedPages] = useState<SearchEntry[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasLoadedPages, setHasLoadedPages] = useState(false)
  const [loadError, setLoadError] = useState("")
  const [retryCount, setRetryCount] = useState(0)
  const searchTerms = useMemo(
    () => normalizeText(query).trim().split(/\s+/).filter(Boolean),
    [query],
  )
  const isSearchActive = searchTerms.length > 0

  useEffect(() => {
    if (!isSearchActive || hasLoadedPages) return

    const pagesToFetch = entries.filter(
      (entry): entry is SearchEntry & { href: string } =>
        entry.fetchContent === true && Boolean(entry.href),
    )
    if (pagesToFetch.length === 0) {
      setHasLoadedPages(true)
      return
    }

    setIsLoading(true)
    void Promise.allSettled(
      pagesToFetch.map(async (entry) => {
        const response = await fetch(entry.href, { headers: { Accept: "text/html" } })
        if (!response.ok) {
          throw new Error(`No se pudo cargar ${entry.title} (${response.status}).`)
        }

        const { content } = extractPageContent(await response.text())
        return { ...entry, content }
      }),
    ).then((results) => {
      const successfulPages = results.flatMap((result) =>
        result.status === "fulfilled" ? [result.value] : [],
      )
      const failedPages = results.flatMap((result, index) =>
        result.status === "rejected" ? [pagesToFetch[index].title] : [],
      )
      setLoadedPages(successfulPages)
      setLoadError(
        failedPages.length > 0
          ? `No se pudo cargar el contenido de: ${failedPages.join(", ")}.`
          : "",
      )
      setHasLoadedPages(true)
      setIsLoading(false)
    })
  }, [entries, hasLoadedPages, isSearchActive, retryCount])

  const results = useMemo(() => {
    if (!isSearchActive) return []

    return [...entries.filter((entry) => !entry.fetchContent), ...loadedPages].filter((entry) => {
      const searchableText = normalizeText(
        `${entry.title} ${entry.description} ${entry.keywords} ${entry.content ?? ""}`,
      )
      return searchTerms.every((term) => searchableText.includes(term))
    })
  }, [entries, isSearchActive, loadedPages, searchTerms])

  return (
    <section aria-labelledby="page-search-title" className="mb-10">
      <h2 id="page-search-title" className="mb-3 text-xl font-semibold text-[#1E2B1C]">
        ¿Qué estás buscando?
      </h2>
      <div className="relative">
        <Search
          aria-hidden="true"
          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500"
        />
        <label className="sr-only" htmlFor="page-search">
          Buscar temas, programas o secciones
        </label>
        <input
          id="page-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Busca palabras clave, temas o programas..."
          className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-12 pr-12 text-base text-gray-900 shadow-sm outline-none transition focus:border-[#1E2B1C] focus:ring-2 focus:ring-[#1E2B1C]/20"
          aria-controls="page-search-results"
          aria-describedby="page-search-help"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            aria-label="Limpiar búsqueda"
            className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
          >
            <X aria-hidden="true" className="h-4 w-4" />
          </button>
        )}
      </div>
      <p id="page-search-help" className="mt-2 text-sm text-gray-600">
        Busca en el contenido de todas las páginas y tarjetas del portal; puedes usar varias palabras.
      </p>

      {isSearchActive && (
        <div
          id="page-search-results"
          role="region"
          aria-live="polite"
          aria-label="Resultados de búsqueda"
          className="mt-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
        >
          {results.length > 0 ? (
            <>
              <p className="mb-3 text-sm font-medium text-gray-700">
                {isLoading
                  ? "Buscando en todas las páginas..."
                  : `${results.length} ${results.length === 1 ? "resultado" : "resultados"}`}
              </p>
              <ul className="grid gap-2 sm:grid-cols-2">
                {results.map((entry) => (
                  <li key={entry.id}>
                    <a
                      href={entry.href ?? `#${entry.id}`}
                      className="block rounded-lg p-3 transition hover:bg-[#f3f4ec] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E2B1C]"
                    >
                      <span className="font-semibold text-[#1E2B1C]">{entry.title}</span>
                      <span className="mt-1 block text-sm leading-relaxed text-gray-600">
                        {getMatchingSnippet(entry, searchTerms)}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </>
          ) : isLoading ? (
            <p className="text-sm text-gray-700">Buscando en todas las páginas del portal...</p>
          ) : (
            <p className="text-sm text-gray-700">
              No encontramos coincidencias. Prueba con otras palabras clave.
            </p>
          )}
          {loadError && (
            <p role="alert" className="mt-3 text-sm text-red-700">
              {loadError}{" "}
              <button
                type="button"
                onClick={() => {
                  setHasLoadedPages(false)
                  setLoadError("")
                  setRetryCount((count) => count + 1)
                }}
                className="font-semibold underline underline-offset-2"
              >
                Intentar de nuevo
              </button>
            </p>
          )}
        </div>
      )}
    </section>
  )
}
