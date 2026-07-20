import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useApp } from '../../context/AppContext.jsx'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/menu', label: 'Menu' },
  { to: '/about', label: 'About' },
  { to: '/location', label: 'Location' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useApp()

  const linkClass = ({ isActive }) =>
    `px-3 py-2 text-sm font-medium rounded-full transition-colors ${
      isActive
        ? 'text-orange-600 dark:text-orange-400'
        : 'text-gray-700 hover:text-orange-600 dark:text-gray-300 dark:hover:text-orange-400'
    }`

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-orange-50/80 dark:bg-gray-950/80 border-b border-orange-100 dark:border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl">🌸</span>
          <span className="text-xl font-bold tracking-tight">Bloom</span>
        </Link>
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="ml-2 p-2 rounded-full hover:bg-orange-100 dark:hover:bg-gray-800 transition-colors"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <Link
            to="/location"
            className="ml-2 px-4 py-2 rounded-full bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition-colors"
          >
            Find Location
          </Link>
        </div>
        <div className="md:hidden flex items-center gap-2">
          <button onClick={toggleTheme} aria-label="Toggle theme" className="p-2 rounded-full hover:bg-orange-100 dark:hover:bg-gray-800">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <button onClick={() => setOpen((o) => !o)} aria-label="Menu" className="p-2 rounded-full hover:bg-orange-100 dark:hover:bg-gray-800">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-1 bg-orange-50/95 dark:bg-gray-950/95 border-b border-orange-100 dark:border-gray-800">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} onClick={() => setOpen(false)} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/location"
            onClick={() => setOpen(false)}
            className="mt-2 px-4 py-2 rounded-full bg-orange-500 text-white text-sm font-semibold text-center hover:bg-orange-600"
          >
            Find Location
          </Link>
        </div>
      )}
    </header>
  )
}
