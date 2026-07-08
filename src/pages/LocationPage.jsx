import { locationInfo } from '../api/mockData.js'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import Card from '../components/ui/Card.jsx'
import Button from '../components/ui/Button.jsx'

export default function LocationPage() {
  const mapQuery = encodeURIComponent(locationInfo.address)
  return (
    <div className="pt-16">
      <section className="px-4 md:px-8 lg:px-16 py-16 md:py-24 max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Find Us"
          title="Come visit Bloom"
          subtitle="We're open early and ready to pour. Here's everything you need to swing by."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">📍 Address</h3>
            <p className="text-gray-700 dark:text-gray-300">{locationInfo.address}</p>
            <div className="mt-4">
              <Button
                href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </Button>
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-3">🕕 Hours</h3>
            <ul className="space-y-2">
              {locationInfo.hours.map((h) => (
                <li key={h.day} className="flex justify-between text-gray-700 dark:text-gray-300 border-b border-orange-100 dark:border-gray-800 pb-2">
                  <span>{h.day}</span>
                  <span className="font-medium">{h.time}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-3">💬 Follow Along</h3>
            <div className="flex flex-wrap gap-3">
              {locationInfo.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-orange-100 text-orange-700 dark:bg-gray-800 dark:text-orange-300 text-sm font-medium hover:bg-orange-200 dark:hover:bg-gray-700 transition-colors"
                >
                  {s.label} · {s.handle}
                </a>
              ))}
            </div>
          </Card>

          <div className="rounded-2xl overflow-hidden shadow-sm border border-orange-100 dark:border-gray-800 min-h-[400px]">
            <iframe
              title="Bloom Cafe location map"
              className="w-full h-full min-h-[400px]"
              loading="lazy"
              src={`https://maps.google.com/maps?q=${mapQuery}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
