# Ananta Yoga & Meditation — Website Design Guidelines

## Brand Identity

**Name**: Ananta Yoga & Meditation
**Tagline**: "Where the infinite begins."
**Location**: Costa Rica
**Languages**: English (primary), Spanish

## Color Palette

| Role | Hex | Name | Usage |
|------|-----|------|-------|
| Background | `#DCD7CD` | Warm Linen | Page backgrounds, large surfaces |
| Light Surface | `#F5F1E8` | Parchment | Header, footer, cards |
| Dark Green | `#2A441F` | Forest Deep | Primary headings, active nav, CTAs |
| Olive | `#6B7A52` | Sage | Secondary text, subtle labels |
| Forest | `#4A5C35` | Moss | Body text in nav, secondary elements |
| Warm Accent | `#B29476` | Clay | Borders, dividers (at 30% opacity) |
| Dark Text | `#1A1508` | Earth Dark | Primary body text |
| Dark Alt | `#3B3322` | Charcoal Earth | Alternative dark text |

## Typography

- **Headings**: Uppercase tracking `0.26em–0.32em`, sizes from `text-sm` to `text-4xl`
- **Body**: Regular weight, `leading-relaxed` for readability
- **Section Labels**: `text-xs uppercase tracking-[0.2em]` in olive/sage tones
- **Navigation**: `text-xs uppercase tracking-[0.2em]` in forest green

## Layout Principles

- **Max width**: `max-w-6xl` (1152px) centered with `mx-auto`
- **Padding**: `px-4 md:px-6 lg:px-8` responsive horizontal padding
- **Sections**: Generous vertical padding `py-16 md:py-24`
- **Grid**: Responsive grids `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- **Spacing**: Spacious, breathing layouts — never cramped

## Component Patterns

### Section Structure
Every home page section follows this pattern:
1. **Section label** — Small uppercase text in olive (e.g., "The Studio")
2. **Title** — Large serif-like heading in dark green
3. **Body/Intro** — Descriptive text setting the tone
4. **Content** — Cards, grid, carousel, etc.

### Cards
- Background: `bg-[#F5F1E8]`
- Border: `border border-[#B29476]/20`
- Border radius: `rounded-lg` or `rounded-xl`
- Padding: `p-6`
- Hover: Subtle shadow or border color change

### Buttons
- **Primary CTA**: `bg-[#2A441F] text-[#F5F1E8]` with hover darkening
- **Secondary CTA**: Border style with forest green text
- **Shape**: `rounded-full` for pill buttons, `rounded-lg` for rectangular
- **Size**: `px-6 py-2.5` standard, `px-8 py-3` large

### Navigation
- Fixed header with backdrop blur: `bg-[#F5F1E8]/90 backdrop-blur-sm`
- Bottom border: `border-b border-[#B29476]/30`
- Active state: bottom border + darker text color
- Language toggle: Pill-shaped EN/ES switcher

## Content Voice

### English
- Spacious, unhurried prose
- Sensory language: breath, texture, light, earth
- Inclusive and trauma-sensitive
- Poetic but accessible — not performative
- "Your practice, your pace" energy

### Spanish
- Slightly more poetic (the language allows it)
- Inclusive language: sostenida/o, nueva/o
- Emotional adaptation, not literal translation
- Same warmth and spaciousness

## Data Architecture

All dynamic content lives in JSON files under `src/data/`:

| File | Content |
|------|---------|
| `events.json` | Upcoming events with type, title, date, time, place |
| `retreats.json` | Retreat details with full page data |
| `blogs.json` | Blog posts with full article content |
| `schedule.json` | Weekly class schedule |
| `testimonials.json` | Community testimonials |
| `space.json` | Studio photo carousel images |
| `footer.json` | Footer contact info and social links |

All JSON objects use bilingual format: `{ "en": "...", "es": "..." }`

## Technical Stack

- **Framework**: React 18 + TypeScript
- **Routing**: react-router with HashRouter (`#/path`)
- **Styling**: Tailwind CSS 3 with custom color palette
- **i18n**: i18next / react-i18next
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Build**: esbuild with PostCSS/Tailwind
- **Deployment**: GitHub Pages via GitHub Actions
- **Repository**: github.com/ananta-yoga/ananta-web

## Gitflow

- `main` → Production (auto-deploys to GitHub Pages)
- `dev` → Development (build validation only)
- All changes go to `dev` first, then PR to `main`
- Commit format: `content(<section>): <description>` for content changes
- Commit format: `feat: <description>` for features
- Commit format: `fix: <description>` for bug fixes

## WhatsApp Integration

- Country code: +506 (Costa Rica)
- Number: 72511368
- Full: +50672511368
- Link format: `https://wa.me/50672511368?text=<URL-encoded-message>`
- Used for: class booking, event reservations, retreat inquiries

## Image Guidelines

- Use CDN-hosted images (currently pub-cdn.sider.ai)
- Aspect ratios: 4:3 for cards, 16:9 for hero, 1:1 for testimonials
- Alt text required on all images (bilingual if dynamic)
- Lazy loading for below-fold images
- Studio space photos should feel warm, natural, inviting
