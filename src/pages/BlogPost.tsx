/**
 * Blog post detail page — renders a full article from blogs.json.
 * Content is matched by URL slug parameter.
 */

import { useParams, Link } from 'react-router'
import { useTranslation } from 'react-i18next'
import blogsData from '../data/blogs.json'

type Lang = 'en' | 'es'

function useLang(): Lang {
  const { i18n } = useTranslation()
  return (i18n.language || 'en').startsWith('es') ? 'es' : 'en'
}

/**
 * Renders simple markdown-like text to React elements.
 * Supports **bold**, *italic*, and paragraph breaks via \n\n.
 */
function renderContent(text: string) {
  const paragraphs = text.split('\n\n')

  return paragraphs.map((para, pIdx) => {
    // Process inline formatting: **bold** and *italic*
    const parts: (string | JSX.Element)[] = []
    let remaining = para
    let keyIdx = 0

    while (remaining.length > 0) {
      // Bold **text**
      const boldMatch = remaining.match(/\*\*(.+?)\*\*/)
      // Italic *text*
      const italicMatch = remaining.match(/\*(.+?)\*/)

      const firstMatch =
        boldMatch && italicMatch
          ? (boldMatch.index ?? Infinity) <= (italicMatch.index ?? Infinity)
            ? boldMatch
            : italicMatch
          : boldMatch || italicMatch

      if (!firstMatch || firstMatch.index === undefined) {
        parts.push(remaining)
        break
      }

      // Add text before the match
      if (firstMatch.index > 0) {
        parts.push(remaining.slice(0, firstMatch.index))
      }

      // Add formatted text
      const isBold = firstMatch[0].startsWith('**')
      if (isBold) {
        parts.push(
          <strong key={`b-${pIdx}-${keyIdx++}`} className="font-semibold text-[#2A441F]">
            {firstMatch[1]}
          </strong>
        )
      } else {
        parts.push(
          <em key={`i-${pIdx}-${keyIdx++}`} className="italic">
            {firstMatch[1]}
          </em>
        )
      }

      remaining = remaining.slice(firstMatch.index + firstMatch[0].length)
    }

    return (
      <p key={pIdx} className="mb-6 text-base leading-[1.85] text-[#3B3322]/85">
        {parts}
      </p>
    )
  })
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const lang = useLang()

  const post = blogsData.posts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <h1 className="text-2xl font-light tracking-wide text-[#2A441F]">
          {lang === 'es' ? 'Artículo no encontrado' : 'Article not found'}
        </h1>
        <Link
          to="/blog"
          className="mt-6 inline-block rounded-full border border-[#2A441F] px-6 py-2 text-xs uppercase tracking-[0.2em] text-[#2A441F] transition-colors hover:bg-[#2A441F] hover:text-[#F5F1E8]"
        >
          {lang === 'es' ? 'Ver todos los artículos' : 'View all articles'}
        </Link>
      </section>
    )
  }

  const formattedDate = new Date(post.date).toLocaleDateString(
    lang === 'es' ? 'es-ES' : 'en-US',
    { year: 'numeric', month: 'long', day: 'numeric' }
  )

  return (
    <article className="mx-auto max-w-2xl px-4 py-16 md:px-6 lg:px-8">
      {/* Back link */}
      <Link
        to="/blog"
        className="mb-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#6B7A52] transition-colors hover:text-[#2A441F]"
      >
        <span aria-hidden="true">&larr;</span>
        {lang === 'es' ? 'Todos los artículos' : 'All articles'}
      </Link>

      {/* Header */}
      <header className="mb-10">
        <p className="mb-2 text-xs uppercase tracking-[0.22em] text-[#B29476]">
          {post.type}
        </p>
        <h1 className="text-3xl font-light leading-snug tracking-wide text-[#2A441F] md:text-4xl">
          {post.title[lang]}
        </h1>
        <div className="mt-4 flex items-center gap-3 text-sm text-[#6B7A52]">
          <time dateTime={post.date}>{formattedDate}</time>
          <span className="text-[#B29476]">·</span>
          <span>{post.readingTime[lang]}</span>
        </div>
      </header>

      {/* Divider */}
      <div className="mb-10 h-px bg-[#B29476]/30" />

      {/* Article body */}
      <div className="prose-ananta">{renderContent(post.content[lang])}</div>

      {/* Footer */}
      <div className="mt-14 border-t border-[#B29476]/30 pt-8 text-center">
        <p className="mb-4 text-sm text-[#6B7A52]">
          {lang === 'es'
            ? '¿Te resonó este texto? Compártelo con alguien que lo necesite.'
            : 'Did this resonate? Share it with someone who needs it.'}
        </p>
        <Link
          to="/blog"
          className="inline-block rounded-full border border-[#2A441F] px-6 py-2 text-xs uppercase tracking-[0.2em] text-[#2A441F] transition-colors hover:bg-[#2A441F] hover:text-[#F5F1E8]"
        >
          {lang === 'es' ? 'Más artículos' : 'More articles'}
        </Link>
      </div>
    </article>
  )
}
