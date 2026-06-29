import Card from '../components/ui/Card'
import SectionHeading from '../components/ui/SectionHeading'

const principles = [
  {
    title: 'Safety Over Speed',
    desc: 'We never plan below your BMR. For our flagship profile that means staying at or above 1,322 kcal/day, with a modest 250–300 kcal deficit instead of aggressive cutting.',
  },
  {
    title: 'Whole-Person Nutrition',
    desc: 'Sleep, stress and energy matter as much as calories. We flag risks like sleep deprivation and design lighter dinners and sleep-supportive foods to compensate.',
  },
  {
    title: 'Flexible & Cultural',
    desc: 'Flexitarian by default, with North Indian, South Indian, Maharashtrian, Chinese, Italian, Mediterranean and Mexican rotated for variety on a real budget.',
  },
]

export default function AboutPage() {
  return (
    <div>
      <section className="relative">
        <img
          src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Nutrition coach planning meals"
          loading="lazy"
          className="h-72 w-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl w-full px-4 md:px-8 lg:px-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white">About Nourishly</h1>
            <p className="mt-3 max-w-2xl text-gray-200">
              We believe the best diet is the one you can actually keep. So we build plans around evidence, empathy and your everyday routine.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16 grid gap-12 md:grid-cols-2 items-center">
          <div>
            <SectionHeading
              eyebrow="Our Approach"
              title="Personalized from the very first number"
              subtitle="Nourishly translates your profile into a precise framework — then makes it delicious and doable."
            />
            <p className="mt-6 text-gray-600">
              Take our flagship case: a 23-year-old flexitarian, 55 kg at a healthy BMI of 22.2, with a sedentary
              9-to-5 schedule, under five hours of sleep, and a Rs 3,000–5,000 monthly food budget. Instead of a generic
              plan, we mapped a 1,330 kcal/day target, an 80g protein goal and a phased path from 55 kg to 50 kg over
              roughly 16 weeks — with a built-in checkpoint at Week 8.
            </p>
          </div>
          <img
            src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Team collaborating on nutrition strategy"
            loading="lazy"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-green-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
          <SectionHeading center eyebrow="What Guides Us" title="Principles behind every plan" />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {principles.map((p) => (
              <Card key={p.title}>
                <h3 className="text-xl font-semibold text-gray-900">{p.title}</h3>
                <p className="mt-2 text-gray-600">{p.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
