/**
 * Events page for Ananta Yoga & Meditation.
 * Lists upcoming workshops, ceremonies, and special gatherings.
 */

import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'
import eventsData from '../data/events.json'

type Lang = 'en' | 'es'

function useLang(): Lang {
  const { i18n } = useTranslation()
  return (i18n.language || 'en').startsWith('es') ? 'es' : 'en'
}

export default function EventsPage() {
  const { t } = useTranslation()
  const lang = useLang()

  return (
    <div className="bg-[#DCD7CD] text-[#1A1508]">
      <section className="border-b border-[#B29476]/20 bg-[#F5F1E8]">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-[#6B7A52]">
            {t('events.sectionLabel')}
          </p>
          <h1 className="mt-3 text-2xl uppercase tracking-[0.2em] text-[#2A441F]">
            {t('events.title')}
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#3B3322]">
            {t('events.intro')}
          </p>
        </div>
      </section>
      <section className="bg-[#DCD7CD]">
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 lg:px-8">
          <div className="space-y-4">
            {eventsData.events.map((event: any) => (
              <article
                key={event.id}
                className="rounded-2xl bg-[#F5F1E8] p-5 shadow-sm shadow-[#847668]/20 md:flex md:items-start md:justify-between"
              >
                <div className="md:max-w-xl">
                  <p className="text-[0.7rem] uppercase tracking-[0.2em] text-[#6B7A52]">
                    {event.type}
                  </p>
                  <h2 className="mt-1 text-sm font-semibold uppercase tracking-[0.16em] text-[#2A441F]">
                    {event.title[lang]}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-[#3B3322]">
                    {event.description[lang].split(/\/blog\/\S+/)[0]}
                  </p>
                  {event.blogLink && (
                    <Link
                      to={event.blogLink}
                      className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-[#6B7A52] transition-colors hover:text-[#2A441F]"
                    >
                      {lang === 'es' ? 'Leer más sobre esta ceremonia' : 'Read more about this ceremony'}
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                  )}
                </div>
                <div className="mt-4 text-xs text-[#4A5C35] md:mt-0 md:text-right">
                  <p className="uppercase tracking-[0.2em]">{event.date}</p>
                  <p className="mt-1">{event.time}</p>
                  <p className="mt-1">{event.place}</p>
                  <a
                    href={event.reserveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block rounded-full bg-[#2A441F] px-4 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-[#F5F1E8] transition-colors hover:bg-[#1A1508]"
                  >
                    {lang === 'es' ? 'Reservar' : 'Reserve'}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
