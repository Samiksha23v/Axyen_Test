import Card from '../components/ui/Card'
import SectionHeading from '../components/ui/SectionHeading'

const macros = [
  { name: 'Protein', grams: '80g', kcal: '320 kcal', pct: '24%', color: 'bg-green-600', width: 'w-1/4' },
  { name: 'Carbs', grams: '150g', kcal: '600 kcal', pct: '45%', color: 'bg-amber-500', width: 'w-1/2' },
  { name: 'Fat', grams: '46g', kcal: '414 kcal', pct: '31%', color: 'bg-orange-500', width: 'w-1/3' },
]

const targets = [
  { label: 'Daily Calories', value: '1,330 kcal' },
  { label: 'Daily Deficit', value: '~256 kcal' },
  { label: 'BMR Floor', value: '1,322 kcal' },
  { label: 'Fiber Target', value: '25–28 g/day' },
  { label: 'Hydration', value: '3+ litres/day' },
  { label: 'Added Sugar Cap', value: '< 25 g/day' },
]

const weekday = [
  { meal: 'Big Breakfast', time: '6:00–6:45 AM', kcal: 550, p: 40, c: 55, f: 20, note: 'Power meal, front-loaded for morning hunger peak.' },
  { meal: 'Afternoon Snack', time: '2:30–3:30 PM', kcal: 280, p: 20, c: 30, f: 10, note: 'Office-friendly, no-cook preferred.' },
  { meal: 'Light Dinner', time: '7:30–8:30 PM', kcal: 500, p: 35, c: 45, f: 18, note: 'Lighter for better sleep quality.' },
]

const micronutrients = ['Iron', 'Vitamin B12', 'Vitamin D', 'Calcium', 'Omega-3', 'Magnesium']
const limits = ['Added sugar', 'Refined carbs', 'Excess sodium']

export default function NutritionPlanPage() {
  return (
    <div>
      <section className="bg-green-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-20">
          <SectionHeading
            eyebrow="Phase 2 · Nutrition Framework"
            title="Your daily targets & macros"
            subtitle="A balanced split designed to keep energy stable, protein adequate, and calories safely above your BMR."
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {targets.map((t) => (
            <Card key={t.label} className="text-center">
              <div className="text-3xl font-bold text-green-700">{t.value}</div>
              <div className="mt-2 text-sm text-gray-600">{t.label}</div>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <SectionHeading eyebrow="Balanced Split" title="Macro breakdown" />
          <div className="mt-8 space-y-6">
            {macros.map((m) => (
              <div key={m.name}>
                <div className="flex justify-between text-sm font-medium text-gray-700">
                  <span>{m.name} · {m.grams}</span>
                  <span>{m.kcal} ({m.pct})</span>
                </div>
                <div className="mt-2 h-3 w-full rounded-full bg-gray-100">
                  <div className={`h-3 rounded-full ${m.color} ${m.width}`} />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-500">Total ≈ 1,334 kcal across protein, carbs and fat.</p>
        </div>

        <div className="mt-16">
          <SectionHeading eyebrow="Weekday Structure" title="Front-loaded meal timing" subtitle="2 meals + 1 snack, mapped to a before-6AM wake and 9-to-5 office day." />
          <div className="mt-8 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-left">
              <thead>
                <tr className="text-xs uppercase tracking-wide text-gray-500">
                  <th className="py-3 pr-4">Meal</th>
                  <th className="py-3 pr-4">Time</th>
                  <th className="py-3 pr-4">Kcal</th>
                  <th className="py-3 pr-4">P / C / F</th>
                  <th className="py-3 pr-4">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                {weekday.map((w) => (
                  <tr key={w.meal}>
                    <td className="py-4 pr-4 font-semibold text-gray-900">{w.meal}</td>
                    <td className="py-4 pr-4 whitespace-nowrap">{w.time}</td>
                    <td className="py-4 pr-4">{w.kcal}</td>
                    <td className="py-4 pr-4 whitespace-nowrap">{w.p}g / {w.c}g / {w.f}g</td>
                    <td className="py-4 pr-4 text-gray-500">{w.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <Card>
            <h3 className="text-xl font-semibold text-gray-900">Prioritize these micronutrients</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {micronutrients.map((n) => (
                <span key={n} className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">{n}</span>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-600">Supplement recommendation: Vitamin D + B12.</p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold text-gray-900">Keep these limited</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {limits.map((n) => (
                <span key={n} className="rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-700">{n}</span>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-600">Weekend mode allows ~1,500 kcal/day but the added-sugar cap still applies.</p>
          </Card>
        </div>
      </section>
    </div>
  )
}
