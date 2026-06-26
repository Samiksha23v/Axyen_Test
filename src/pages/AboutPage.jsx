import Card from '../components/ui/Card'
import SectionHeading from '../components/ui/SectionHeading'

const profile = [
  { label: 'Age', value: '23 years' },
  { label: 'Gender', value: 'Female' },
  { label: 'Weight', value: '55 kg' },
  { label: 'Height', value: '5\'2" (157.5 cm)' },
  { label: 'BMI', value: '22.2 (Normal)' },
  { label: 'BMR', value: '~1,322 kcal/day' },
  { label: 'TDEE', value: '~1,586 kcal/day' },
  { label: 'Activity', value: 'Sedentary' },
]

const considerations = [
  'Sleep deprivation (<5 hrs): include sleep-supportive foods and lighter dinners.',
  'Sedentary lifestyle: conservative, modest calorie deficit rather than aggressive cutting.',
  'Only 2 meals/day historically: each meal must be nutrient-dense.',
  'No medical conditions, allergies, or restrictions: full meal flexibility.',
]

export default function AboutPage() {
  return (
    <div>
      <section className="relative">
        <img
          src="https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Calm natural landscape"
          loading="lazy"
          className="h-64 md:h-80 w-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/60 flex items-center">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 w-full">
            <h1 className="text-4xl md:text-5xl font-bold text-white">About the Plan</h1>
            <p className="mt-3 text-lg text-gray-200 max-w-2xl">
              A complete, personalized approach built from a detailed health and dietary intake.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <SectionHeading
              eyebrow="The Philosophy"
              title="Sustainability over speed"
              subtitle="This isn't a one-size-fits-all template. It's a plan engineered around real numbers, real preferences, and a real schedule."
            />
            <p className="mt-6 text-gray-600">
              The goal is a mild, healthy weight reduction from 55 kg to 50 kg over roughly 16 weeks — split into two phases with a mandatory Week 8 checkpoint. Calories never drop below the BMR safety floor of ~1,322 kcal/day, and sleep improvement is prioritized alongside diet because rest directly affects hunger hormones and metabolism.
            </p>
            <p className="mt-4 text-gray-600">
              As a flexitarian with seven favourite cuisines — North Indian, South Indian, Maharashtrian, Indo-Chinese, Italian, Mediterranean and Mexican — variety is built in while keeping budget (Rs 3,000–5,000/month) and a 15–30 minute cooking window front of mind.
            </p>
          </div>

          <Card>
            <h3 className="text-xl font-semibold text-gray-900">Health Profile Snapshot</h3>
            <dl className="mt-6 grid grid-cols-2 gap-4">
              {profile.map((p) => (
                <div key={p.label} className="rounded-xl bg-gray-50 p-4">
                  <dt className="text-xs uppercase tracking-wide text-gray-500">{p.label}</dt>
                  <dd className="mt-1 font-semibold text-gray-900">{p.value}</dd>
                </div>
              ))}
            </dl>
          </Card>
        </div>

        <div className="mt-16">
          <SectionHeading eyebrow="Flagged Considerations" title="What shapes every decision" center />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {considerations.map((c, i) => (
              <Card key={i} className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-100 font-semibold text-green-700">
                  {i + 1}
                </span>
                <p className="text-gray-600">{c}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
