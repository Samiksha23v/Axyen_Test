import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/nutrition-plan', label: 'Nutrition Plan' },
  { to: '/meal-plans', label: 'Meal Plans' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `px-3 py-2 text-sm font-medium transition-colors ${
      isActive ? 'text-green-700' : 'text-gray-600 hover:text-green-700'
    }`

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-green-600 text-white font-bold">N</span>
          <span className="text-lg font-bold text-gray-900">Nourish</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="ml-3 rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700 transition-colors"
          >
            Get Started
          </Link>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg text-gray-700 hover:bg-gray-100"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="text-2xl leading-none">{open ? '\u2715' : '\u2630'}</span>
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3 space-y-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block rounded-lg px-3 py-2 text-base font-medium ${
                  isActive ? 'bg-green-50 text-green-700' : 'text-gray-700 hover:bg-gray-50'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block rounded-lg bg-green-600 px-3 py-2 text-center text-base font-semibold text-white hover:bg-green-700"
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  )
}
