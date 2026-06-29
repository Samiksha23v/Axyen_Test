import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3 md:px-8 lg:px-16">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-600 text-sm font-bold text-white">
              N
            </span>
            <span className="text-lg font-bold">NourishWell</span>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            Sustainable, science-backed nutrition coaching built around your real life — your
            budget, your kitchen, your goals.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-300">Navigation</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li><Link to="/" className="hover:text-green-400">Home</Link></li>
            <li><Link to="/how-it-works" className="hover:text-green-400">How It Works</Link></li>
            <li><Link to="/meal-plans" className="hover:text-green-400">Meal Plans</Link></li>
            <li><Link to="/about" className="hover:text-green-400">About</Link></li>
            <li><Link to="/contact" className="hover:text-green-400">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-300">Get In Touch</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li>hello@nourishwell.example.com</li>
            <li>+91 98765 43210</li>
            <li>Pune, Maharashtra, India</li>
          </ul>
          <div className="mt-4 flex gap-4 text-sm">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">Twitter</a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        \u00A9 {new Date().getFullYear()} NourishWell. All rights reserved.
      </div>
    </footer>
  )
}
