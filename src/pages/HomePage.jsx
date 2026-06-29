import SectionHeading from '../components/ui/SectionHeading'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

const features = [
  {
    title: 'Health Profile First',
    desc: 'We start with your BMI, BMR and TDEE so every calorie target is grounded in your real metabolism — never a generic number.',
    img: '1640777',
  },
  {
    title: 'Built Around Your Life',
    desc: 'Flexitarian, 7 favourite cuisines, 15-30 min cooking window and a Rs 3k-5k budget — your plan respects all of it.',
    img: '958545',
  },
  {
    title: 'Sustainable, Not Extreme',
    desc: 'A modest 250-300 kcal daily deficit and a BMR safety floor mean steady 0.3-0.4 kg/week progress without burnout.',
    img: '1640772',
  },
]

const stats = [
  { value: '1,330', label: 'kcal daily target' },
  { value: '0.3-0.4', label: 'kg / week pace' },
  { value: '16', label: 'week sustainable plan' },
  { value: '7', label: 'cuisines on rotation' },
]

export default function HomePage() {
  return (
    <div>
      <section className="relative flex min-h-screen items-center">
        <img
          src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Healthy, colourful balanced meal bowl"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/70" />
        <div className="relative mx-auto max-w-7xl px-4 py-32 md:px-8 lg:px-16">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-green-400">
              Personalized Nutrition Coaching
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-white md:text-6xl">
              Eat for the life you actually live.
            </h1>
            <p className="mt-6 text-lg text-gray-200">
              NourishWell turns your health profile, food preferences and budget into a clear,
              sustainable weekly meal plan — no fad diets, no guesswork, no starvation targets.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/contact">Start Your Plan</Button>
              <Button to="/meal-plans" variant="outline">View Sample Plan</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-100 bg-green-50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-12 md:grid-cols-4 md:px-8 lg:px-16">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold text-green-700 md:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm text-gray-600">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24 lg:px-16">
        <SectionHeading
          center
          eyebrow="Why NourishWell"
          title="Nutrition that fits, not fights, your day"
          subtitle="Every plan is engineered around your real schedule, kitchen and wallet."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {features.map((f) => (
            <Card key={f.title} className="overflow-hidden p-0">
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

      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24 lg:px-16">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <img
              src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Fresh ingredients laid out for meal prep"
              loading="lazy"
              className="rounded-2xl object-cover shadow-md"
            />
            <div>
              <SectionHeading
                eyebrow="Goal-Driven"
                title="From 55 kg to 50 kg, the sustainable way"
                subtitle="A two-phase, 16-week plan with a mandatory Week 8 checkpoint keeps progress safe and adaptable."
              />
              <ul className="mt-6 space-y-3 text-gray-700">
                <li className="flex gap-3"><span className="text-green-600">\u2713</span> Phase A: build habits, reach 52 kg in 8 weeks</li>
                <li className="flex gap-3"><span className="text-green-600">\u2713</span> Phase B: continue to 50 kg only if Phase A succeeds</li>
                <li className="flex gap-3"><span className="text-green-600">\u2713</span> Never eat below your BMR safety floor</li>
                <li className="flex gap-3"><span className="text-green-600">\u2713</span> Reassess if energy drops below 4/10</li>
              </ul>
              <div className="mt-8">
                <Button to="/how-it-works">See How It Works</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-700">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center md:px-8 md:py-24 lg:px-16">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Ready for a plan that finally sticks?
          </h2>
          <p className="mt-4 text-lg text-green-100">
            Tell us about your goals and we will craft your first sustainable weekly plan.
          </p>
          <div className="mt-8 flex justify-center">
            <Button to="/contact" variant="secondary">Get Started Free</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
