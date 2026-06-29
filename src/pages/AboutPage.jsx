import SectionHeading from '../components/ui/SectionHeading'
import Card from '../components/ui/Card'

const values = [
  { title: 'Evidence-Based', desc: 'We use validated formulas like Mifflin-St Jeor for BMR and TDEE, not internet myths.' },
  { title: 'Sustainable', desc: 'Modest deficits and a BMR floor protect your metabolism and your sanity.' },
  { title: 'Personalized', desc: 'Your budget, cuisines, cooking time and schedule shape every recommendation.' },
  { title: 'Supportive', desc: 'Daily tracking and scheduled checkpoints keep you accountable and adaptable.' },
]

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="bg-green-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20 lg:px-16">
          <SectionHeading
            eyebrow="About NourishWell"
            title="Nutrition coaching that respects real life"
            subtitle="We believe healthy eating should fit your kitchen, your wallet and your calendar — not the other way around."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24 lg:px-16">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <img
            src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="A balanced spread of wholesome foods"
            loading="lazy"
            className="rounded-2xl object-cover shadow-md"
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Our mission</h2>
            <p className="mt-4 text-gray-600">
              Most diet advice ignores the messy reality of everyday life — limited time, real budgets,
              social meals out, and bodies that need rest. NourishWell starts where you actually are.
            </p>
            <p className="mt-4 text-gray-600">
              We translate your health profile into clear numbers, build a flexible framework, and turn
              it into a weekly plan you can follow without dread. Then we stay alongside you with daily
              tracking and honest checkpoints, so progress stays safe and steady.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24 lg:px-16">
          <SectionHeading center eyebrow="What We Stand For" title="Our values" />
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <Card key={v.title}>
                <h3 className="text-lg font-semibold text-gray-900">{v.title}</h3>
                <p className="mt-3 text-sm text-gray-600">{v.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
