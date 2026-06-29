import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'

const weekdayMeals = [
  {
    name: 'Big Breakfast',
    time: '6:00 – 6:45 AM',
    kcal: 550,
    macros: '40g P · 55g C · 20g F',
    note: 'Power meal, front-loaded for the morning hunger peak. 15–30 min cook time.',
  },
  {
    name: 'Afternoon Snack',
    time: '2:30 – 3:30 PM',
    kcal: 280,
    macros: '20g P · 30g C · 10g F',
    note: 'Office-friendly and no-cook preferred.',
  },
  {
    name: 'Light Dinner',
    time: '7:30 – 8:30 PM',
    kcal: 500,
    macros: '35g P · 45g C · 18g F',
    note: 'Lighter for better sleep. Nothing after 9 PM.',
  },
]

const sampleDays = [
  { day: 'Monday', cuisine: 'North Indian · Veg + soy protein boost', kcal: 1331, macros: '88g P · 132g C · 49g F' },
  { day: 'Tuesday', cuisine: 'South Indian · Sattu + Makhana snack', kcal: 1330, macros: '68g P · 150g C · 46g F' },
  { day: 'Wednesday', cuisine: 'Maharashtrian + Indo-Chinese · Egg day', kcal: 1332, macros: '92g P · 116g C · 52g F' },
  { day: 'Thursday', cuisine: 'Mediterranean + Italian · Best-balanced day', kcal: 1328, macros: '86g P · 128g C · 48g F' },
]

export default function MealPlansPage() {
  return (
    <div>
      <section className="relative">
        <img
          src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Variety of healthy prepared meals"
          loading="lazy"
          className="h-72 w-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl w-full px-4 md:px-8 lg:px-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Sample Meal Plans</h1>
            <p className="mt-3 max-w-2xl text-gray-200">
              A real weekday template at 1,330 kcal — front-loaded, budget-friendly and rotated across your favorite cuisines.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
          <SectionHeading
            eyebrow="Weekday Template"
            title="Front-loaded for energy and sleep"
            subtitle="Two meals plus one snack, totaling ~1,330 kcal and ~95g protein across the day."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {weekdayMeals.map((m) => (
              <Card key={m.name}>
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">{m.name}</h3>
                  <span className="text-green-600 font-bold">{m.kcal} kcal</span>
                </div>
                <p className="mt-1 text-sm font-medium text-gray-500">{m.time}</p>
                <p className="mt-3 text-sm font-semibold text-gray-700">{m.macros}</p>
                <p className="mt-2 text-gray-600">{m.note}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-green-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
          <SectionHeading
            center
            eyebrow="Weekly Rotation"
            title="A different cuisine every day"
            subtitle="Variety keeps the plan exciting while every day lands right around your 1,330 kcal target."
          />
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse overflow-hidden rounded-2xl bg-white shadow-sm">
              <thead>
                <tr className="bg-green-600 text-left text-white">
                  <th className="px-6 py-4 text-sm font-semibold">Day</th>
                  <th className="px-6 py-4 text-sm font-semibold">Cuisine & Focus</th>
                  <th className="px-6 py-4 text-sm font-semibold">Calories</th>
                  <th className="px-6 py-4 text-sm font-semibold">Macros</th>
                </tr>
              </thead>
              <tbody>
                {sampleDays.map((d, i) => (
                  <tr key={d.day} className={i % 2 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-semibold text-gray-900">{d.day}</td>
                    <td className="px-6 py-4 text-gray-600">{d.cuisine}</td>
                    <td className="px-6 py-4 text-gray-900">{d.kcal} kcal</td>
                    <td className="px-6 py-4 text-gray-600">{d.macros}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16 grid gap-12 md:grid-cols-2 items-center">
          <div>
            <SectionHeading
              eyebrow="Weekends & Eating Out"
              title="Relaxed, not derailed"
              subtitle="Weekends ease up to ~1,500 kcal with an 80g protein floor and a smart cafe ordering strategy."
            />
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex gap-3"><span className="text-green-600">✓</span> Protein first — grilled chicken, paneer, eggs, yogurt</li>
              <li className="flex gap-3"><span className="text-green-600">✓</span> Swap frappes for black coffee or unsweetened tea</li>
              <li className="flex gap-3"><span className="text-green-600">✓</span> Skip or share fries, garlic bread and chips</li>
              <li className="flex gap-3"><span className="text-green-600">✓</span> Budget Rs 300–500 per cafe visit</li>
            </ul>
            <div className="mt-8">
              <Button to="/contact">Get Your Personalized Plan</Button>
            </div>
          </div>
          <img
            src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Cafe brunch plate"
            loading="lazy"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
      </section>
    </div>
  )
}
