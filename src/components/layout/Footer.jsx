import { Link } from 'react-router-dom'
import { location } from '../../api/mockData.js'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">🌸</span>
            <span className="text-xl font-bold">Bloom</span>
          </div>
          <p className="text-gray-400 text-sm">Paint. Sip. Rise with the sun. A painting café made for early risers.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link to="/menu" className="hover:text-orange-400">Menu</Link></li>
            <li><Link to="/about" className="hover:text-orange-400">Our Story</Link></li>
            <li><Link to="/location" className="hover:text-orange-400">Location & Hours</Link></li>
            <li><Link to="/contact" className="hover:text-orange-400">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Say Hello</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>{location.address}</li>
            <li>{location.phone}</li>
            <li>{location.email}</li>
            <li className="flex gap-3 pt-1">
              {location.socials.map((s) => (
                <span key={s.label} className="text-orange-400">{s.handle}</span>
              ))}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Bloom Painting Café. All rights reserved.
      </div>
    </footer>
  )
}
