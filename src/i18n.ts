/**
 * Global i18n configuration for Ananta Yoga & Meditation.
 * Provides English and Spanish translations using i18next.
 *
 * NOTE: Dynamic content (events, retreats, blogs, testimonials, schedule,
 * space images, footer) now lives in src/data/*.json files and is read
 * directly by page components. This file only contains static UI strings.
 */

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

/**
 * Translation resources — static UI strings only.
 */
const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        blog: 'Blog',
        events: 'Events',
        retreats: 'Retreats',
      },
      layout: {
        languageLabel: 'Language',
      },
      home: {
        hero: {
          kicker: 'Yoga · Meditation · Sound',
          title: 'Where the infinite begins.',
          body:
            'Ananta is a sanctuary for curious, thoughtful practice. A studio where breath slows, nervous systems soften, and every body is welcomed exactly as it is.',
          ctaSchedule: 'View Schedule',
          ctaRetreats: 'Explore Retreats',
          badge1: 'All levels welcome',
          badge2: 'Small, intimate groups',
          badge3: 'In-studio & online',
        },
        about: {
          sectionLabel: 'The Studio',
          title: 'Rooted in earth. Open to the infinite.',
          body1:
            'Ananta is designed as a living, breathing altar to stillness. Forest-green walls, linen cushions, warm wood, and soft candlelight invite your body to soften on arrival. The space is intimate, scent-light, and deliberately quiet — a refuge from the city\'s constant noise.',
          body2:
            'Our teachers honour tradition while speaking in a clear, contemporary voice. Each class is an invitation to move with intention, rest deeply, and remember that nothing about you needs to be fixed.',
          card1:
            'Small groups of 10–14 students keep every session spacious, personal, and quietly held.',
          card2:
            'Trauma-sensitive language, inclusive sequencing, and optional assists honour every body\'s boundaries.',
          card3:
            'Crystal bowls, Tibetan bowls, and curated ambient soundscapes support nervous-system restoration.',
        },
        offerings: {
          sectionLabel: 'Offerings',
          title: 'Practices for every nervous system.',
          intro:
            'Move, breathe, or simply lie down and listen. Choose the format that meets you where you are — morning, midday, or late evening.',
          items: {
            yoga: {
              title: 'Yoga Rituals',
              subtitle: 'Vinyasa · Hatha · Restorative',
              description:
                'Slow, breath-led sequences that build strength and mobility without urgency. Expect floor work, intentional holds, and spacious savasana.',
            },
            meditation: {
              title: 'Meditation Circles',
              subtitle: 'Stillness · Breath · Inquiry',
              description:
                'Guided practices that explore mindfulness, mantra, and silent sitting. Ideal for both brand-new and seasoned meditators.',
            },
            sound: {
              title: 'Sound Journeys',
              subtitle: 'Bowls · Gongs · Voice',
              description:
                'Immersive sound baths designed to support deep rest and energetic realignment. Lie down, be held, and receive.',
            },
          },
        },
        schedule: {
          sectionLabel: 'Weekly Rhythm',
          title: 'A week woven from stillness.',
          fullCalendar: 'Full calendar',
          note:
            'Full schedule, pricing, and memberships are available at the studio and via email on request.',
        },
        space: {
          sectionLabel: 'The Space',
          title: 'A sacred space, held lightly.',
          intro:
            'Every texture — linen, rattan, stone, leaf — is chosen to soothe overstimulated senses. Step inside and feel your shoulders drop.',
        },
        testimonials: {
          sectionLabel: 'Words from the community',
          title: 'Stories from the mat.',
        },
        closing: {
          sectionLabel: 'Begin',
          title: 'Your practice, your pace.',
          body:
            'Whether you are stepping onto the mat for the first time or returning after many seasons away, there is a place for you here.',
          ctaClass: 'Join a class',
          ctaRetreats: 'Discover retreats',
        },
      },
      blog: {
        sectionLabel: 'Journal',
        title: 'Quiet essays for curious hearts.',
        intro:
          'Reflections from the mat, the cushion, and the spaces in between. Thoughtful notes on rest, ritual, and being gently human.',
        cadenceNote: 'New essays are shared each month.',
      },
      events: {
        sectionLabel: 'Events',
        title: 'Gatherings for deeper practice.',
        intro:
          'From lunar ceremonies to foundational workshops, each event is crafted as a gentle doorway into a more spacious way of being.',
        reserveNote:
          'Spaces are limited. Reserve your place via email:',
      },
      retreats: {
        sectionLabel: 'Retreats',
        title: 'Time out of time.',
        intro:
          'Our retreats are invitations to step outside ordinary rhythm and remember the simple joy of being alive, supported by nature and community.',
        contactNote:
          'To receive the full itinerary and pricing, email',
        email: 'retreats@anantayoga.studio',
      },
    },
  },
  es: {
    translation: {
      nav: {
        home: 'Inicio',
        blog: 'Blog',
        events: 'Eventos',
        retreats: 'Retiros',
      },
      layout: {
        languageLabel: 'Idioma',
      },
      home: {
        hero: {
          kicker: 'Yoga · Meditación · Sonido',
          title: 'Donde comienza lo infinito.',
          body:
            'Ananta es un refugio para una práctica curiosa y consciente. Un estudio donde la respiración se vuelve lenta, el sistema nervioso se suaviza y cada cuerpo es recibido exactamente como es.',
          ctaSchedule: 'Ver horario',
          ctaRetreats: 'Explorar retiros',
          badge1: 'Todos los niveles bienvenidos',
          badge2: 'Grupos pequeños e íntimos',
          badge3: 'Presencial y en línea',
        },
        about: {
          sectionLabel: 'El Estudio',
          title: 'Enraizado en la tierra. Abierto a lo infinito.',
          body1:
            'Ananta está diseñado como un altar vivo y respirante a la quietud. Paredes verde bosque, cojines de lino, madera cálida y luz de velas invitan al cuerpo a soltar desde el momento en que llegas. El espacio es íntimo, con aromas suaves y silencioso por intención: un refugio frente al ruido constante de la ciudad.',
          body2:
            'Nuestras maestras y maestros honran la tradición y a la vez hablan con una voz clara y contemporánea. Cada clase es una invitación a moverte con intención, descansar profundamente y recordar que no hay nada en ti que necesite arreglarse.',
          card1:
            'Grupos pequeños de 10–14 personas mantienen cada sesión espaciosa, personal y cuidadosamente sostenida.',
          card2:
            'Lenguaje sensible al trauma, secuencias inclusivas y asistencias opcionales honran los límites de cada cuerpo.',
          card3:
            'Cuencos de cristal y tibetanos, junto a paisajes sonoros delicados, acompañan la restauración del sistema nervioso.',
        },
        offerings: {
          sectionLabel: 'Prácticas',
          title: 'Prácticas para cada sistema nervioso.',
          intro:
            'Muévete, respira o simplemente recuéstate y escucha. Elige el formato que te acompañe donde estás — por la mañana, al mediodía o al final del día.',
          items: {
            yoga: {
              title: 'Rituales de Yoga',
              subtitle: 'Vinyasa · Hatha · Restaurativo',
              description:
                'Secuencias lentas guiadas por la respiración que cultivan fuerza y movilidad sin prisa. Espera trabajo en el piso, sostener con intención y una savasana espaciosa.',
            },
            meditation: {
              title: 'Círculos de Meditación',
              subtitle: 'Quietud · Respiración · Indagación',
              description:
                'Prácticas guiadas que exploran la atención plena, el mantra y la meditación en silencio. Ideales tanto para personas nuevas como experimentadas.',
            },
            sound: {
              title: 'Viajes de Sonido',
              subtitle: 'Cuencos · Gongs · Voz',
              description:
                'Baños de sonido inmersivos diseñados para sostener un descanso profundo y la re-organización energética. Tú solo te recuestas, recibes y eres sostenida/o.',
            },
          },
        },
        schedule: {
          sectionLabel: 'Ritmo semanal',
          title: 'Una semana tejida desde la quietud.',
          fullCalendar: 'Calendario completo',
          note:
            'El horario completo, los precios y las membresías están disponibles en el estudio y por correo electrónico.',
        },
        space: {
          sectionLabel: 'El Espacio',
          title: 'Un espacio sagrado, sostenido con suavidad.',
          intro:
            'Cada textura — lino, ratán, piedra, hoja — se elige para calmar sentidos sobre-estimulados. Al entrar, siente cómo los hombros descienden poco a poco.',
        },
        testimonials: {
          sectionLabel: 'Voces de la comunidad',
          title: 'Historias sobre el tapete.',
        },
        closing: {
          sectionLabel: 'Comienza',
          title: 'Tu práctica, a tu ritmo.',
          body:
            'Tanto si pisas el tapete por primera vez como si regresas después de muchas temporadas, aquí hay un lugar para ti.',
          ctaClass: 'Unirte a una clase',
          ctaRetreats: 'Descubrir retiros',
        },
      },
      blog: {
        sectionLabel: 'Diario',
        title: 'Ensayos silenciosos para corazones curiosos.',
        intro:
          'Reflexiones desde el tapete, el cojín y los espacios intermedios. Notas cuidadosas sobre el descanso, el ritual y el arte de ser humanas/os con suavidad.',
        cadenceNote: 'Publicamos nuevos textos cada mes.',
      },
      events: {
        sectionLabel: 'Eventos',
        title: 'Encuentros para profundizar la práctica.',
        intro:
          'Desde ceremonias lunares hasta talleres de fundamentos, cada evento es una puerta suave hacia una forma de estar más espaciosa.',
        reserveNote:
          'Los cupos son limitados. Reserva tu lugar por correo:',
      },
      retreats: {
        sectionLabel: 'Retiros',
        title: 'Tiempo fuera del tiempo.',
        intro:
          'Nuestros retiros son invitaciones a salir del ritmo ordinario y recordar la alegría simple de estar viva/o, sostenida/o por la naturaleza y la comunidad.',
        contactNote:
          'Para recibir el itinerario completo y los precios, escribe a',
        email: 'retreats@anantayoga.studio',
      },
    },
  },
}

/**
 * Initializes i18next if it has not been initialized yet.
 * Uses browser language to pick between English and Spanish.
 */
if (!i18n.isInitialized) {
  const browserLang =
    typeof navigator !== 'undefined' ? navigator.language || navigator.languages?.[0] : 'en'
  const initialLang = browserLang && browserLang.toLowerCase().startsWith('es') ? 'es' : 'en'

  void i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: initialLang,
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
    })
}

export default i18n
