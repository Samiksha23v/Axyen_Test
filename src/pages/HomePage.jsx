import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import SectionHeading from '../components/ui/SectionHeading'

const phases = [
  { n: '01', title: 'Vision & Foundation', status: 'Completed', desc: 'Define purpose, objectives, and success criteria before any work begins.' },
  { n: '02', title: 'Scope, Tasks & Timeline', status: 'Active', desc: 'Break the vision into deliverables, tasks, and a realistic schedule.' },
  { n: '03', title: 'Resources & Budget', status: 'Active', desc: 'Allocate people, tools, and funds across the project lifecycle.' },
  { n: '04', title: 'Risk Management', status: 'Draft', desc: 'Identify, assess, and plan mitigation for the risks that matter.' },
  { n: '05', title: 'Final Plan Assembly & Review', status: 'Draft', desc: 'Consolidate everything into one approved, shareable plan.' },
]

const statusColor = {
  Completed: 'bg-green-100 text-green-700',
  Active: 'bg-blue-100 text-blue-700',
  Draft: 'bg-gray-100 text-gray-600',
}

export default function HomePage() {
  return (
    <div>
      <section className="relative min-h-screen flex items-center">
        <img
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Team collaborating on a project plan"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/70" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-8 lg:px-16 py-24 text-white">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-300">Project Planning, Phase by Phase</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
            Turn vision into a flawless, executable plan.
          </h1>
          <p className="mt-6 text-lg text-gray-200 max-w-2xl">
            PlanForge guides your team through five structured phases — from foundation to final review — so nothing slips through the cracks.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button to="/phases">Explore the Phases</Button>
            <Button to="/contact" variant="outline">Talk to Us</Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
          <SectionHeading
            center
            eyebrow="The Five Phases"
            title="A clear path from idea to delivery"
            subtitle="Each phase builds on the last, with live status so everyone knows exactly where the plan stands."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {phases.map((p) => (
              <Card key={p.n}>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">{p.n}</span>
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusColor[p.status]}`}>{p.status}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16 grid gap-12 md:grid-cols-2 items-center">
          <div>
            <SectionHeading
              eyebrow="Why PlanForge"
              title="Structure that scales with your project"
              subtitle="Stop juggling scattered docs. Bring scope, budget, risk, and timeline into a single living plan."
            />
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex gap-3"><span className="text-blue-600">✓</span> Real-time phase statuses keep stakeholders aligned</li>
              <li className="flex gap-3"><span className="text-blue-600">✓</span> Built-in templates for scope, budget, and risk</li>
              <li className="flex gap-3"><span className="text-blue-600">✓</span> One-click final plan assembly and export</li>
            </ul>
            <div className="mt-8">
              <Button to="/about" variant="secondary">Learn More</Button>
            </div>
          </div>
          <img
            src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Planning whiteboard session"
            loading="lazy"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Ready to assemble your plan?</h2>
          <p className="mt-4 text-lg text-gray-600">Move from draft to delivery with confidence. Start with phase one today.</p>
          <div className="mt-8 flex justify-center gap-4">
            <Button to="/phases">Get Started</Button>
            <Button to="/timeline" variant="secondary">View Timeline</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
