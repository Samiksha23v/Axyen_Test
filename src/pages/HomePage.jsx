import Button from '../components/ui/Button.jsx'
import Card from '../components/ui/Card.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'

const features = [
  { emoji: '🎨', title: 'Paint & Sip', desc: 'Grab a canvas, pick up a brush, and create while you sip your morning brew.' },
  { emoji: '🌅', title: 'Early Bird Hours', desc: 'Doors open at 6 AM. Beat the rush and greet the sunrise with color.' },
  { emoji: '☕', title: 'Craft Coffee', desc: 'Ethically-sourced, freshly-roasted beans pulled to bright perfection.' },
  { emoji: '🥐', title: 'Fresh Bakes', desc: 'Pastries baked in-house every morning to fuel your creativity.' },
]

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-16 min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Bright cafe interior with morning light"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-50/95 via-orange-50/80 to-transparent dark:from-gray-950/95 dark:via-gray-950/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-20">
          <div className="max-w-2xl">
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300 text-sm font-semibold">
              🌻 A painting cafe for early risers
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
              Paint, sip, and <span className="text-orange-500">rise with the sun.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300">
              Bloom is where fresh coffee meets fresh canvases. Start your morning with
              color, community, and the best cup in town.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/location">Find Our Location</Button>
              <Button to="/menu" variant="secondary">View Menu</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 md:px-8 lg:px-16 py-16 md:py-24 max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Why Bloom"
          title="Mornings made for creating"
          subtitle="Everything you need to turn an ordinary sunrise into something worth painting."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <Card key={f.title} className="p-6 text-center hover:-translate-y-1 transition-transform">
              <div className="text-4xl mb-4">{f.emoji}</div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">{f.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{f.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Painting experience */}
      <section className="px-4 md:px-8 lg:px-16 py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-2 items-center">
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img
              src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="People painting together at a bright table"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <SectionHeading
              center={false}
              eyebrow="The Experience"
              title="Coffee in one hand, brush in the other"
              subtitle="No experience needed. Book a Sunrise Session and let our resident guide walk you through it — pastry and coffee included."
            />
            <ul className="space-y-4">
              {['Pick your canvas & paints as you order', 'Guided sessions or free-paint any time', 'Every table stocked with brushes & inspiration'].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-orange-500 text-white text-sm flex items-center justify-center">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button to="/menu" variant="secondary">See Paint & Eat Options</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 md:px-8 lg:px-16 py-16 md:py-24">
        <div className="max-w-5xl mx-auto rounded-3xl bg-orange-500 text-white text-center px-6 py-14 md:py-20">
          <h2 className="text-3xl md:text-5xl font-bold">Come bloom with us.</h2>
          <p className="mt-4 text-lg text-orange-50 max-w-xl mx-auto">
            We're brewing since 6 AM. Swing by, grab a canvas, and make your morning brighter.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button to="/location" variant="secondary">Find Our Location</Button>
            <Button to="/contact" variant="ghost" className="text-white hover:bg-orange-600">Get in Touch</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
