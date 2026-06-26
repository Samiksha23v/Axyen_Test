import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import SectionHeading from '../components/ui/SectionHeading'

const features = [
  {
    title: 'Smart Health Profiling',
    desc: 'BMI, BMR and TDEE calculated with the Mifflin-St Jeor formula — your plan starts from real numbers, not guesses.',
    img: '1366919',
  },
  {
    title: 'Balanced Macro Framework',
    desc: '1,330 kcal/day with a balanced 24% protein / 45% carbs / 31% fat split, always above your BMR safety floor.',
    img: '1640777',
  },
  {
    title: 'Real-Life Meal Plans',
    desc: 'Front-loaded weekdays, relaxed weekends, cafe-friendly ordering — built around a 9-to-5 schedule and a Rs 3-5k budget.',
    img: '958545',
  },
]

const stats = [
  { label: 'Daily Calorie Target', value: '1,330 kcal' },
  { label: 'Sustainable Pace', value: '0.3–0.4 kg/wk' },
  { label: 'Timeline', value: '~16 weeks' },
  { label: 'Hydration', value: '3+ litres' },
]

export default function HomePage() {
  return (
    <div>
      <section className="relative min-h-screen flex items-center">
        <img
          src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Fresh healthy bowl of vegetables and grains"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/70" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-24 text-white">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-300">Personalized Nutrition, Done Right</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
            A diet plan that fits your life — not the other way around
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl">
            Flexitarian, budget-aware and built around your schedule. Sustainable mild weight loss from 55kg to 50kg with food you actually enjoy.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button to="/nutrition-plan">View My Plan</Button>
            <Button to="/meal-plans" variant="ghost">See Meal Plans</Button>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl bg-green-50 p-6 text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-700">{s.value}</div>
              <div className="mt-1 text-sm text-gray-600">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-24">
        <SectionHeading
          eyebrow="How It Works"
          title="Everything mapped to your real profile"
          subtitle="From intake to meal plan, every decision respects your health data, budget, and 15–30 minute cooking window."
          center
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {features.map((f) => (
            <Card key={f.title} className="p-0 overflow-hidden">
              <img
                src={`https://images.pexels.com/photos/${f.img}/pexels-photo-${f.img}.jpeg?auto=compress&cs=tinysrgb&w=600`}
                alt={f.title}
                loading="lazy"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{f.title}</h3>
                <p className="mt-3 text-gray-600">{f.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-green-600">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-20 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to start your sustainable journey?</h2>
          <p className="mt-4 text-lg text-green-50 max-w-2xl mx-auto">
            No crash diets. No deprivation. Just a thoughtful plan with a mandatory Week 8 checkpoint to keep you safe.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button to="/contact" variant="secondary">Get Started</Button>
            <Button to="/about" variant="ghost">Learn More</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
