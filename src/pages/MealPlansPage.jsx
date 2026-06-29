import SectionHeading from '../components/ui/SectionHeading'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

const weekdaySlots = [
  { name: 'Big Breakfast', time: '6:00 - 6:45 AM', kcal: 550, p: 40, c: 55, f: 20, note: 'Power meal, front-loaded for morning hunger' },
  { name: 'Afternoon Snack', time: '2:30 - 3:30 PM', kcal: 280, p: 20, c: 30, f: 10, note: 'Office-friendly, no-cook preferred' },
  { name: 'Light Dinner', time: '7:30 - 8:30 PM', kcal: 500, p: 35, c: 45, f: 18, note: 'Lighter for better sleep' },
]

const weekDays = [
  { day: 'Monday', cuisine: 'North Indian (Veg + soy boost)', kcal: 1331, p: 88, c: 132, f: 49 },
  { day: 'Tuesday', cuisine: 'South Indian (Sattu + Makhana)', kcal: 1330, p: 68, c: 150, f: 46 },
  { day: 'Wednesday', cuisine: 'Maharashtrian + Indo-Chinese (Egg day)', kcal: 1332, p: 92, c: 116, f: 52 },
  { day: 'Thursday', cuisine: 'Mediterranean + Italian (Veg)', kcal: 1328, p: 86, c: 128, f: 48 },
]

const macros = [
  { label: 'Protein', value: '80g', pct: '24%', color: 'bg-green-600' },
  { label: 'Carbs', value: '150g', pct: '45%', color: 'bg-emerald-500' },
  { label: 'Fat', value: '46g', pct: '31%', color: 'bg-lime-500' },
]

export default function MealPlansPage() {
  return (
    <div className="pt-20">
      <section className="bg-green-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20 lg:px-16">
          <SectionHeading
            eyebrow="Sample Plan"
            title="A real weekly meal plan"
            subtitle="Balanced macros, cuisine variety, and a structure designed around a 9-5 schedule and a tight budget."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24 lg:px-16">
        <SectionHeading eyebrow="Daily Macros" title="Balanced split at 1,330 kcal" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {macros.map((m) => (
            <Card key={m.label}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold text-gray-900">{m.label}</h3>
                <span className="text-sm font-medium text-green-600">{m.pct}</span>
              </div>
              <p className="mt-2 text-3xl font-bold text-gray-900">{m.value}</p>
              <div className="mt-4 h-2 w-full rounded-full bg-gray-100">
                <div className={`h-2 rounded-full ${m.color}`} style={{ width: m.pct }} />
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24 lg:px-16">
          <SectionHeading
            eyebrow="Weekday Structure"
            title="Front-loaded days"
            subtitle="Biggest meal at breakfast when hunger peaks; lighter dinner for better sleep."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {weekdaySlots.map((s) => (
              <Card key={s.name}>
                <p className="text-sm font-medium text-green-600">{s.time}</p>
                <h3 className="mt-1 text-xl font-semibold text-gray-900">{s.name}</h3>
                <p className="mt-2 text-2xl font-bold text-gray-900">{s.kcal} kcal</p>
                <p className="mt-1 text-sm text-gray-500">{s.p}g P \u00B7 {s.c}g C \u00B7 {s.f}g F</p>
                <p className="mt-3 text-sm text-gray-600">{s.note}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24 lg:px-16">
        <SectionHeading
          eyebrow="The Week"
          title="Cuisine rotation, day by day"
          subtitle="Every day balanced to roughly 1,330 kcal while keeping food exciting."
        />
        <div className="mt-10 overflow-hidden rounded-2xl border border-gray-100">
          <table className="w-full text-left text-sm">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="px-4 py-3 font-semibold">Day</th>
                <th className="px-4 py-3 font-semibold">Cuisine Focus</th>
                <th className="px-4 py-3 font-semibold">kcal</th>
                <th className="px-4 py-3 font-semibold">P / C / F</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {weekDays.map((d) => (
                <tr key={d.day} className="hover:bg-green-50">
                  <td className="px-4 py-4 font-medium text-gray-900">{d.day}</td>
                  <td className="px-4 py-4 text-gray-600">{d.cuisine}</td>
                  <td className="px-4 py-4 text-gray-900">{d.kcal}</td>
                  <td className="px-4 py-4 text-gray-600">{d.p}g / {d.c}g / {d.f}g</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-gray-500">
          Weekends shift to a relaxed ~1,500 kcal with a 80g protein floor and cafe-friendly eating-out
          guidance. Weekly average lands at ~1,379 kcal/day.
        </p>
      </section>

      <section className="bg-green-700">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center md:px-8 md:py-24 lg:px-16">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Want a plan like this for you?</h2>
          <p className="mt-4 text-lg text-green-100">Yours will be tailored to your numbers, tastes and budget.</p>
          <div className="mt-8 flex justify-center">
            <Button to="/contact" variant="secondary">Build My Plan</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
