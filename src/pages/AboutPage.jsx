import Card from '../components/ui/Card.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import { values, team } from '../api/mockData.js'

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Story */}
      <section className="px-4 md:px-8 lg:px-16 max-w-6xl mx-auto grid gap-10 md:grid-cols-2 items-center">
        <div>
          <SectionHeading eyebrow="Our Story" title="Born from a 6am idea" />
          <div className="mt-6 space-y-4 text-gray-700 dark:text-gray-300">
            <p>Bloom started as a scribble on a napkin during a very early morning. Founder Mara Vance loved two things: the golden hush of dawn and the messy joy of painting. She couldn't find a place that celebrated both — so she built one.</p>
            <p>Today, Bloom is where early risers gather to sip, paint and greet the day together. Every table holds a blank canvas and every cup is poured with intention. No experience needed — just show up as the sun does.</p>
          </div>
        </div>
        <img
          src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Paint palette and brushes on a bright table"
          loading="lazy"
          className="rounded-3xl object-cover w-full h-80 md:h-96"
        />
      </section>

      {/* Values */}
      <section className="px-4 md:px-8 lg:px-16 max-w-6xl mx-auto mt-20">
        <SectionHeading center eyebrow="Core Values" title="What we stand for" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <Card key={v.title} className="p-8">
              <h3 className="text-xl font-semibold mb-2 text-orange-600 dark:text-orange-400">{v.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{v.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="px-4 md:px-8 lg:px-16 max-w-6xl mx-auto mt-20">
        <SectionHeading center eyebrow="The Team" title="The faces behind your morning" />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {team.map((m) => (
            <Card key={m.name} className="p-8 text-center">
              <img src={m.img} alt={m.name} loading="lazy" className="w-24 h-24 rounded-full mx-auto object-cover" />
              <h3 className="mt-4 font-semibold">{m.name}</h3>
              <p className="text-sm text-orange-600 dark:text-orange-400">{m.role}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
