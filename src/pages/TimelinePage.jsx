import SectionHeading from '../components/ui/SectionHeading'

const timeline = [
  { phase: 'Phase 1', title: 'Vision & Foundation', status: 'Completed', when: 'Weeks 1–2', desc: 'Charter signed, goals locked, stakeholders aligned.' },
  { phase: 'Phase 2', title: 'Scope, Tasks & Timeline', status: 'Active', when: 'Weeks 3–5', desc: 'Deliverables defined and the schedule is taking shape.' },
  { phase: 'Phase 3', title: 'Resources & Budget', status: 'Active', when: 'Weeks 4–6', desc: 'Allocating people, tools, and budget across the plan.' },
  { phase: 'Phase 4', title: 'Risk Management', status: 'Draft', when: 'Weeks 6–7', desc: 'Risk register and mitigations to be drafted.' },
  { phase: 'Phase 5', title: 'Final Plan Assembly & Review', status: 'Draft', when: 'Weeks 8–9', desc: 'Consolidation, review, and final sign-off pending.' },
]

const statusColor = {
  Completed: 'bg-green-100 text-green-700 border-green-300',
  Active: 'bg-blue-100 text-blue-700 border-blue-300',
  Draft: 'bg-gray-100 text-gray-600 border-gray-300',
}

const dotColor = {
  Completed: 'bg-green-500',
  Active: 'bg-blue-500',
  Draft: 'bg-gray-400',
}

export default function TimelinePage() {
  return (
    <div>
      <section className="bg-gray-900 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-300">Project Timeline</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold">Where the plan stands today</h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl">
            A live view of all five phases, their status, and their place in the schedule.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <SectionHeading center eyebrow="Schedule" title="Phase by phase" />
          <ol className="mt-12 relative border-l-2 border-gray-200 ml-3">
            {timeline.map((t) => (
              <li key={t.phase} className="mb-10 ml-6">
                <span className={`absolute -left-2.5 flex h-5 w-5 items-center justify-center rounded-full ${dotColor[t.status]} ring-4 ring-white`} />
                <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold text-gray-900">{t.phase}: {t.title}</h3>
                    <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusColor[t.status]}`}>{t.status}</span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-blue-600">{t.when}</p>
                  <p className="mt-2 text-sm text-gray-600">{t.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  )
}
