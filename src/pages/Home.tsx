/**
 * Home page for Ananta Yoga & Meditation.
 * Presents the studio, core offerings, schedule highlights, and testimonials.
 */

import { CalendarDays, Heart, Music2, Sparkles } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'
import scheduleData from '../data/schedule.json'
import spaceData from '../data/space.json'
import testimonialsData from '../data/testimonials.json'

type Lang = 'en' | 'es'

function useLang(): Lang {
  const { i18n } = useTranslation()
  return (i18n.language || 'en').startsWith('es') ? 'es' : 'en'
}

export default function HomePage() {
  return (
    <div className="bg-[#DCD7CD] text-[#1A1508]">
      <HeroSection />
      <AboutSection />
      <OfferingsSection />
      <ScheduleSection />
      <SpaceImagerySection />
      <TestimonialsSection />
      <ClosingCtaSection />
    </div>
  )
}

function HeroSection() {
  const { t } = useTranslation()

  return (
    <section className="border-b border-[#B29476]/30 bg-[#F5F1E8]">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-14 md:flex-row md:items-center md:px-6 lg:px-8 lg:py-20">
        <div className="flex-1">
          <p className="text-xs uppercase tracking-[0.3em] text-[#6B7A52]">
            {t('home.hero.kicker')}
          </p>
          <h1 className="mt-4 text-3xl font-semibold uppercase tracking-[0.22em] text-[#2A441F] md:text-4xl">
            {t('home.hero.title')}
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-[#3B3322]">
            {t('home.hero.body')}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/events"
              className="rounded-full bg-[#2A441F] px-6 py-2 text-xs font-medium uppercase tracking-[0.25em] text-[#F5F1E8] transition-colors hover:bg-[#1A1508]"
            >
              {t('home.hero.ctaSchedule')}
            </Link>
            <Link
              to="/retreats"
              className="rounded-full border border-[#4A5C35] px-6 py-2 text-xs font-medium uppercase tracking-[0.25em] text-[#2A441F] transition-colors hover:border-[#2A441F] hover:bg-[#DCD7CD]"
            >
              {t('home.hero.ctaRetreats')}
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-4 text-xs text-[#4A5C35]">
            <div className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-[#4A5C35]" />
              {t('home.hero.badge1')}
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-[#4A5C35]" />
              {t('home.hero.badge2')}
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-[#4A5C35]" />
              {t('home.hero.badge3')}
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative mx-auto flex max-w-xs items-center justify-center rounded-3xl bg-[#DCD7CD] p-8 shadow-sm shadow-[#847668]/40">
            <div className="absolute inset-6 rounded-3xl border border-[#B29476]/40" />
            <img
              src="https://pub-cdn.sider.ai/u/U0O9H23ZYYJ/web-coder/69a0db496178e33e683c25bd/resource/6c0cab52-e705-41dc-b9ca-f5b88b15f17d.png"
              alt="Ananta Flourish Om calligraphic mark"
              className="relative h-64 w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  const { t } = useTranslation()

  return (
    <section className="border-b border-[#B29476]/20 bg-[#DCD7CD]">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr,0.9fr] md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#6B7A52]">
              {t('home.about.sectionLabel')}
            </p>
            <h2 className="mt-3 text-xl uppercase tracking-[0.18em] text-[#2A441F]">
              {t('home.about.title')}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-[#3B3322]">
              {t('home.about.body1')}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#3B3322]">
              {t('home.about.body2')}
            </p>
          </div>
          <div className="space-y-3 rounded-3xl bg-[#F5F1E8] p-6 shadow-sm shadow-[#847668]/30">
            <div className="flex items-start gap-3 text-sm text-[#2A441F]">
              <Sparkles className="mt-0.5 h-4 w-4 text-[#B29476]" />
              <p>{t('home.about.card1')}</p>
            </div>
            <div className="flex items-start gap-3 text-sm text-[#2A441F]">
              <Heart className="mt-0.5 h-4 w-4 text-[#B29476]" />
              <p>{t('home.about.card2')}</p>
            </div>
            <div className="flex items-start gap-3 text-sm text-[#2A441F]">
              <Music2 className="mt-0.5 h-4 w-4 text-[#B29476]" />
              <p>{t('home.about.card3')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function OfferingsSection() {
  const { t } = useTranslation()

  const offerings = [
    {
      title: t('home.offerings.items.yoga.title'),
      subtitle: t('home.offerings.items.yoga.subtitle'),
      description: t('home.offerings.items.yoga.description'),
    },
    {
      title: t('home.offerings.items.meditation.title'),
      subtitle: t('home.offerings.items.meditation.subtitle'),
      description: t('home.offerings.items.meditation.description'),
    },
    {
      title: t('home.offerings.items.sound.title'),
      subtitle: t('home.offerings.items.sound.subtitle'),
      description: t('home.offerings.items.sound.description'),
    },
  ]

  return (
    <section id="offerings" className="border-b border-[#B29476]/20 bg-[#F5F1E8]">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#6B7A52]">
              {t('home.offerings.sectionLabel')}
            </p>
            <h2 className="mt-3 text-xl uppercase tracking-[0.18em] text-[#2A441F]">
              {t('home.offerings.title')}
            </h2>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-[#4A5C35]">
            {t('home.offerings.intro')}
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {offerings.map((offering) => (
            <article
              key={offering.title}
              className="flex flex-col justify-between rounded-2xl bg-[#DCD7CD] p-5 shadow-sm shadow-[#847668]/20"
            >
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2A441F]">
                  {offering.title}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#6B7A52]">
                  {offering.subtitle}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[#3B3322]">
                  {offering.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ScheduleSection() {
  const { t } = useTranslation()
  const lang = useLang()

  return (
    <section id="schedule" className="border-b border-[#B29476]/20 bg-[#DCD7CD]">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#6B7A52]">
              {t('home.schedule.sectionLabel')}
            </p>
            <h2 className="mt-3 text-xl uppercase tracking-[0.18em] text-[#2A441F]">
              {t('home.schedule.title')}
            </h2>
          </div>
          <Link
            to="/events"
            className="hidden items-center gap-2 rounded-full border border-[#4A5C35] px-4 py-2 text-[0.7rem] uppercase tracking-[0.22em] text-[#2A441F] transition-colors hover:border-[#2A441F] hover:bg-[#F5F1E8] md:inline-flex"
          >
            <CalendarDays className="h-3 w-3" />
            {t('home.schedule.fullCalendar')}
          </Link>
        </div>
        <div className="overflow-hidden rounded-3xl bg-[#F5F1E8] shadow-sm shadow-[#847668]/30">
          <div className="grid gap-px bg-[#DCD7CD] text-sm md:grid-cols-4">
            {scheduleData.days.map((day) => (
              <div key={day.id} className="bg-[#F5F1E8] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#4A5C35]">
                  {day.label[lang]}
                </p>
                <ul className="mt-4 space-y-2 text-xs text-[#3B3322]">
                  {day.items.map((item, idx) => (
                    <li key={idx}>{item[lang]}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-4 text-xs text-[#4A5C35]">{t('home.schedule.note')}</p>
      </div>
    </section>
  )
}

function SpaceImagerySection() {
  const { t } = useTranslation()
  const lang = useLang()

  return (
    <section className="border-b border-[#B29476]/20 bg-[#F5F1E8]">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 lg:px-8">
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#6B7A52]">
              {t('home.space.sectionLabel')}
            </p>
            <h2 className="mt-3 text-xl uppercase tracking-[0.18em] text-[#2A441F]">
              {t('home.space.title')}
            </h2>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-[#4A5C35]">
            {t('home.space.intro')}
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {spaceData.images.map((image) => (
            <figure
              key={image.id}
              className="group overflow-hidden rounded-3xl bg-[#DCD7CD]"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.label[lang]}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <figcaption className="px-4 py-3 text-xs uppercase tracking-[0.18em] text-[#2A441F]">
                {image.label[lang]}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const { t } = useTranslation()
  const lang = useLang()

  return (
    <section className="border-b border-[#B29476]/20 bg-[#DCD7CD]">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.3em] text-[#6B7A52]">
          {t('home.testimonials.sectionLabel')}
        </p>
        <h2 className="mt-3 text-xl uppercase tracking-[0.18em] text-[#2A441F]">
          {t('home.testimonials.title')}
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {testimonialsData.quotes.map((item) => (
            <figure
              key={item.id}
              className="flex h-full flex-col justify-between rounded-2xl bg-[#F5F1E8] p-5 shadow-sm shadow-[#847668]/20"
            >
              <blockquote className="text-sm leading-relaxed text-[#3B3322]">
                "{item.quote[lang]}"
              </blockquote>
              <figcaption className="mt-4 text-xs uppercase tracking-[0.18em] text-[#4A5C35]">
                {item.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function ClosingCtaSection() {
  const { t } = useTranslation()

  return (
    <section className="bg-[#2A441F] py-14 text-[#F5F1E8]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[#DCD7CD]">
            {t('home.closing.sectionLabel')}
          </p>
          <h2 className="mt-3 text-xl uppercase tracking-[0.18em]">
            {t('home.closing.title')}
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#F5F1E8]">
            {t('home.closing.body')}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://wa.me/50672511368?text=I%20want%20to%20join%20a%20class"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#F5F1E8] px-6 py-2 text-xs font-medium uppercase tracking-[0.25em] text-[#2A441F] transition-colors hover:bg-[#EDE8E0]"
          >
            {t('home.closing.ctaClass')}
          </a>
          <Link
            to="/retreats"
            className="rounded-full border border-[#F5F1E8] px-6 py-2 text-xs font-medium uppercase tracking-[0.25em] text-[#F5F1E8] transition-colors hover:bg-[#F5F1E8]/10"
          >
            {t('home.closing.ctaRetreats')}
          </Link>
        </div>
      </div>
    </section>
  )
}
