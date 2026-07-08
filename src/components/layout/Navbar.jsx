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
    `px-3 py-2 rounded-full text-sm font-medium transition-colors ${
      isActive
        ? 'bg-orange-500 text-white'
        : 'text-gray-700 hover:bg-orange-100 dark:text-gray-200 dark:hover:bg-gray-800'
    }`

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-orange-50/80 dark:bg-gray-950/80 border-b border-orange-100 dark:border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <span className="text-2xl">🌻</span>
          <span className="text-orange-600 dark:text-orange-400">Bloom</span>
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
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <Link
            to="/location"
            className="ml-2 px-4 py-2 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold transition-colors"
          >
            Find Us
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full hover:bg-orange-100 dark:hover:bg-gray-800"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="p-2 rounded-lg hover:bg-orange-100 dark:hover:bg-gray-800"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-orange-100 dark:border-gray-800 bg-orange-50 dark:bg-gray-950 px-4 py-3 space-y-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              onClick={() => setOpen(false)}
              className={linkClass}
            >
              <span className="block">{l.label}</span>
            </NavLink>
          ))}
          <Link
            to="/location"
            onClick={() => setOpen(false)}
            className="block text-center mt-2 px-4 py-2 rounded-full bg-orange-500 text-white text-sm font-semibold"
          >
            Find Us
          </Link>
        </div>
      )}
    </header>
  )
}
