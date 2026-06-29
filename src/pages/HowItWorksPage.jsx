import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'

const phases = [
  {
    step: 'Phase 1',
    title: 'Health & Dietary Profile',
    desc: 'We capture age, weight, height, activity, sleep and medical history, then calculate BMI, BMR and TDEE. We also log allergies, dietary style, cuisines, cooking time and budget.',
    points: ['BMI 22.2 (healthy range)', 'BMR ~1,322 kcal/day', 'TDEE ~1,586 kcal/day', 'Flexitarian, 7 cuisines'],
  },
  {
    step: 'Phase 2',
    title: 'Strategy & Macros',
    desc: 'We set a sustainable calorie target above your BMR floor and translate it into balanced macros, then design meal structure and timing around your real schedule.',
    points: ['1,330 kcal/day target', '80g P / 150g C / 46g F', 'Front-loaded weekdays', 'Relaxed weekends ~1,500 kcal'],
  },
  {
    step: 'Phase 3',
    title: 'Meal Plans & Recipes',
    desc: 'We generate day-by-day plans across your favorite cuisines with quick 15–30 minute recipes and shopping lists that fit your budget.',
    points: ['Day-by-day plans', 'Quick 15–30 min recipes', 'Budget-friendly staples', 'Cuisine rotation'],
  },
  {
    step: 'Phase 4',
    title: 'Ongoing Support',
    desc: 'Track energy, food diary and clothes fit, with check-ins and chat support to adjust your plan as your body responds.',
    points: ['Daily energy rating', 'Daily food diary', 'Biweekly fit check', 'Week 8 review'],
  },
]

export default function HowItWorksPage() {
  return (
    <div>
      <section className="bg-gray-900 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-400">The Process</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold">How Nourishly works</h1>
          <p className="mt-4 max-w-2xl text-gray-300">
            Four guided phases take you from raw numbers to a plan you live by — with safety guardrails at every step.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
          <div className="grid gap-8 md:grid-cols-2">
            {phases.map((p) => (
              <Card key={p.step}>
                <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-green-700">
                  {p.step}
                </span>
                <h3 className="mt-4 text-2xl font-bold text-gray-900">{p.title}</h3>
                <p className="mt-2 text-gray-600">{p.desc}</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-2"><span className="text-green-600">•</span>{pt}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-green-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16 grid gap-12 md:grid-cols-2 items-center">
          <img
            src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Data and planning dashboard"
            loading="lazy"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
          <div>
            <SectionHeading
              eyebrow="Safety Guardrails"
              title="We protect your wellbeing, always"
              subtitle="Every plan includes non-negotiable safety rules so progress never comes at the cost of your health."
            />
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex gap-3"><span className="text-green-600">✓</span> Never eat below your BMR floor</li>
              <li className="flex gap-3"><span className="text-green-600">✓</span> Prioritize sleep alongside diet</li>
              <li className="flex gap-3"><span className="text-green-600">✓</span> Mandatory Week 8 checkpoint before going further</li>
              <li className="flex gap-3"><span className="text-green-600">✓</span> Reassess targets if energy drops below 4/10</li>
            </ul>
            <div className="mt-8">
              <Button to="/contact">Begin Your Profile</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
