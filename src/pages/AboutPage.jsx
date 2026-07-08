import { values, team } from '../api/mockData.js'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import Card from '../components/ui/Card.jsx'

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Story */}
      <section className="px-4 md:px-8 lg:px-16 py-16 md:py-24 max-w-6xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <SectionHeading
              center={false}
              eyebrow="Our Story"
              title="Born from a sunrise and a spilled paint jar"
              subtitle="Bloom started as a tiny corner counter where friends gathered before dawn to paint and drink coffee. The mess was the magic."
            />
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                In 2019, our founder Maya noticed that the most creative hours were the
                quietest ones — those golden minutes just after sunrise. So she built a
                cafe around them: bright, energetic, and open early.
              </p>
              <p>
                Today, Bloom is a home for early risers, artists, and anyone who believes
                a good morning can change the whole day. Pull up a stool, grab a brush,
                and bloom with us.
              </p>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img
              src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Cozy bright cafe counter in the morning"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-4 md:px-8 lg:px-16 py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="Core Values"
            title="What we stand for"
            subtitle="The principles behind every cup, canvas, and conversation."
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <Card key={v.title} className="p-6">
                <div className="text-3xl mb-3">{v.emoji}</div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">{v.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{v.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-4 md:px-8 lg:px-16 py-16 md:py-24 max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="The Team"
          title="Meet the early birds"
          subtitle="The people who open the doors before the sun does."
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <div key={m.name} className="text-center">
              <img
                src={m.img}
                alt={m.name}
                className="w-28 h-28 rounded-full mx-auto object-cover ring-4 ring-orange-100 dark:ring-gray-800"
                loading="lazy"
              />
              <h3 className="mt-4 font-semibold text-gray-900 dark:text-white">{m.name}</h3>
              <p className="text-sm text-orange-600 dark:text-orange-400">{m.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
