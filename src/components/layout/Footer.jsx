import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-bold text-xl">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white text-sm">PF</span>
            PlanForge
          </div>
          <p className="mt-4 text-gray-400 text-sm max-w-xs">
            Turn vision into a flawless, executable plan. From foundation to final review, PlanForge keeps every phase on track.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">Navigation</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
            <li><Link to="/phases" className="text-gray-400 hover:text-white">Phases</Link></li>
            <li><Link to="/timeline" className="text-gray-400 hover:text-white">Timeline</Link></li>
            <li><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li>hello@planforge.example.com</li>
            <li>+1 (555) 012-3456</li>
            <li>200 Roadmap Ave, Suite 5, Remote</li>
          </ul>
          <div className="mt-4 flex gap-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16 py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} PlanForge. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
