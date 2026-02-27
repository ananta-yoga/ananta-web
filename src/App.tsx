/**
 * Root application component.
 * Configures client-side routing for the Ananta website and initializes i18n.
 */

import { HashRouter, Route, Routes } from 'react-router'
import HomePage from './pages/Home'
import BlogPage from './pages/Blog'
import BlogPostPage from './pages/BlogPost'
import EventsPage from './pages/Events'
import RetreatsPage from './pages/Retreats'
import RetreatDetailPage from './pages/RetreatDetail'
import { SiteShell } from './components/layout/SiteShell'
import './i18n'

/**
 * App component providing hash-based routing for all pages.
 */
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <SiteShell>
              <HomePage />
            </SiteShell>
          }
        />
        <Route
          path="/blog"
          element={
            <SiteShell>
              <BlogPage />
            </SiteShell>
          }
        />
        <Route
          path="/blog/:slug"
          element={
            <SiteShell>
              <BlogPostPage />
            </SiteShell>
          }
        />
        <Route
          path="/events"
          element={
            <SiteShell>
              <EventsPage />
            </SiteShell>
          }
        />
        <Route
          path="/retreats"
          element={
            <SiteShell>
              <RetreatsPage />
            </SiteShell>
          }
        />
        <Route
          path="/retreats/:slug"
          element={
            <SiteShell>
              <RetreatDetailPage />
            </SiteShell>
          }
        />
      </Routes>
    </HashRouter>
  )
}
