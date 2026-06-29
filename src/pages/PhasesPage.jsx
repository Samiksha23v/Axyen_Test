import SectionHeading from '../components/ui/SectionHeading'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

const phases = [
  {
    n: '01',
    title: 'Vision & Foundation',
    status: 'Completed',
    desc: 'Establish the project purpose, goals, stakeholders, and success criteria. Everything downstream traces back to this.',
    items: ['Project charter', 'Goals & success metrics', 'Stakeholder map'],
    img: '1181244',
  },
  {
    n: '02',
    title: 'Scope, Tasks & Timeline',
    status: 'Active',
    desc: 'Translate the vision into concrete deliverables, a task breakdown, and a realistic schedule with milestones.',
    items: ['Scope statement', 'Work breakdown', 'Milestone timeline'],
    img: '3861969',
  },
  {
    n: '03',
    title: 'Resources & Budget',
    status: 'Active',
    desc: 'Plan the people, tools, and money required, and map them against the timeline for each phase.',
    items: ['Resource plan', 'Budget allocation', 'Tooling list'],
    img: '3184338',
  },
  {
    n: '04',
    title: 'Risk Management',
    status: 'Draft',
    desc: 'Identify risks, score their likelihood and impact, and document mitigation and contingency plans.',
    items: ['Risk register', 'Mitigation plans', 'Contingency budget'],
    img: '3861958',
  },
  {
    n: '05',
    title: 'Final Plan Assembly & Review',
    status: 'Draft',
    desc: 'Consolidate every phase into a single, reviewed, approved plan ready for execution and sharing.',
    items: ['Consolidated plan', 'Stakeholder review', 'Approval & sign-off'],
    img: '3109807',
  },
]

const statusColor = {
  Completed: 'bg-green-100 text-green-700',
  Active: 'bg-blue-100 text-blue-700',
  Draft: 'bg-gray-100 text-gray-600',
}

export default function PhasesPage() {
  return (
    <div>
      <section className="bg-gray-900 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-300">The Framework</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold">Five phases, one connected plan</h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl">
            Track every phase from draft to completed. Below is the current state of the active project plan.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16 space-y-12">
          {phases.map((p, i) => (
            <div key={p.n} className={`grid gap-8 md:grid-cols-2 items-center ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}>
              <img
                src={`https://images.pexels.com/photos/${p.img}/pexels-photo-${p.img}.jpeg?auto=compress&cs=tinysrgb&w=1200`}
                alt={p.title}
                loading="lazy"
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
              <Card>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-blue-600">{p.n}</span>
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusColor[p.status]}`}>{p.status}</span>
                </div>
                <h2 className="mt-4 text-2xl font-bold text-gray-900">{p.title}</h2>
                <p className="mt-3 text-gray-600">{p.desc}</p>
                <ul className="mt-4 space-y-2">
                  {p.items.map((it) => (
                    <li key={it} className="flex gap-2 text-sm text-gray-700"><span className="text-blue-600">•</span> {it}</li>
                  ))}
                </ul>
              </Card>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-50 py-16">
        <div className="mx-auto max-w-4xl px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Want to see your phases tracked here?</h2>
          <p className="mt-4 text-gray-600">Get in touch and we'll set up your project framework.</p>
          <div className="mt-6"><Button to="/contact">Contact Us</Button></div>
        </div>
      </section>
    </div>
  )
}
