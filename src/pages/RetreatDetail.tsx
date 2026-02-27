/**
 * Retreat detail page — shows full information for a single retreat.
 * Data is loaded from retreats.json, matched by URL slug.
 */

import { useParams, Link } from 'react-router'
import { useTranslation } from 'react-i18next'
import retreatsData from '../data/retreats.json'

type Lang = 'en' | 'es'

function useLang(): Lang {
  const { i18n } = useTranslation()
  return (i18n.language || 'en').startsWith('es') ? 'es' : 'en'
}

export default function RetreatDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const { t } = useTranslation()
  const lang = useLang()

  const retreat = retreatsData.retreats.find((r) => r.slug === slug)

  if (!retreat) {
    return (
      <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <h1 className="text-2xl font-light tracking-wide text-[#2A441F]">
          {lang === 'es' ? 'Retiro no encontrado' : 'Retreat not found'}
        </h1>
        <Link
          to="/retreats"
          className="mt-6 inline-block rounded-full border border-[#2A441F] px-6 py-2 text-xs uppercase tracking-[0.2em] text-[#2A441F] transition-colors hover:bg-[#2A441F] hover:text-[#F5F1E8]"
        >
          {lang === 'es' ? 'Ver todos los retiros' : 'View all retreats'}
        </Link>
      </section>
    )
  }

  const sections = [
    { label: lang === 'es' ? 'Beneficios' : 'Benefits', items: retreat.benefits[lang] },
    { label: lang === 'es' ? 'Incluye' : 'Includes', items: retreat.includes[lang] },
    { label: lang === 'es' ? 'Actividades' : 'Activities', items: retreat.activities[lang] },
    { label: lang === 'es' ? 'Preparación' : 'Preparation', items: retreat.tasks[lang] },
  ]

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 md:px-6 lg:px-8">
      {/* Back link */}
      <Link
        to="/retreats"
        className="mb-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#6B7A52] transition-colors hover:text-[#2A441F]"
      >
        <span aria-hidden="true">&larr;</span>
        {lang === 'es' ? 'Todos los retiros' : 'All retreats'}
      </Link>

      {/* Header */}
      <header className="mb-12">
        <p className="mb-2 text-xs uppercase tracking-[0.22em] text-[#6B7A52]">
          {retreat.focus[lang]}
        </p>
        <h1 className="text-3xl font-light leading-snug tracking-wide text-[#2A441F] md:text-4xl">
          {retreat.name[lang]}
        </h1>
        <div className="mt-4 flex flex-wrap gap-4 text-sm text-[#4A5C35]">
          <span>{retreat.dates[lang]}</span>
          <span className="text-[#B29476]">·</span>
          <span>{retreat.place[lang]}</span>
        </div>
        <p className="mt-2 text-lg font-medium text-[#2A441F]">{retreat.price}</p>
      </header>

      {/* Description */}
      <section className="mb-12">
        <p className="text-base leading-relaxed text-[#3B3322]/85">
          {retreat.description[lang]}
        </p>
      </section>

      {/* Detail sections */}
      <div className="space-y-10">
        {sections.map((section) => (
          <section key={section.label}>
            <h2 className="mb-4 text-xs uppercase tracking-[0.22em] text-[#6B7A52]">
              {section.label}
            </h2>
            <ul className="space-y-2">
              {section.items.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm leading-relaxed text-[#3B3322]/85"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#B29476]" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {/* Receiving / closing message */}
      <section className="mt-14 rounded-2xl bg-[#F5F1E8] p-8">
        <h2 className="mb-4 text-xs uppercase tracking-[0.22em] text-[#6B7A52]">
          {lang === 'es' ? 'Lo que recibirás' : 'What you will receive'}
        </h2>
        <p className="text-base italic leading-relaxed text-[#3B3322]/80">
          {retreat.receiving[lang]}
        </p>
      </section>

      {/* CTA */}
      <div className="mt-12 text-center">
        <a
          href={`https://wa.me/50672511368?text=${encodeURIComponent(
            lang === 'es'
              ? `Hola, me interesa el retiro "${retreat.name.es}"`
              : `Hi, I'm interested in the "${retreat.name.en}" retreat`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-[#2A441F] px-8 py-3 text-xs uppercase tracking-[0.2em] text-[#F5F1E8] transition-colors hover:bg-[#4A5C35]"
        >
          {lang === 'es' ? 'Reservar mi lugar' : 'Reserve my spot'}
        </a>
      </div>
    </article>
  )
}
