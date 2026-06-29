import SectionHeading from '../components/ui/SectionHeading'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

const phases = [
  {
    phase: 'Phase 1',
    title: 'Health & Dietary Profile Setup',
    desc: 'We capture your full health picture — age, weight, height, activity, sleep and medical history — then calculate BMI, BMR and TDEE. We layer in your food preferences, budget and cooking time.',
    points: ['BMI 22.2 (normal) baseline', 'BMR ~1,322 kcal | TDEE ~1,586 kcal', 'Flexitarian, 7 cuisines, Rs 3k-5k budget'],
  },
  {
    phase: 'Phase 2',
    title: 'Diet Strategy & Nutrition Framework',
    desc: 'We set a sustainable calorie target with a BMR safety floor, lock in a balanced macro split, then design meal structure and timing around your real schedule.',
    points: ['1,330 kcal/day, ~256 kcal deficit', 'Balanced macros: 24% P / 45% C / 31% F', 'Front-loaded weekdays, relaxed weekends'],
  },
  {
    phase: 'Phase 3',
    title: 'Meal Plans, Recipes & Shopping Lists',
    desc: 'Your framework becomes real food — a day-by-day weekly plan rotating your favourite cuisines, with macros balanced and cook times kept under 30 minutes.',
    points: ['Day-by-day weekly meal plans', 'Cuisine rotation: Indian, Mediterranean, Italian', 'Each day balanced to ~1,330 kcal'],
  },
  {
    phase: 'Phase 4',
    title: 'Ongoing Support & Chat',
    desc: 'Coaching does not stop at a plan. Daily energy and food-diary tracking, biweekly clothes-fit checks, and a mandatory Week 8 checkpoint keep you on a healthy path.',
    points: ['Daily energy rating (1-10)', 'Daily food diary', 'Mandatory Week 8 review before Phase B'],
  },
]

export default function HowItWorksPage() {
  return (
    <div className="pt-20">
      <section className="bg-green-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20 lg:px-16">
          <SectionHeading
            eyebrow="The Journey"
            title="A four-phase coaching path"
            subtitle="Each phase builds on the last, turning data into a plan you can actually live with."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24 lg:px-16">
        <div className="grid gap-8 md:grid-cols-2">
          {phases.map((p) => (
            <Card key={p.phase}>
              <p className="text-sm font-semibold uppercase tracking-wide text-green-600">{p.phase}</p>
              <h3 className="mt-2 text-2xl font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-3 text-gray-600">{p.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-2">
                    <span className="text-green-600">\u2713</span> {pt}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24 lg:px-16">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Safety First"
                title="Guardrails built into every plan"
                subtitle="Sustainable progress beats fast progress that you cannot keep."
              />
              <ul className="mt-6 space-y-3 text-gray-700">
                <li className="flex gap-3"><span className="text-green-600">\u2713</span> Never eat below your BMR (~1,322 kcal/day)</li>
                <li className="flex gap-3"><span className="text-green-600">\u2713</span> Prioritise sleep improvement alongside diet</li>
                <li className="flex gap-3"><span className="text-green-600">\u2713</span> Mandatory review at Week 8 before continuing</li>
                <li className="flex gap-3"><span className="text-green-600">\u2713</span> Reassess targets if energy consistently drops below 4/10</li>
              </ul>
              <div className="mt-8">
                <Button to="/meal-plans">See a Sample Plan</Button>
              </div>
            </div>
            <img
              src="https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Calm natural scene representing balance and wellbeing"
              loading="lazy"
              className="rounded-2xl object-cover shadow-md"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
