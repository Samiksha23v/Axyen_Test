import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green-600 text-white font-bold">N</span>
            <span className="text-lg font-bold">Nourishly</span>
          </div>
          <p className="mt-4 text-sm text-gray-400 max-w-xs">
            Sustainable, personalized nutrition coaching built around your health, your goals, and your real life.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">Navigation</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li><Link to="/" className="hover:text-green-400">Home</Link></li>
            <li><Link to="/how-it-works" className="hover:text-green-400">How It Works</Link></li>
            <li><Link to="/meal-plans" className="hover:text-green-400">Meal Plans</Link></li>
            <li><Link to="/about" className="hover:text-green-400">About</Link></li>
            <li><Link to="/contact" className="hover:text-green-400">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">Get In Touch</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li>hello@nourishly.app</li>
            <li>Mon–Fri, 9am–6pm IST</li>
            <li className="flex gap-4 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">Instagram</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16 py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Nourishly. Eat well, live well.
        </div>
      </div>
    </footer>
  )
}
