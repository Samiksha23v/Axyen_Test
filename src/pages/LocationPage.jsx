import Card from '../components/ui/Card.jsx'
import Button from '../components/ui/Button.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import { location } from '../api/mockData.js'

export default function LocationPage() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`
  return (
    <div className="pt-24 pb-20 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto">
      <SectionHeading center eyebrow="Find Us" title="Come rise with us" subtitle="Swing by, sip something warm, and paint the morning away." />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <Card className="p-8">
          <h3 className="text-xl font-semibold mb-3 text-orange-600 dark:text-orange-400">📍 Address</h3>
          <p className="text-gray-700 dark:text-gray-300">{location.address}</p>
          <div className="mt-5">
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline">Open in Maps</Button>
            </a>
          </div>
        </Card>
        <Card className="p-8">
          <h3 className="text-xl font-semibold mb-3 text-orange-600 dark:text-orange-400">🕕 Hours</h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
            {location.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span className="font-medium">{h.day}</span>
                <span>{h.time}</span>
              </li>
            ))}
          </ul>
        </Card>
        <Card className="p-8">
          <h3 className="text-xl font-semibold mb-3 text-orange-600 dark:text-orange-400">💬 Follow Along</h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
            {location.socials.map((s) => (
              <li key={s.label} className="flex justify-between gap-4">
                <span className="font-medium">{s.label}</span>
                <span className="text-orange-600 dark:text-orange-400">{s.handle}</span>
              </li>
            ))}
            <li className="pt-2">📞 {location.phone}</li>
            <li>✉️ {location.email}</li>
          </ul>
        </Card>
      </div>
      <div className="mt-8 rounded-3xl overflow-hidden border border-orange-100 dark:border-gray-800">
        <img
          src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Bloom café storefront"
          loading="lazy"
          className="w-full h-72 md:h-96 object-cover"
        />
      </div>
    </div>
  )
}
