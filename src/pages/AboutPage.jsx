import SectionHeading from '../components/ui/SectionHeading'
import Card from '../components/ui/Card'

const values = [
  { title: 'Clarity First', desc: 'A great plan removes ambiguity. We make objectives and ownership explicit.' },
  { title: 'Phase Discipline', desc: 'We never skip steps. Each phase has clear entry and exit criteria.' },
  { title: 'Shared Truth', desc: 'One living plan that every stakeholder can trust and contribute to.' },
]

export default function AboutPage() {
  return (
    <div>
      <section className="bg-gray-900 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-300">About PlanForge</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold max-w-3xl">We help teams plan with intent, not improvisation.</h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl">
            PlanForge was built around a simple belief: projects succeed or fail in the planning. Our five-phase framework gives teams a repeatable way to go from vision to a reviewed, ready-to-execute plan.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16 grid gap-12 md:grid-cols-2 items-center">
          <img
            src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Project team meeting"
            loading="lazy"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="From scattered docs to one source of truth"
              subtitle="After years of watching projects stall in messy spreadsheets, we created a framework that keeps every phase visible and accountable."
            />
            <p className="mt-4 text-gray-600">
              Today PlanForge powers planning for product teams, agencies, and operations groups who need to move quickly without losing rigor.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
          <SectionHeading center eyebrow="What We Value" title="Principles behind every plan" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <Card key={v.title}>
                <h3 className="text-lg font-semibold text-gray-900">{v.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{v.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
