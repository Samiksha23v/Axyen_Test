import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import SectionHeading from '../components/ui/SectionHeading'

const features = [
  {
    title: 'Health Profile First',
    desc: 'We start with your BMI, BMR and TDEE. For our flagship plan that means a precise 1,586 kcal/day baseline — and a hard BMR safety floor of 1,322 kcal.',
    img: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Macros That Make Sense',
    desc: 'A balanced 24% protein / 45% carbs / 31% fat split — roughly 80g protein, 150g carbs and 46g fat at 1,330 kcal/day, with 25–28g of fiber daily.',
    img: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Built Around Your Day',
    desc: 'Front-loaded weekdays with a power breakfast, an office-friendly snack and a light, sleep-supportive dinner — plus relaxed weekends near maintenance.',
    img: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
]

const stats = [
  { value: '1,330', label: 'kcal/day target' },
  { value: '5 kg', label: 'sustainable goal' },
  { value: '16 wks', label: 'phased timeline' },
  { value: '7', label: 'cuisines on rotation' },
]

export default function HomePage() {
  return (
    <div>
      <section className="relative min-h-screen flex items-center">
        <img
          src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Fresh, colorful healthy meal bowl"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/70" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-8 lg:px-16 py-24 text-white">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-400">Personalized Nutrition Coaching</p>
          <h1 className="mt-4 max-w-3xl text-4xl md:text-6xl font-bold leading-tight">
            Sustainable diet plans built around your real life.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-200">
            No crash diets. No starvation. Nourishly turns your health profile, food preferences and goals into a
            flexitarian meal plan you can actually stick to — protecting your energy, your sleep and your budget.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button to="/contact">Get Your Free Plan</Button>
            <Button to="/how-it-works" variant="light">See How It Works</Button>
          </div>
        </div>
      </section>

      <section className="bg-green-600">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl md:text-4xl font-bold">{s.value}</div>
              <div className="mt-1 text-sm text-green-100">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
          <SectionHeading
            center
            eyebrow="Why Nourishly"
            title="A plan that respects your body and your schedule"
            subtitle="Every recommendation is anchored to your numbers and your preferences — never a generic template."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {features.map((f) => (
              <Card key={f.title} className="overflow-hidden p-0">
                <img src={f.img} alt={f.title} loading="lazy" className="h-48 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{f.title}</h3>
                  <p className="mt-2 text-gray-600">{f.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-green-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16 grid gap-12 md:grid-cols-2 items-center">
          <div>
            <SectionHeading
              eyebrow="Real Outcomes"
              title="Goals you can sustain, not survive"
              subtitle="Our flagship plan targets a gentle 0.3–0.4 kg/week loss with a mandatory Week 8 checkpoint before going further."
            />
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex gap-3"><span className="text-green-600">✓</span> Improve energy and reduce fatigue</li>
              <li className="flex gap-3"><span className="text-green-600">✓</span> Reduce sugar and junk food intake</li>
              <li className="flex gap-3"><span className="text-green-600">✓</span> Improve gut health and digestion</li>
              <li className="flex gap-3"><span className="text-green-600">✓</span> Build a consistent eating routine</li>
            </ul>
            <div className="mt-8">
              <Button to="/meal-plans">Explore Sample Meal Plans</Button>
            </div>
          </div>
          <img
            src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Healthy meal prep with vegetables and grains"
            loading="lazy"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 md:px-8 lg:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Ready to eat smarter, not less?</h2>
          <p className="mt-4 text-lg text-gray-600">
            Tell us about your health and preferences, and we'll craft a plan that fits your goals, your kitchen and your budget.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button to="/contact">Start Your Profile</Button>
            <Button to="/about" variant="outline">Learn More</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
