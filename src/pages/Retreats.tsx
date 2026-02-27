/**
 * Retreats page for Ananta Yoga & Meditation.
 * Highlights immersive retreat experiences with links to detail pages.
 */

import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'
import retreatsData from '../data/retreats.json'

type Lang = 'en' | 'es'

function useLang(): Lang {
  const { i18n } = useTranslation()
  return (i18n.language || 'en').startsWith('es') ? 'es' : 'en'
}

export default function RetreatsPage() {
  const { t } = useTranslation()
  const lang = useLang()

  return (
    <div className="bg-[#DCD7CD] text-[#1A1508]">
      <section className="border-b border-[#B29476]/20 bg-[#F5F1E8]">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-[#6B7A52]">
            {t('retreats.sectionLabel')}
          </p>
          <h1 className="mt-3 text-2xl uppercase tracking-[0.2em] text-[#2A441F]">
            {t('retreats.title')}
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#3B3322]">
            {t('retreats.intro')}
          </p>
        </div>
      </section>
      <section className="bg-[#DCD7CD]">
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {retreatsData.retreats.map((retreat) => (
              <article
                key={retreat.id}
                className="flex h-full flex-col justify-between rounded-2xl bg-[#F5F1E8] p-5 shadow-sm shadow-[#847668]/20"
              >
                <header>
                  <p className="text-[0.7rem] uppercase tracking-[0.2em] text-[#6B7A52]">
                    {retreat.dates[lang]}
                  </p>
                  <h2 className="mt-1 text-sm font-semibold uppercase tracking-[0.16em] text-[#2A441F]">
                    {retreat.name[lang]}
                  </h2>
                </header>
                <p className="mt-3 text-xs text-[#4A5C35]">{retreat.place[lang]}</p>
                <p className="mt-2 text-xs text-[#4A5C35]">
                  {lang === 'es' ? 'Enfoque' : 'Focus'}: {retreat.focus[lang]}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#3B3322]">
                  {retreat.description[lang]}
                </p>
                <p className="mt-2 text-xs font-semibold text-[#2A441F]">
                  {retreat.price}
                </p>
                <Link
                  to={`/retreats/${retreat.slug}`}
                  className="mt-4 inline-block rounded-full bg-[#2A441F] px-4 py-1.5 text-center text-[0.65rem] font-medium uppercase tracking-[0.2em] text-[#F5F1E8] transition-colors hover:bg-[#1A1508]"
                >
                  {lang === 'es' ? 'Ver detalles' : 'View Details'}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
