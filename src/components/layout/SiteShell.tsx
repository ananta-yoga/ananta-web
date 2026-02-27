/**
 * Layout components for the Ananta Yoga &amp; Meditation website.
 * Provides a shared navigation bar, page container, and footer.
 */

import type { ReactNode } from 'react'
import { Link, useLocation } from 'react-router'
import { useTranslation } from 'react-i18next'
import footerData from '../../data/footer.json'

/**
 * Props for the SiteShell layout component.
 */
interface SiteShellProps {
  /** Page content to render inside the shell. */
  children: ReactNode
}

/**
 * Top-level layout that wraps all pages with navigation and footer.
 */
export function SiteShell({ children }: SiteShellProps) {
  const location = useLocation()
  const { t } = useTranslation()

  const navItems = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.blog'), path: '/blog' },
    { label: t('nav.events'), path: '/events' },
    { label: t('nav.retreats'), path: '/retreats' },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-[#DCD7CD] text-[#1A1508]">
      <SiteHeader navItems={navItems} currentPath={location.pathname} />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  )
}

/**
 * Props for navigation items in the header.
 */
interface SiteHeaderProps {
  /** Navigation links to render. */
  navItems: { label: string; path: string }[]
  /** Active path from the router. */
  currentPath: string
}

/**
 * Site-wide navigation bar with logo, primary links, and language toggle.
 */
function SiteHeader({ navItems, currentPath }: SiteHeaderProps) {
  const { i18n, t } = useTranslation()

  /**
   * Changes the current language between English and Spanish.
   */
  const handleLanguageChange = (lng: 'en' | 'es') => {
    void i18n.changeLanguage(lng)
  }

  const currentLang = (i18n.language || 'en').startsWith('es') ? 'es' : 'en'

  return (
    <header className="border-b border-[#B29476]/30 bg-[#F5F1E8]/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="https://pub-cdn.sider.ai/u/U0O9H23ZYYJ/web-coder/69a0db496178e33e683c25bd/resource/e14935f0-4d25-4a0b-ad9e-b04079b5325f.png"
            alt="Ananta Flourish Om symbol"
            className="h-10 w-10"
          />
          <div className="leading-tight">
            <span className="block text-sm uppercase tracking-[0.32em] text-[#2A441F]">
              Ananta
            </span>
            <span className="block text-[0.72rem] uppercase tracking-[0.26em] text-[#6B7A52]">
              Yoga &amp; Meditation
            </span>
          </div>
        </Link>
        <nav className="flex flex-1 flex-wrap items-center justify-end gap-4 text-xs uppercase tracking-[0.2em] text-[#4A5C35]">
          <div className="flex flex-wrap items-center gap-3">
            {navItems.map((item) => {
              const isActive =
                item.path === '/'
                  ? currentPath === '/'
                  : currentPath.startsWith(item.path)

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={[
                    'px-2 py-1 transition-colors',
                    isActive
                      ? 'border-b border-[#2A441F] text-[#2A441F]'
                      : 'hover:text-[#1A1508]',
                  ].join(' ')}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
          <div className="flex items-center gap-2 text-[0.7rem] tracking-[0.18em] text-[#6B7A52]">
            <span className="hidden sm:inline">{t('layout.languageLabel')}</span>
            <div className="flex rounded-full border border-[#B29476]/50 bg-[#F5F1E8]">
              <button
                type="button"
                onClick={() => handleLanguageChange('en')}
                className={[
                  'px-3 py-1 transition-colors',
                  currentLang === 'en'
                    ? 'bg-[#2A441F] text-[#F5F1E8]'
                    : 'text-[#2A441F] hover:bg-[#EDE8E0]',
                ].join(' ')}
              >
                EN
              </button>
              <button
                type='button'
                onClick={() => handleLanguageChange('es')}
                className={[
                  'px-3 py-1 transition-colors',
                  currentLang === 'es'
                    ? 'bg-[#2A441F] text-[#F5F1E8]'
                    : 'text-[#2A441F] hover:bg-[#EDE8E0]',
                ].join(' ')}
              >
                ES
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

type Lang = 'en' | 'es'

/**
 * Global footer with contact details and brand line.
 * Reads data from footer.json for easy CMS editing.
 */
function SiteFooter() {
  const { i18n } = useTranslation()
  const lang: Lang = (i18n.language || 'en').startsWith('es') ? 'es' : 'en'

  return (
    <footer className="border-t border-[#B29476]/30 bg-[#F5F1E8]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 text-xs text-[#4A5C35] md:flex-row md:items-end md:justify-between md:px-6 lg:px-8">
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.26em] text-[#2A441F]">
            {footerData.brandLine[lang]}
          </p>
          <p className="mt-2 max-w-sm leading-relaxed">{footerData.brandTagline[lang]}</p>
          <div className="mt-3 flex gap-4">
            {footerData.socialLinks.instagram && (
              <a
                href={footerData.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6B7A52] transition-colors hover:text-[#2A441F]"
                aria-label="Instagram"
              >
                Instagram
              </a>
            )}
            {footerData.socialLinks.facebook && (
              <a
                href={footerData.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6B7A52] transition-colors hover:text-[#2A441F]"
                aria-label="Facebook"
              >
                Facebook
              </a>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-1 text-[0.7rem] md:items-end">
          <p className="uppercase tracking-[0.2em] text-[#6B7A52]">
            {footerData.visitLabel[lang]}
          </p>
          <p>{footerData.address[lang]}</p>
          <p>{footerData.hours[lang]}</p>
          <p className="mt-2">
            <a
              href={`mailto:${footerData.email}`}
              className="transition-colors hover:text-[#2A441F]"
            >
              {footerData.email}
            </a>
          </p>
          <p>
            <a
              href={`https://wa.me/${footerData.whatsapp.replace(/\+/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#2A441F]"
            >
              WhatsApp {footerData.whatsapp}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
