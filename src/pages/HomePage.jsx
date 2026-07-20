import Button from '../components/ui/Button.jsx'
import Card from '../components/ui/Card.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import { values, gallery } from '../api/mockData.js'

const icons = {
  sun: 'M12 3v2m0 14v2m9-9h-2M5 12H3m14.95 6.95l-1.41-1.41M6.46 6.46L5.05 5.05m12.9 0l-1.41 1.41M6.46 17.54l-1.41 1.41M16 12a4 4 0 11-8 0 4 4 0 018 0z',
  brush: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z',
  leaf: 'M3 12c6 0 9-3 9-9 0 6 3 9 9 9-6 0-9 3-9 9 0-6-3-9-9-9z',
}

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Bright, airy painting café interior"
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-50/95 via-orange-50/80 to-transparent dark:from-gray-950/95 dark:via-gray-950/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-20">
          <div className="max-w-xl">
            <span className="inline-block text-orange-600 dark:text-orange-400 font-semibold uppercase tracking-wider text-sm mb-4">
              ☀️ A painting café for early risers
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Paint. Sip. <span className="text-orange-500">Rise with the sun.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
              Bloom opens at 6am for the dreamers and makers. Grab a golden latte, claim an easel, and let the morning light do the rest.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/location">Find Location →</Button>
              <Button to="/menu" variant="outline">View Menu</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Values / Features */}
      <section className="px-4 md:px-8 lg:px-16 py-16 md:py-24 max-w-7xl mx-auto">
        <SectionHeading center eyebrow="Why Bloom" title="Where mornings become masterpieces" subtitle="Three little promises we keep with every sunrise." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <Card key={v.title} className="p-8 text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-orange-100 dark:bg-gray-800 flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icons[v.icon]} />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{v.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{v.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="px-4 md:px-8 lg:px-16 py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <SectionHeading center eyebrow="A peek inside" title="Color, coffee & good company" />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((g) => (
              <img
                key={g.id}
                src={`https://images.pexels.com/photos/${g.id}/pexels-photo-${g.id}.jpeg?auto=compress&cs=tinysrgb&w=600`}
                alt={g.alt}
                loading="lazy"
                className="rounded-2xl object-cover w-full h-48 md:h-56"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 md:px-8 lg:px-16 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="rounded-3xl bg-orange-500 text-white p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Come rise with us tomorrow.</h2>
          <p className="mt-4 text-orange-50 max-w-xl mx-auto">Doors open at 6am. Bring a friend, an idea, or just your favorite mug — we've got the canvas.</p>
          <div className="mt-8">
            <Button to="/location" variant="ghost" className="bg-white text-orange-600 hover:bg-orange-50">Find Location →</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
