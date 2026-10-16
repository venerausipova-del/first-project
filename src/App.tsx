import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { WorksPage } from './pages/WorksPage'

export default function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  if (path === '/projects') return <WorksPage />
  if (path === '/about') return <AboutPage />
  if (path === '/contact') return <ContactPage />
  return <HomePage />
}
