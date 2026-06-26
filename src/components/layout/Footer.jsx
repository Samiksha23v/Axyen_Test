import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-green-600 text-white font-bold">N</span>
            <span className="text-lg font-bold">Nourish</span>
          </div>
          <p className="mt-4 text-sm text-gray-400 max-w-xs">
            Sustainable, budget-friendly nutrition planning built around your real life, schedule, and taste.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">Navigation</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/nutrition-plan" className="hover:text-white">Nutrition Plan</Link></li>
            <li><Link to="/meal-plans" className="hover:text-white">Meal Plans</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">Connect</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li>hello@nourish.example.com</li>
            <li>Mon–Fri, 9am–6pm IST</li>
            <li className="flex gap-4 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Nourish. Sustainability first — all targets within safe, healthy ranges.
        </div>
      </div>
    </footer>
  )
}
