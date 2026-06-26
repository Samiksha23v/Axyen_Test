import Card from '../components/ui/Card'
import SectionHeading from '../components/ui/SectionHeading'

const days = [
  {
    day: 'Monday',
    cuisine: 'North Indian · Veg',
    img: '1640772',
    kcal: 1331,
    macros: '88g P · 132g C · 49g F',
    meals: [
      'Breakfast: Soy-boosted besan chilla with mint chutney',
      'Snack: Roasted chana + buttermilk',
      'Dinner: Rajma with a small bowl of brown rice',
    ],
  },
  {
    day: 'Tuesday',
    cuisine: 'South Indian · Veg',
    img: '699953',
    kcal: 1330,
    macros: '68g P · 150g C · 46g F',
    meals: [
      'Breakfast: Moong dal idli with sambar',
      'Snack: Sattu drink + makhana',
      'Dinner: Vegetable upma with curd',
    ],
  },
  {
    day: 'Wednesday',
    cuisine: 'Maharashtrian + Indo-Chinese · Egg',
    img: '958545',
    kcal: 1332,
    macros: '92g P · 116g C · 52g F',
    meals: [
      'Breakfast: Masala egg bhurji with multigrain toast',
      'Snack: Greek yogurt + seeds',
      'Dinner: Stir-fried veg + egg with light hakka noodles',
    ],
  },
  {
    day: 'Thursday',
    cuisine: 'Mediterranean + Italian · Veg',
    img: '1640777',
    kcal: 1328,
    macros: '86g P · 128g C · 48g F',
    meals: [
      'Breakfast: Tofu scramble + whole-grain pita',
      'Snack: Hummus + veggie sticks',
      'Dinner: Whole-wheat pasta with chickpeas & olive oil',
    ],
  },
]

const weekend = [
  { meal: 'Brunch', window: 'Within 1 hr of waking', kcal: '550–600', note: 'Anchor meal, keeps front-loaded habit.' },
  { meal: 'Snack', window: '3–4 hrs after brunch', kcal: '300', note: 'Can be eating-out friendly.' },
  { meal: 'Dinner', window: '2+ hrs before bed', kcal: '600', note: 'Slightly bigger, more time to cook.' },
]

const cafeRules = [
  'Protein first: scan for grilled chicken, paneer, eggs, yogurt.',
  'Swap frappes & sugary drinks for black coffee or unsweetened tea.',
  'Skip or share fries, garlic bread and chips.',
  'Smart orders: grilled sandwiches, omelettes, yogurt bowls, soup + salad.',
  'Avoid: cream pasta, loaded nachos, brownies, club sandwich + fries combos.',
]

export default function MealPlansPage() {
  return (
    <div>
      <section className="bg-green-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-20">
          <SectionHeading
            eyebrow="Phase 3 · Weekly Meal Plan"
            title="Sample days, ready to cook"
            subtitle="Rotating cuisines for variety, each day balanced to ~1,330 kcal and prepped within 15–30 minutes."
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {days.map((d) => (
            <Card key={d.day} className="p-0 overflow-hidden">
              <img
                src={`https://images.pexels.com/photos/${d.img}/pexels-photo-${d.img}.jpeg?auto=compress&cs=tinysrgb&w=600`}
                alt={`${d.day} ${d.cuisine} meal`}
                loading="lazy"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">{d.day}</h3>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">{d.kcal} kcal</span>
                </div>
                <p className="mt-1 text-sm font-medium text-green-700">{d.cuisine}</p>
                <p className="mt-1 text-xs text-gray-500">{d.macros}</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  {d.meals.map((m, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <SectionHeading eyebrow="Relaxed Weekends" title="~1,500 kcal/day, looser tracking" subtitle="A near-maintenance day with a protein floor of 80g and a max of 2 relaxed days per week." />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {weekend.map((w) => (
              <Card key={w.meal}>
                <h4 className="text-lg font-semibold text-gray-900">{w.meal}</h4>
                <p className="mt-1 text-sm text-green-700">{w.window}</p>
                <p className="mt-2 text-2xl font-bold text-gray-900">{w.kcal} <span className="text-base font-normal text-gray-500">kcal</span></p>
                <p className="mt-2 text-sm text-gray-600">{w.note}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <SectionHeading eyebrow="Eating Out" title="Cafe-smart ordering" subtitle="2–3 cafe visits a week, mostly on weekends, at Rs 300–500 each — within the Rs 3–5k monthly budget." />
            <ul className="mt-6 space-y-3">
              {cafeRules.map((r, i) => (
                <li key={i} className="flex gap-3 text-gray-600">
                  <span className="mt-1 text-green-600">\u2713</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <img
            src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Cafe-style healthy meal"
            loading="lazy"
            className="rounded-2xl shadow-sm object-cover h-80 w-full"
          />
        </div>
      </section>
    </div>
  )
}
