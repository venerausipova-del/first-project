import { Logo } from './Logo'
import { navItems } from '../data/home'

type HeaderProps = {
  page: 'home' | 'projects' | 'about' | 'contact'
}

const pageHref = {
  home: '/',
  projects: '/projects',
  about: '/about',
  contact: '/contact',
}

export function Header({ page }: HeaderProps) {
  return (
    <header className="header">
      <a className="brand" href="/">
        <Logo />
        <span>DOTS TEMPLATE</span>
      </a>
      <nav className="nav" aria-label="Principal">
        {navItems.map((item) => {
          const current = item.href === pageHref[page]

          if (!item.href) {
            return (
              <button key={item.label} type="button" className="nav-item">
                {item.label}
              </button>
            )
          }

          return (
            <a
              key={item.label}
              href={item.href}
              className="nav-item"
              aria-current={current ? 'page' : undefined}
            >
              {current ? <span className="nav-dot" /> : null}
              {item.label}
            </a>
          )
        })}
      </nav>
    </header>
  )
}
