import { Link } from 'react-router-dom'
import { locationInfo } from '../../api/mockData.js'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-bold text-xl mb-3">
            <span className="text-2xl">🌻</span>
            <span className="text-orange-400">Bloom</span>
          </div>
          <p className="text-gray-400 text-sm max-w-xs">
            Paint, sip, and rise with the sun. A painting cafe made for early risers.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-orange-300">Explore</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link to="/menu" className="hover:text-white">Menu</Link></li>
            <li><Link to="/about" className="hover:text-white">Our Story</Link></li>
            <li><Link to="/location" className="hover:text-white">Location & Hours</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-orange-300">Say Hello</h3>
          <p className="text-sm text-gray-400 mb-2">{locationInfo.address}</p>
          <p className="text-sm text-gray-400 mb-3">{locationInfo.phone}</p>
          <div className="flex gap-3">
            {locationInfo.socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-orange-400 hover:text-orange-200"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Bloom Painting Cafe. Made with sunshine.
      </div>
    </footer>
  )
}
